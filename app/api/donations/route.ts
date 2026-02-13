import { NextResponse } from 'next/server'
import sql from '@/lib/db'
import { normalizeStoredImageUrl, STORAGE_PATHS } from '@/lib/image-storage'

// GET - Public endpoint: fetch approved donations only
export async function GET() {
  try {
    const donations = await sql`
      SELECT id, donor_name, amount, image_url, created_at
      FROM annadanam_donations
      WHERE approved = true
      ORDER BY created_at DESC
    `

    const normalizedDonations = donations.map((donation) => ({
      ...donation,
      image_url: normalizeStoredImageUrl(donation.image_url, STORAGE_PATHS.donations).imageUrl,
    }))

    return NextResponse.json(normalizedDonations, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600',
      },
    })
  } catch (error) {
    console.error('Error fetching public donations:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
