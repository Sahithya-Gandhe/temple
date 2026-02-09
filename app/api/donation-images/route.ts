import { NextResponse } from 'next/server'
import sql from '@/lib/db'

export async function GET() {
  try {
    const rows = await sql`
      SELECT image_url
      FROM annadanam_donations
      WHERE approved = true AND image_url IS NOT NULL
      ORDER BY created_at DESC
    `

    const urls = rows.map((row) => row.image_url)
    return NextResponse.json(urls)
  } catch (error) {
    console.error('Error fetching donation images:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
