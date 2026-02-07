'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/lib/LanguageContext'

export default function ContactContent() {
  const { t } = useTranslation()

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/assets/templeinfra1stpage.jpeg" alt="Contact Temple" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#4A3F35]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[#FFD700] text-[13px] tracking-[0.15em] uppercase mb-3" style={{fontFamily:'Inter,sans-serif', textShadow: '0 0 20px rgba(255,215,0,0.7)', fontWeight:600}}>{t('contact.getInTouch')}</p>
          <h1 className="text-[2.2rem] md:text-[3rem] mb-4" style={{fontFamily:'Cinzel,serif', fontWeight:600, textShadow: '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.4)', color:'#FFFFFF'}}>{t('contact.title')}</h1>
          <p className="text-white/90 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>{t('contact.subtitle')}</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-[#FAF9F6]">
        <div className="container-temple">
          <div className="max-w-4xl mx-auto">

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-14">
              {/* Email Contacts */}
              <div className="bg-white p-8 rounded-xl border border-[#C9A24D]/15 shadow-soft hover:shadow-premium transition-shadow">
                <div className="w-14 h-14 bg-[#C9A24D] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>
                </div>
                <h3 className="text-[1.2rem] text-[#1C1C1C] mb-4" style={{fontFamily:'Cinzel,serif'}}>{t('contact.email')}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[12px] text-[#6B6B6B] mb-1" style={{fontFamily:'Inter,sans-serif'}}>{t('contact.templeTrustee')}</p>
                    <a href="mailto:trustee@agastheeshwaradevasthanam.in" className="text-[#C9A24D] hover:text-[#4A3F35] transition-colors font-medium text-[14px]" style={{fontFamily:'Inter,sans-serif'}}>
                      trustee@agastheeshwaradevasthanam.in
                    </a>
                  </div>
                  <div>
                    <p className="text-[12px] text-[#6B6B6B] mb-1" style={{fontFamily:'Inter,sans-serif'}}>{t('contact.generalInquiries')}</p>
                    <a href="mailto:contact@agastheeshwaradevasthanam.in" className="text-[#C9A24D] hover:text-[#4A3F35] transition-colors font-medium text-[14px]" style={{fontFamily:'Inter,sans-serif'}}>
                      contact@agastheeshwaradevasthanam.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white p-8 rounded-xl border border-[#C9A24D]/15 shadow-soft hover:shadow-premium transition-shadow">
                <div className="w-14 h-14 bg-[#C9A24D] rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>
                </div>
                <h3 className="text-[1.2rem] text-[#1C1C1C] mb-4" style={{fontFamily:'Cinzel,serif'}}>{t('contact.templeAddress')}</h3>
                <p className="text-[#3A3A3A] leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                  Sri Agastheeshwara Swamy Temple<br />
                  Thondavada, Chandragiri Mandal<br />
                  Tirupati District<br />
                  Andhra Pradesh, India
                </p>
                <Link href="/location" className="inline-flex items-center gap-2 mt-4 text-[#C9A24D] hover:text-[#4A3F35] transition-colors text-[14px] font-medium group" style={{fontFamily:'Inter,sans-serif'}}>
                  {t('contact.viewOnMap')}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-premium border border-[#C9A24D]/10 mb-14">
              <h3 className="text-[1.4rem] text-[#1C1C1C] mb-8 text-center" style={{fontFamily:'Cinzel,serif'}}>{t('contact.sendMessage')}</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-medium text-[#3A3A3A] mb-2" style={{fontFamily:'Inter,sans-serif'}}>
                      {t('contact.yourName')} <span className="text-[#C9A24D]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-[#C9A24D]/20 rounded-lg focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition-colors bg-[#FAF9F6]"
                      style={{fontFamily:'EB Garamond,serif', fontSize:'16px'}}
                      placeholder={t('contact.enterName')}
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-[#3A3A3A] mb-2" style={{fontFamily:'Inter,sans-serif'}}>
                      {t('contact.emailAddress')} <span className="text-[#C9A24D]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-[#C9A24D]/20 rounded-lg focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition-colors bg-[#FAF9F6]"
                      style={{fontFamily:'EB Garamond,serif', fontSize:'16px'}}
                      placeholder={t('contact.enterEmail')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#3A3A3A] mb-2" style={{fontFamily:'Inter,sans-serif'}}>
                    {t('contact.phoneNumber')}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-[#C9A24D]/20 rounded-lg focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition-colors bg-[#FAF9F6]"
                    style={{fontFamily:'EB Garamond,serif', fontSize:'16px'}}
                    placeholder={t('contact.enterPhone')}
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#3A3A3A] mb-2" style={{fontFamily:'Inter,sans-serif'}}>
                    {t('contact.subject')} <span className="text-[#C9A24D]">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-[#C9A24D]/20 rounded-lg focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition-colors bg-[#FAF9F6]"
                    style={{fontFamily:'EB Garamond,serif', fontSize:'16px'}}
                  >
                    <option value="">{t('contact.selectSubject')}</option>
                    <option value="general">{t('contact.generalInquiry')}</option>
                    <option value="donation">{t('contact.donationInquiry')}</option>
                    <option value="visit">{t('contact.visitPlanning')}</option>
                    <option value="seva">{t('contact.sevaBooking')}</option>
                    <option value="other">{t('contact.other')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#3A3A3A] mb-2" style={{fontFamily:'Inter,sans-serif'}}>
                    {t('contact.yourMessage')} <span className="text-[#C9A24D]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-[#C9A24D]/20 rounded-lg focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition-colors resize-none bg-[#FAF9F6]"
                    style={{fontFamily:'EB Garamond,serif', fontSize:'16px'}}
                    placeholder={t('contact.writeMessage')}
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn-gold px-12">
                    {t('contact.sendBtn')}
                  </button>
                </div>
              </form>

              <p className="text-center text-[13px] text-[#6B6B6B] mt-6" style={{fontFamily:'Inter,sans-serif'}}>
                {t('contact.responseTime')}
              </p>
            </div>

            {/* Additional Info */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                  { icon: 'clock', titleKey: 'contact.templeHours', descKey: 'contact.templeHoursDesc' },
                  { icon: 'bowl', titleKey: 'contact.annadanam', descKey: 'contact.annadanamTime' },
                  { icon: 'share', titleKey: 'contact.followUs', descKey: 'contact.followUsDesc' },
                ].map((item) => (
                  <div key={item.titleKey} className="text-center p-7 bg-[#F8F6F2] rounded-xl border border-[#C9A24D]/10 hover:shadow-soft transition-all duration-300">
                    <div className="w-14 h-14 mx-auto mb-4 bg-[#4A3F35] rounded-full flex items-center justify-center">
                      {item.icon === 'clock' && <svg className="w-6 h-6 text-[#C9A24D]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>}
                      {item.icon === 'bowl' && <svg className="w-6 h-6 text-[#C9A24D]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/></svg>}
                      {item.icon === 'share' && <svg className="w-6 h-6 text-[#C9A24D]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/></svg>}
                    </div>
                  <h4 className="text-[#1C1C1C] mb-2" style={{fontFamily:'Cinzel,serif', fontSize:'16px'}}>{t(item.titleKey)}</h4>
                  <p className="text-[14px] text-[#6B6B6B] whitespace-pre-line" style={{fontFamily:'EB Garamond,serif'}}>
                    {t(item.descKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
