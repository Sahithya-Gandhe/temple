import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Contact | Sri Agastheeshwara Swamy Temple, Thondavada',
  description: 'Contact Sri Agastheeshwara Swamy Temple trustees and administration for inquiries, donations, and visit planning.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/assets/templeinfra1stpage.jpeg" alt="Contact Temple" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#2A2018]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[#DAA520] text-[13px] tracking-[0.2em] uppercase mb-3" style={{fontFamily:'Inter,sans-serif'}}>Get in Touch</p>
          <h1 className="text-[2.5rem] md:text-[3.5rem] mb-4 text-white" style={{fontFamily:'Cinzel,serif', fontWeight:600}}>Contact Us</h1>
          <p className="text-white/80 text-[17px]" style={{fontFamily:'EB Garamond,serif'}}>We Welcome Your Inquiries</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-[#FFFDF8]">
        <div className="container-temple">
          <div className="max-w-4xl mx-auto">

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-14">
              {/* Email Contacts */}
              <div className="bg-[#FAF6F0] p-8 rounded-xl border border-[#C49A6C]/20 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center mb-6 shadow-md">
                  <span className="text-white text-2xl">✉️</span>
                </div>
                <h3 className="text-[1.2rem] text-[#5C1A1B] mb-4" style={{fontFamily:'Cinzel,serif'}}>Email</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[12px] text-[#3A322D]/50 mb-1" style={{fontFamily:'Inter,sans-serif'}}>Temple Trustee</p>
                    <a
                      href="mailto:trustee@agastheeshwaradevasthanam.in"
                      className="text-[#5C1A1B] hover:text-[#B8860B] transition-colors font-medium text-[14px]"
                      style={{fontFamily:'Inter,sans-serif'}}
                    >
                      trustee@agastheeshwaradevasthanam.in
                    </a>
                  </div>
                  <div>
                    <p className="text-[12px] text-[#3A322D]/50 mb-1" style={{fontFamily:'Inter,sans-serif'}}>General Inquiries</p>
                    <a
                      href="mailto:contact@agastheeshwaradevasthanam.in"
                      className="text-[#5C1A1B] hover:text-[#B8860B] transition-colors font-medium text-[14px]"
                      style={{fontFamily:'Inter,sans-serif'}}
                    >
                      contact@agastheeshwaradevasthanam.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-[#FAF6F0] p-8 rounded-xl border border-[#C49A6C]/20 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#DAA520] rounded-full flex items-center justify-center mb-6 shadow-md">
                  <span className="text-white text-2xl">📍</span>
                </div>
                <h3 className="text-[1.2rem] text-[#5C1A1B] mb-4" style={{fontFamily:'Cinzel,serif'}}>Temple Address</h3>
                <p className="text-[#3A322D]/75 leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                  Sri Agastheeshwara Swamy Temple<br />
                  Thondavada, Chandragiri Mandal<br />
                  Tirupati District<br />
                  Andhra Pradesh, India
                </p>
                <Link href="/location" className="inline-flex items-center gap-2 mt-4 text-[#7B3F1A] hover:text-[#B8860B] transition-colors text-[14px] font-medium group" style={{fontFamily:'Inter,sans-serif'}}>
                  View on Map
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl border border-[#C49A6C]/15 mb-14">
              <h3 className="text-[1.5rem] text-[#5C1A1B] mb-8 text-center" style={{fontFamily:'Cinzel,serif'}}>Send a Message</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-medium text-[#3A322D] mb-2" style={{fontFamily:'Inter,sans-serif'}}>
                      Your Name <span className="text-[#B8860B]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-[#C49A6C]/30 rounded-xl focus:outline-none focus:border-[#5C1A1B] focus:ring-1 focus:ring-[#5C1A1B] transition-colors bg-[#FFFDF8]"
                      style={{fontFamily:'EB Garamond,serif', fontSize:'16px'}}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-[#3A322D] mb-2" style={{fontFamily:'Inter,sans-serif'}}>
                      Email Address <span className="text-[#B8860B]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-[#C49A6C]/30 rounded-xl focus:outline-none focus:border-[#5C1A1B] focus:ring-1 focus:ring-[#5C1A1B] transition-colors bg-[#FFFDF8]"
                      style={{fontFamily:'EB Garamond,serif', fontSize:'16px'}}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#3A322D] mb-2" style={{fontFamily:'Inter,sans-serif'}}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-[#C49A6C]/30 rounded-xl focus:outline-none focus:border-[#5C1A1B] focus:ring-1 focus:ring-[#5C1A1B] transition-colors bg-[#FFFDF8]"
                    style={{fontFamily:'EB Garamond,serif', fontSize:'16px'}}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#3A322D] mb-2" style={{fontFamily:'Inter,sans-serif'}}>
                    Subject <span className="text-[#B8860B]">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-[#C49A6C]/30 rounded-xl focus:outline-none focus:border-[#5C1A1B] focus:ring-1 focus:ring-[#5C1A1B] transition-colors bg-[#FFFDF8]"
                    style={{fontFamily:'EB Garamond,serif', fontSize:'16px'}}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="donation">Donation / Annadanam Sponsorship</option>
                    <option value="visit">Visit Planning</option>
                    <option value="seva">Seva / Pooja Booking</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#3A322D] mb-2" style={{fontFamily:'Inter,sans-serif'}}>
                    Your Message <span className="text-[#B8860B]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-[#C49A6C]/30 rounded-xl focus:outline-none focus:border-[#5C1A1B] focus:ring-1 focus:ring-[#5C1A1B] transition-colors resize-none bg-[#FFFDF8]"
                    style={{fontFamily:'EB Garamond,serif', fontSize:'16px'}}
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn-gold px-12">
                    Send Message
                  </button>
                </div>
              </form>

              <p className="text-center text-[13px] text-[#3A322D]/45 mt-6" style={{fontFamily:'Inter,sans-serif'}}>
                We will respond to your inquiry within 2-3 business days.
              </p>
            </div>

            {/* Additional Info */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: '🕐', title: 'Temple Hours', desc: 'Open daily\nDawn to Dusk' },
                { icon: '🍛', title: 'Annadanam', desc: 'Daily at\n12:30 PM' },
                { icon: '📱', title: 'Follow Us', desc: 'Social media\nlinks coming soon' },
              ].map((item) => (
                <div key={item.title} className="text-center p-7 bg-[#FAF6F0] rounded-xl border border-[#C49A6C]/15 hover:shadow-lg transition-shadow">
                  <span className="text-[2.5rem] mb-4 block">{item.icon}</span>
                  <h4 className="text-[#5C1A1B] mb-2" style={{fontFamily:'Cinzel,serif', fontSize:'16px'}}>{item.title}</h4>
                  <p className="text-[14px] text-[#3A322D]/60 whitespace-pre-line" style={{fontFamily:'EB Garamond,serif'}}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
