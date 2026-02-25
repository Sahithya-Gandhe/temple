import { neon } from '@neondatabase/serverless'
import bcrypt from 'bcryptjs'

const DATABASE_URL = 'postgresql://neondb_owner:npg_ON5bI4yRPMDY@ep-bold-bird-aij235uj-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require'

const sql = neon(DATABASE_URL)

async function setup() {
  console.log('Creating tables...')

  await sql`CREATE EXTENSION IF NOT EXISTS "pgcrypto"`

  await sql`
    CREATE TABLE IF NOT EXISTS admins (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `

  await sql`
    CREATE TABLE IF NOT EXISTS annadanam_donations (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      donor_name TEXT NOT NULL,
      amount NUMERIC NOT NULL,
      image_url TEXT NOT NULL,
      approved BOOLEAN DEFAULT TRUE,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `

  await sql`
    CREATE TABLE IF NOT EXISTS temple_gallery_images (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      image_url TEXT NOT NULL,
      title TEXT,
      description TEXT,
      uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `

  await sql`
    CREATE INDEX IF NOT EXISTS idx_donations_approved_date
    ON annadanam_donations (approved, created_at DESC)
  `

  await sql`
    CREATE INDEX IF NOT EXISTS idx_gallery_uploaded_date
    ON temple_gallery_images (uploaded_at DESC)
  `

  console.log('Tables created successfully.')

  // Seed admin user
  const adminEmail = 'admin@Agastheeswaradevasthanam.in'
  const adminPassword = 'temple2024'
  const hash = await bcrypt.hash(adminPassword, 12)

  // Upsert: insert if not exists
  const existing = await sql`SELECT id FROM admins WHERE email = ${adminEmail}`
  if (existing.length === 0) {
    await sql`INSERT INTO admins (email, password_hash) VALUES (${adminEmail}, ${hash})`
    console.log(`Admin user created: ${adminEmail}`)
  } else {
    // Update password hash in case it changed
    await sql`UPDATE admins SET password_hash = ${hash} WHERE email = ${adminEmail}`
    console.log(`Admin user already exists, password updated: ${adminEmail}`)
  }

  console.log('')
  console.log('=== Setup Complete ===')
  console.log(`Admin Email:    ${adminEmail}`)
  console.log(`Admin Password: ${adminPassword}`)
  console.log('Change these credentials in production!')
}

setup().catch(console.error)
