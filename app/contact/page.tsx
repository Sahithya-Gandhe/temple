import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact | Sri Agastheeshwara Swamy Temple, Thondavada',
  description: 'Contact Sri Agastheeshwara Swamy Temple trustees and administration for inquiries, donations, and visit planning.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image 
            src="/assets/templeinfra1stpage.jpeg" 
            alt="Contact Temple" 
            fill 
            className="object-cover" 
            priority 
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#4A3F35]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[#FFD700] text-[13px] tracking-[0.15em] uppercase mb-3" style={{fontFamily:'Inter,sans-serif', textShadow: '0 0 20px rgba(255,215,0,0.7)', fontWeight:600}}>Get in Touch</p>
          <h1 className="text-[2.2rem] md:text-[3rem] mb-4" style={{fontFamily:'Cinzel,serif', fontWeight:600, textShadow: '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.4)', color:'#FFFFFF'}}>Contact Us</h1>
          <p className="text-white/90 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>We Welcome Your Inquiries</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-[#FAF9F6]">
        <div className="container-temple">
          <div className="max-w-4xl mx-auto">

            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-14">
              {/* Email Contacts */}
              <div className="bg-white p-8 rounded-xl border border-[#C9A24D]/15 shadow-soft hover:shadow-premium transition-shadow">
                <div className="w-14 h-14 bg-[#C9A24D] rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">✉️</span>
                </div>
                <h3 className="text-[1.2rem] text-[#1C1C1C] mb-4" style={{fontFamily:'Cinzel,serif'}}>Email</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[12px] text-[#6B6B6B] mb-1" style={{fontFamily:'Inter,sans-serif'}}>Temple Trustee</p>
                    <a
                      href="mailto:trustee@agastheeshwaradevasthanam.in"
                      className="text-[#C9A24D] hover:text-[#4A3F35] transition-colors font-medium text-[14px]"
                      style={{fontFamily:'Inter,sans-serif'}}
                    >
                      trustee@agastheeshwaradevasthanam.in
                    </a>
                  </div>
                  <div>
                    <p className="text-[12px] text-[#6B6B6B] mb-1" style={{fontFamily:'Inter,sans-serif'}}>General Inquiries</p>
                    <a
                      href="mailto:contact@agastheeshwaradevasthanam.in"
                      className="text-[#C9A24D] hover:text-[#4A3F35] transition-colors font-medium text-[14px]"
                      style={{fontFamily:'Inter,sans-serif'}}
                    >
                      contact@agastheeshwaradevasthanam.in
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white p-8 rounded-xl border border-[#C9A24D]/15 shadow-soft hover:shadow-premium transition-shadow">
                <div className="w-14 h-14 bg-[#C9A24D] rounded-full flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">📍</span>
                </div>
                <h3 className="text-[1.2rem] text-[#1C1C1C] mb-4" style={{fontFamily:'Cinzel,serif'}}>Temple Address</h3>
                <p className="text-[#3A3A3A] leading-[1.85] text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                  Sri Agastheeshwara Swamy Temple<br />
                  Thondavada, Chandragiri Mandal<br />
                  Tirupati District<br />
                  Andhra Pradesh, India
                </p>
                <Link href="/location" className="inline-flex items-center gap-2 mt-4 text-[#C9A24D] hover:text-[#4A3F35] transition-colors text-[14px] font-medium group" style={{fontFamily:'Inter,sans-serif'}}>
                  View on Map
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-premium border border-[#C9A24D]/10 mb-14">
              <h3 className="text-[1.4rem] text-[#1C1C1C] mb-8 text-center" style={{fontFamily:'Cinzel,serif'}}>Send a Message</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-medium text-[#3A3A3A] mb-2" style={{fontFamily:'Inter,sans-serif'}}>
                      Your Name <span className="text-[#C9A24D]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-[#C9A24D]/20 rounded-lg focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition-colors bg-[#FAF9F6]"
                      style={{fontFamily:'EB Garamond,serif', fontSize:'16px'}}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-[#3A3A3A] mb-2" style={{fontFamily:'Inter,sans-serif'}}>
                      Email Address <span className="text-[#C9A24D]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-[#C9A24D]/20 rounded-lg focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition-colors bg-[#FAF9F6]"
                      style={{fontFamily:'EB Garamond,serif', fontSize:'16px'}}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#3A3A3A] mb-2" style={{fontFamily:'Inter,sans-serif'}}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-[#C9A24D]/20 rounded-lg focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition-colors bg-[#FAF9F6]"
                    style={{fontFamily:'EB Garamond,serif', fontSize:'16px'}}
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-[#3A3A3A] mb-2" style={{fontFamily:'Inter,sans-serif'}}>
                    Subject <span className="text-[#C9A24D]">*</span>
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-[#C9A24D]/20 rounded-lg focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition-colors bg-[#FAF9F6]"
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
                  <label className="block text-[13px] font-medium text-[#3A3A3A] mb-2" style={{fontFamily:'Inter,sans-serif'}}>
                    Your Message <span className="text-[#C9A24D]">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-[#C9A24D]/20 rounded-lg focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D] transition-colors resize-none bg-[#FAF9F6]"
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

              <p className="text-center text-[13px] text-[#6B6B6B] mt-6" style={{fontFamily:'Inter,sans-serif'}}>
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
                <div key={item.title} className="text-center p-7 bg-[#F8F6F2] rounded-xl border border-[#C9A24D]/10 hover:shadow-soft transition-shadow">
                  <span className="text-[2.5rem] mb-4 block">{item.icon}</span>
                  <h4 className="text-[#1C1C1C] mb-2" style={{fontFamily:'Cinzel,serif', fontSize:'16px'}}>{item.title}</h4>
                  <p className="text-[14px] text-[#6B6B6B] whitespace-pre-line" style={{fontFamily:'EB Garamond,serif'}}>
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
