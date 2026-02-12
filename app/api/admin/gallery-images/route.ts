import { NextRequest, NextResponse } from 'next/server'
import { verifySession } from '@/lib/auth'
import sql from '@/lib/db'
import { uploadToGalleryR2, validateImageBuffer } from '@/lib/r2'

export async function GET() {
  const session = await verifySession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const rows = await sql`
      SELECT id, image_url, title, description, uploaded_at
      FROM temple_gallery_images
      ORDER BY uploaded_at DESC
    `

    return NextResponse.json(rows)
  } catch (error) {
    console.error('Error fetching gallery images:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const session = await verifySession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const contentTypeHeader = request.headers.get('content-type') || ''
    if (!contentTypeHeader.includes('multipart/form-data')) {
      return NextResponse.json({ error: 'Invalid content type' }, { status: 400 })
    }

    const formData = await request.formData()
    const title = (formData.get('title') as string) || ''
    const description = (formData.get('description') as string) || ''
    const imageFile = formData.get('image') as File | null

    if (!imageFile) {
      return NextResponse.json({ error: 'Image is required' }, { status: 400 })
    }

    const contentType = imageFile.type || 'image/jpeg'
    const originalFileName = imageFile.name || 'upload.jpg'
    const bytes = await imageFile.arrayBuffer()
    const imageBuffer = Buffer.from(bytes)

    validateImageBuffer(imageBuffer, contentType)

    const safeName = originalFileName.replace(/[^a-zA-Z0-9._-]/g, '_')
    const timestamp = Date.now()
    const fileKey = `uploads/gallery/${timestamp}-${safeName}`
    const imageUrl = await uploadToGalleryR2(fileKey, imageBuffer, contentType)

    const result = await sql`
      INSERT INTO temple_gallery_images (image_url, title, description)
      VALUES (${imageUrl}, ${title || null}, ${description || null})
      RETURNING id, image_url, title, description, uploaded_at
    `

    return NextResponse.json(result[0], { status: 201 })
  } catch (error) {
    console.error('Error uploading gallery image:', error)
    const message = error instanceof Error ? error.message : 'Internal server error'
    const status = message.startsWith('Image') || message.startsWith('Only image') ? 400 : 500
    return NextResponse.json({ error: message }, { status })
  }
}

export async function DELETE(request: NextRequest) {
  const session = await verifySession()
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Image ID is required' }, { status: 400 })
    }

    await sql`DELETE FROM temple_gallery_images WHERE id = ${id}`
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting gallery image:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
