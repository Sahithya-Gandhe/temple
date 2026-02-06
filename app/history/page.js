import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'History & Legends | Sri Agastheeshwara Swamy Temple, Thondavada',
  description: 'Explore the rich history, sacred legends of Sage Agastya, the Swarnamukhi River, and the temple architecture influenced by Pallava, Chola, and Vijayanagara dynasties.',
}

export default function HistoryPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/assets/maingate.jpeg" alt="Temple Historic Gate" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#2A2018]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[#DAA520] text-[13px] tracking-[0.2em] uppercase mb-3" style={{fontFamily:'Inter,sans-serif'}}>Ancient Tales</p>
          <h1 className="text-[2.5rem] md:text-[3.5rem] mb-4 text-white" style={{fontFamily:'Cinzel,serif', fontWeight:600}}>History & Legends</h1>
          <p className="text-white/80 text-[17px]" style={{fontFamily:'EB Garamond,serif'}}>Ancient Tales of Devotion and Divinity</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-[#FFFDF8]">
        <div className="container-temple">
          <div className="max-w-4xl mx-auto">

            {/* Sage Agastya Legend */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white text-xl">🧘</span>
                </div>
                <h2 className="text-[1.8rem] text-[#5C1A1B]" style={{fontFamily:'Cinzel,serif'}}>The Legend of Sage Agastya</h2>
              </div>

              <div className="space-y-5 text-[#3A322D]/80 leading-[1.9] text-[17px]" style={{fontFamily:'EB Garamond,serif'}}>
                <p>
                  This sacred site was once the hermitage (ashrama) of the great <strong className="text-[#5C1A1B]">Sage Agastya Maharshi</strong>,
                  one of the revered Saptarishis. During his southward journey undertaken at the command of Lord Shiva
                  to restore cosmic balance, Sage Agastya established his abode here and performed intense penance for
                  the welfare of humanity.
                </p>

                <div className="bg-[#FAF6F0] p-6 rounded-xl border-l-4 border-[#B8860B] my-6">
                  <p className="italic text-[#5C1A1B]/80">
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
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white text-xl">🌊</span>
                </div>
                <h2 className="text-[1.8rem] text-[#5C1A1B]" style={{fontFamily:'Cinzel,serif'}}>The Sacred Swarnamukhi River</h2>
              </div>

              <div className="space-y-5 text-[#3A322D]/80 leading-[1.9] text-[17px]" style={{fontFamily:'EB Garamond,serif'}}>
                <p>
                  In those times, South India was largely arid and lacked sufficient water sources. Through his
                  intense tapasya, Sage Agastya prayed to Lord Shiva and Goddess Ganga, resulting in the creation
                  of several sacred rivers. One such river is the Swarnamukhi.
                </p>

                <p>
                  The Swarnamukhi River originates from the Mallepalli Hills near Adinepalli, about 30 km southwest
                  of Tirupati on the Chittoor route. Flowing through the Hemanaga (Golden) Hills of Chandragiri,
                  it acquired the name <strong className="text-[#5C1A1B]">Swarnamukhi</strong> (Golden-faced).
                </p>

                <div className="bg-gradient-to-r from-[#5C1A1B] to-[#7B3F1A] p-6 rounded-xl text-white my-6 shadow-lg">
                  <h4 className="text-[1.1rem] mb-2 text-[#DAA520]" style={{fontFamily:'Cinzel,serif'}}>Triveni Sangamam</h4>
                  <p className="text-white/90 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
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
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white text-xl">🕉</span>
                </div>
                <h2 className="text-[1.8rem] text-[#5C1A1B]" style={{fontFamily:'Cinzel,serif'}}>Discovery of the Divine Lingam</h2>
              </div>

              <p className="text-[#3A322D]/80 leading-[1.9] text-[17px]" style={{fontFamily:'EB Garamond,serif'}}>
                One day, while bathing in the river, Sage Agastya discovered a Shiva Lingam submerged in the deep
                waters. He consecrated it on the riverbank and installed it as <strong className="text-[#5C1A1B]">Sri Agastheeshwara Swamy</strong>.
                Subsequently, a temple was constructed, and <strong className="text-[#5C1A1B]">Sri Anandavalli Ammavaru</strong> was installed
                as the consort deity.
              </p>
            </div>

            {/* Architecture */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white text-xl">🏛</span>
                </div>
                <h2 className="text-[1.8rem] text-[#5C1A1B]" style={{fontFamily:'Cinzel,serif'}}>Temple Architecture</h2>
              </div>

              <div className="space-y-5 text-[#3A322D]/80 leading-[1.9] text-[17px]" style={{fontFamily:'EB Garamond,serif'}}>
                <p>
                  The temple architecture reflects classical <strong className="text-[#5C1A1B]">Chola style</strong> with later
                  <strong className="text-[#5C1A1B]"> Vijayanagara additions</strong>. A well-proportioned sanctum (garbhagriha), a three-tier
                  Rajagopuram, spacious mandapams, and a beautifully carved 16-pillared mandapam stand as testimony
                  to its historical and artistic heritage.
                </p>

                <div className="grid md:grid-cols-3 gap-4 my-8">
                  {['Pallava', 'Chola', 'Vijayanagara'].map((style, i) => (
                    <div key={style} className="bg-[#FAF6F0] p-5 rounded-xl text-center border border-[#C49A6C]/20 hover:border-[#B8860B]/30 transition-colors">
                      <p className="text-[#5C1A1B] text-[1.1rem]" style={{fontFamily:'Cinzel,serif'}}>{style}</p>
                      <p className="text-[13px] text-[#3A322D]/55 mt-1" style={{fontFamily:'Inter,sans-serif'}}>{['Architectural Influence','Classical Style','Later Additions'][i]}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Shaiva Kshetras */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white text-xl">🛕</span>
                </div>
                <h2 className="text-[1.8rem] text-[#5C1A1B]" style={{fontFamily:'Cinzel,serif'}}>Shaiva Kshetras Along Swarnamukhi</h2>
              </div>

              <p className="text-[#3A322D]/80 leading-[1.9] text-[17px] mb-6" style={{fontFamily:'EB Garamond,serif'}}>
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
                  <div key={temple.name} className="bg-[#FAF6F0] p-4 rounded-xl border border-[#C49A6C]/20">
                    <p className="font-medium text-[#5C1A1B]" style={{fontFamily:'Cinzel,serif', fontSize:'15px'}}>{temple.name}</p>
                    <p className="text-[13px] text-[#3A322D]/55" style={{fontFamily:'Inter,sans-serif'}}>{temple.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Festivals */}
            <div className="bg-[#FAF6F0] p-8 rounded-xl border border-[#C49A6C]/20 my-14">
              <h3 className="text-[1.5rem] text-[#5C1A1B] mb-6" style={{fontFamily:'Cinzel,serif'}}>Festivals & Celebrations</h3>
              <div className="space-y-4 text-[#3A322D]/75 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
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
                      <span className="text-[#B8860B]">❖</span>
                      {festival}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 p-5 bg-white rounded-xl border-l-4 border-[#B8860B]">
                  <h4 className="text-[#5C1A1B] mb-2" style={{fontFamily:'Cinzel,serif', fontSize:'16px'}}>Rudrapadala Mukkoti (Annual Festival)</h4>
                  <p className="text-[15px] text-[#3A322D]/70" style={{fontFamily:'EB Garamond,serif'}}>
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
