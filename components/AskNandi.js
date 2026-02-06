'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const nandiOptions = [
  { icon: '🕉', label: 'About the Temple', desc: 'Know our sacred heritage', href: '/about', color: 'from-[#4A3F35] to-[#5B5B5B]' },
  { icon: '📜', label: 'History & Legends', desc: 'Sage Agastya & Swarnamukhi', href: '/history', color: 'from-[#5B5B5B] to-[#6B6B6B]' },
  { icon: '🍛', label: 'Annadanam Seva', desc: 'Daily free meals for 300+ devotees', href: '/donate#annadanam', color: 'from-[#C9A24D] to-[#D4B56A]' },
  { icon: '💛', label: 'How to Donate', desc: 'Support our sacred mission', href: '/donate', color: 'from-[#C9A24D] to-[#BFA76A]' },
  { icon: '🖼', label: 'Gallery', desc: 'Visual glimpses of divinity', href: '/gallery', color: 'from-[#6B6B6B] to-[#BFA76A]' },
  { icon: '📍', label: 'How to Reach', desc: '10 km from Tirupati', href: '/location', color: 'from-[#4A3F35] to-[#6B6B6B]' },
  { icon: '📞', label: 'Contact Temple', desc: 'Get in touch with us', href: '/contact', color: 'from-[#4A3F35] to-[#5B5B5B]' },
]

function NandiIcon({ className }) {
  return (
    <div className={`${className} relative flex items-center justify-center`}>
      <Image
        src="/assets/nandi.jpg"
        alt="Sacred Nandi"
        width={160}
        height={160}
        className="w-full h-full object-cover rounded-full border-2 border-[#C9A24D]/30"
        style={{ 
          filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.35)) sepia(0.25) saturate(1.25) brightness(1.05)',
          objectPosition: 'center center'
        }}
      />
      {/* Subtle golden overlay to match theme */}
      <div className="absolute inset-0 bg-[#C9A24D]/1 rounded-full pointer-events-none" />
    </div>
  )
}

export default function AskNandi() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* ═══ Floating side icon (visible on all devices) ═══ */}
      <div className="fixed right-4 bottom-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative nandi-button-enhanced"
          aria-label="Ask Nandi – Temple Guide"
        >
          {/* Floating pulsing button */}
          <div className="relative">
            {/* Strong pulse rings */}
            <div className="absolute -inset-4 bg-[#C9A24D]/20 rounded-full animate-ping" />
            <div className="absolute -inset-2 bg-[#C9A24D]/15 rounded-full animate-pulse" />
            
            {/* Main button - bigger and more prominent */}
            <div className="relative w-18 h-18 md:w-20 md:h-20 bg-gradient-to-br from-[#4A3F35] via-[#5B5B5B] to-[#4A3F35] rounded-full shadow-2xl flex items-center justify-center border-2 border-[#C9A24D]/50 group-hover:scale-110 transition-all duration-300" 
                 style={{ filter: 'drop-shadow(0 0 20px rgba(201, 162, 77, 0.4))' }}>
              {/* Nandi icon - bigger */}
              <NandiIcon className="w-12 h-12 md:w-14 md:h-14 text-[#C9A24D] drop-shadow-lg" />
              
              {/* Enhanced notification dot */}
              <span className="absolute -top-2 -right-2 flex h-4 w-4 md:h-5 md:w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A24D] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 md:h-5 md:w-5 bg-[#C9A24D] shadow-lg"></span>
              </span>
            </div>
          </div>
          
          {/* Enhanced Tooltip - more prominent */}
          <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#4A3F35] to-[#5B5B5B] text-white px-4 py-3 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-[#C9A24D]/30 shadow-xl" 
               style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))' }}>
            <div className="text-[#C9A24D] font-bold text-base mb-1" style={{fontFamily:'Cinzel,serif'}}>Ask Nandi</div>
            <div className="text-white/90 text-xs" style={{fontFamily:'Inter,sans-serif'}}>Your Divine Temple Guide</div>
            <div className="absolute top-1/2 -translate-y-1/2 left-full border-6 border-transparent border-l-[#4A3F35]"></div>
          </div>

          {/* Mobile floating text label */}
          <div className="md:hidden absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-[#4A3F35] text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-[#C9A24D]/30 shadow-lg">
            <div className="text-[#C9A24D] font-bold" style={{fontFamily:'Cinzel,serif'}}>Ask Nandi</div>
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#4A3F35]"></div>
          </div>
        </button>
      </div>

      {/* Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 fade-in" onClick={() => setIsOpen(false)} />

          {/* Nandi Panel – responsive positioning */}
          <div className={`
            fixed z-50 overflow-hidden fade-in border border-[#C9A24D]/15 shadow-xl
            ${/* Desktop: slide from right side */ ''}
            md:top-6 md:right-6 md:bottom-auto md:left-auto md:w-[400px] md:max-h-[85vh] md:rounded-xl
            ${/* Mobile: slide from right side but smaller */ ''}
            top-6 right-2 left-2 max-h-[80vh] rounded-xl
            bg-[#FAF9F6]
          `}>
            {/* Header */}
            <div className="relative bg-[#4A3F35] p-5 text-white overflow-hidden">
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-20 h-20 bg-[#C9A24D]/15 rounded-full flex items-center justify-center border border-[#C9A24D]/25 overflow-hidden">
                    <NandiIcon className="w-16 h-16" />
                  </div>
                  <div>
                    <h3 className="text-[#C9A24D] text-[14px] font-bold tracking-[0.1em] uppercase" style={{fontFamily:'Cinzel,serif'}}>
                      Nandi
                    </h3>
                    <p className="text-white/80 text-[12px] tracking-[0.1em] uppercase" style={{fontFamily:'Inter,sans-serif'}}>
                      Your Divine Guide
                    </p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Close">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="relative mt-3 p-3 bg-white/10 rounded-lg border border-white/10">
                <p className="text-[14px] text-white/90 leading-relaxed" style={{fontFamily:'EB Garamond,serif'}}>
                  Namaskaram! I am <span className="font-semibold text-[#C9A24D]">Nandi</span>, the eternal guardian of Lord Shiva.
                  How may I guide you today?
                </p>
              </div>
            </div>

            {/* Navigation Options */}
            <div className="p-3 space-y-1 max-h-[50vh] overflow-y-auto">
              {nandiOptions.map((option, i) => (
                <Link key={option.href} href={option.href} onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white hover:bg-[#C9A24D]/5 transition-all group border border-transparent hover:border-[#C9A24D]/20"
                  style={{animationDelay: `${i * 0.05}s`}}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${option.color} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                    <span className="text-[18px]">{option.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[#1C1C1C] group-hover:text-[#C9A24D] font-medium text-[14px] block transition-colors" style={{fontFamily:'Inter,sans-serif'}}>
                      {option.label}
                    </span>
                    <span className="text-[#6B6B6B] text-[11px] block" style={{fontFamily:'Inter,sans-serif'}}>
                      {option.desc}
                    </span>
                  </div>
                  <svg className="w-4 h-4 text-[#C9A24D] group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-[#C9A24D]/10 bg-[#F8F6F2]">
              <p className="text-center text-[12px] text-[#6B6B6B]" style={{fontFamily:'EB Garamond,serif'}}>
                Om Namah Shivaya
              </p>
            </div>
          </div>
        </>
      )}
    </>
  )
}
