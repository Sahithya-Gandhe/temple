'use client'
import { useState } from 'react'
import Link from 'next/link'

const nandiOptions = [
  { icon: '🕉', label: 'About the Temple', desc: 'Know our sacred heritage', href: '/about', color: 'from-[#5C1A1B] to-[#7B3F1A]' },
  { icon: '📜', label: 'History & Legends', desc: 'Sage Agastya & Swarnamukhi', href: '/history', color: 'from-[#7B3F1A] to-[#A07840]' },
  { icon: '🍛', label: 'Annadanam Seva', desc: 'Daily free meals for 300+ devotees', href: '/donate#annadanam', color: 'from-[#B8860B] to-[#DAA520]' },
  { icon: '💛', label: 'How to Donate', desc: 'Support our sacred mission', href: '/donate', color: 'from-[#DAA520] to-[#C49A6C]' },
  { icon: '🖼', label: 'Gallery', desc: 'Visual glimpses of divinity', href: '/gallery', color: 'from-[#A07840] to-[#C49A6C]' },
  { icon: '📍', label: 'How to Reach', desc: '10 km from Tirupati', href: '/location', color: 'from-[#6B6560] to-[#A07840]' },
  { icon: '📞', label: 'Contact Temple', desc: 'Get in touch with us', href: '/contact', color: 'from-[#5C1A1B] to-[#6B6560]' },
]

function NandiIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="75" rx="30" ry="10" fill="currentColor" opacity="0.15"/>
      <ellipse cx="48" cy="58" rx="22" ry="16" fill="currentColor" opacity="0.9"/>
      <ellipse cx="28" cy="42" rx="12" ry="10" fill="currentColor" opacity="0.9"/>
      <ellipse cx="20" cy="45" rx="6" ry="4.5" fill="currentColor" opacity="0.8"/>
      <ellipse cx="52" cy="42" rx="10" ry="12" fill="currentColor" opacity="0.85"/>
      <path d="M24 33 C20 22, 14 20, 12 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <path d="M32 33 C36 22, 42 20, 44 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      <ellipse cx="22" cy="34" rx="4" ry="3" fill="currentColor" opacity="0.7"/>
      <circle cx="25" cy="40" r="1.5" fill="white"/>
      <circle cx="25" cy="40" r="0.8" fill="#2A2522"/>
      <path d="M70 55 C78 50, 82 55, 78 62" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <rect x="32" y="68" width="5" height="8" rx="2" fill="currentColor" opacity="0.7"/>
      <rect x="55" y="68" width="5" height="8" rx="2" fill="currentColor" opacity="0.7"/>
      <circle cx="28" cy="52" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
      <line x1="28" y1="50" x2="28" y2="54" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
    </svg>
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
          className="group relative"
          aria-label="Ask Nandi – Temple Guide"
        >
          {/* Floating pulsing button */}
          <div className="relative">
            {/* Pulsing ring */}
            <div className="absolute -inset-3 bg-[#B8860B]/15 rounded-full animate-ping" />
            <div className="absolute -inset-1.5 bg-[#B8860B]/25 rounded-full animate-pulse" />
            
            {/* Main button */}
            <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#5C1A1B] to-[#7B3F1A] rounded-full shadow-2xl flex items-center justify-center border-2 border-white group-hover:scale-110 transition-all duration-300">
              {/* Nandi icon */}
              <NandiIcon className="w-7 h-7 md:w-9 md:h-9 text-[#B8860B] drop-shadow-sm" />
              
              {/* Notification dot */}
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8860B] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-[#A07840]"></span>
              </span>
            </div>
          </div>
          
          {/* Tooltip */}
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#5C1A1B] text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block">
            Ask Nandi - Your Divine Guide
            <div className="absolute top-1/2 -translate-y-1/2 left-full border-4 border-transparent border-l-[#5C1A1B]"></div>
          </div>
        </button>
      </div>

      {/* Panel */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 fade-in" onClick={() => setIsOpen(false)} />

          {/* Nandi Panel – responsive positioning */}
          <div className={`
            fixed z-50 overflow-hidden fade-in border border-[#B8860B]/25 shadow-2xl
            ${/* Desktop: slide from right side */ ''}
            md:top-6 md:right-6 md:bottom-auto md:left-auto md:w-[420px] md:max-h-[85vh] md:rounded-2xl
            ${/* Mobile: slide from right side but smaller */ ''}
            top-6 right-2 left-2 max-h-[80vh] rounded-2xl
            bg-[#FFFDF8]
          `}>
            {/* Header */}
            <div className="relative bg-gradient-to-br from-[#5C1A1B] via-[#7B3F1A] to-[#4A1516] p-5 text-white overflow-hidden">
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='8' fill='none' stroke='%23C49A6C' stroke-width='1'/%3E%3C/svg%3E\")", backgroundSize:'40px 40px'}}
              />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 bg-[#C49A6C]/20 rounded-full flex items-center justify-center border border-[#C49A6C]/30 float-gentle">
                    <NandiIcon className="w-9 h-9 text-[#C49A6C]" />
                  </div>
                  <div>
                    <h3 className="text-lg tracking-[0.08em] text-[#B8860B]" style={{fontFamily:'Cinzel,serif', textShadow: '0 1px 2px rgba(184,134,11,0.3)'}}>
                      Nandi
                    </h3>
                    <p className="text-white/80 text-[11px] tracking-[0.1em] uppercase" style={{fontFamily:'Inter,sans-serif'}}>
                      Your Divine Guide
                    </p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors"
                  aria-label="Close">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="relative mt-3 p-3 bg-white/15 rounded-xl border border-white/20">
                <p className="text-[14px] text-white leading-relaxed" style={{fontFamily:'EB Garamond,serif', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>
                  🙏 Namaskaram! I am <span className="font-semibold text-[#B8860B]">Nandi</span>, the eternal guardian of Lord Shiva.
                  How may I guide you today?
                </p>
              </div>
            </div>

            {/* Navigation Options */}
            <div className="p-3 space-y-1.5 max-h-[50vh] overflow-y-auto">
              {nandiOptions.map((option, i) => (
                <Link key={option.href} href={option.href} onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white hover:bg-[#DAA520]/5 transition-all group border border-transparent hover:border-[#DAA520]/30 hover:shadow-md"
                  style={{animationDelay: `${i * 0.05}s`}}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform`}>
                    <span className="text-[18px]">{option.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[#3A322D] group-hover:text-[#B8860B] font-medium text-[14px] block transition-colors" style={{fontFamily:'Inter,sans-serif'}}>
                      {option.label}
                    </span>
                    <span className="text-[#6B6560] text-[11px] block" style={{fontFamily:'Inter,sans-serif'}}>
                      {option.desc}
                    </span>
                  </div>
                  <svg className="w-4 h-4 text-[#B8860B] group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-[#DAA520]/20 bg-gradient-to-r from-[#DAA520]/5 to-[#FFD700]/5">
              <p className="text-center text-[12px] text-[#B8860B]/80" style={{fontFamily:'EB Garamond,serif'}}>
                ॥ ॐ नमः शिवाय ॥
              </p>
            </div>
          </div>
        </>
      )}
    </>
  )
}
