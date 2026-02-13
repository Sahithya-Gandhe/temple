const uploadsRoot = 'uploads'

export const STORAGE_PATHS = {
  gallery: `${uploadsRoot}/gallery`,
  donations: `${uploadsRoot}/donations`,
} as const

const cleanPath = (value: string) => value.replace(/^\/+/, '')

const safeFileName = (fileName: string) =>
  (fileName || 'upload.jpg').replace(/[^a-zA-Z0-9._-]/g, '_')

export const buildObjectKey = (
  type: keyof typeof STORAGE_PATHS,
  fileName: string,
  timestamp = Date.now()
) => {
  return `${STORAGE_PATHS[type]}/${timestamp}-${safeFileName(fileName)}`
}

export const buildPublicImageUrl = (key: string) => {
  const base = (process.env.R2_PUBLIC_URL || '').replace(/\/$/, '')
  return `${base}/${cleanPath(key)}`
}

export const extractObjectKey = (value: string | null | undefined) => {
  if (!value) return null
  if (value.startsWith('data:')) return null

  const normalized = value.trim()

  try {
    if (/^https?:\/\//i.test(normalized)) {
      const parsed = new URL(normalized)
      const keyFromPath = cleanPath(decodeURIComponent(parsed.pathname))
      const uploadsIndex = keyFromPath.indexOf(`${uploadsRoot}/`)
      if (uploadsIndex >= 0) {
        return keyFromPath.slice(uploadsIndex)
      }
      return keyFromPath || null
    }
  } catch {
    // Continue with non-URL parsing
  }

  const cleaned = cleanPath(normalized)
  const uploadsIndex = cleaned.indexOf(`${uploadsRoot}/`)
  if (uploadsIndex >= 0) {
    return cleaned.slice(uploadsIndex)
  }

  return cleaned || null
}

export const normalizeStoredImageUrl = (
  storedUrl: string | null | undefined,
  fallbackPrefix?: string
) => {
  const original = storedUrl || ''
  if (!original || original.startsWith('data:')) {
    return {
      imageUrl: original,
      objectKey: null as string | null,
      changed: false,
    }
  }

  let objectKey = extractObjectKey(original)

  if (objectKey && fallbackPrefix && !objectKey.includes('/') && !objectKey.startsWith('http')) {
    objectKey = `${fallbackPrefix}/${objectKey}`
  }

  if (!objectKey || objectKey.startsWith('http')) {
    return {
      imageUrl: original,
      objectKey: null as string | null,
      changed: false,
    }
  }

  const imageUrl = buildPublicImageUrl(objectKey)
  return {
    imageUrl,
    objectKey,
    changed: imageUrl !== original,
  }
}
