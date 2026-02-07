'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useTranslation } from '@/lib/LanguageContext'
import LanguageSwitcher from '@/components/LanguageSwitcher'

const navLinks = [
  { href: '/about', key: 'nav.about' },
  { href: '/history', key: 'nav.history' },
  { href: '/management', key: 'nav.management' },
  { href: '/gallery', key: 'nav.gallery' },
  { href: '/donate', key: 'nav.donate' },
  { href: '/location', key: 'nav.location' },
  { href: '/contact', key: 'nav.contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)
  const [scrolled, setScrolled] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)
  const pathname = usePathname()
  const { t } = useTranslation()

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY
    
    // Determine scroll direction and visibility
    if (currentScrollY < 100) {
      // Always show header near top
      setVisible(true)
      setScrolled(false)
    } else {
      setScrolled(true)
      if (currentScrollY > lastScrollY.current + 5) {
        // Scrolling down with threshold
        setVisible(false)
      } else if (currentScrollY < lastScrollY.current - 5) {
        // Scrolling up with threshold
        setVisible(true)
      }
    }
    
    lastScrollY.current = currentScrollY
    ticking.current = false
  }, [])

  useEffect(() => {
    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(handleScroll)
        ticking.current = true
      }
    }
    
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [handleScroll])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      } ${
        scrolled 
          ? 'bg-[#FAF9F6]/98 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.06)]' 
          : 'bg-[#FAF9F6]'
      }`}
      style={{ willChange: 'transform, opacity' }}
    >
      {/* Subtle top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent opacity-60" />

      <div className="container-temple">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-[80px] h-[80px] rounded-full overflow-hidden border-[2.5px] border-[#C9A24D]/60 transition-all duration-400 group-hover:border-[#C9A24D] shadow-md">
              <Image
                src="/assets/templelogoheader.jpeg"
                alt="Sri Agastheeshwara Temple Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-[18px] tracking-[0.03em] leading-tight font-semibold !text-[#1C1C1C]" style={{ fontFamily: 'Cinzel,serif', color: '#1C1C1C' }}>
                {t('header.templeName')}
              </h1>
              <p className="text-[11px] tracking-[0.08em] uppercase mt-1" style={{ fontFamily: 'Inter,sans-serif', color: '#5A5A5A' }}>
                {t('header.subtitle')}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 text-[12px] font-medium tracking-[0.06em] uppercase transition-all duration-300 relative rounded-md ${
                    isActive
                      ? 'text-[#C9A24D] bg-[#C9A24D]/8'
                      : 'text-[#4A3F35] hover:text-[#C9A24D]'
                  }`}
                  style={{ fontFamily: 'Inter,sans-serif' }}
                >
                  {t(link.key)}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#C9A24D] rounded-full" />
                  )}
                </Link>
              )
            })}
            <div className="ml-2">
              <LanguageSwitcher />
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4A3F35] hover:text-[#C9A24D] transition-colors"
              aria-label="Toggle menu"
            >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-400 ease-out ${
          mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 border-t border-[#C9A24D]/15">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 text-[13px] tracking-[0.04em] transition-all duration-300 ${
                    isActive
                      ? 'text-[#C9A24D] bg-[#C9A24D]/5 font-medium'
                      : 'text-[#4A3F35] hover:text-[#C9A24D] hover:bg-[#F8F6F2]'
                  }`}
                  style={{ fontFamily: 'Inter,sans-serif' }}
                >
                  {t(link.key)}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>
    </header>
  )
}
