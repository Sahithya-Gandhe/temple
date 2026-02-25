'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/lib/LanguageContext'

export default function HistoryContent() {
  const { t } = useTranslation()

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/assets/maingate.jpeg" alt="Temple Historic Gate" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#4A3F35]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[#FFD700] text-[13px] tracking-[0.15em] uppercase mb-3" style={{fontFamily:'Inter,sans-serif', textShadow: '0 0 20px rgba(255,215,0,0.7)', fontWeight:600}}>{t('history.ancientTales')}</p>
          <h1 className="text-[2.2rem] md:text-[3rem] mb-4" style={{fontFamily:'Cinzel,serif', fontWeight:600, textShadow: '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.4)', color:'#FFFFFF'}}>{t('history.title')}</h1>
          <p className="text-white/80 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>{t('history.subtitle')}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-[#FAF9F6]">
        <div className="container-temple">
          <div className="max-w-4xl mx-auto">

            {/* Sage Agastya Legend */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#1C1C1C] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#C9A24D]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/></svg>
                </div>
                <h2 className="text-[1.6rem] text-[#1C1C1C]" style={{fontFamily:'Cinzel,serif'}}>{t('history.legendTitle')}</h2>
              </div>

              <div className="space-y-5 text-[#3A3A3A] leading-[1.9] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                <p>{t('history.legendDesc1')}</p>

                <div className="bg-[#F8F6F2] p-6 rounded-xl border-l-3 border-[#1C1C1C] my-6">
                  <p className="italic text-[#6B6B6B]">{t('history.legendQuote')}</p>
                </div>

                <p>{t('history.legendDesc2')}</p>
                <p>{t('history.legendDesc3')}</p>
              </div>
            </div>

            {/* Swarnamukhi River */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#C9A24D] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/></svg>
                </div>
                <h2 className="text-[1.6rem] text-[#1C1C1C]" style={{fontFamily:'Cinzel,serif'}}>{t('history.riverTitle')}</h2>
              </div>

              <div className="space-y-5 text-[#3A3A3A] leading-[1.9] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                <p>{t('history.riverDesc1')}</p>
                <p>
                  {t('history.riverDesc2p1')} <strong className="text-[#C9A24D]">{t('history.riverDesc2name')}</strong> {t('history.riverDesc2p2')}
                </p>

                <div className="bg-[#4A3F35] p-6 rounded-xl text-white my-6 shadow-premium">
                  <h4 className="text-[1.1rem] mb-2 text-[#C9A24D]" style={{fontFamily:'Cinzel,serif'}}>{t('history.triveniTitle')}</h4>
                  <p className="text-white/85 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                    {t('history.triveniDesc')}
                  </p>
                </div>

                <p>{t('history.riverDesc3')}</p>
              </div>
            </div>

            {/* Discovery of Shiva Lingam */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#C9A24D] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg font-bold" style={{fontFamily:'serif'}}>ॐ</span>
                </div>
                <h2 className="text-[1.6rem] text-[#1C1C1C]" style={{fontFamily:'Cinzel,serif'}}>{t('history.lingamTitle')}</h2>
              </div>
              <p className="text-[#3A3A3A] leading-[1.9] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                {t('history.lingamDesc')}
              </p>
            </div>

            {/* Architecture */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#C9A24D] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"/></svg>
                </div>
                <h2 className="text-[1.6rem] text-[#1C1C1C]" style={{fontFamily:'Cinzel,serif'}}>{t('history.archTitle')}</h2>
              </div>

              <div className="space-y-5 text-[#3A3A3A] leading-[1.9] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                <p>{t('history.archDesc')}</p>

                <div className="grid md:grid-cols-3 gap-4 my-8">
                  {[
                    { name: t('history.pallava'), sub: t('history.archInfluence') },
                    { name: t('history.chola'), sub: t('history.classicalStyle') },
                    { name: t('history.vijayanagara'), sub: t('history.laterAdditions') },
                  ].map((style) => (
                    <div key={style.name} className="bg-white p-5 rounded-xl text-center border border-[#C9A24D]/15 hover:border-[#C9A24D]/40 transition-colors">
                      <p className="text-[#1C1C1C] text-[1.1rem]" style={{fontFamily:'Cinzel,serif'}}>{style.name}</p>
                      <p className="text-[13px] text-[#6B6B6B] mt-1" style={{fontFamily:'Inter,sans-serif'}}>{style.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Shaiva Kshetras */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#C9A24D] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21"/></svg>
                </div>
                <h2 className="text-[1.6rem] text-[#1C1C1C]" style={{fontFamily:'Cinzel,serif'}}>{t('history.kshetrasTitle')}</h2>
              </div>

              <p className="text-[#3A3A3A] leading-[1.9] text-[16px] mb-6" style={{fontFamily:'EB Garamond,serif'}}>
                {t('history.kshetrasDesc')}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'Sri Agastheeswara Swamy', location: 'Thondavada' },
                  { name: 'Sri Parasareeswara', location: 'Yogimallavaram' },
                  { name: 'Sri Parasu Rameswara', location: 'Gudimallam' },
                  { name: 'Sri Kapileswara', location: 'Kapila Teertham, Tirupati' },
                  { name: 'Sri Kalahasteeswara', location: 'Srikalahasti' },
                ].map((temple) => (
                  <div key={temple.name} className="bg-white p-4 rounded-xl border border-[#C9A24D]/15">
                    <p className="font-medium text-[#1C1C1C]" style={{fontFamily:'Cinzel,serif', fontSize:'15px'}}>{temple.name}</p>
                    <p className="text-[13px] text-[#6B6B6B]" style={{fontFamily:'Inter,sans-serif'}}>{temple.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Festivals */}
            <div className="bg-[#F8F6F2] p-8 rounded-xl border border-[#C9A24D]/15 my-14">
              <h3 className="text-[1.4rem] text-[#1C1C1C] mb-6" style={{fontFamily:'Cinzel,serif'}}>{t('history.festivalsTitle')}</h3>
              <div className="space-y-4 text-[#3A3A3A] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                <p>{t('history.festivalsDesc')}</p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    'Maha Shivaratri', 'Pradosham', 'Karthika Masam',
                    'Ugadi', 'January 1st', 'All Karthika Mondays',
                  ].map((festival) => (
                    <li key={festival} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A24D] inline-block flex-shrink-0"></span>
                      {festival}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-5 bg-white rounded-xl border-l-3 border-[#C9A24D]">
                  <h4 className="text-[#1C1C1C] mb-2" style={{fontFamily:'Cinzel,serif', fontSize:'16px'}}>{t('history.annualFestival')}</h4>
                  <p className="text-[15px] text-[#3A3A3A]" style={{fontFamily:'EB Garamond,serif'}}>
                    {t('history.annualFestivalDesc')}<br />
                    <strong>{t('history.day1')}</strong> {t('history.day1Desc')}<br />
                    <strong>{t('history.day2')}</strong> {t('history.day2Desc')}<br />
                    <strong>{t('history.day3')}</strong> {t('history.day3Desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-14">
              <Link href="/management" className="btn-gold mr-4">{t('history.templeManagement')}</Link>
              <Link href="/about" className="btn-secondary">{t('history.aboutTemple')}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
