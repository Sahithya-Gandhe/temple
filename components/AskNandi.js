'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from '@/lib/LanguageContext'

const nandiOptions = [
  { iconType: 'om', labelKey: 'nandi.aboutTemple', descKey: 'nandi.aboutDesc', href: '/about', color: 'from-[#4A3F35] to-[#5B5B5B]' },
  { iconType: 'book', labelKey: 'nandi.historyLegends', descKey: 'nandi.historyDesc', href: '/history', color: 'from-[#5B5B5B] to-[#6B6B6B]' },
  { iconType: 'gift', labelKey: 'nandi.annadanam', descKey: 'nandi.annadanamDesc', href: '/donate#annadanam', color: 'from-[#C9A24D] to-[#D4B56A]' },
  { iconType: 'heart', labelKey: 'nandi.howToDonate', descKey: 'nandi.donateDesc', href: '/donate', color: 'from-[#C9A24D] to-[#BFA76A]' },
  { iconType: 'photo', labelKey: 'nandi.gallery', descKey: 'nandi.galleryDesc', href: '/gallery', color: 'from-[#6B6B6B] to-[#BFA76A]' },
  { iconType: 'pin', labelKey: 'nandi.howToReach', descKey: 'nandi.reachDesc', href: '/location', color: 'from-[#4A3F35] to-[#6B6B6B]' },
  { iconType: 'phone', labelKey: 'nandi.contactTemple', descKey: 'nandi.contactDesc', href: '/contact', color: 'from-[#4A3F35] to-[#5B5B5B]' },
]

function NandiOptionIcon({ type }) {
  const cls = "w-[18px] h-[18px] text-white"
  switch(type) {
    case 'om': return <span className="text-white text-sm font-bold" style={{fontFamily:'serif'}}>ॐ</span>
    case 'book': return <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/></svg>
    case 'gift': return <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/></svg>
    case 'heart': return <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/></svg>
    case 'photo': return <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25a2.25 2.25 0 0 0-2.25-2.25H3.75a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 3.75 21Z"/></svg>
    case 'pin': return <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>
    case 'phone': return <svg className={cls} fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/></svg>
    default: return null
  }
}

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
  const { t } = useTranslation()

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
            <div className="text-[#C9A24D] font-bold text-base mb-1" style={{fontFamily:'Cinzel,serif'}}>{t('nandi.askNandi')}</div>
            <div className="text-white/90 text-xs" style={{fontFamily:'Inter,sans-serif'}}>{t('nandi.divineGuide')}</div>
            <div className="absolute top-1/2 -translate-y-1/2 left-full border-6 border-transparent border-l-[#4A3F35]"></div>
          </div>

          {/* Mobile floating text label */}
          <div className="md:hidden absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-[#4A3F35] text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none border border-[#C9A24D]/30 shadow-lg">
            <div className="text-[#C9A24D] font-bold" style={{fontFamily:'Cinzel,serif'}}>{t('nandi.askNandi')}</div>
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
                      {t('nandi.askNandi')}
                    </h3>
                    <p className="text-white/80 text-[12px] tracking-[0.1em] uppercase" style={{fontFamily:'Inter,sans-serif'}}>
                      {t('nandi.divineGuide')}
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
                  {t('nandi.greeting')}
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
                    <NandiOptionIcon type={option.iconType} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[#1C1C1C] group-hover:text-[#C9A24D] font-medium text-[14px] block transition-colors" style={{fontFamily:'Inter,sans-serif'}}>
                      {t(option.labelKey)}
                    </span>
                    <span className="text-[#6B6B6B] text-[11px] block" style={{fontFamily:'Inter,sans-serif'}}>
                      {t(option.descKey)}
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
                {t('nandi.omNamah')}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  )
}
