import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* ═══════════ HERO SECTION ═══════════ */}
      <section className="relative h-[100vh] min-h-[800px] flex items-center justify-center overflow-hidden">
        {/* Background – Temple Gate Image with enhanced cinematic treatment */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/maingate.jpeg"
            alt="Sri Agastheeshwara Swamy Temple Entrance – Sacred Gate with Tripundra"
            fill
            priority
            className="object-cover transition-transform duration-[8s] hover:scale-105"
            style={{ 
              objectPosition: 'center 35%',
              filter: 'brightness(1.1) contrast(1.15) saturate(1.2)'
            }}
          />
          {/* Enhanced multi-layered cinematic overlay for better text readability - lighter for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#1a0e08]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a0e08]/50 via-transparent to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
          {/* Enhanced warm sacred glow from center */}
          <div className="absolute inset-0" style={{background:'radial-gradient(ellipse at center 45%, rgba(255,215,0,0.10) 0%, rgba(218,165,32,0.06) 30%, transparent 70%)'}} />
          {/* Additional atmospheric depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#DAA520]/3 to-transparent" />
        </div>

        {/* Enhanced decorative corner ornaments */}
        <div className="absolute top-8 left-8 z-10 w-28 h-28 border-t-3 border-l-3 border-[#DAA520]/40 rounded-tl-lg hidden md:block before:absolute before:-top-1 before:-left-1 before:w-6 before:h-6 before:bg-[#DAA520]/20 before:rounded-full" />
        <div className="absolute top-8 right-8 z-10 w-28 h-28 border-t-3 border-r-3 border-[#DAA520]/40 rounded-tr-lg hidden md:block after:absolute after:-top-1 after:-right-1 after:w-6 after:h-6 after:bg-[#DAA520]/20 after:rounded-full" />
        <div className="absolute bottom-28 left-8 z-10 w-28 h-28 border-b-3 border-l-3 border-[#DAA520]/40 rounded-bl-lg hidden md:block" />
        <div className="absolute bottom-28 right-8 z-10 w-28 h-28 border-b-3 border-r-3 border-[#DAA520]/40 rounded-br-lg hidden md:block" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
          {/* Sacred Om Symbol */}
          <div className="fade-in mb-4">
            <span className="inline-block text-[2.5rem] md:text-[3rem] text-[#DAA520] opacity-80" style={{textShadow:'0 0 40px rgba(218,165,32,0.4)'}}>🕉</span>
          </div>

          {/* Sacred Sanskrit */}
          <p className="text-[#DAA520] text-[16px] md:text-[19px] mb-6 tracking-[0.3em] fade-in" style={{fontFamily:'EB Garamond,serif', textShadow:'0 2px 20px rgba(218,165,32,0.5)'}}>
            ॥ ॐ नमः शिवाय ॥
          </p>

          {/* Main Title – Pure white with strong glow */}
          <h1 className="text-[2.8rem] md:text-[4.2rem] lg:text-[5.5rem] mb-4 leading-[1.1] text-white fade-in-delay-1" style={{fontFamily:'Cinzel,serif', fontWeight:700, letterSpacing:'0.05em', textShadow:'0 2px 4px rgba(0,0,0,0.8), 0 4px 20px rgba(0,0,0,0.6), 0 0 60px rgba(218,165,32,0.15)'}}>
            Sri Agastheeshwara<br /> Swamy Temple
          </h1>

          {/* Sacred divider */}
          <div className="flex items-center justify-center gap-5 my-7 fade-in-delay-2">
            <span className="block w-20 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#DAA520]/50 to-[#DAA520]/80" />
            <span className="text-[#DAA520] text-xl" style={{textShadow:'0 0 20px rgba(218,165,32,0.6)'}}>❖</span>
            <span className="block w-20 md:w-32 h-[1px] bg-gradient-to-l from-transparent via-[#DAA520]/50 to-[#DAA520]/80" />
          </div>

          {/* Location */}
          <p className="text-[1.2rem] md:text-[1.5rem] text-white mb-3 tracking-[0.18em] uppercase fade-in-delay-2" style={{fontFamily:'Cinzel,serif', fontWeight:500, textShadow:'0 2px 10px rgba(0,0,0,0.6)'}}>
            Thondavada
          </p>

          {/* Subtitle */}
          <p className="text-[1.05rem] md:text-[1.25rem] text-[#F0D890] mb-12 max-w-2xl mx-auto leading-relaxed fade-in-delay-2" style={{fontFamily:'EB Garamond,serif', fontStyle:'italic', textShadow:'0 1px 8px rgba(0,0,0,0.5)'}}>
            A Sacred Shaiva Kshetram on the Banks of the Swarnamukhi River
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center fade-in-delay-3">
            <Link href="/about" className="btn-gold text-[15px] px-10 py-4">
              About the Temple
            </Link>
            <Link href="/donate" className="btn-secondary border-[#DAA520]/60 text-white hover:bg-[#DAA520] hover:text-[#2A2018] hover:border-[#DAA520] text-[15px] px-10 py-4" style={{textShadow:'0 1px 4px rgba(0,0,0,0.4)'}}>
              Annadanam & Donate
            </Link>
          </div>
        </div>

        {/* Enhanced scroll indicator with better visibility */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="flex flex-col items-center gap-2 bg-black/40 px-4 py-3 rounded-full backdrop-blur-sm border border-[#DAA520]/30">
            <p className="text-[#DAA520] text-[11px] uppercase tracking-[0.2em] font-medium" style={{fontFamily:'Inter,sans-serif',textShadow:'0 0 10px rgba(218,165,32,0.8)'}}>Scroll</p>
            <svg className="w-5 h-5 text-[#DAA520]" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{filter: 'drop-shadow(0 0 8px rgba(218,165,32,0.6))'}}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ═══════════ TEMPLE OVERVIEW ═══════════ */}
      <section className="section bg-[#FAF6F0]">
        <div className="container-temple">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Text */}
            <div className="fade-in">
              <p className="text-[#DAA520] uppercase tracking-[0.2em] text-[12px] mb-3" style={{fontFamily:'Inter,sans-serif'}}>Sacred Heritage</p>
              <h2 className="text-[2rem] md:text-[2.5rem] text-[#5C1A1B] mb-6" style={{fontFamily:'Cinzel,serif'}}>
                A Temple of Great Antiquity
              </h2>
              <div className="space-y-5 text-[#3A322D]/80 leading-[1.9] text-[17px]" style={{fontFamily:'EB Garamond,serif'}}>
                <p>
                  Sri Agastheeshwara Swamy Temple, Thondavada, is one of the most ancient and spiritually
                  significant Shaiva temples in Andhra Pradesh. The temple is situated on the northern bank
                  of the sacred Swarnamukhi River, at the foothills of the Tirumala Hills.
                </p>
                <p>
                  The presiding deity is Lord Shiva worshipped as <strong className="text-[#B8860B]">Sri Agastheeshwara Swamy</strong>,
                  with Goddess Parvati Devi revered as <strong className="text-[#B8860B]">Sri Anandavalli Ammavaru</strong>.
                </p>
                <p>
                  This sacred site was once the hermitage of the great <strong className="text-[#B8860B]">Sage Agastya Maharshi</strong>,
                  one of the revered Saptarishis, who performed intense penance here for the welfare of humanity.
                </p>
              </div>
              <Link href="/history" className="inline-flex items-center gap-2 mt-8 text-[#DAA520] font-medium hover:text-[#FFD700] transition-colors group text-[15px]" style={{fontFamily:'Cinzel,serif', letterSpacing:'0.05em'}}>
                Read Full History
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Images */}
            <div className="relative">
              <div className="relative h-[420px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-[#C49A6C]/20 group">
                <Image src="/assets/templeinfra1stpage.jpeg" alt="Temple Architecture" fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" style={{ objectPosition: 'center 40%' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2018]/40 via-transparent to-transparent" />
              </div>
              {/* Inset deity image - larger and more prominent */}
              <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFFDF8] hidden md:block">
                <Image src="/assets/godimage.jpeg" alt="Sri Agastheeshwara Swamy" fill className="object-cover" />
                <div className="absolute inset-0 border-2 border-[#DAA520]/30 rounded-xl" />
              </div>
              {/* Management team image - positioned elegantly */}
              <div className="absolute -top-6 -right-6 w-32 h-24 rounded-xl overflow-hidden shadow-xl border-3 border-[#FFFDF8] hidden lg:block">
                <Image src="/assets/honarablemention1IAS.jpeg" alt="Temple Management" fill className="object-cover object-center" style={{ objectPosition: 'center 30%' }} />
                <div className="absolute inset-0 border border-[#DAA520]/40 rounded-lg" />
              </div>
              {/* Gold corner accent */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#B8860B]/40 rounded-tr-2xl hidden md:block" />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#B8860B]/20 rounded-br-2xl hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ ANNADANAM SECTION ═══════════ */}
      <section id="annadanam" className="section bg-[#FFFDF8]">
        <div className="container-temple">
          {/* Section header */}
          <div className="text-center mb-14">
            <p className="text-[#DAA520] uppercase tracking-[0.2em] text-[12px] mb-3" style={{fontFamily:'Inter,sans-serif'}}>Sacred Service</p>
            <h2 className="text-[2rem] md:text-[2.5rem] text-[#B8860B] mb-4" style={{fontFamily:'Cinzel,serif'}}>
              Annadanam Seva
            </h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#DAA520]" />
              <span className="text-[#DAA520] text-sm">❖</span>
              <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#DAA520]" />
            </div>
            <p className="text-[#3A322D]/65 max-w-xl mx-auto text-[17px]" style={{fontFamily:'EB Garamond,serif'}}>
              <em>"Annam Parabrahma Swaroopam"</em> — Food is a divine form of the Supreme
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image */}
            <div className="relative h-[480px] md:h-[540px] rounded-2xl overflow-hidden shadow-2xl group">
              <Image src="/assets/anadanamimage_forntpage.jpeg" alt="Annadanam Seva" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2A2018]/85 via-[#2A2018]/20 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-[3rem] md:text-[3.5rem] leading-none" style={{fontFamily:'Cinzel,serif', fontWeight:700, textShadow:'0 2px 10px rgba(0,0,0,0.5)'}}>300–400</p>
                <p className="text-[15px] text-white/80 mt-2 tracking-wide" style={{fontFamily:'Inter,sans-serif'}}>Devotees blessed daily</p>
              </div>
              {/* Sacred food icon badge */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-[#DAA520]/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-[#DAA520]/30">
                <span className="text-[2rem]">🙏</span>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div className="bg-[#FAF6F0] p-7 rounded-xl border-l-4 border-[#DAA520]">
                <p className="text-[#3A322D]/80 leading-[1.9] text-[17px]" style={{fontFamily:'EB Garamond,serif'}}>
                  With the divine blessings of Lord Agastheeshwara, the Trust humbly renders Annadanam,
                  one of the most sacred forms of service. Every day, free, wholesome, and sanctified meals
                  (Anna Prasadam) are lovingly served to all devotees.
                </p>
              </div>

              <div className="flex items-center gap-5 p-5 bg-[#DAA520]/5 rounded-xl border border-[#DAA520]/20">
                <div className="w-14 h-14 bg-gradient-to-br from-[#DAA520] to-[#FFD700] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white text-2xl">🕐</span>
                </div>
                <div>
                  <p className="font-medium text-[#B8860B] text-[14px]" style={{fontFamily:'Inter,sans-serif'}}>Daily Service Time</p>
                  <p className="text-[1.8rem] text-[#3A322D]" style={{fontFamily:'Cinzel,serif'}}>12:30 PM</p>
                </div>
              </div>

              <p className="text-[#3A322D]/60 text-[15px]" style={{fontFamily:'EB Garamond,serif'}}>
                Devotees are graciously invited to sponsor Annadanam on auspicious occasions — birthdays,
                anniversaries, or sacred days — as an act of devotion and gratitude.
              </p>

              {/* QR Placeholder */}
              <div className="bg-white p-7 rounded-xl shadow-lg border border-[#C49A6C]/20 text-center">
                <div className="w-44 h-44 mx-auto bg-[#FAF6F0] rounded-xl flex items-center justify-center mb-5 border-2 border-dashed border-[#C49A6C]/40">
                  <div className="text-center">
                    <span className="text-[3rem]">📱</span>
                    <p className="text-[12px] text-[#6B6560] mt-2" style={{fontFamily:'Inter,sans-serif'}}>UPI QR Code</p>
                  </div>
                </div>
                <p className="text-[14px] text-[#3A322D]/60 mb-5" style={{fontFamily:'EB Garamond,serif'}}>
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

      {/* ═══════════ HONOURABLE TRUSTEES – SINGLE ENLARGED IMAGE ═══════════ */}
      <section className="section bg-gradient-to-b from-[#F5EDE0] to-[#FAF6F0]">
        <div className="container-temple">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-[#B8860B] uppercase tracking-[0.2em] text-[12px] mb-3" style={{fontFamily:'Inter,sans-serif'}}>Stewardship</p>
            <h2 className="text-[2rem] md:text-[2.5rem] text-[#5C1A1B] mb-4" style={{fontFamily:'Cinzel,serif'}}>
              Honourable Trustees & Contributors
            </h2>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C49A6C]" />
              <span className="text-[#B8860B] text-sm">❖</span>
              <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C49A6C]" />
            </div>
          </div>

          {/* Single enlarged group photo */}
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#DAA520]/40 bg-gradient-to-br from-[#DAA520]/5 to-[#B8860B]/5 p-2">
              <div className="relative aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden">
                <Image
                  src="/assets/honarablemention1IAS.jpeg"
                  alt="Honourable Members – Temple Leadership and Distinguished Contributors"
                  fill
                  className="object-cover object-center"
                  style={{ objectPosition: 'center 30%' }}
                />
                {/* Elegant overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              {/* Premium gold bottom bar with enhanced styling */}
              <div className="bg-gradient-to-r from-[#DAA520] via-[#FFD700] to-[#DAA520] p-8 text-center relative overflow-hidden">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10"
                  style={{backgroundImage:"url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5L35 25H55L39 35L44 55L30 43L16 55L21 35L5 25H25L30 5Z' fill='%23FFFFFF'/%3E%3C/svg%3E\")", backgroundSize:'60px 60px'}}
                />
                
                <div className="relative">
                  <p className="text-[#2A2018] text-[16px] tracking-[0.2em] uppercase mb-4 font-semibold" style={{fontFamily:'Inter,sans-serif', textShadow: '0 1px 2px rgba(0,0,0,0.1)'}}>
                    🙏 Honourable Temple Leadership 🙏
                  </p>
                  <div className="max-w-3xl mx-auto">
                    <p className="text-[#2A2018] text-[18px] leading-relaxed" style={{fontFamily:'Cinzel,serif', fontWeight: '500'}}>
                      Distinguished members who have dedicated their lives to the service of 
                      <strong className="text-[#5C1A1B]"> Sri Agastheeshwara Swamy </strong>
                      and the welfare of devotees
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-4 mb-2">
                      <span className="block w-16 h-[2px] bg-[#5C1A1B]/30" />
                      <span className="text-[#5C1A1B] text-xl">❖</span>
                      <span className="block w-16 h-[2px] bg-[#5C1A1B]/30" />
                    </div>
                    <p className="text-[#5C1A1B]/80 text-[14px] italic" style={{fontFamily:'EB Garamond,serif'}}>
                      "Service to the Divine, Service to Humanity"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description below */}
          <div className="mt-10 max-w-4xl mx-auto text-center">
            <p className="text-[#3A322D]/70 leading-[1.9] text-[17px]" style={{fontFamily:'EB Garamond,serif'}}>
              The Hereditary Trustee, Sri M. Chandramouli Reddy, IAS Garu, along with his brother
              Sri M. Sundara Rami Reddy Garu, served as Managing Trustees for <strong>41 years</strong>.
              Subsequently, their cousin Sri M. Raghurami Reddy Garu served the temple as Managing Trustee
              for <strong>17 years</strong>. Through their dedicated leadership and selfless service, the
              temple experienced significant spiritual and infrastructural development.
            </p>
            <Link href="/management" className="inline-flex items-center gap-2 mt-8 text-[#DAA520] hover:text-[#FFD700] transition-colors group" style={{fontFamily:'Cinzel,serif', letterSpacing:'0.05em', fontSize:'15px'}}>
              Learn More About Management
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ GALLERY PREVIEW ═══════════ */}
      <section className="section bg-[#FFFDF8]">
        <div className="container-temple">
          <div className="text-center mb-14">
            <p className="text-[#DAA520] uppercase tracking-[0.2em] text-[12px] mb-3" style={{fontFamily:'Inter,sans-serif'}}>Visual Journey</p>
            <h2 className="text-[2rem] md:text-[2.5rem] text-[#B8860B] mb-4" style={{fontFamily:'Cinzel,serif'}}>
              Temple Gallery
            </h2>
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#DAA520]" />
              <span className="text-[#DAA520] text-sm">❖</span>
              <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#DAA520]" />
            </div>
            <p className="text-[#3A322D]/60 max-w-xl mx-auto" style={{fontFamily:'EB Garamond,serif'}}>
              Glimpses of the sacred temple, its divine architecture, and spiritual celebrations
            </p>
          </div>

          {/* Masonry-style grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {[
              { src: '/assets/templemain.jpeg', alt: 'Temple Main View', span: 'md:col-span-2 md:row-span-2' },
              { src: '/assets/realidol1.jpeg', alt: 'Divine Idol', span: '' },
              { src: '/assets/realidol2.jpeg', alt: 'Sacred Shrine', span: '' },
              { src: '/assets/godimage.jpeg', alt: 'Sri Agastheeshwara Swamy', span: '' },
              { src: '/assets/templeinfra1stpage.jpeg', alt: 'Temple Architecture', span: '' },
            ].map((image, index) => (
              <div key={index} className={`relative ${image.span ? image.span : ''} ${image.span ? 'aspect-[4/3]' : 'aspect-square'} rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-[#DAA520]/25`}>
                <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2018]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                  <p className="text-white text-[14px] md:text-[16px] tracking-wide" style={{fontFamily:'Cinzel,serif', textShadow:'0 1px 6px rgba(0,0,0,0.5)'}}>{image.alt}</p>
                </div>
                {/* Enhanced gold border on hover */}
                <div className="absolute inset-0 border-2 border-[#DAA520]/0 group-hover:border-[#DAA520]/60 rounded-2xl transition-all duration-500" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery" className="btn-secondary">View Full Gallery</Link>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA BANNER ═══════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/assets/templemain.jpeg" alt="Temple Background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5C1A1B]/92 to-[#2A2018]/92" />
        </div>

        <div className="relative z-10 container-temple text-center text-white">
          <p className="text-[#DAA520] tracking-[0.25em] text-[13px] mb-4" style={{fontFamily:'Inter,sans-serif'}}>PLAN YOUR VISIT</p>
          <h2 className="text-[2rem] md:text-[2.5rem] mb-6 text-white" style={{fontFamily:'Cinzel,serif'}}>
            Visit the Sacred Abode
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-10 text-[17px] leading-relaxed" style={{fontFamily:'EB Garamond,serif'}}>
            Experience the divine presence of Lord Agastheeshwara at this ancient temple,
            just 10 km from Tirupati on the Tirupati–Chittoor–Bengaluru Highway.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/location" className="btn-gold">How to Reach</Link>
            <Link href="/contact" className="btn-secondary border-[#DAA520]/60 text-white hover:bg-[#DAA520] hover:text-[#2A2018] hover:border-[#DAA520]">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
