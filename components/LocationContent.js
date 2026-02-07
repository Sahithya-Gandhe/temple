'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/lib/LanguageContext'

export default function LocationContent() {
  const { t } = useTranslation()

  const nearbyPlaces = [
    {
      name: 'Regional Science Centre',
      desc: 'Educational attraction with interactive exhibits',
      distance: '10 km',
      mapUrl: 'https://maps.google.com/?cid=3795904360407788402&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ'
    },
    {
      name: 'Sri Venkateswara Zoological Park',
      desc: 'Wildlife sanctuary with diverse flora and fauna',
      distance: '12 km',
      mapUrl: 'https://maps.google.com/?cid=15452062591469603799&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ'
    },
    {
      name: 'Tirupati (Tirumala)',
      desc: 'Sri Venkateswara Temple - Sacred Hilltop Shrine',
      distance: '30 km',
      mapUrl: 'https://maps.google.com/?cid=4646026778716437810&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ'
    },
  ]

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/assets/maingate.jpeg" alt="Temple Location" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#4A3F35]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[#FFD700] text-[13px] tracking-[0.15em] uppercase mb-3" style={{ fontFamily: 'Inter,sans-serif', textShadow: '0 0 20px rgba(255,215,0,0.7)', fontWeight:600 }}>{t('location.planYourVisit')}</p>
          <h1 className="text-[2.2rem] md:text-[3rem] mb-4" style={{ fontFamily: 'Cinzel,serif', fontWeight: 600, textShadow: '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.4)', color:'#FFFFFF' }}>{t('location.title')}</h1>
          <p className="text-white/80 text-[16px]" style={{ fontFamily: 'EB Garamond,serif' }}>{t('location.subtitle')}</p>
        </div>
      </section>

      {/* Location Details */}
      <section className="section bg-[#FAF9F6]">
        <div className="container-temple">
          <div className="max-w-4xl mx-auto">

            {/* Address Card */}
            <div className="bg-[#F8F6F2] p-8 rounded-xl mb-14 text-center border border-[#C9A24D]/20">
              <h2 className="text-[1.5rem] text-[#C9A24D] mb-4" style={{ fontFamily: 'Cinzel,serif' }}>{t('location.templeAddress')}</h2>
              <p className="text-[1.15rem] text-[#4A3F35] mb-2" style={{ fontFamily: 'EB Garamond,serif' }}>
                {t('location.addressLine1')}
              </p>
              <p className="text-[#6B6B6B] text-[16px]" style={{ fontFamily: 'EB Garamond,serif' }}>
                {t('location.addressLine2')}<br />
                {t('location.addressLine3')}<br />
                {t('location.addressLine4')}
              </p>
            </div>

            {/* Map Embed */}
            <div className="mb-14">
              <div className="aspect-video rounded-xl overflow-hidden shadow-premium border border-[#C9A24D]/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.8!2d79.3!3d13.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sThondavada%2C%20Chandragiri!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Temple Location Map"
                ></iframe>
              </div>
              <p className="text-center text-[13px] text-[#6B6B6B] mt-4" style={{ fontFamily: 'Inter,sans-serif' }}>
                {t('location.mapNote')}
              </p>
            </div>

            {/* Distance Information */}
            <div className="max-w-lg mx-auto mb-14">
              <div className="bg-gradient-to-br from-[#C9A24D] to-[#4A3F35] p-8 rounded-xl text-white shadow-premium">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-white/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-[#D4B56A]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21"/></svg>
                  </div>
                  <div>
                    <p className="text-white/70 text-[14px] mb-1" style={{ fontFamily: 'Inter,sans-serif' }}>{t('location.nearFort')}</p>
                    <p className="text-[2rem] text-[#D4B56A] font-bold" style={{ fontFamily: 'Cinzel,serif' }}>{t('location.fortDistance')}</p>
                    <p className="text-white/60 text-[13px] mt-1" style={{ fontFamily: 'EB Garamond,serif' }}>
                      {t('location.highwayNote')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Route */}
            <div className="mb-14">
              <h3 className="text-[1.5rem] text-[#C9A24D] mb-6" style={{ fontFamily: 'Cinzel,serif' }}>{t('location.route')}</h3>
              <div className="bg-[#F8F6F2] p-6 rounded-xl border-l-3 border-[#4A3F35]">
                <p className="text-[#4A3F35] leading-[1.85] text-[16px]" style={{ fontFamily: 'EB Garamond,serif' }}>
                  {t('location.routeDesc')}
                </p>
              </div>
            </div>

            {/* Transport Options */}
            <div className="mb-14">
              <h3 className="text-[1.5rem] text-[#C9A24D] mb-6" style={{ fontFamily: 'Cinzel,serif' }}>{t('location.transportOptions')}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: 'TTD Local Buses', desc: 'Regular service from Tirupati' },
                  { name: 'APSRTC Buses', desc: 'State transport buses' },
                  { name: 'AP Tourism Buses', desc: 'Tourist buses available' },
                  { name: 'Town Service Buses', desc: 'Chandragiri\u2013Tirupati route' },
                  { name: 'Auto-rickshaws', desc: 'Available from Tirupati' },
                  { name: 'Private Vehicle', desc: 'Parking available at temple' },
                ].map((transport) => (
                  <div key={transport.name} className="bg-white p-4 rounded-xl border border-[#C9A24D]/15 flex items-start gap-3 hover:shadow-md transition-all duration-300">
                    <div className="w-8 h-8 rounded-full bg-[#C9A24D]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-[#C9A24D]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>
                    </div>
                    <div>
                      <p className="font-medium text-[#C9A24D] text-[14px]" style={{ fontFamily: 'Inter,sans-serif' }}>{transport.name}</p>
                      <p className="text-[13px] text-[#6B6B6B]" style={{ fontFamily: 'Inter,sans-serif' }}>{transport.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Places */}
            <div className="mb-14">
              <h3 className="text-[1.5rem] text-[#C9A24D] mb-6" style={{ fontFamily: 'Cinzel,serif' }}>{t('location.nearbyPlaces')}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {nearbyPlaces.map((place) => (
                  <a
                    key={place.name}
                    href={place.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F8F6F2] p-5 rounded-xl border border-[#C9A24D]/15 hover:shadow-lg hover:border-[#4A3F35]/40 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <p className="font-semibold text-[#C9A24D] text-[15px] group-hover:text-[#D4B56A] transition-colors flex items-center gap-2" style={{ fontFamily: 'Cinzel,serif' }}>
                        {place.name}
                        <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </p>
                      <span className="text-[14px] text-[#4A3F35] font-bold ml-3 flex-shrink-0" style={{ fontFamily: 'Inter,sans-serif' }}>{place.distance}</span>
                    </div>
                    <p className="text-[13px] text-[#6B6B6B] mb-2" style={{ fontFamily: 'Inter,sans-serif' }}>{place.desc}</p>
                    <p className="text-[11px] text-[#4A3F35] font-medium flex items-center gap-1" style={{ fontFamily: 'Inter,sans-serif' }}>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {t('location.openInMaps')}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            {/* Geographic Setting */}
            <div className="bg-gradient-to-r from-[#C9A24D] to-[#4A3F35] p-8 rounded-xl text-white mb-14 shadow-premium">
              <h3 className="text-[1.2rem] mb-4 text-[#D4B56A]" style={{ fontFamily: 'Cinzel,serif' }}>{t('location.sacredGeography')}</h3>
              <p className="text-white/90 leading-[1.85] text-[16px]" style={{ fontFamily: 'EB Garamond,serif' }}>
                {t('location.geoDesc')}
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link href="/contact" className="btn-gold mr-4">{t('location.contactTemple')}</Link>
              <Link href="/about" className="btn-secondary">{t('location.aboutTemple')}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
