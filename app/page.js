import Image from 'next/image'
import Link from 'next/link'
import QRCodeImage from '@/components/QRCodeImage'

export default function Home() {
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
          />
          {/* Subtle overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          {/* Sanskrit */}
          <p className="text-[#C9A24D] text-[15px] md:text-[17px] mb-6 tracking-[0.2em] fade-in" style={{ fontFamily: 'EB Garamond,serif' }}>
            ॥ ॐ नमः शिवाय ॥
          </p>

          {/* Main Title */}
          <h1 className="text-[2rem] md:text-[3.5rem] lg:text-[3.2rem] mb-4 leading-[1.1] fade-in-delay-1 text-white" style={{ fontFamily: 'times new roman', fontWeight: 600, letterSpacing: '0.03em', textShadow: '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.4)' }}>
            Sri Agastheeshwara Swamy Temple
          </h1>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 my-6 fade-in-delay-2">
            <span className="block w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-[#C9A24D]/60" />
            <span className="text-[#C9A24D] text-lg">❖</span>
            <span className="block w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-[#C9A24D]/60" />
          </div>

          {/* Location */}
          <p className="text-[1.1rem] md:text-[1.3rem] text-white/90 mb-2 tracking-[0.15em] uppercase fade-in-delay-2" style={{ fontFamily: 'Cinzel,serif', fontWeight: 500 }}>
            Thondavada
          </p>

          {/* Subtitle */}
          <p className="text-[1rem] md:text-[1.1rem] text-white/70 mb-10 max-w-xl mx-auto leading-relaxed fade-in-delay-2" style={{ fontFamily: 'EB Garamond,serif', fontStyle: 'italic' }}>
            A Sacred Shaiva Kshetram on the Banks of the Swarnamukhi River
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-delay-3">
            <Link href="/about" className="inline-flex items-center justify-center h-[50px] px-8 bg-[#C9A24D] text-white text-[13px] font-medium tracking-[0.08em] uppercase rounded-md hover:bg-[#D4B56A] hover:-translate-y-0.5 transition-all shadow-md" style={{ fontFamily: 'Cinzel,serif' }}>
              About the Temple
            </Link>
            <Link href="/donate" className="inline-flex items-center justify-center h-[50px] px-8 bg-[#C9A24D] text-white text-[13px] font-medium tracking-[0.08em] uppercase rounded-md hover:bg-[#D4B56A] hover:-translate-y-0.5 transition-all shadow-md" style={{ fontFamily: 'Cinzel,serif' }}>
              Annadanam & Donate
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
          <p className="text-white/60 text-[10px] uppercase tracking-[0.2em]" style={{ fontFamily: 'Inter,sans-serif' }}>Scroll</p>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ═══════════ TEMPLE OVERVIEW ═══════════ */}
      <section className="section bg-[#FAF9F6]">
        <div className="container-temple">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="text-[#1C1C1C] uppercase tracking-[0.15em] text-[11px] mb-3 font-medium" style={{ fontFamily: 'Inter,sans-serif' }}>Sacred Heritage</p>
              <h2 className="text-[#1C1C1C] mb-6" style={{ fontFamily: 'Cinzel,serif' }}>
                A Temple of Great Antiquity
              </h2>
              <div className="space-y-4 text-[#5A5044] leading-[1.8] text-[16px]" style={{ fontFamily: 'EB Garamond,serif' }}>
                <p>
                  Sri Agastheeshwara Swamy Temple, Thondavada, is one of the most ancient and spiritually
                  significant Shaiva temples in Andhra Pradesh. The temple is situated on the northern bank
                  of the sacred Swarnamukhi River, at the foothills of the Tirumala Hills.
                </p>
                <p>
                  The presiding deity is Lord Shiva worshipped as <strong className="text-[#1C1C1C]">Sri Agastheeshwara Swamy</strong>,
                  with Goddess Parvati Devi revered as <strong className="text-[#1C1C1C]">Sri Anandavalli Ammavaru</strong>.
                </p>
                <p>
                  This sacred site was once the hermitage of the great <strong className="text-[#1C1C1C]">Sage Agastya Maharshi</strong>,
                  one of the revered Saptarishis, who performed intense penance here for the welfare of humanity.
                </p>
              </div>
              <Link href="/history" className="inline-flex items-center gap-2 mt-6 text-[#1C1C1C] font-medium hover:text-[#4A3F35] transition-colors group text-[14px]" style={{ fontFamily: 'Inter,sans-serif' }}>
                Read Full History
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
            <p className="text-[#1C1C1C] uppercase tracking-[0.15em] text-[11px] mb-3 font-medium" style={{ fontFamily: 'Inter,sans-serif' }}>Sacred Service</p>
            <h2 className="text-[1.8rem] md:text-[2.2rem] text-[#1C1C1C] mb-4" style={{ fontFamily: 'Cinzel,serif' }}>
              Annadanam Seva
            </h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="block w-10 h-[1px] bg-gradient-to-r from-transparent to-[#C9A24D]" />
              <span className="text-[#C9A24D] text-sm">❖</span>
              <span className="block w-10 h-[1px] bg-gradient-to-l from-transparent to-[#C9A24D]" />
            </div>
            <p className="text-[#6B6B6B] max-w-xl mx-auto text-[16px]" style={{ fontFamily: 'EB Garamond,serif' }}>
              <em>"Annam Parabrahma Swaroopam"</em> — Food is a divine form of the Supreme
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[400px] md:h-[480px] w-full rounded-xl overflow-hidden shadow-premium">
              <Image src="/assets/anadanamimage_forntpage.jpeg" alt="Annadanam Seva" fill className="object-cover transition-transform duration-700 hover:scale-[1.02]" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-[2.5rem] md:text-[3rem] leading-none" style={{ fontFamily: 'Cinzel,serif', fontWeight: 600 }}>300–400</p>
                <p className="text-[14px] text-white/70 mt-2" style={{ fontFamily: 'Inter,sans-serif' }}>Devotees blessed daily</p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-5">
              <div className="bg-white p-6 rounded-xl border-l-3 border-[#C9A24D] shadow-soft">
                <p className="text-[#3A3A3A] leading-[1.8] text-[16px]" style={{ fontFamily: 'EB Garamond,serif' }}>
                  With the divine blessings of Lord Agastheeshwara, the Trust humbly renders Annadanam,
                  one of the most sacred forms of service. Every day, free, wholesome, and sanctified meals
                  (Anna Prasadam) are lovingly served to all devotees.
                </p>
              </div>

              <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[#C9A24D]/15 shadow-soft">
                <div className="w-12 h-12 bg-[#C9A24D] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🕐</span>
                </div>
                <div>
                  <p className="text-[#6B6B6B] text-[13px]" style={{ fontFamily: 'Inter,sans-serif' }}>Daily Service Time</p>
                  <p className="text-[1.5rem] text-[#1C1C1C]" style={{ fontFamily: 'Cinzel,serif' }}>12:30 PM</p>
                </div>
              </div>

              <p className="text-[#6B6B6B] text-[15px]" style={{ fontFamily: 'EB Garamond,serif' }}>
                Devotees are graciously invited to sponsor Annadanam on auspicious occasions — birthdays,
                anniversaries, or sacred days — as an act of devotion and gratitude.
              </p>

              {/* QR Section */}
              <div className="bg-white p-6 rounded-xl shadow-premium border border-[#C9A24D]/10 text-center">
                <div className="w-36 h-36 mx-auto bg-white rounded-lg mb-4 border border-[#C9A24D]/20 overflow-hidden">
                  <QRCodeImage size={144} className="object-contain w-full h-full p-2" />
                </div>
                <p className="text-[13px] text-[#6B6B6B] mb-4" style={{ fontFamily: 'EB Garamond,serif' }}>
                  Scan to contribute towards Annadanam Seva
                </p>
                <Link href="/donate" className="btn-gold">
                  Sponsor Annadanam
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
            <p className="text-[#1C1C1C] uppercase tracking-[0.15em] text-[11px] mb-3 font-medium" style={{ fontFamily: 'Inter,sans-serif' }}>Stewardship</p>
            <h2 className="text-[1.8rem] md:text-[2.2rem] text-[#1C1C1C] mb-4" style={{ fontFamily: 'Cinzel,serif' }}>
              Honourable Trustees
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="block w-10 h-[1px] bg-gradient-to-r from-transparent to-[#C9A24D]" />
              <span className="text-[#C9A24D] text-sm">❖</span>
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
                  Temple Leadership & Distinguished Contributors
                </p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-[#3A3A3A] leading-[1.8] text-[16px]" style={{ fontFamily: 'EB Garamond,serif' }}>
              The Hereditary Trustee, Sri M. Chandramouli Reddy, IAS Garu, along with his brother
              Sri M. Sundara Rami Reddy Garu, served as Managing Trustees for <strong>41 years</strong>.
              Subsequently, their cousin Sri M. Raghurami Reddy Garu served as Managing Trustee
              for <strong>17 years</strong>.
            </p>
            <Link href="/management" className="inline-flex items-center gap-2 mt-6 text-[#C9A24D] hover:text-[#4A3F35] transition-colors group text-[14px]" style={{ fontFamily: 'Inter,sans-serif' }}>
              Learn More About Management
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
            <p className="text-[#1C1C1C] uppercase tracking-[0.15em] text-[11px] mb-3 font-medium" style={{ fontFamily: 'Inter,sans-serif' }}>Visual Journey</p>
            <h2 className="text-[1.8rem] md:text-[2.2rem] text-[#1C1C1C] mb-4" style={{ fontFamily: 'Cinzel,serif' }}>
              Temple Gallery
            </h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="block w-10 h-[1px] bg-gradient-to-r from-transparent to-[#C9A24D]" />
              <span className="text-[#C9A24D] text-sm">❖</span>
              <span className="block w-10 h-[1px] bg-gradient-to-l from-transparent to-[#C9A24D]" />
            </div>
            <p className="text-[#6B6B6B] max-w-xl mx-auto text-[16px]" style={{ fontFamily: 'EB Garamond,serif' }}>
              Glimpses of the sacred temple, its divine architecture, and spiritual celebrations
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
                <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-600 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                  <p className="text-white text-[14px]" style={{ fontFamily: 'Cinzel,serif' }}>{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/gallery" className="btn-secondary">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/assets/templemain.jpeg" alt="Temple Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-[#4A3F35]/90" />
        </div>

        <div className="relative z-10 container-temple text-center text-white">
          <p className="text-[#C9A24D] tracking-[0.15em] text-[11px] mb-4 font-medium" style={{ fontFamily: 'Inter,sans-serif' }}>PLAN YOUR VISIT</p>
          <h2 className="text-[1.8rem] md:text-[2.2rem] mb-5 text-white" style={{ fontFamily: 'Cinzel,serif' }}>
            Visit the Sacred Abode
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8 text-[16px] leading-relaxed" style={{ fontFamily: 'EB Garamond,serif' }}>
            Experience the divine presence of Lord Agastheeshwara at this ancient temple,
            just 10 km from Tirupati on the Tirupati–Chittoor–Bengaluru Highway.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/location" className="inline-flex items-center justify-center h-[50px] px-8 bg-[#C9A24D] text-white text-[13px] font-medium tracking-[0.08em] uppercase rounded-md hover:bg-[#D4B56A] hover:-translate-y-0.5 transition-all shadow-md" style={{ fontFamily: 'Cinzel,serif' }}>How to Reach</Link>
            <Link href="/contact" className="inline-flex items-center justify-center h-[50px] px-8 bg-[#C9A24D] text-white text-[13px] font-medium tracking-[0.08em] uppercase rounded-md hover:bg-[#D4B56A] hover:-translate-y-0.5 transition-all shadow-md" style={{ fontFamily: 'Cinzel,serif' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
