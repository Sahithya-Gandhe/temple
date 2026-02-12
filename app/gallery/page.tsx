import { Metadata } from 'next'
import { neon } from '@neondatabase/serverless'
import GalleryContent from '@/components/GalleryContent'

export const metadata: Metadata = {
  title: 'Gallery | Sri Agastheeshwara Swamy Temple, Thondavada',
  description: 'View images of Sri Agastheeshwara Swamy Temple - temple architecture, festivals, Annadanam seva, and sacred moments.',
}

async function getApprovedDonations() {
  try {
    const sql = neon(process.env.DATABASE_URL!)
    const donations = await sql`
      SELECT id, donor_name, amount, image_url, created_at
      FROM annadanam_donations
      WHERE approved = true
      ORDER BY created_at DESC
    `
    return donations
  } catch {
    return []
  }
}

async function getGalleryImages() {
  try {
    const sql = neon(process.env.DATABASE_URL!)
    const images = await sql`
      SELECT id, image_url, title, description, uploaded_at
      FROM temple_gallery_images
      ORDER BY uploaded_at DESC
    `
    return images
  } catch {
    return []
  }
}

export default async function GalleryPage() {
  const donations = await getApprovedDonations()
  const galleryImages = await getGalleryImages()
  return <GalleryContent donations={donations} galleryImages={galleryImages} />
}
