import { NextRequest, NextResponse } from 'next/server'
import { verifySession } from '@/lib/auth'
import sql from '@/lib/db'

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
    return NextResponse.json(donations)
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
    const formData = await request.formData()
    const donorName = formData.get('donor_name') as string
    const amount = formData.get('amount') as string
    const imageFile = formData.get('image') as File | null

    if (!donorName || !amount || !imageFile) {
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

    // Convert image to base64 data URI (works on Vercel's read-only filesystem)
    const bytes = await imageFile.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const mimeType = imageFile.type || 'image/jpeg'
    const base64 = buffer.toString('base64')
    const imageUrl = `data:${mimeType};base64,${base64}`

    // Insert into database
    const result = await sql`
      INSERT INTO annadanam_donations (donor_name, amount, image_url)
      VALUES (${donorName}, ${numAmount}, ${imageUrl})
      RETURNING id, donor_name, amount, image_url, approved, created_at
    `

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error('Error creating donation:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
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
