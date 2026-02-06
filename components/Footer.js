import Link from 'next/link'

const quickLinks = [
  { href: '/about', label: 'About Temple' },
  { href: '/history', label: 'History & Legends' },
  { href: '/donate', label: 'Donate' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-[#1C1917] text-white overflow-hidden">
      {/* Top accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A24D]/50 to-transparent" />

      <div className="container-temple relative py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Temple Info */}
          <div>
            <h3 className="text-xl tracking-[0.08em] text-[#C9A24D] mb-4" style={{fontFamily:'Cinzel,serif'}}>
              Sri Agastheeshwara Devasthanam
            </h3>
            <p className="text-white/70 text-[15px] leading-relaxed" style={{fontFamily:'EB Garamond,serif'}}>
              A sacred Shaiva Kshetram on the banks of the Swarnamukhi River,
              near Tirupati, Andhra Pradesh.
            </p>
            <p className="text-white/40 text-[13px] mt-4" style={{fontFamily:'Inter,sans-serif'}}>
              Thondavada, Chandragiri Mandal<br />
              Tirupati District, Andhra Pradesh
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg tracking-[0.06em] text-[#C9A24D] mb-4" style={{fontFamily:'Cinzel,serif'}}>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-white/65 hover:text-[#C9A24D] transition-colors text-[14px] flex items-center gap-2"
                    style={{fontFamily:'Inter,sans-serif'}}
                  >
                    <span className="text-[#C9A24D]/50 text-[10px]">❖</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg tracking-[0.06em] text-[#C9A24D] mb-4" style={{fontFamily:'Cinzel,serif'}}>
              Contact
            </h4>
            <div className="space-y-3" style={{fontFamily:'Inter,sans-serif'}}>
              <a href="mailto:trustee@agastheeshwaradevasthanam.in"
                className="block text-white/65 hover:text-[#C9A24D] transition-colors text-[14px]">
                trustee@agastheeshwaradevasthanam.in
              </a>
              <a href="mailto:contact@agastheeshwaradevasthanam.in"
                className="block text-white/65 hover:text-[#C9A24D] transition-colors text-[14px]">
                contact@agastheeshwaradevasthanam.in
              </a>
            </div>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              {['Facebook','Instagram','YouTube'].map((s) => (
                <a key={s} href="#" aria-label={s}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-[#C9A24D] hover:bg-[#C9A24D]/10 transition-all text-white/50 hover:text-[#C9A24D]">
                  <span className="text-[14px]">{s === 'Facebook' ? 'f' : s === 'Instagram' ? 'ig' : '▶'}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 pb-14 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-[12px]" style={{fontFamily:'Inter,sans-serif'}}>
            © {new Date().getFullYear()} Sri Agastheeshwara Devasthanam, Thondavada. All rights reserved.
          </p>
          <p className="text-[#C9A24D]/60 text-[15px]" style={{fontFamily:'EB Garamond,serif'}}>
            Om Namah Shivaya
          </p>
        </div>
      </div>
    </footer>
  )
}
