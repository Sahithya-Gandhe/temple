'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/history', label: 'History' },
  { href: '/management', label: 'Management' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/donate', label: 'Donate' },
  { href: '/location', label: 'Location' },
  { href: '/contact', label: 'Contact' },
  { href: '#', label: 'Admin Panel', disabled: true },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#FFFDF8]/97 backdrop-blur-md shadow-md border-b border-[#C49A6C]/20' 
        : 'bg-[#FFFDF8]/90 backdrop-blur-sm'
    }`}>
      {/* Top sacred strip */}
      <div className="h-[3px] bg-gradient-to-r from-transparent via-[#B8860B] to-transparent" />

      <div className="container-temple">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-[52px] h-[52px] rounded-full overflow-hidden border-2 border-[#B8860B]/60 shadow-sm group-hover:border-[#B8860B] transition-colors">
              <Image
                src="/assets/templelogoheader.jpeg"
                alt="Sri Agastheeshwara Temple Logo"
                fill
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-[17px] tracking-[0.06em] text-[#5C1A1B] leading-tight" style={{fontFamily:'Cinzel,serif'}}>
                Sri Agastheeshwara
              </h1>
              <p className="text-[11px] tracking-[0.12em] uppercase text-[#A07840]" style={{fontFamily:'Inter,sans-serif'}}>
                Devasthanam · Thondavada
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0">
            {navLinks.map((link) => (
              link.disabled ? (
                <span
                  key={link.href}
                  className="px-[18px] py-2 text-[13px] font-medium tracking-[0.06em] uppercase text-[#A07840]/60 cursor-not-allowed relative"
                  style={{fontFamily:'Inter,sans-serif'}}
                  title="Coming Soon"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#B8860B]/40 to-[#C49A6C]/40"></span>
                </span>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-[18px] py-2 text-[13px] font-medium tracking-[0.06em] uppercase text-[#3A322D] hover:text-[#5C1A1B] transition-colors relative group"
                  style={{fontFamily:'Inter,sans-serif'}}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#B8860B] to-[#C49A6C] group-hover:w-3/4 transition-all duration-400"></span>
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#5C1A1B]"
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-3 border-t border-[#C49A6C]/20 fade-in">
            {navLinks.map((link) => (
              link.disabled ? (
                <span
                  key={link.href}
                  className="block px-5 py-3.5 text-[#A07840]/60 cursor-not-allowed tracking-wide text-[14px]"
                  style={{fontFamily:'Inter,sans-serif'}}
                  title="Coming Soon"
                >
                  {link.label}
                </span>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-5 py-3.5 text-[#3A322D] hover:text-[#5C1A1B] hover:bg-[#FAF6F0] transition-colors tracking-wide text-[14px]"
                  style={{fontFamily:'Inter,sans-serif'}}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
