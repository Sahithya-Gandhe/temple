import { NextResponse } from 'next/server'
import sql from '@/lib/db'

export async function GET() {
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
