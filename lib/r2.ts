import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'

const r2Client = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY || '',
    secretAccessKey: process.env.R2_SECRET_KEY || '',
  },
})

const MAX_IMAGE_SIZE_BYTES = 5 * 1024 * 1024

const ensureEnv = (name: string) => {
  if (!process.env[name]) {
    throw new Error(`Missing required env var: ${name}`)
  }
}

const buildPublicUrl = (base: string, key: string) => {
  return `${base.replace(/\/$/, '')}/${key}`
}

export const validateImageBuffer = (buffer: Buffer, contentType: string) => {
  if (!contentType.startsWith('image/')) {
    throw new Error('Only image files are allowed')
  }
  if (buffer.length > MAX_IMAGE_SIZE_BYTES) {
    throw new Error('Image must be 5MB or smaller')
  }
}

export const uploadToR2 = async (key: string, body: Buffer, contentType: string) => {
  ensureEnv('CLOUDFLARE_ACCOUNT_ID')
  ensureEnv('R2_ACCESS_KEY')
  ensureEnv('R2_SECRET_KEY')
  ensureEnv('R2_BUCKET')
  ensureEnv('R2_PUBLIC_URL')

  await r2Client.send(
    new PutObjectCommand({
      Bucket: process.env.R2_BUCKET,
      Key: key,
      Body: body,
      ContentType: contentType,
      CacheControl: 'public, max-age=31536000, immutable',
    })
  )

  return buildPublicUrl(process.env.R2_PUBLIC_URL || '', key)
}

export const uploadToGalleryR2 = async (key: string, body: Buffer, contentType: string) => {
  ensureEnv('CLOUDFLARE_ACCOUNT_ID')
  ensureEnv('R2_ACCESS_KEY')
  ensureEnv('R2_SECRET_KEY')
  ensureEnv('R2_GALLERY_BUCKET')
  ensureEnv('R2_GALLERY_PUBLIC_URL')

  try {
    await r2Client.send(
      new PutObjectCommand({
        Bucket: process.env.R2_GALLERY_BUCKET,
        Key: key,
        Body: body,
        ContentType: contentType,
        CacheControl: 'public, max-age=31536000, immutable',
      })
    )

    return buildPublicUrl(process.env.R2_GALLERY_PUBLIC_URL || '', key)
  } catch (error) {
    const message = error instanceof Error ? error.message : ''
    if (message.includes('AccessDenied') || message.includes('Access Denied')) {
      if (process.env.R2_BUCKET && process.env.R2_PUBLIC_URL) {
        console.warn('Gallery bucket access denied, falling back to default bucket.')
        return uploadToR2(key, body, contentType)
      }
    }

    throw error
  }
}
