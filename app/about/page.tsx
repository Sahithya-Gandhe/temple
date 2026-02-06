import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About | Sri Agastheeshwara Swamy Temple, Thondavada',
  description: 'Learn about Sri Agastheeshwara Swamy Temple, the presiding deities, and its spiritual significance as a sacred Shaiva Kshetram.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/assets/templeinfra1stpage.jpeg" alt="Sri Agastheeshwara Temple" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#4A3F35]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[#FFD700] text-[20px] tracking-[0.15em] uppercase mb-3" style={{fontFamily:'Inter,sans-serif', textShadow: '0 0 20px rgba(255,215,0,0.7)', fontWeight:600}}>Sacred Heritage</p>
          <h1 className="text-[2.2rem] md:text-[3rem] mb-4" style={{fontFamily:'Cinzel,serif', fontWeight:600, textShadow: '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.4)', color:'#FFFFFF'}}>About the Temple</h1>
          <p className="text-white/80 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>A Sacred Shaiva Kshetram of Great Antiquity</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-[#FAF9F6]">
        <div className="container-temple">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <p className="text-[18px] text-[#3A3A3A] leading-[1.9] mb-12" style={{fontFamily:'EB Garamond,serif'}}>
              Sri Agastheeshwara Swamy Temple, Thondavada, is one of the most ancient and spiritually
              significant Shaiva temples in Andhra Pradesh. The temple is situated on the northern bank
              of the sacred Swarnamukhi River, at the foothills of the Tirumala Hills, the divine abode
              of Lord Sri Venkateswara.
            </p>

            {/* Presiding Deities */}
            <div className="grid md:grid-cols-2 gap-8 my-14">
              <div className="bg-white p-8 rounded-xl border border-[#1C1C1C]/15 shadow-soft hover:shadow-premium transition-shadow">
                <div className="w-14 h-14 bg-[#1C1C1C] rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">🕉</span>
                </div>
                <h3 className="text-[1.4rem] text-[#1C1C1C] mb-4" style={{fontFamily:'Cinzel,serif'}}>Sri Agastheeshwara Swamy</h3>
                <p className="text-[#3A3A3A] leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                  The presiding deity is Lord Shiva, worshipped as Sri Agastheeshwara Swamy. The Shiva Lingam
                  was discovered by Sage Agastya while bathing in the Swarnamukhi River. He consecrated it on
                  the riverbank and installed it as Sri Agastheeshwara Swamy.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-[#1C1C1C]/15 shadow-soft hover:shadow-premium transition-shadow">
                <div className="w-14 h-14 bg-[#1C1C1C] rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">🙏</span>
                </div>
                <h3 className="text-[1.4rem] text-[#1C1C1C] mb-4" style={{fontFamily:'Cinzel,serif'}}>Sri Anandavalli Ammavaru</h3>
                <p className="text-[#3A3A3A] leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                  Goddess Parvati Devi is revered as Sri Anandavalli Ammavaru and is worshipped in a separate
                  shrine within the temple complex. She is revered as the embodiment of compassion and bliss,
                  and devotees seek her blessings for marital harmony, prosperity, and family well-being.
                </p>
              </div>
            </div>

            {/* Sacred Connection */}
            <div className="bg-[#4A3F35] p-8 md:p-12 rounded-xl text-white my-14 shadow-premium">
              <h3 className="text-[1.5rem] mb-6 text-[#C9A24D]" style={{fontFamily:'Cinzel,serif'}}>Connection with Lord Venkateswara</h3>
              <p className="text-white/85 leading-[1.85] mb-4 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                The temple holds a unique spiritual association with Lord Sri Venkateswara. After His divine
                marriage with Sri Padmavathi Devi at Narayanavanam, Lord Venkateswara stayed at Sage Agastya's
                ashram on the banks of the Swarnamukhi River.
              </p>
              <p className="text-white/85 leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                During this period, He performed nitya poojas to Lord Shiva at this shrine. As per Sage
                Agastya's advice, the Lord remained here for six months before proceeding to Tirumala, later
                blessing this sacred place with His divine footprints.
              </p>
            </div>

            {/* Other Shrines */}
            <div className="my-14">
              <h3 className="text-[1.5rem] text-[#1C1C1C] mb-6" style={{fontFamily:'Cinzel,serif'}}>Other Shrines in the Complex</h3>
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
                Outside the compound are temples of Sri Bhadrachala Rama, Sri Krishna, and Sri Anjaneya.
              </p>
            </div>

            {/* River Mandapam */}
            <div className="bg-[#F8F6F2] p-8 rounded-xl border-l-3 border-[#C9A24D] my-14">
              <h3 className="text-[1.4rem] text-[#1C1C1C] mb-4" style={{fontFamily:'Cinzel,serif'}}>The Sacred Mandapam</h3>
              <p className="text-[#3A3A3A] leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                There is a river-side stone mandapam located in the middle of the Swarnamukhi River. Within
                this mandapam, the sacred footprint of Lord Venkateswara is enshrined. The principal deities,
                Sri Harihara (Siva-Kesava) and Lord Ayyappa, are also installed inside the mandapam along
                with the divine footprint of Lord Venkateswara.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center mt-14">
              <Link href="/history" className="btn-gold mr-4">Explore History</Link>
              <Link href="/gallery" className="btn-secondary">View Gallery</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
