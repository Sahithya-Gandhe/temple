import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Gallery | Sri Agastheeshwara Swamy Temple, Thondavada',
  description: 'View images of Sri Agastheeshwara Swamy Temple - temple architecture, festivals, Annadanam seva, and sacred moments.',
}

const galleryImages = [
  { src: '/assets/templemain.jpeg', alt: 'Temple Main View', category: 'Temple' },
  { src: '/assets/templeinfra1stpage.jpeg', alt: 'Temple Architecture', category: 'Temple' },
  { src: '/assets/maingate.jpeg', alt: 'Temple Main Gate', category: 'Temple' },
  { src: '/assets/godimage.jpeg', alt: 'Sri Agastheeshwara Swamy', category: 'Deities' },
  { src: '/assets/realidol1.jpeg', alt: 'Divine Idol', category: 'Deities' },
  { src: '/assets/realidol2.jpeg', alt: 'Sacred Shrine', category: 'Deities' },
  { src: '/assets/anadanamimage_forntpage.jpeg', alt: 'Annadanam Seva', category: 'Annadanam' },
]

export default function GalleryPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/assets/templemain.jpeg" alt="Temple Gallery" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#2A2018]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[#DAA520] text-[13px] tracking-[0.2em] uppercase mb-3" style={{fontFamily:'Inter,sans-serif'}}>Visual Journey</p>
          <h1 className="text-[2.5rem] md:text-[3.5rem] mb-4 text-white" style={{fontFamily:'Cinzel,serif', fontWeight:600}}>Temple Gallery</h1>
          <p className="text-white/80 text-[17px]" style={{fontFamily:'EB Garamond,serif'}}>Visual Glimpses of Divine Beauty</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section bg-[#FFFDF8]">
        <div className="container-temple">

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {['All', 'Temple', 'Deities', 'Annadanam', 'Festivals'].map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2.5 rounded-full text-[13px] font-medium transition-all ${
                  cat === 'All'
                    ? 'bg-gradient-to-r from-[#5C1A1B] to-[#7B3F1A] text-white shadow-md'
                    : 'bg-[#FAF6F0] text-[#3A322D] hover:bg-[#C49A6C]/20 border border-[#C49A6C]/20'
                }`}
                style={{fontFamily:'Inter,sans-serif'}}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg cursor-pointer border border-[#C49A6C]/10"
              >
                <Image src={image.src} alt={image.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A2018]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium" style={{fontFamily:'Cinzel,serif', fontSize:'15px'}}>{image.alt}</p>
                    <p className="text-white/60 text-[13px]" style={{fontFamily:'Inter,sans-serif'}}>{image.category}</p>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl">
                    <svg className="w-6 h-6 text-[#5C1A1B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Annadanam Donors Section */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <h2 className="text-[1.8rem] text-[#5C1A1B] mb-4" style={{fontFamily:'Cinzel,serif'}}>Annadanam Donors</h2>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C49A6C]" />
                <span className="text-[#B8860B] text-sm">❖</span>
                <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C49A6C]" />
              </div>
              <p className="text-[#3A322D]/60 max-w-2xl mx-auto text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                We are grateful to all devotees who contribute to the sacred Annadanam seva.
                Their generosity ensures that hundreds of pilgrims are blessed with prasadam daily.
              </p>
            </div>

            <div className="bg-[#FAF6F0] p-10 rounded-xl text-center border border-[#C49A6C]/20">
              <p className="text-[#3A322D]/60 mb-6 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                Donor images from Annadanam seva will be displayed here.
              </p>
              <Link href="/donate" className="btn-gold">Sponsor Annadanam</Link>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <p className="text-[#3A322D]/60 mb-6 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
              Would you like to contribute images from your visit?
            </p>
            <Link href="/contact" className="btn-secondary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
