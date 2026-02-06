import { NextResponse } from 'next/server'
import sql from '@/lib/db'

// GET - Public endpoint: fetch approved donations only
export async function GET() {
  try {
    const donations = await sql`
      SELECT id, donor_name, amount, image_url, created_at
      FROM annadanam_donations
      WHERE approved = true
      ORDER BY created_at DESC
    `
    return NextResponse.json(donations)
  } catch (error) {
    console.error('Error fetching public donations:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
