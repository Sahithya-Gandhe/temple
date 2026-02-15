'use client'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const TRANSITION_MS = 280
const SWIPE_THRESHOLD = 56
const WHEEL_THRESHOLD = 24

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
  const [sizesBySrc, setSizesBySrc] = useState({})
  const [imageRect, setImageRect] = useState(null)
  const [showOverlay, setShowOverlay] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragX, setDragX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const previousBodyRef = useRef(null)
  const scrollYRef = useRef(0)
  const pointerStartXRef = useRef(null)
  const wheelAccumulatedRef = useRef(0)
  const containerRef = useRef(null)

  const items = useMemo(() => {
    if (!lightbox) return []

    const fromLightbox = Array.isArray(lightbox.items)
      ? lightbox.items
          .map((item) => ({
            src: item?.src,
            alt: item?.alt,
          }))
          .filter((item) => Boolean(item.src))
      : []

    if (fromLightbox.length > 0) return fromLightbox
    if (lightbox.src) return [{ src: lightbox.src, alt: lightbox.alt }]
    return []
  }, [lightbox])

  const totalItems = items.length
  const canNavigate = totalItems > 1
  const currentItem = items[currentIndex] || items[0] || null
  const currentNaturalSize = currentItem?.src ? sizesBySrc[currentItem.src] : null

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

  const normalizeIndex = useCallback(
    (index) => {
      if (totalItems === 0) return 0
      const mod = index % totalItems
      return mod < 0 ? mod + totalItems : mod
    },
    [totalItems]
  )

  const goToIndex = useCallback(
    (nextIndex) => {
      if (!canNavigate) return
      setCurrentIndex(normalizeIndex(nextIndex))
    },
    [canNavigate, normalizeIndex]
  )

  const goToNext = useCallback(() => {
    if (!canNavigate) return
    setCurrentIndex((prevIndex) => normalizeIndex(prevIndex + 1))
  }, [canNavigate, normalizeIndex])

  const goToPrev = useCallback(() => {
    if (!canNavigate) return
    setCurrentIndex((prevIndex) => normalizeIndex(prevIndex - 1))
  }, [canNavigate, normalizeIndex])

  const closeWithAnimation = useCallback(() => {
    if (!lightbox || isClosing) return

    if (!originRect) {
      unlockBody()
      setMounted(false)
      setImageRect(null)
      setIsClosing(false)
      onRequestClose?.()
      return
    }

    setIsClosing(true)
    setShowOverlay(false)
    setImageRect(originRect)

    window.setTimeout(() => {
      unlockBody()
      setMounted(false)
      setImageRect(null)
      setIsClosing(false)
      onRequestClose?.()
    }, TRANSITION_MS)
  }, [isClosing, lightbox, onRequestClose, originRect, unlockBody])

  useEffect(() => {
    if (!lightbox || !originRect || totalItems === 0) return

    const initialIndex = Number.isInteger(lightbox.index) ? lightbox.index : 0
    const normalizedInitialIndex = ((initialIndex % totalItems) + totalItems) % totalItems

    setMounted(true)
    setIsClosing(false)
    setCurrentIndex(normalizedInitialIndex)
    setDragX(0)
    setIsDragging(false)
    pointerStartXRef.current = null
    wheelAccumulatedRef.current = 0
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
  }, [lightbox, originRect, totalItems, unlockBody])

  useEffect(() => {
    if (!mounted || !originRect) return

    const frame = window.requestAnimationFrame(() => {
      setShowOverlay(true)
      setImageRect(getFittedRect(currentNaturalSize))
    })

    return () => window.cancelAnimationFrame(frame)
  }, [mounted, originRect, currentNaturalSize])

  useEffect(() => {
    if (!mounted || !originRect || isClosing) return

    const onResize = () => setImageRect(getFittedRect(currentNaturalSize))
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [isClosing, mounted, currentNaturalSize, originRect])

  useEffect(() => {
    if (!mounted || !canNavigate || !currentItem) return

    const nextIndex = normalizeIndex(currentIndex + 1)
    const prevIndex = normalizeIndex(currentIndex - 1)
    const preloadTargets = [items[nextIndex]?.src, items[prevIndex]?.src].filter(Boolean)

    preloadTargets.forEach((src) => {
      const image = new window.Image()
      image.src = src
    })
  }, [mounted, canNavigate, currentIndex, currentItem, items, normalizeIndex])

  useEffect(() => {
    if (!mounted) return

    const onEsc = (event) => {
      if (event.key === 'Escape') closeWithAnimation()
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        goToNext()
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goToPrev()
      }
    }

    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [mounted, closeWithAnimation, goToNext, goToPrev])

  const onPointerDown = (event) => {
    if (!canNavigate) return
    pointerStartXRef.current = event.clientX
    setIsDragging(true)
    setDragX(0)
  }

  const onPointerMove = (event) => {
    if (!canNavigate) return
    if (pointerStartXRef.current === null) return

    const delta = event.clientX - pointerStartXRef.current
    setDragX(delta)
  }

  const onPointerUp = () => {
    if (!canNavigate) {
      setIsDragging(false)
      pointerStartXRef.current = null
      setDragX(0)
      return
    }

    if (dragX <= -SWIPE_THRESHOLD) goToNext()
    else if (dragX >= SWIPE_THRESHOLD) goToPrev()

    pointerStartXRef.current = null
    setIsDragging(false)
    setDragX(0)
  }

  const onWheelNavigate = useCallback((event) => {
    if (!canNavigate) return

    const axisDelta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY
    if (Math.abs(axisDelta) < 4) return

    event.preventDefault()
    wheelAccumulatedRef.current += axisDelta

    if (wheelAccumulatedRef.current >= WHEEL_THRESHOLD) {
      goToNext()
      wheelAccumulatedRef.current = 0
    } else if (wheelAccumulatedRef.current <= -WHEEL_THRESHOLD) {
      goToPrev()
      wheelAccumulatedRef.current = 0
    }
  }, [canNavigate, goToNext, goToPrev])

  useEffect(() => {
    if (!mounted) return

    const node = containerRef.current
    if (!node) return

    node.addEventListener('wheel', onWheelNavigate, { passive: false })
    return () => {
      node.removeEventListener('wheel', onWheelNavigate)
    }
  }, [mounted, onWheelNavigate])

  if (!mounted || !lightbox || !imageRect || !currentItem) return null

  const trackTranslatePercent = -currentIndex * 100
  const dragPercent = imageRect.width > 0 ? (dragX / imageRect.width) * 100 : 0

  return (
    <div className="fixed inset-0 z-[999]" aria-modal="true" role="dialog">
      <div
        className={`absolute inset-0 backdrop-blur-sm transition-all duration-300 ${showOverlay ? 'bg-black/85 opacity-100' : 'bg-black/0 opacity-0'}`}
        onClick={closeWithAnimation}
      />

      <button
        type="button"
        onClick={(event) => {
          event.preventDefault()
          event.stopPropagation()
          closeWithAnimation()
        }}
        aria-label="Close image preview"
        className={`absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 rounded-full border border-white/30 text-white text-xl leading-none flex items-center justify-center transition-all duration-300 ${showOverlay ? 'opacity-100 scale-100 bg-black/45 hover:bg-black/60' : 'opacity-0 scale-90'}`}
      >
        ×
      </button>

      {canNavigate && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              goToPrev()
            }}
            aria-label="Previous image"
            className={`absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 text-white text-2xl leading-none flex items-center justify-center transition-all duration-300 ${showOverlay ? 'opacity-100 scale-100 bg-black/45 hover:bg-black/60' : 'opacity-0 scale-90'}`}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault()
              event.stopPropagation()
              goToNext()
            }}
            aria-label="Next image"
            className={`absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/30 text-white text-2xl leading-none flex items-center justify-center transition-all duration-300 ${showOverlay ? 'opacity-100 scale-100 bg-black/45 hover:bg-black/60' : 'opacity-0 scale-90'}`}
          >
            ›
          </button>
        </>
      )}

      <div
        className="fixed rounded-lg overflow-hidden shadow-2xl touch-pan-y"
        ref={containerRef}
        style={{
          top: `${imageRect.top}px`,
          left: `${imageRect.left}px`,
          width: `${imageRect.width}px`,
          height: `${imageRect.height}px`,
          transition: isClosing
            ? `all ${TRANSITION_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1)`
            : `top ${TRANSITION_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1), left ${TRANSITION_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1), width ${TRANSITION_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1), height ${TRANSITION_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1)`,
        }}
        onClick={(event) => event.stopPropagation()}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={() => {
          if (isDragging) onPointerUp()
        }}
      >
        <div
          className="flex h-full"
          style={{
            transform: `translate3d(calc(${trackTranslatePercent}% + ${dragPercent}%), 0, 0)`,
            transition: isDragging ? 'none' : `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 0.61, 0.36, 1)`,
          }}
        >
          {items.map((item, index) => (
            <div key={`${item.src}-${index}`} className="basis-full h-full shrink-0 grow-0 bg-black/20">
              <img
                src={item.src}
                alt={item.alt || 'Preview'}
                loading={Math.abs(index - currentIndex) <= 1 ? 'eager' : 'lazy'}
                fetchPriority={Math.abs(index - currentIndex) <= 1 ? 'high' : 'low'}
                decoding="async"
                onLoad={(event) => {
                  const element = event.currentTarget
                  const nextSize = { width: element.naturalWidth, height: element.naturalHeight }
                  setSizesBySrc((prev) => {
                    const existing = prev[item.src]
                    if (existing?.width === nextSize.width && existing?.height === nextSize.height) return prev
                    return {
                      ...prev,
                      [item.src]: nextSize,
                    }
                  })
                }}
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      {canNavigate && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-3 py-1.5 rounded-full bg-black/45 text-white text-xs tracking-wide">
          {currentIndex + 1} / {totalItems}
        </div>
      )}
    </div>
  )
}
