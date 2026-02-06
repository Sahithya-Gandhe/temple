import Image from 'next/image'
import Link from 'next/link'
import QRCodeImage from '@/components/QRCodeImage'

export const metadata = {
  title: 'Donate | Sri Agastheeshwara Swamy Temple, Thondavada',
  description: 'Support Annadanam seva and temple activities. Donate to Sri Agastheeshwara Swamy Temple and participate in sacred service.',
}

export default function DonatePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/assets/anadanamimage_forntpage.jpeg" alt="Annadanam Seva" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#4A3F35]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[#FFD700] text-[13px] tracking-[0.15em] uppercase mb-3" style={{fontFamily:'Inter,sans-serif', textShadow: '0 0 20px rgba(255,215,0,0.7)', fontWeight:600}}>Sacred Service</p>
          <h1 className="text-[2.2rem] md:text-[3rem] mb-4" style={{fontFamily:'Cinzel,serif', fontWeight:600, textShadow: '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.4)', color:'#FFFFFF'}}>Donate</h1>
          <p className="text-white/80 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>Support the Sacred Annadanam Seva</p>
        </div>
      </section>

      {/* Annadanam Section */}
      <section id="annadanam" className="section bg-[#FAF9F6]">
        <div className="container-temple">
          <div className="max-w-4xl mx-auto">

            {/* Sacred Quote */}
            <div className="text-center mb-14">
              <p className="text-[2rem] text-[#1C1C1C] mb-4" style={{fontFamily:'Cinzel,serif'}}>
                "अन्नं परब्रह्म स्वरूपम्"
              </p>
              <p className="text-[1.1rem] text-[#6B6B6B]" style={{fontFamily:'EB Garamond,serif'}}>
                "Annam Parabrahma Swaroopam" — Food is considered a divine form of the Supreme
              </p>
            </div>

            {/* Annadanam Details */}
            <div className="bg-[#F8F6F2] p-8 md:p-12 rounded-xl mb-14 border border-[#C9A24D]/20">
              <h2 className="text-[1.5rem] text-[#1C1C1C] mb-6" style={{fontFamily:'Cinzel,serif'}}>Annadanam Seva</h2>

              <div className="space-y-4 text-[#6B6B6B] leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                <p>
                  With the divine blessings of the Lord Agastheeshwara, the Trust humbly renders Annadanam,
                  one of the most sacred forms of service, to visiting devotees.
                </p>
                <p>
                  Every day, free, wholesome, and sanctified meals (Anna Prasadam) are lovingly served to
                  all devotees at Sri Agastheeshwara Temple, Thondavada.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl border border-[#C9A24D]/15 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-13 h-13 bg-[#4A3F35] rounded-full flex items-center justify-center flex-shrink-0 shadow-md w-12 h-12">
                      <span className="text-white text-xl">🕐</span>
                    </div>
                    <div>
                      <p className="font-medium text-[#1C1C1C] text-[14px]" style={{fontFamily:'Inter,sans-serif'}}>Daily Service Time</p>
                      <p className="text-[1.6rem] text-[#4A3F35]" style={{fontFamily:'Cinzel,serif'}}>12:30 PM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-[#C9A24D]/15 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#4A3F35] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <span className="text-white text-xl">🙏</span>
                    </div>
                    <div>
                      <p className="font-medium text-[#1C1C1C] text-[14px]" style={{fontFamily:'Inter,sans-serif'}}>Devotees Served</p>
                      <p className="text-[1.6rem] text-[#4A3F35]" style={{fontFamily:'Cinzel,serif'}}>300–400 Daily</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sponsor Information */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-14">
              <div>
                <h3 className="text-[1.5rem] text-[#1C1C1C] mb-4" style={{fontFamily:'Cinzel,serif'}}>Sponsor Annadanam</h3>
                <div className="space-y-4 text-[#6B6B6B] leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                  <p>
                    Devotees are graciously invited to sponsor Annadanam on auspicious occasions such as
                    birthdays, wedding anniversaries, or other sacred days, as an act of devotion and gratitude.
                  </p>
                  <p>
                    Donors may also have the blessed opportunity to participate personally in the
                    <strong className="text-[#1C1C1C]"> Anna Prasadam Vitharanam</strong> (distribution) on the chosen day.
                  </p>
                  <p className="text-[14px] text-[#6B6B6B]">
                    Those wishing to partake in this divine service or seeking further details regarding
                    donations are requested to kindly contact the Temple Trustee.
                  </p>
                </div>
              </div>

              {/* QR Code */}
              <div className="bg-white p-8 rounded-xl shadow-premium border border-[#C9A24D]/20 text-center">
                <h4 className="text-[1.1rem] text-[#1C1C1C] mb-5" style={{fontFamily:'Cinzel,serif'}}>Online Donation</h4>
                <div className="w-48 h-48 mx-auto bg-white rounded-xl mb-5 border-2 border-[#4A3F35]/40 overflow-hidden shadow-md">
                  <QRCodeImage size={192} className="object-contain w-full h-full p-2" />
                </div>
                <p className="text-[14px] text-[#6B6B6B] mb-1" style={{fontFamily:'EB Garamond,serif'}}>
                  Scan to contribute towards Annadanam Seva
                </p>
              </div>
            </div>

            {/* Divine Blessing */}
            <div className="bg-[#4A3F35] p-8 rounded-xl text-center mb-14 shadow-premium">
              <p className="text-[16px] leading-[1.85] italic text-[#C9A24D]" style={{fontFamily:'EB Garamond,serif'}}>
                "May the Lord's blessings shower abundantly upon all those who support and participate
                in this sacred Annadanam."
              </p>
            </div>

            {/* Other Ways to Donate */}
            <div className="mb-14">
              <h3 className="text-[1.5rem] text-[#C9A24D] mb-8 text-center" style={{fontFamily:'Cinzel,serif'}}>
                Other Ways to Support
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: '🪔', title: 'Abhishekam', desc: 'Sponsor daily or special abhishekam to Lord Agastheeshwara' },
                  { icon: '🛕', title: 'Temple Development', desc: 'Contribute to temple infrastructure and maintenance' },
                  { icon: '🎉', title: 'Festival Sponsorship', desc: 'Support annual festivals and special celebrations' },
                ].map((item) => (
                  <div key={item.title} className="bg-[#F8F6F2] p-7 rounded-xl text-center border border-[#C9A24D]/15 hover:shadow-lg transition-shadow">
                    <span className="text-[2.5rem] mb-4 block">{item.icon}</span>
                    <h4 className="text-[#1C1C1C] mb-2" style={{fontFamily:'Cinzel,serif', fontSize:'16px'}}>{item.title}</h4>
                    <p className="text-[14px] text-[#6B6B6B]" style={{fontFamily:'EB Garamond,serif'}}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact for Donations */}
            <div className="bg-[#F8F6F2] p-8 rounded-xl text-center border border-[#C9A24D]/20">
              <h4 className="text-[1.2rem] text-[#1C1C1C] mb-4" style={{fontFamily:'Cinzel,serif'}}>Contact for Donations</h4>
              <p className="text-[#6B6B6B] mb-5 text-[15px]" style={{fontFamily:'EB Garamond,serif'}}>
                For donation inquiries and sponsorship details, please contact:
              </p>
              <div className="space-y-2 mb-6">
                <p>
                  <a href="mailto:trustee@agastheeshwaradevasthanam.in" className="text-[#C9A24D] hover:text-[#D4B56A] transition-colors" style={{fontFamily:'Inter,sans-serif', fontSize:'14px'}}>
                    trustee@agastheeshwaradevasthanam.in
                  </a>
                </p>
                <p>
                  <a href="mailto:contact@agastheeshwaradevasthanam.in" className="text-[#C9A24D] hover:text-[#D4B56A] transition-colors" style={{fontFamily:'Inter,sans-serif', fontSize:'14px'}}>
                    contact@agastheeshwaradevasthanam.in
                  </a>
                </p>
              </div>
              <Link href="/contact" className="btn-gold">Contact Temple</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
