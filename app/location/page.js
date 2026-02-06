import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Location | Sri Agastheeshwara Swamy Temple, Thondavada',
  description: 'How to reach Sri Agastheeshwara Swamy Temple, Thondavada - located 10 km from Tirupati on the Tirupati–Chittoor–Bengaluru Highway.',
}

export default function LocationPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/assets/maingate.jpeg" alt="Temple Location" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#2A2018]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[#DAA520] text-[13px] tracking-[0.2em] uppercase mb-3" style={{fontFamily:'Inter,sans-serif'}}>Plan Your Visit</p>
          <h1 className="text-[2.5rem] md:text-[3.5rem] mb-4 text-white" style={{fontFamily:'Cinzel,serif', fontWeight:600}}>How to Reach</h1>
          <p className="text-white/80 text-[17px]" style={{fontFamily:'EB Garamond,serif'}}>Plan Your Sacred Visit</p>
        </div>
      </section>

      {/* Location Details */}
      <section className="section bg-[#FFFDF8]">
        <div className="container-temple">
          <div className="max-w-4xl mx-auto">

            {/* Address Card */}
            <div className="bg-[#FAF6F0] p-8 rounded-xl mb-14 text-center border border-[#C49A6C]/20">
              <h2 className="text-[1.5rem] text-[#5C1A1B] mb-4" style={{fontFamily:'Cinzel,serif'}}>Temple Address</h2>
              <p className="text-[1.15rem] text-[#3A322D] mb-2" style={{fontFamily:'EB Garamond,serif'}}>
                Sri Agastheeshwara Swamy Temple
              </p>
              <p className="text-[#3A322D]/60 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                Thondavada, Chandragiri Mandal<br />
                Tirupati District, Andhra Pradesh<br />
                India
              </p>
            </div>

            {/* Map Embed */}
            <div className="mb-14">
              <div className="aspect-video rounded-xl overflow-hidden shadow-xl border border-[#C49A6C]/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.8!2d79.3!3d13.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sThondavada%2C%20Chandragiri!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Temple Location Map"
                ></iframe>
              </div>
              <p className="text-center text-[13px] text-[#3A322D]/50 mt-4" style={{fontFamily:'Inter,sans-serif'}}>
                Click on the map to get directions via Google Maps
              </p>
            </div>

            {/* Distance Information */}
            <div className="grid md:grid-cols-2 gap-6 mb-14">
              <div className="bg-gradient-to-br from-[#5C1A1B] to-[#7B3F1A] p-7 rounded-xl text-white shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <p className="text-white/70 text-[13px]" style={{fontFamily:'Inter,sans-serif'}}>Distance from Tirupati</p>
                    <p className="text-[2rem] text-white" style={{fontFamily:'Cinzel,serif'}}>~10 km</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FAF6F0] p-7 rounded-xl border border-[#C49A6C]/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-white text-2xl">🏰</span>
                  </div>
                  <div>
                    <p className="text-[#3A322D]/55 text-[13px]" style={{fontFamily:'Inter,sans-serif'}}>Near Chandragiri Fort</p>
                    <p className="text-[1.3rem] text-[#5C1A1B]" style={{fontFamily:'Cinzel,serif'}}>~1 km before</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Route */}
            <div className="mb-14">
              <h3 className="text-[1.5rem] text-[#5C1A1B] mb-6" style={{fontFamily:'Cinzel,serif'}}>Route</h3>
              <div className="bg-[#FAF6F0] p-6 rounded-xl border-l-4 border-[#B8860B]">
                <p className="text-[#3A322D]/80 leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                  The temple is located on the <strong className="text-[#5C1A1B]">Tirupati–Chittoor–Bengaluru Highway</strong>,
                  approximately 10 km from Tirupati. It is situated about 1 km before
                  <strong className="text-[#5C1A1B]"> Chandragiri Fort</strong>, the historic capital of the Vijayanagara Empire.
                </p>
              </div>
            </div>

            {/* Transport Options */}
            <div className="mb-14">
              <h3 className="text-[1.5rem] text-[#5C1A1B] mb-6" style={{fontFamily:'Cinzel,serif'}}>Transport Options</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { icon: '🚌', name: 'TTD Local Buses', desc: 'Regular service from Tirupati' },
                  { icon: '🚍', name: 'APSRTC Buses', desc: 'State transport buses' },
                  { icon: '🚐', name: 'AP Tourism Buses', desc: 'Tourist buses available' },
                  { icon: '🚕', name: 'Town Service Buses', desc: 'Chandragiri–Tirupati route' },
                  { icon: '🛺', name: 'Auto-rickshaws', desc: 'Available from Tirupati' },
                  { icon: '🚗', name: 'Private Vehicle', desc: 'Parking available at temple' },
                ].map((transport) => (
                  <div key={transport.name} className="bg-white p-4 rounded-xl border border-[#C49A6C]/15 flex items-start gap-3 hover:shadow-md transition-shadow">
                    <span className="text-2xl">{transport.icon}</span>
                    <div>
                      <p className="font-medium text-[#5C1A1B] text-[14px]" style={{fontFamily:'Inter,sans-serif'}}>{transport.name}</p>
                      <p className="text-[13px] text-[#3A322D]/55" style={{fontFamily:'Inter,sans-serif'}}>{transport.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nearby Places */}
            <div className="mb-14">
              <h3 className="text-[1.5rem] text-[#5C1A1B] mb-6" style={{fontFamily:'Cinzel,serif'}}>Nearby Places of Interest</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { name: 'Chandragiri Fort & Museum', desc: 'Historic Vijayanagara capital', distance: '1 km' },
                  { name: 'Srinivasa Mangapuram', desc: 'Sri Kalyana Venkateswara Temple', distance: '5 km' },
                  { name: 'Kalyani Dam', desc: 'Scenic water reservoir', distance: '8 km' },
                  { name: 'Sri Venkateswara Zoological Park', desc: 'Wildlife sanctuary', distance: '12 km' },
                  { name: 'Regional Science Centre', desc: 'Educational attraction', distance: '10 km' },
                  { name: 'Tirupati (Tirumala)', desc: 'Sri Venkateswara Temple', distance: '30 km' },
                ].map((place) => (
                  <div key={place.name} className="bg-[#FAF6F0] p-4 rounded-xl border border-[#C49A6C]/15">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-medium text-[#5C1A1B] text-[15px]" style={{fontFamily:'Cinzel,serif'}}>{place.name}</p>
                        <p className="text-[13px] text-[#3A322D]/55" style={{fontFamily:'Inter,sans-serif'}}>{place.desc}</p>
                      </div>
                      <span className="text-[13px] text-[#B8860B] font-medium" style={{fontFamily:'Inter,sans-serif'}}>{place.distance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Geographic Setting */}
            <div className="bg-gradient-to-r from-[#5C1A1B] to-[#7B3F1A] p-8 rounded-xl text-white mb-14 shadow-2xl">
              <h3 className="text-[1.2rem] mb-4 text-[#DAA520]" style={{fontFamily:'Cinzel,serif'}}>The Sacred Geography</h3>
              <p className="text-white/90 leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                After the advent of the Swarnamukhi River, this valley transformed into a serene and
                picturesque landscape, surrounded by the <strong>Mallepalli Hills</strong> to the south,
                <strong> Chandragiri Hills</strong> to the west, and the <strong>Seshachalam Hills</strong>
                to the north, with an open valley to the east.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link href="/contact" className="btn-gold mr-4">Contact Temple</Link>
              <Link href="/about" className="btn-secondary">About Temple</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
