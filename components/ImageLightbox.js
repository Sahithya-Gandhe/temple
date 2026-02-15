'use client'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const TRANSITION_MS = 280

function getFittedRect(naturalSize) {
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  const maxWidth = viewportWidth * 0.94
  const maxHeight = viewportHeight * 0.88

  if (!naturalSize?.width || !naturalSize?.height) {
    const fallbackWidth = Math.min(maxWidth, viewportWidth * 0.9)
    const fallbackHeight = Math.min(maxHeight, viewportHeight * 0.7)
    return {
      width: fallbackWidth,
      height: fallbackHeight,
      top: (viewportHeight - fallbackHeight) / 2,
      left: (viewportWidth - fallbackWidth) / 2,
    }
  }

  const ratio = Math.min(maxWidth / naturalSize.width, maxHeight / naturalSize.height, 1)
  const width = naturalSize.width * ratio
  const height = naturalSize.height * ratio

  return {
    width,
    height,
    top: (viewportHeight - height) / 2,
    left: (viewportWidth - width) / 2,
  }
}

export default function ImageLightbox({ lightbox, onRequestClose }) {
  const [mounted, setMounted] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [naturalSize, setNaturalSize] = useState(null)
  const [imageRect, setImageRect] = useState(null)
  const [showOverlay, setShowOverlay] = useState(false)

  const previousBodyRef = useRef(null)
  const scrollYRef = useRef(0)

  const originRect = useMemo(() => {
    if (!lightbox?.originRect) return null
    return {
      top: lightbox.originRect.top,
      left: lightbox.originRect.left,
      width: lightbox.originRect.width,
      height: lightbox.originRect.height,
    }
  }, [lightbox])

  const unlockBody = useCallback(() => {
    const previous = previousBodyRef.current
    if (!previous) return

    const bodyStyle = document.body.style
    bodyStyle.position = previous.position
    bodyStyle.top = previous.top
    bodyStyle.left = previous.left
    bodyStyle.right = previous.right
    bodyStyle.width = previous.width
    bodyStyle.overflow = previous.overflow

    window.scrollTo(0, scrollYRef.current)
    previousBodyRef.current = null
  }, [])

  const closeWithAnimation = useCallback(() => {
    if (!lightbox || isClosing || !originRect) return

    setIsClosing(true)
    setShowOverlay(false)
    setImageRect(originRect)

    window.setTimeout(() => {
      unlockBody()
      setMounted(false)
      setNaturalSize(null)
      setImageRect(null)
      setIsClosing(false)
      onRequestClose?.()
    }, TRANSITION_MS)
  }, [isClosing, lightbox, onRequestClose, originRect, unlockBody])

  useEffect(() => {
    if (!lightbox || !originRect) return

    setMounted(true)
    setIsClosing(false)
    setNaturalSize(null)
    setImageRect(originRect)
    setShowOverlay(false)

    scrollYRef.current = window.scrollY

    const bodyStyle = document.body.style
    previousBodyRef.current = {
      position: bodyStyle.position,
      top: bodyStyle.top,
      left: bodyStyle.left,
      right: bodyStyle.right,
      width: bodyStyle.width,
      overflow: bodyStyle.overflow,
    }

    bodyStyle.position = 'fixed'
    bodyStyle.top = `-${scrollYRef.current}px`
    bodyStyle.left = '0'
    bodyStyle.right = '0'
    bodyStyle.width = '100%'
    bodyStyle.overflow = 'hidden'

    return () => {
      unlockBody()
    }
  }, [lightbox, originRect, unlockBody])

  useEffect(() => {
    if (!mounted || !originRect) return

    const frame = window.requestAnimationFrame(() => {
      setShowOverlay(true)
      setImageRect(getFittedRect(naturalSize))
    })

    return () => window.cancelAnimationFrame(frame)
  }, [mounted, originRect, naturalSize])

  useEffect(() => {
    if (!mounted || !originRect || isClosing) return

    const onResize = () => setImageRect(getFittedRect(naturalSize))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [isClosing, mounted, naturalSize, originRect])

  useEffect(() => {
    if (!mounted) return

    const onEsc = (event) => {
      if (event.key === 'Escape') closeWithAnimation()
    }

    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [mounted, closeWithAnimation])

  if (!mounted || !lightbox || !imageRect) return null

  return (
    <div className="fixed inset-0 z-[999]" aria-modal="true" role="dialog">
      <div
        className={`absolute inset-0 backdrop-blur-sm transition-all duration-300 ${showOverlay ? 'bg-black/85 opacity-100' : 'bg-black/0 opacity-0'}`}
        onClick={closeWithAnimation}
      />

      <button
        onClick={closeWithAnimation}
        aria-label="Close image preview"
        className={`absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 rounded-full border border-white/30 text-white text-xl leading-none flex items-center justify-center transition-all duration-300 ${showOverlay ? 'opacity-100 scale-100 bg-black/45 hover:bg-black/60' : 'opacity-0 scale-90'}`}
      >
        ×
      </button>

      <img
        src={lightbox.src}
        alt={lightbox.alt || 'Preview'}
        onLoad={(event) => {
          const element = event.currentTarget
          setNaturalSize({ width: element.naturalWidth, height: element.naturalHeight })
        }}
        className="fixed rounded-lg object-contain shadow-2xl"
        style={{
          top: `${imageRect.top}px`,
          left: `${imageRect.left}px`,
          width: `${imageRect.width}px`,
          height: `${imageRect.height}px`,
          transition: `all ${TRANSITION_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1)`,
        }}
      />
    </div>
  )
}
