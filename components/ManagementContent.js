'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/lib/LanguageContext'

export default function ManagementContent() {
  const { t } = useTranslation()

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/assets/templeinfra1stpage.jpeg" alt="Temple Management" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#4A3F35]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[#FFD700] text-[13px] tracking-[0.15em] uppercase mb-3" style={{fontFamily:'Inter,sans-serif', textShadow: '0 0 20px rgba(255,215,0,0.7)', fontWeight:600}}>{t('management.stewardship')}</p>
          <h1 className="text-[2.2rem] md:text-[3rem] mb-4" style={{fontFamily:'Cinzel,serif', fontWeight:600, textShadow: '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.4)', color:'#FFFFFF'}}>{t('management.title')}</h1>
          <p className="text-white/80 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>{t('management.subtitle')}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-[#FAF9F6]">
        <div className="container-temple">
          <div className="max-w-4xl mx-auto">

            {/* History of Trusteeship */}
            <div className="text-center mb-14">
              <p className="text-[16px] text-[#6B6B6B] leading-[1.9]" style={{fontFamily:'EB Garamond,serif'}}>
                {t('management.introDesc')}
              </p>
            </div>

            {/* Group photo of all trustees */}
            <div className="mb-16">
              <h2 className="text-[1.8rem] text-[#1C1C1C] text-center mb-10" style={{fontFamily:'Cinzel,serif'}}>
                {t('management.honourableTrustees')}
              </h2>

              <div className="max-w-3xl mx-auto mb-12">
                <div className="relative rounded-xl overflow-hidden shadow-premium border border-[#4A3F35]/20">
                  <div className="relative aspect-[4/3] md:aspect-[16/10]">
                    <Image
                      src="/assets/honarablemention1IAS.jpeg"
                      alt="Honourable Trustees"
                      fill
                      className="object-cover object-center"
                      style={{ objectPosition: 'center 35%' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="bg-[#4A3F35] p-5 text-center">
                    <p className="text-[#1C1C1C] text-[12px] tracking-[0.15em] uppercase mb-2" style={{fontFamily:'Inter,sans-serif'}}>{t('management.trusteesCaption')}</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5">
                      <p className="text-white text-[15px]" style={{fontFamily:'Cinzel,serif'}}>Sri M. Sundara Rami Reddy</p>
                      <span className="text-[#C9A24D] hidden md:inline">·</span>
                      <p className="text-white text-[15px]" style={{fontFamily:'Cinzel,serif'}}>Sri M. Raghu Rami Reddy</p>
                      <span className="text-[#C9A24D] hidden md:inline">·</span>
                      <p className="text-white text-[15px]" style={{fontFamily:'Cinzel,serif'}}>Sri M. Chandramouli Reddy IAS</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed cards */}
              <div className="space-y-8">
                {[
                  { nameKey: 'management.trustee1Name', roleKey: 'management.trustee1Role', descKey: 'management.trustee1Desc' },
                  { nameKey: 'management.trustee2Name', roleKey: 'management.trustee2Role', descKey: 'management.trustee2Desc' },
                  { nameKey: 'management.trustee3Name', roleKey: 'management.trustee3Role', descKey: 'management.trustee3Desc' },
                ].map((trustee) => (
                  <div key={trustee.nameKey} className="bg-white p-8 rounded-xl border border-[#C9A24D]/20">
                    <div className="text-center md:text-left">
                      <h3 className="text-[1.4rem] text-[#1C1C1C] mb-2" style={{fontFamily:'Cinzel,serif'}}>
                        {t(trustee.nameKey)}
                      </h3>
                      <p className="text-[#6B6B6B] font-medium text-[14px] mb-4" style={{fontFamily:'Inter,sans-serif'}}>{t(trustee.roleKey)}</p>
                      <p className="text-[#6B6B6B] leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                        {t(trustee.descKey)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legacy */}
            <div className="bg-[#4A3F35] p-8 md:p-12 rounded-xl text-white text-center shadow-premium">
              <h3 className="text-[1.5rem] mb-6 text-[#1C1C1C]" style={{fontFamily:'Cinzel,serif'}}>{t('management.legacyTitle')}</h3>
              <p className="text-white/90 leading-[1.85] max-w-2xl mx-auto text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                {t('management.legacyDesc')}
              </p>
            </div>

            {/* Temple Name */}
            <div className="my-12 text-center">
              <p className="text-[#6B6B6B] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                {t('management.templeAlsoKnown')}
              </p>
            </div>

            {/* CTA */}
            <div className="text-center mt-14">
              <Link href="/contact" className="btn-gold mr-4">{t('management.contactTrustees')}</Link>
              <Link href="/donate" className="btn-secondary">{t('management.supportTemple')}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
