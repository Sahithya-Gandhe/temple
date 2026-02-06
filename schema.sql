-- Sri Agastheeshwara Devasthanam - Database Schema
-- Run against Neon DB (PostgreSQL)

CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Admin users table
CREATE TABLE IF NOT EXISTS admins (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Annadanam donations table
CREATE TABLE IF NOT EXISTS annadanam_donations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  donor_name TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  image_url TEXT NOT NULL,
  approved BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for public queries (approved donations sorted by date)
CREATE INDEX IF NOT EXISTS idx_donations_approved_date
  ON annadanam_donations (approved, created_at DESC);
