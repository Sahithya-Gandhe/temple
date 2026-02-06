import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Temple Management | Sri Agastheeshwara Swamy Temple, Thondavada',
  description: 'Learn about the hereditary trustees and management of Sri Agastheeshwara Swamy Temple, preserved by the Mogili Reddy family for generations.',
}

export default function ManagementPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/assets/templeinfra1stpage.jpeg" alt="Temple Management" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#4A3F35]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[#FFD700] text-[13px] tracking-[0.15em] uppercase mb-3" style={{fontFamily:'Inter,sans-serif', textShadow: '0 0 20px rgba(255,215,0,0.7)', fontWeight:600}}>Stewardship</p>
          <h1 className="text-[2.2rem] md:text-[3rem] mb-4" style={{fontFamily:'Cinzel,serif', fontWeight:600, textShadow: '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.4)', color:'#FFFFFF'}}>Temple Management</h1>
          <p className="text-white/80 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>Generations of Devoted Stewardship</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-[#FAF9F6]">
        <div className="container-temple">
          <div className="max-w-4xl mx-auto">

            {/* History of Trusteeship */}
            <div className="text-center mb-14">
              <p className="text-[16px] text-[#6B6B6B] leading-[1.9]" style={{fontFamily:'EB Garamond,serif'}}>
                In 1909 AD, the temple was renovated by Sri Natukoti Chettiar of Tamil Nadu, who also
                undertook the renovation of the Sri Kalahasteeswara Temple. Subsequently, the responsibility
                for the temple's maintenance was entrusted to the <strong className="text-[#1C1C1C]">Mogili Reddy family</strong>, who
                have preserved its sanctity with deep devotion.
              </p>
            </div>

            {/* Group photo of all trustees */}
            <div className="mb-16">
              <h2 className="text-[1.8rem] text-[#1C1C1C] text-center mb-10" style={{fontFamily:'Cinzel,serif'}}>
                Honourable Trustees
              </h2>

              <div className="max-w-3xl mx-auto mb-12">
                <div className="relative rounded-xl overflow-hidden shadow-premium border border-[#4A3F35]/20">
                  <div className="relative aspect-[4/3] md:aspect-[16/10]">
                    <Image
                      src="/assets/honarablemention1IAS.jpeg"
                      alt="Honourable Trustees – Sri M. Sundara Rami Reddy Garu, Sri M. Raghu Rami Reddy Garu, and Sri M. Chandramouli Reddy IAS Garu"
                      fill
                      className="object-cover object-center"
                      style={{ objectPosition: 'center 35%' }}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="bg-[#4A3F35] p-5 text-center">
                    <p className="text-[#1C1C1C] text-[12px] tracking-[0.15em] uppercase mb-2" style={{fontFamily:'Inter,sans-serif'}}>Hereditary Trustees & Managing Trustees</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-5">
                      <p className="text-white text-[15px]" style={{fontFamily:'Cinzel,serif'}}>Sri M. Sundara Rami Reddy</p>
                      <span className="text-[#C9A24D] hidden md:inline">❖</span>
                      <p className="text-white text-[15px]" style={{fontFamily:'Cinzel,serif'}}>Sri M. Raghu Rami Reddy</p>
                      <span className="text-[#C9A24D] hidden md:inline">❖</span>
                      <p className="text-white text-[15px]" style={{fontFamily:'Cinzel,serif'}}>Sri M. Chandramouli Reddy IAS</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed cards */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-xl border border-[#C9A24D]/20">
                  <div className="text-center md:text-left">
                    <h3 className="text-[1.4rem] text-[#1C1C1C] mb-2" style={{fontFamily:'Cinzel,serif'}}>
                      Sri M. Chandramouli Reddy, IAS Garu
                    </h3>
                    <p className="text-[#6B6B6B] font-medium text-[14px] mb-4" style={{fontFamily:'Inter,sans-serif'}}>Hereditary Trustee</p>
                    <p className="text-[#6B6B6B] leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                      As the Hereditary Trustee, Sri M. Chandramouli Reddy, IAS Garu, along with his brother
                      Sri M. Sundara Rami Reddy Garu, served as Managing Trustees of Sri Mukkoti Agastheeshwara
                      Swamy Temple for 41 years. Their leadership has been instrumental in the temple's spiritual
                      and infrastructural development.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl border border-[#C9A24D]/20">
                  <div className="text-center md:text-left">
                    <h3 className="text-[1.4rem] text-[#1C1C1C] mb-2" style={{fontFamily:'Cinzel,serif'}}>
                      Sri M. Sundara Rami Reddy Garu
                    </h3>
                    <p className="text-[#6B6B6B] font-medium text-[14px] mb-4" style={{fontFamily:'Inter,sans-serif'}}>Managing Trustee (41 years)</p>
                    <p className="text-[#6B6B6B] leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                      Serving alongside the Hereditary Trustee for over four decades, Sri M. Sundara Rami Reddy Garu
                      dedicated his life to the service of Lord Agastheeshwara and the devotees who visit this
                      sacred shrine.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-xl border border-[#C9A24D]/20">
                  <div className="text-center md:text-left">
                    <h3 className="text-[1.4rem] text-[#1C1C1C] mb-2" style={{fontFamily:'Cinzel,serif'}}>
                      Sri M. Raghu Rami Reddy Garu
                    </h3>
                    <p className="text-[#6B6B6B] font-medium text-[14px] mb-4" style={{fontFamily:'Inter,sans-serif'}}>Managing Trustee (17 years)</p>
                    <p className="text-[#6B6B6B] leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                      Subsequently, their cousin Sri M. Raghurami Reddy Garu served the temple as Managing Trustee
                      for 17 years, continuing the family's legacy of devoted service to this ancient Shaiva Kshetram.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legacy */}
            <div className="bg-[#4A3F35] p-8 md:p-12 rounded-xl text-white text-center shadow-premium">
              <h3 className="text-[1.5rem] mb-6 text-[#1C1C1C]" style={{fontFamily:'Cinzel,serif'}}>A Legacy of Service</h3>
              <p className="text-white/90 leading-[1.85] max-w-2xl mx-auto text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                Through their dedicated leadership and selfless service spanning decades, the temple has
                experienced significant spiritual and infrastructural development. The Mogili Reddy family's
                stewardship has ensured that this sacred Shaiva Kshetram continues to serve devotees with
                the same reverence and sanctity it has maintained for centuries.
              </p>
            </div>

            {/* Temple Name */}
            <div className="my-12 text-center">
              <p className="text-[#6B6B6B] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                The temple is also popularly known as <strong className="text-[#1C1C1C]">Sri Mukkoti
                Agastheeshwara Swamy Temple</strong>.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center mt-14">
              <Link href="/contact" className="btn-gold mr-4">Contact Trustees</Link>
              <Link href="/donate" className="btn-secondary">Support the Temple</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
