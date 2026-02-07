'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/lib/LanguageContext'

export default function AboutContent() {
  const { t } = useTranslation()

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/assets/templeinfra1stpage.jpeg" alt="Sri Agastheeshwara Temple" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#4A3F35]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[#FFD700] text-[20px] tracking-[0.15em] uppercase mb-3" style={{fontFamily:'Inter,sans-serif', textShadow: '0 0 20px rgba(255,215,0,0.7)', fontWeight:600}}>{t('about.sacredHeritage')}</p>
          <h1 className="text-[2.2rem] md:text-[3rem] mb-4" style={{fontFamily:'Cinzel,serif', fontWeight:600, textShadow: '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.4)', color:'#FFFFFF'}}>{t('about.title')}</h1>
          <p className="text-white/80 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>{t('about.subtitle')}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-[#FAF9F6]">
        <div className="container-temple">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <p className="text-[18px] text-[#3A3A3A] leading-[1.9] mb-12" style={{fontFamily:'EB Garamond,serif'}}>
              {t('about.intro')}
            </p>

            {/* Presiding Deities */}
            <div className="grid md:grid-cols-2 gap-8 my-14">
              <div className="bg-white p-8 rounded-xl border border-[#1C1C1C]/15 shadow-soft hover:shadow-premium transition-shadow">
                <div className="w-14 h-14 bg-[#1C1C1C] rounded-full flex items-center justify-center mb-6">
                  <span className="text-[#C9A24D] text-xl font-bold" style={{fontFamily:'serif'}}>ॐ</span>
                </div>
                <h3 className="text-[1.4rem] text-[#1C1C1C] mb-4" style={{fontFamily:'Cinzel,serif'}}>{t('about.deityTitle1')}</h3>
                <p className="text-[#3A3A3A] leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                  {t('about.deityDesc1')}
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-[#1C1C1C]/15 shadow-soft hover:shadow-premium transition-shadow">
                <div className="w-14 h-14 bg-[#1C1C1C] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#C9A24D]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/></svg>
                </div>
                <h3 className="text-[1.4rem] text-[#1C1C1C] mb-4" style={{fontFamily:'Cinzel,serif'}}>{t('about.deityTitle2')}</h3>
                <p className="text-[#3A3A3A] leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                  {t('about.deityDesc2')}
                </p>
              </div>
            </div>

            {/* Sacred Connection */}
            <div className="bg-[#4A3F35] p-8 md:p-12 rounded-xl text-white my-14 shadow-premium">
              <h3 className="text-[1.5rem] mb-6 text-[#C9A24D]" style={{fontFamily:'Cinzel,serif'}}>{t('about.connectionTitle')}</h3>
              <p className="text-white/85 leading-[1.85] mb-4 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                {t('about.connectionDesc1')}
              </p>
              <p className="text-white/85 leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                {t('about.connectionDesc2')}
              </p>
            </div>

            {/* Other Shrines */}
            <div className="my-14">
              <h3 className="text-[1.5rem] text-[#1C1C1C] mb-6" style={{fontFamily:'Cinzel,serif'}}>{t('about.otherShrines')}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'Lord Ganesha', 'Lord Kartikeya', 'Kalabhairava', 'Sri Durga Devi',
                  'Sri Mahalakshmi', 'Sundareswara', 'Pancha Mukheswara', 'Lord Ayyappa',
                ].map((shrine) => (
                  <div key={shrine} className="bg-white p-4 rounded-lg text-center border border-[#C9A24D]/15 hover:border-[#C9A24D]/40 transition-colors">
                    <p className="text-[#3A3A3A] font-medium text-[15px]" style={{fontFamily:'EB Garamond,serif'}}>{shrine}</p>
                  </div>
                ))}
              </div>
              <p className="text-[#6B6B6B] mt-4 text-[14px]" style={{fontFamily:'EB Garamond,serif'}}>
                {t('about.shrinesOutside')}
              </p>
            </div>

            {/* River Mandapam */}
            <div className="bg-[#F8F6F2] p-8 rounded-xl border-l-3 border-[#C9A24D] my-14">
              <h3 className="text-[1.4rem] text-[#1C1C1C] mb-4" style={{fontFamily:'Cinzel,serif'}}>{t('about.mandapamTitle')}</h3>
              <p className="text-[#3A3A3A] leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                {t('about.mandapamDesc')}
              </p>
            </div>

            {/* CTA */}
            <div className="text-center mt-14">
              <Link href="/history" className="btn-gold mr-4">{t('about.exploreHistory')}</Link>
              <Link href="/gallery" className="btn-secondary">{t('about.viewGallery')}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
