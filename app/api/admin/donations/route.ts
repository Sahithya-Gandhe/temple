import { NextRequest, NextResponse } from 'next/server'
import { verifySession } from '@/lib/auth'
import sql from '@/lib/db'
import { uploadToR2, validateImageBuffer } from '@/lib/r2'
import { buildObjectKey, normalizeStoredImageUrl, STORAGE_PATHS } from '@/lib/image-storage'

// GET - Fetch all donations (admin only)
export async function GET() {
  const session = await verifySession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const donations = await sql`
      SELECT id, donor_name, amount, image_url, approved, created_at
      FROM annadanam_donations
      ORDER BY created_at DESC
    `

    const updates: Array<{ id: string; image_url: string }> = []
    const normalizedDonations = donations.map((donation) => {
      const normalized = normalizeStoredImageUrl(donation.image_url, STORAGE_PATHS.donations)
      if (normalized.changed) {
        updates.push({ id: donation.id, image_url: normalized.imageUrl })
      }
      return {
        ...donation,
        image_url: normalized.imageUrl,
      }
    })

    if (updates.length > 0) {
      await Promise.all(
        updates.map((donation) =>
          sql`UPDATE annadanam_donations SET image_url = ${donation.image_url} WHERE id = ${donation.id}`
        )
      )
    }

    return NextResponse.json(normalizedDonations)
  } catch (error) {
    console.error('Error fetching donations:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST - Create new donation (admin only, with image upload)
export async function POST(request: NextRequest) {
  const session = await verifySession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    let donorName = ''
    let amount = ''
    let imageBuffer: Buffer | null = null
    let contentType = 'image/jpeg'
    let originalFileName = 'upload.jpg'

    const contentTypeHeader = request.headers.get('content-type') || ''
    if (contentTypeHeader.includes('multipart/form-data')) {
      const formData = await request.formData()
      donorName = (formData.get('donor_name') as string) || ''
      amount = (formData.get('amount') as string) || ''
      const imageFile = formData.get('image') as File | null

      if (!imageFile) {
        return NextResponse.json(
          { error: 'Donor name, amount, and image are required' },
          { status: 400 }
        )
      }

      contentType = imageFile.type || contentType
      originalFileName = imageFile.name || originalFileName

      const bytes = await imageFile.arrayBuffer()
      imageBuffer = Buffer.from(bytes)
    } else {
      const body = await request.json()
      donorName = body?.donor_name || ''
      amount = body?.amount || ''

      const base64Input = body?.image_base64 || body?.imageBase64 || body?.imageDataUrl || ''
      if (!base64Input) {
        return NextResponse.json(
          { error: 'Donor name, amount, and image are required' },
          { status: 400 }
        )
      }

      const dataUrlMatch = /^data:(.+);base64,(.*)$/.exec(base64Input)
      if (dataUrlMatch) {
        contentType = dataUrlMatch[1]
        imageBuffer = Buffer.from(dataUrlMatch[2], 'base64')
      } else {
        contentType = body?.mime_type || body?.mimeType || contentType
        imageBuffer = Buffer.from(base64Input, 'base64')
      }

      originalFileName = body?.file_name || body?.fileName || originalFileName
    }

    if (!donorName || !amount || !imageBuffer) {
      return NextResponse.json(
        { error: 'Donor name, amount, and image are required' },
        { status: 400 }
      )
    }

    // Validate amount
    const numAmount = parseFloat(amount)
    if (isNaN(numAmount) || numAmount <= 0) {
      return NextResponse.json(
        { error: 'Amount must be a positive number' },
        { status: 400 }
      )
    }

    validateImageBuffer(imageBuffer, contentType)

    const fileKey = buildObjectKey('donations', originalFileName)
    const imageUrl = await uploadToR2(fileKey, imageBuffer, contentType)

    // Insert into database
    const result = await sql`
      INSERT INTO annadanam_donations (donor_name, amount, image_url)
      VALUES (${donorName}, ${numAmount}, ${imageUrl})
      RETURNING id, donor_name, amount, image_url, approved, created_at
    `

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error('Error creating donation:', error)
    const message = error instanceof Error ? error.message : 'Internal server error'
    const status = message.startsWith('Image') || message.startsWith('Only image') || message.startsWith('Donor name')
      ? 400
      : 500
    return NextResponse.json({ error: message }, { status })
  }
}

// DELETE - Remove a donation (admin only)
export async function DELETE(request: NextRequest) {
  const session = await verifySession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Donation ID is required' }, { status: 400 })
    }

    await sql`DELETE FROM annadanam_donations WHERE id = ${id}`

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting donation:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
