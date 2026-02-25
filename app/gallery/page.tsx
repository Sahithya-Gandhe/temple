import { Metadata } from 'next'
import { neon } from '@neondatabase/serverless'
import GalleryContent from '@/components/GalleryContent'
import { normalizeStoredImageUrl, STORAGE_PATHS } from '@/lib/image-storage'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Gallery | Sri Agastheeswara Swamy Temple, Thondavada',
  description: 'View images of Sri Agastheeswara Swamy Temple - temple architecture, festivals, Annadanam seva, and sacred moments.',
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

    return normalizedDonations
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

    const updates: Array<{ id: string; image_url: string }> = []
    const normalizedImages = images.map((image) => {
      const normalized = normalizeStoredImageUrl(image.image_url, STORAGE_PATHS.gallery)
      if (normalized.changed) {
        updates.push({ id: image.id, image_url: normalized.imageUrl })
      }
      return {
        ...image,
        image_url: normalized.imageUrl,
      }
    })

    if (updates.length > 0) {
      await Promise.all(
        updates.map((image) =>
          sql`UPDATE temple_gallery_images SET image_url = ${image.image_url} WHERE id = ${image.id}`
        )
      )
    }

    return normalizedImages
  } catch {
    return []
  }
}

export default async function GalleryPage() {
  const donations = await getApprovedDonations()
  const galleryImages = await getGalleryImages()
  return <GalleryContent donations={donations} galleryImages={galleryImages} />
}
