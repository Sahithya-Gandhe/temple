import { NextResponse } from 'next/server'
import sql from '@/lib/db'
import { normalizeStoredImageUrl, STORAGE_PATHS } from '@/lib/image-storage'

export async function GET() {
  try {
    const rows = await sql`
      SELECT image_url
      FROM annadanam_donations
      WHERE approved = true AND image_url IS NOT NULL
      ORDER BY created_at DESC
    `

    const urls = rows.map((row) => normalizeStoredImageUrl(row.image_url, STORAGE_PATHS.donations).imageUrl)
    return NextResponse.json(urls, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
      },
    })
  } catch (error) {
    console.error('Error fetching donation images:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
