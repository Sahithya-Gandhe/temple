'use client'
import Image from 'next/image'
import Link from 'next/link'
import QRCodeImage from '@/components/QRCodeImage'
import { useTranslation } from '@/lib/LanguageContext'

export default function Home() {
  const { t } = useTranslation()
  return (
    <>
      {/* ═══════════ HERO SECTION ═══════════ */}
      <section className="relative h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/maingate.jpeg"
            alt="Sri Agastheeshwara Swamy Temple Entrance"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: 'center 35%' }}
            sizes="100vw"
          />
          {/* Subtle overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          {/* Sanskrit */}
          <p className="text-[#C9A24D] text-[15px] md:text-[17px] mb-6 tracking-[0.2em] fade-in" style={{ fontFamily: 'EB Garamond,serif' }}>
            {t('home.sanskrit')}
          </p>

          {/* Main Title */}
          <h1 className="text-[2rem] md:text-[3.5rem] lg:text-[3.2rem] mb-4 leading-[1.1] fade-in-delay-1 text-white" style={{ fontFamily: 'times new roman', fontWeight: 600, letterSpacing: '0.03em', textShadow: '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.4)' }}>
            Sri Agastheeshwara Swamy Temple
          </h1>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-6 fade-in-delay-2">
            <span className="block w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#C9A24D]/60" />
            <svg className="w-3.5 h-3.5 text-[#C9A24D]" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>
            <span className="block w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#C9A24D]/60" />
          </div>

          {/* Location */}
          <p className="text-[1.1rem] md:text-[1.3rem] text-white/90 mb-2 tracking-[0.15em] uppercase fade-in-delay-2" style={{ fontFamily: 'Cinzel,serif', fontWeight: 500 }}>
            {t('home.location')}
          </p>

          {/* Subtitle */}
          <p className="text-[1rem] md:text-[1.1rem] text-white/70 mb-10 max-w-xl mx-auto leading-relaxed fade-in-delay-2" style={{ fontFamily: 'EB Garamond,serif', fontStyle: 'italic' }}>
            {t('home.subtitle')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-delay-3">
            <Link href="/about" className="inline-flex items-center justify-center h-[50px] px-8 bg-[#C9A24D] text-white text-[13px] font-medium tracking-[0.08em] uppercase rounded-md hover:bg-[#D4B56A] hover:-translate-y-0.5 transition-all shadow-md" style={{ fontFamily: 'Cinzel,serif' }}>
              {t('home.ctaAbout')}
            </Link>
            <Link href="/donate" className="inline-flex items-center justify-center h-[50px] px-8 bg-[#C9A24D] text-white text-[13px] font-medium tracking-[0.08em] uppercase rounded-md hover:bg-[#D4B56A] hover:-translate-y-0.5 transition-all shadow-md" style={{ fontFamily: 'Cinzel,serif' }}>
              {t('home.ctaDonate')}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          <p className="text-white/60 text-[10px] uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter,sans-serif' }}>{t('home.scroll')}</p>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ═══════════ TEMPLE OVERVIEW ═══════════ */}
      <section className="section bg-[#FAF9F6]">
        <div className="container-temple">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="text-[#1C1C1C] uppercase tracking-[0.15em] text-[11px] mb-3 font-medium" style={{ fontFamily: 'Inter,sans-serif' }}>{t('home.sacredHeritage')}</p>
              <h2 className="text-[#1C1C1C] mb-6" style={{ fontFamily: 'Cinzel,serif' }}>
                {t('home.templeAntiquity')}
              </h2>
              <div className="space-y-4 text-[#5A5044] leading-[1.8] text-[16px]" style={{ fontFamily: 'EB Garamond,serif' }}>
                <p>
                  {t('home.templeDesc1')}
                </p>
                <p>
                  {t('home.templeDesc2p1')} <strong className="text-[#1C1C1C]">{t('home.templeDesc2name1')}</strong>{t('home.templeDesc2p2')} <strong className="text-[#1C1C1C]">{t('home.templeDesc2name2')}</strong>.
                </p>
                <p>
                  {t('home.templeDesc3p1')} <strong className="text-[#1C1C1C]">{t('home.templeDesc3name')}</strong>{t('home.templeDesc3p2')}
                </p>
              </div>
              <Link href="/history" className="inline-flex items-center gap-2 mt-6 text-[#1C1C1C] font-medium hover:text-[#4A3F35] transition-colors group text-[14px]" style={{ fontFamily: 'Inter,sans-serif' }}>
                {t('home.readFullHistory')}
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Images */}
            <div className="relative">
              <div className="relative h-[380px] md:h-[440px] w-full rounded-xl overflow-hidden shadow-premium border border-[#C9A24D]/10">
                <Image src="/assets/templeinfra1stpage.jpeg" alt="Temple Architecture" fill className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]" style={{ objectPosition: 'center 40%' }} sizes="(max-width: 768px) 100vw, 50vw" priority />
              </div>
              {/* Inset deity image */}
              <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-xl overflow-hidden shadow-premium-lg border-4 border-[#FAF9F6] hidden md:block">
                <Image src="/assets/godimage.jpeg" alt="Sri Agastheeshwara Swamy" fill className="object-cover" sizes="112px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ANNADANAM SECTION ═══════════ */}
      <section id="annadanam" className="section bg-[#F8F6F2]">
        <div className="container-temple">
          {/* Section header */}
          <div className="text-center mb-12">
            <p className="text-[#1C1C1C] uppercase tracking-[0.15em] text-[11px] mb-3 font-medium" style={{ fontFamily: 'Inter,sans-serif' }}>{t('home.sacredService')}</p>
            <h2 className="text-[1.8rem] md:text-[2.2rem] text-[#1C1C1C] mb-4" style={{ fontFamily: 'Cinzel,serif' }}>
              {t('home.annadanamSeva')}
            </h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="block w-10 h-[1px] bg-gradient-to-r from-transparent to-[#C9A24D]" />
              <svg className="w-3 h-3 text-[#C9A24D]" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>
              <span className="block w-10 h-[1px] bg-gradient-to-l from-transparent to-[#C9A24D]" />
            </div>
            <p className="text-[#6B6B6B] max-w-xl mx-auto text-[16px]" style={{ fontFamily: 'EB Garamond,serif' }}>
              <em>{t('home.annadanamQuote')}</em>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[400px] md:h-[480px] w-full rounded-xl overflow-hidden shadow-premium">
              <Image src="/assets/anadanamimage_forntpage.jpeg" alt="Annadanam Seva" fill className="object-cover transition-transform duration-700 hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[2.5rem] md:text-[3rem] leading-none" style={{ fontFamily: 'Cinzel,serif', fontWeight: 600 }}>300–400</p>
                <p className="text-[14px] text-white/70 mt-2" style={{ fontFamily: 'Inter,sans-serif' }}>{t('home.devoteesBlessed')}</p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-5">
              <div className="bg-white p-6 rounded-xl border-l-3 border-[#C9A24D] shadow-soft">
                <p className="text-[#3A3A3A] leading-[1.8] text-[16px]" style={{ fontFamily: 'EB Garamond,serif' }}>
                  {t('home.annadanamDesc')}
                </p>
              </div>

              <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[#C9A24D]/15 shadow-soft">
                <div className="w-12 h-12 bg-[#C9A24D] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
                </div>
                <div>
                  <p className="text-[#6B6B6B] text-[13px]" style={{ fontFamily: 'Inter,sans-serif' }}>{t('home.dailyServiceTime')}</p>
                  <p className="text-[1.5rem] text-[#1C1C1C]" style={{ fontFamily: 'Cinzel,serif' }}>12:30 PM</p>
                </div>
              </div>

              <p className="text-[#6B6B6B] text-[15px]" style={{ fontFamily: 'EB Garamond,serif' }}>
                {t('home.annadanamSponsor')}
              </p>

              {/* QR Section */}
              <div className="bg-white p-6 rounded-xl shadow-premium border border-[#C9A24D]/10 text-center">
                <div className="w-36 h-36 mx-auto bg-white rounded-lg mb-4 border border-[#C9A24D]/20 overflow-hidden">
                  <QRCodeImage size={144} className="object-contain w-full h-full p-2" />
                </div>
                <p className="text-[13px] text-[#6B6B6B] mb-4" style={{ fontFamily: 'EB Garamond,serif' }}>
                  {t('home.scanToContribute')}
                </p>
                <Link href="/donate" className="btn-gold">
                  {t('home.sponsorAnnadanam')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ HONOURABLE TRUSTEES ═══════════ */}
      <section className="section bg-[#FAF9F6]">
        <div className="container-temple">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-[#1C1C1C] uppercase tracking-[0.15em] text-[11px] mb-3 font-medium" style={{ fontFamily: 'Inter,sans-serif' }}>{t('home.stewardship')}</p>
            <h2 className="text-[1.8rem] md:text-[2.2rem] text-[#1C1C1C] mb-4" style={{ fontFamily: 'Cinzel,serif' }}>
              {t('home.honourableTrustees')}
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="block w-10 h-[1px] bg-gradient-to-r from-transparent to-[#C9A24D]" />
              <svg className="w-3 h-3 text-[#C9A24D]" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>
              <span className="block w-10 h-[1px] bg-gradient-to-l from-transparent to-[#C9A24D]" />
            </div>
          </div>

          {/* Group photo */}
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-premium-lg border border-[#C9A24D]/15">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/assets/honarablemention1IAS.jpeg"
                  alt="Honourable Temple Leadership"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                  sizes="(max-width: 768px) 100vw, 900px"
                />
              </div>
              {/* Bottom bar */}
              <div className="bg-[#4A3F35] p-6 text-center">
                <p className="text-white/90 text-[15px]" style={{ fontFamily: 'Cinzel,serif' }}>
                  {t('home.templeLeadership')}
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-[#3A3A3A] leading-[1.8] text-[16px]" style={{ fontFamily: 'EB Garamond,serif' }}>
              {t('home.trusteeDesc')}
            </p>
            <Link href="/management" className="inline-flex items-center gap-2 mt-6 text-[#C9A24D] hover:text-[#4A3F35] transition-colors group text-[14px]" style={{ fontFamily: 'Inter,sans-serif' }}>
              {t('home.learnMoreManagement')}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ GALLERY PREVIEW ═══════════ */}
      <section className="section bg-[#F8F6F2]">
        <div className="container-temple">
          <div className="text-center mb-12">
            <p className="text-[#1C1C1C] uppercase tracking-[0.15em] text-[11px] mb-3 font-medium" style={{ fontFamily: 'Inter,sans-serif' }}>{t('home.visualJourney')}</p>
            <h2 className="text-[1.8rem] md:text-[2.2rem] text-[#1C1C1C] mb-4" style={{ fontFamily: 'Cinzel,serif' }}>
              {t('home.templeGallery')}
            </h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="block w-10 h-[1px] bg-gradient-to-r from-transparent to-[#C9A24D]" />
              <svg className="w-3 h-3 text-[#C9A24D]" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>
              <span className="block w-10 h-[1px] bg-gradient-to-l from-transparent to-[#C9A24D]" />
            </div>
            <p className="text-[#6B6B6B] max-w-xl mx-auto text-[16px]" style={{ fontFamily: 'EB Garamond,serif' }}>
              {t('home.galleryDesc')}
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { src: '/assets/templemain.jpeg', alt: 'Temple Main View', span: 'md:col-span-2 md:row-span-2' },
              { src: '/assets/realidol1.jpeg', alt: 'Divine Idol', span: '' },
              { src: '/assets/realidol2.jpeg', alt: 'Sacred Shrine', span: '' },
              { src: '/assets/godimage.jpeg', alt: 'Sri Agastheeshwara Swamy', span: '' },
              { src: '/assets/templeinfra1stpage.jpeg', alt: 'Temple Architecture', span: '' },
            ].map((image, index) => (
              <div key={index} className={`relative ${image.span ? image.span : ''} ${image.span ? 'aspect-[4/3]' : 'aspect-square'} rounded-xl overflow-hidden shadow-soft group cursor-pointer border border-[#C9A24D]/10`}>
                <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-600 group-hover:scale-[1.02]" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                  <p className="text-white text-[14px]" style={{ fontFamily: 'Cinzel,serif' }}>{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/gallery" className="btn-secondary">{t('home.viewFullGallery')}</Link>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/assets/templemain.jpeg" alt="Temple Background" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[#4A3F35]/90" />
        </div>

        <div className="relative z-10 container-temple text-center text-white">
          <p className="text-[#C9A24D] tracking-[0.15em] text-[11px] mb-4 font-medium" style={{ fontFamily: 'Inter,sans-serif' }}>{t('home.planYourVisit')}</p>
          <h2 className="text-[1.8rem] md:text-[2.2rem] mb-5 text-white" style={{ fontFamily: 'Cinzel,serif' }}>
            {t('home.visitSacredAbode')}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 text-[16px] leading-relaxed" style={{ fontFamily: 'EB Garamond,serif' }}>
            {t('home.visitDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/location" className="inline-flex items-center justify-center h-[50px] px-8 bg-[#C9A24D] text-white text-[13px] font-medium tracking-[0.08em] uppercase rounded-md hover:bg-[#D4B56A] hover:-translate-y-0.5 transition-all shadow-md" style={{ fontFamily: 'Cinzel,serif' }}>{t('home.howToReach')}</Link>
            <Link href="/contact" className="inline-flex items-center justify-center h-[50px] px-8 bg-[#C9A24D] text-white text-[13px] font-medium tracking-[0.08em] uppercase rounded-md hover:bg-[#D4B56A] hover:-translate-y-0.5 transition-all shadow-md" style={{ fontFamily: 'Cinzel,serif' }}>{t('home.contactUs')}</Link>
          </div>
        </div>
      </section>
    </>
  )
}
