import { NextResponse } from 'next/server'
import sql from '@/lib/db'
import { normalizeStoredImageUrl, STORAGE_PATHS } from '@/lib/image-storage'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const rows = await sql`
      SELECT id, image_url, title, description, uploaded_at
      FROM temple_gallery_images
      ORDER BY uploaded_at DESC
    `

    const images = rows.map((row) => ({
      ...row,
      image_url: normalizeStoredImageUrl(row.image_url, STORAGE_PATHS.gallery).imageUrl,
    }))

    return NextResponse.json(images, {
      headers: {
        'Cache-Control': 'no-store',
      },
    })
  } catch (error) {
    console.error('Error fetching gallery images:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
