'use client'
import Image from 'next/image'
import Link from 'next/link'
import QRCodeImage from '@/components/QRCodeImage'
import { useTranslation } from '@/lib/LanguageContext'

export default function DonateContent() {
  const { t } = useTranslation()

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/assets/anadanamimage_forntpage.jpeg" alt="Annadanam Seva" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#4A3F35]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[#FFD700] text-[13px] tracking-[0.15em] uppercase mb-3" style={{fontFamily:'Inter,sans-serif', textShadow: '0 0 20px rgba(255,215,0,0.7)', fontWeight:600}}>{t('donate.sacredService')}</p>
          <h1 className="text-[2.2rem] md:text-[3rem] mb-4" style={{fontFamily:'Cinzel,serif', fontWeight:600, textShadow: '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.4)', color:'#FFFFFF'}}>{t('donate.title')}</h1>
          <p className="text-white/80 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>{t('donate.subtitle')}</p>
        </div>
      </section>

      {/* Annadanam Section */}
      <section id="annadanam" className="section bg-[#FAF9F6]">
        <div className="container-temple">
          <div className="max-w-4xl mx-auto">

            {/* Sacred Quote */}
            <div className="text-center mb-14">
              <p className="text-[2rem] text-[#1C1C1C] mb-4" style={{fontFamily:'Cinzel,serif'}}>
                {t('donate.sacredQuoteSanskrit')}
              </p>
              <p className="text-[1.1rem] text-[#6B6B6B]" style={{fontFamily:'EB Garamond,serif'}}>
                {t('donate.sacredQuoteEnglish')}
              </p>
            </div>

            {/* Annadanam Details */}
            <div className="bg-[#F8F6F2] p-8 md:p-12 rounded-xl mb-14 border border-[#C9A24D]/20">
              <h2 className="text-[1.5rem] text-[#1C1C1C] mb-6" style={{fontFamily:'Cinzel,serif'}}>{t('donate.annadanamSeva')}</h2>

              <div className="space-y-4 text-[#6B6B6B] leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                <p>{t('donate.annadanamDesc1')}</p>
                <p>{t('donate.annadanamDesc2')}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl border border-[#C9A24D]/15 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-13 h-13 bg-[#4A3F35] rounded-full flex items-center justify-center flex-shrink-0 shadow-md w-12 h-12">
                      <svg className="w-5 h-5 text-[#C9A24D]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#1C1C1C] text-[14px]" style={{fontFamily:'Inter,sans-serif'}}>{t('donate.dailyServiceTime')}</p>
                      <p className="text-[1.6rem] text-[#4A3F35]" style={{fontFamily:'Cinzel,serif'}}>12:30 PM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-[#C9A24D]/15 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#4A3F35] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <svg className="w-5 h-5 text-[#C9A24D]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/></svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#1C1C1C] text-[14px]" style={{fontFamily:'Inter,sans-serif'}}>{t('donate.devoteesServed')}</p>
                      <p className="text-[1.6rem] text-[#4A3F35]" style={{fontFamily:'Cinzel,serif'}}>{t('donate.devoteesCount')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sponsor Information */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
              <div>
                <h3 className="text-[1.5rem] text-[#1C1C1C] mb-4" style={{fontFamily:'Cinzel,serif'}}>{t('donate.sponsorTitle')}</h3>
                <div className="space-y-4 text-[#6B6B6B] leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                  <p>{t('donate.sponsorDesc1')}</p>
                  <p>
                    {t('donate.sponsorDesc2p1')}
                    <strong className="text-[#1C1C1C]"> {t('donate.sponsorDesc2name')}</strong> {t('donate.sponsorDesc2p2')}
                  </p>
                  <p className="text-[14px] text-[#6B6B6B]">
                    {t('donate.sponsorDesc3')}
                  </p>
                </div>
              </div>

              {/* QR Code */}
              <div className="bg-white p-8 rounded-xl shadow-premium border border-[#C9A24D]/20 text-center">
                <h4 className="text-[1.1rem] text-[#1C1C1C] mb-5" style={{fontFamily:'Cinzel,serif'}}>{t('donate.onlineDonation')}</h4>
                <div className="w-48 h-48 mx-auto bg-white rounded-xl mb-5 border-2 border-[#4A3F35]/40 overflow-hidden shadow-md">
                  <QRCodeImage size={192} className="object-contain w-full h-full p-2" />
                </div>
                <p className="text-[14px] text-[#6B6B6B] mb-1" style={{fontFamily:'EB Garamond,serif'}}>
                  {t('donate.scanToContribute')}
                </p>
              </div>
            </div>

            {/* Divine Blessing */}
            <div className="bg-[#4A3F35] p-8 rounded-xl text-center mb-14 shadow-premium">
              <p className="text-[16px] leading-[1.85] italic text-[#C9A24D]" style={{fontFamily:'EB Garamond,serif'}}>
                {t('donate.divineBlessing')}
              </p>
            </div>

            {/* Other Ways to Donate */}
            <div className="mb-14">
              <h3 className="text-[1.5rem] text-[#C9A24D] mb-8 text-center" style={{fontFamily:'Cinzel,serif'}}>
                {t('donate.otherWays')}
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: 'lamp', titleKey: 'donate.abhishekam', descKey: 'donate.abhishekamDesc' },
                  { icon: 'temple', titleKey: 'donate.templeDev', descKey: 'donate.templeDevDesc' },
                  { icon: 'sparkle', titleKey: 'donate.festivalSponsorship', descKey: 'donate.festivalDesc' },
                ].map((item) => (
                  <div key={item.titleKey} className="bg-[#F8F6F2] p-7 rounded-xl text-center border border-[#C9A24D]/15 hover:shadow-lg transition-all duration-300">
                    <div className="w-14 h-14 mx-auto mb-4 bg-[#4A3F35] rounded-full flex items-center justify-center">
                      {item.icon === 'lamp' && <svg className="w-6 h-6 text-[#C9A24D]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"/></svg>}
                      {item.icon === 'temple' && <svg className="w-6 h-6 text-[#C9A24D]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"/></svg>}
                      {item.icon === 'sparkle' && <svg className="w-6 h-6 text-[#C9A24D]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"/></svg>}
                    </div>
                    <h4 className="text-[#1C1C1C] mb-2" style={{fontFamily:'Cinzel,serif', fontSize:'16px'}}>{t(item.titleKey)}</h4>
                    <p className="text-[14px] text-[#6B6B6B]" style={{fontFamily:'EB Garamond,serif'}}>{t(item.descKey)}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact for Donations */}
            <div className="bg-[#F8F6F2] p-8 rounded-xl text-center border border-[#C9A24D]/20">
              <h4 className="text-[1.2rem] text-[#1C1C1C] mb-4" style={{fontFamily:'Cinzel,serif'}}>{t('donate.contactForDonations')}</h4>
              <p className="text-[#6B6B6B] mb-5 text-[15px]" style={{fontFamily:'EB Garamond,serif'}}>
                {t('donate.contactForDonationsDesc')}
              </p>
              <div className="space-y-2 mb-6">
                <p>
                  <a href="mailto:trustee@agastheeshwaradevasthanam.in" className="text-[#C9A24D] hover:text-[#D4B56A] transition-colors" style={{fontFamily:'Inter,sans-serif', fontSize:'14px'}}>
                    trustee@agastheeshwaradevasthanam.in
                  </a>
                </p>
                <p>
                  <a href="mailto:contact@agastheeshwaradevasthanam.in" className="text-[#C9A24D] hover:text-[#D4B56A] transition-colors" style={{fontFamily:'Inter,sans-serif', fontSize:'14px'}}>
                    contact@agastheeshwaradevasthanam.in
                  </a>
                </p>
              </div>
              <Link href="/contact" className="btn-gold">{t('donate.contactTemple')}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
