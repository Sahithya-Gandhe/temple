'use client'
import Link from 'next/link'
import { useTranslation } from '@/lib/LanguageContext'

const quickLinks = [
  { href: '/about', key: 'footer.aboutTemple' },
  { href: '/history', key: 'footer.historyLegends' },
  { href: '/donate', key: 'footer.donate' },
  { href: '/gallery', key: 'footer.gallery' },
  { href: '/contact', key: 'footer.contactLink' },
]

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="relative bg-[#1C1917] text-white overflow-hidden">
      {/* Top accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C9A24D]/50 to-transparent" />

      <div className="container-temple relative py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Temple Info */}
          <div>
            <h3 className="text-xl tracking-[0.08em] text-[#C9A24D] mb-4" style={{fontFamily:'Cinzel,serif'}}>
              {t('footer.templeName')}
            </h3>
            <p className="text-white/70 text-[15px] leading-relaxed" style={{fontFamily:'EB Garamond,serif'}}>
              {t('footer.footerDesc')}
            </p>
            <p className="text-white/40 text-[13px] mt-4" style={{fontFamily:'Inter,sans-serif'}}>
              Thondavada, Chandragiri Mandal<br />
              Tirupati District, Andhra Pradesh
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg tracking-[0.06em] text-[#C9A24D] mb-4" style={{fontFamily:'Cinzel,serif'}}>
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="text-white/65 hover:text-[#C9A24D] transition-colors text-[14px] flex items-center gap-2"
                    style={{fontFamily:'Inter,sans-serif'}}
                  >
                    <span className="w-1 h-1 rounded-full bg-[#C9A24D]/40 inline-block flex-shrink-0"></span>
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg tracking-[0.06em] text-[#C9A24D] mb-4" style={{fontFamily:'Cinzel,serif'}}>
              {t('footer.contact')}
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
              {[
                { name: 'Facebook', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
                { name: 'Instagram', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
                { name: 'YouTube', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
              ].map((s) => (
                <a key={s.name} href="#" aria-label={s.name}
                  className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:border-[#C9A24D] hover:bg-[#C9A24D]/10 transition-all text-white/50 hover:text-[#C9A24D]">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-6 pb-14 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-[12px]" style={{fontFamily:'Inter,sans-serif'}}>
            © {new Date().getFullYear()} Sri Agastheeshwara Devasthanam, Thondavada. {t('footer.allRights')}
          </p>
          <p className="text-[#C9A24D]/60 text-[15px]" style={{fontFamily:'EB Garamond,serif'}}>
            {t('footer.omNamah')}
          </p>
        </div>
      </div>
    </footer>
  )
}
