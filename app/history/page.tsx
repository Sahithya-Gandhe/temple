import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'History & Legends | Sri Agastheeshwara Swamy Temple, Thondavada',
  description: 'Explore the rich history, sacred legends of Sage Agastya, the Swarnamukhi River, and the temple architecture influenced by Pallava, Chola, and Vijayanagara dynasties.',
}

export default function HistoryPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/assets/maingate.jpeg" alt="Temple Historic Gate" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#4A3F35]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[#FFD700] text-[13px] tracking-[0.15em] uppercase mb-3" style={{fontFamily:'Inter,sans-serif', textShadow: '0 0 20px rgba(255,215,0,0.7)', fontWeight:600}}>Ancient Tales</p>
          <h1 className="text-[2.2rem] md:text-[3rem] mb-4" style={{fontFamily:'Cinzel,serif', fontWeight:600, textShadow: '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.4)', color:'#FFFFFF'}}>History & Legends</h1>
          <p className="text-white/80 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>Ancient Tales of Devotion and Divinity</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-[#FAF9F6]">
        <div className="container-temple">
          <div className="max-w-4xl mx-auto">

            {/* Sage Agastya Legend */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#1C1C1C] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🧘</span>
                </div>
                <h2 className="text-[1.6rem] text-[#1C1C1C]" style={{fontFamily:'Cinzel,serif'}}>The Legend of Sage Agastya</h2>
              </div>

              <div className="space-y-5 text-[#3A3A3A] leading-[1.9] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                <p>
                  This sacred site was once the hermitage (ashrama) of the great <strong className="text-[#1C1C1C]">Sage Agastya Maharshi</strong>,
                  one of the revered Saptarishis. During his southward journey undertaken at the command of Lord Shiva
                  to restore cosmic balance, Sage Agastya established his abode here and performed intense penance for
                  the welfare of humanity.
                </p>

                <div className="bg-[#F8F6F2] p-6 rounded-xl border-l-3 border-[#1C1C1C] my-6">
                  <p className="italic text-[#6B6B6B]">
                    According to sacred tradition, during the celestial wedding of Lord Shiva and Goddess Parvati at
                    Mount Kailasa, the earth tilted northward due to the congregation of all celestial beings. To
                    counterbalance the earth, Sage Agastya was sent southward.
                  </p>
                </div>

                <p>
                  On his journey, he encountered the Vindhya mountain range, which had grown excessively tall and
                  obstructed the paths of the Sun and Moon. The sage commanded the mountains to bow down and remain
                  so until his return. As Sage Agastya never returned, the Vindhyas remain humbled to this day.
                </p>

                <p>
                  By the divine grace of Lord Shiva, Sage Agastya was able to witness the celestial wedding at
                  Kailasa from this very place.
                </p>
              </div>
            </div>

            {/* Swarnamukhi River */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#C9A24D] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🌊</span>
                </div>
                <h2 className="text-[1.6rem] text-[#1C1C1C]" style={{fontFamily:'Cinzel,serif'}}>The Sacred Swarnamukhi River</h2>
              </div>

              <div className="space-y-5 text-[#3A3A3A] leading-[1.9] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                <p>
                  In those times, South India was largely arid and lacked sufficient water sources. Through his
                  intense tapasya, Sage Agastya prayed to Lord Shiva and Goddess Ganga, resulting in the creation
                  of several sacred rivers. One such river is the Swarnamukhi.
                </p>

                <p>
                  The Swarnamukhi River originates from the Mallepalli Hills near Adinepalli, about 30 km southwest
                  of Tirupati on the Chittoor route. Flowing through the Hemanaga (Golden) Hills of Chandragiri,
                  it acquired the name <strong className="text-[#C9A24D]">Swarnamukhi</strong> (Golden-faced).
                </p>

                <div className="bg-[#4A3F35] p-6 rounded-xl text-white my-6 shadow-premium">
                  <h4 className="text-[1.1rem] mb-2 text-[#C9A24D]" style={{fontFamily:'Cinzel,serif'}}>Triveni Sangamam</h4>
                  <p className="text-white/85 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                    Near the temple, the rivers Bhima and Kalyani merge with the Swarnamukhi, forming the sacred
                    <strong> Triveni Sangamam</strong>, also known as <strong>Mukkoti Sthalam</strong>. This confluence
                    is considered highly auspicious for holy baths, pitru tarpanam, abhishekam, and pradakshina.
                  </p>
                </div>

                <p>
                  After the advent of the Swarnamukhi River, this valley transformed into a serene and picturesque
                  landscape, surrounded by the Mallepalli Hills to the south, Chandragiri Hills to the west, and
                  the Seshachalam Hills to the north, with an open valley to the east.
                </p>
              </div>
            </div>

            {/* Discovery of Shiva Lingam */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#C9A24D] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🕉</span>
                </div>
                <h2 className="text-[1.6rem] text-[#1C1C1C]" style={{fontFamily:'Cinzel,serif'}}>Discovery of the Divine Lingam</h2>
              </div>

              <p className="text-[#3A3A3A] leading-[1.9] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                One day, while bathing in the river, Sage Agastya discovered a Shiva Lingam submerged in the deep
                waters. He consecrated it on the riverbank and installed it as <strong className="text-[#C9A24D]">Sri Agastheeshwara Swamy</strong>.
                Subsequently, a temple was constructed, and <strong className="text-[#C9A24D]">Sri Anandavalli Ammavaru</strong> was installed
                as the consort deity.
              </p>
            </div>

            {/* Architecture */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#C9A24D] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🏛</span>
                </div>
                <h2 className="text-[1.6rem] text-[#1C1C1C]" style={{fontFamily:'Cinzel,serif'}}>Temple Architecture</h2>
              </div>

              <div className="space-y-5 text-[#3A3A3A] leading-[1.9] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                <p>
                  The temple architecture reflects classical <strong className="text-[#C9A24D]">Chola style</strong> with later
                  <strong className="text-[#C9A24D]"> Vijayanagara additions</strong>. A well-proportioned sanctum (garbhagriha), a three-tier
                  Rajagopuram, spacious mandapams, and a beautifully carved 16-pillared mandapam stand as testimony
                  to its historical and artistic heritage.
                </p>

                <div className="grid md:grid-cols-3 gap-4 my-8">
                  {['Pallava', 'Chola', 'Vijayanagara'].map((style, i) => (
                    <div key={style} className="bg-white p-5 rounded-xl text-center border border-[#C9A24D]/15 hover:border-[#C9A24D]/40 transition-colors">
                      <p className="text-[#1C1C1C] text-[1.1rem]" style={{fontFamily:'Cinzel,serif'}}>{style}</p>
                      <p className="text-[13px] text-[#6B6B6B] mt-1" style={{fontFamily:'Inter,sans-serif'}}>{['Architectural Influence','Classical Style','Later Additions'][i]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Shaiva Kshetras */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#C9A24D] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">🛕</span>
                </div>
                <h2 className="text-[1.6rem] text-[#1C1C1C]" style={{fontFamily:'Cinzel,serif'}}>Shaiva Kshetras Along Swarnamukhi</h2>
              </div>

              <p className="text-[#3A3A3A] leading-[1.9] text-[16px] mb-6" style={{fontFamily:'EB Garamond,serif'}}>
                Along the course of the Swarnamukhi River flourished several ancient Shaiva Kshetras alongside
                renowned Vaishnava Kshetras such as Tirumala, Tirupati, Tiruchanoor, and Srinivasa Mangapuram.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'Sri Agastheeshwara Swamy', location: 'Thondavada' },
                  { name: 'Sri Parasareeswara', location: 'Yogimallavaram' },
                  { name: 'Sri Parasu Rameswara', location: 'Gudimallam' },
                  { name: 'Sri Kapileswara', location: 'Kapila Teertham, Tirupati' },
                  { name: 'Sri Kalahasteeswara', location: 'Srikalahasti' },
                ].map((temple) => (
                  <div key={temple.name} className="bg-white p-4 rounded-xl border border-[#C9A24D]/15">
                    <p className="font-medium text-[#1C1C1C]" style={{fontFamily:'Cinzel,serif', fontSize:'15px'}}>{temple.name}</p>
                    <p className="text-[13px] text-[#6B6B6B]" style={{fontFamily:'Inter,sans-serif'}}>{temple.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Festivals */}
            <div className="bg-[#F8F6F2] p-8 rounded-xl border border-[#C9A24D]/15 my-14">
              <h3 className="text-[1.4rem] text-[#1C1C1C] mb-6" style={{fontFamily:'Cinzel,serif'}}>Festivals & Celebrations</h3>
              <div className="space-y-4 text-[#3A3A3A] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                <p>
                  Daily rituals are performed as per Shaiva Agama traditions. The following occasions are
                  observed with great devotion:
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    'Maha Shivaratri', 'Pradosham', 'Karthika Masam',
                    'Ugadi', 'January 1st', 'All Karthika Mondays',
                  ].map((festival) => (
                    <li key={festival} className="flex items-center gap-2">
                      <span className="text-[#C9A24D]">❖</span>
                      {festival}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-5 bg-white rounded-xl border-l-3 border-[#C9A24D]">
                  <h4 className="text-[#1C1C1C] mb-2" style={{fontFamily:'Cinzel,serif', fontSize:'16px'}}>Rudrapadala Mukkoti (Annual Festival)</h4>
                  <p className="text-[15px] text-[#3A3A3A]" style={{fontFamily:'EB Garamond,serif'}}>
                    Celebrated for three days during Kartika Pournami:<br />
                    <strong>Day 1:</strong> Annabhishekam and Annadanam<br />
                    <strong>Day 2:</strong> Lingodbhava Abhishekam<br />
                    <strong>Day 3:</strong> Kalyanam
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-14">
              <Link href="/management" className="btn-gold mr-4">Temple Management</Link>
              <Link href="/about" className="btn-secondary">About Temple</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
