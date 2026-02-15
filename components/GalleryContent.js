'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '@/lib/LanguageContext'
import ImageLightbox from '@/components/ImageLightbox'

function formatCurrency(val) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val)
}

export default function GalleryContent({ donations = [], galleryImages = [] }) {
  const { t } = useTranslation()
  const ITEMS_PER_PAGE = 6
  const [galleryPage, setGalleryPage] = useState(1)
  const [donationPage, setDonationPage] = useState(1)
  const [lightboxImage, setLightboxImage] = useState(null)

  const openLightbox = (event, items, index) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const selectedItem = items[index]
    if (!selectedItem?.src) return

    setLightboxImage({
      src: selectedItem.src,
      alt: selectedItem.alt,
      items,
      index,
      originRect: {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      },
    })
  }

  const staticGalleryImages = [
    { src: '/assets/templemain.jpeg', alt: 'Temple Main View' },
    { src: '/assets/templeinfra1stpage.jpeg', alt: 'Temple Architecture' },
    { src: '/assets/maingate.jpeg', alt: 'Temple Main Gate' },
    { src: '/assets/godimage.jpeg', alt: 'Sri Agastheeshwara Swamy' },
    { src: '/assets/realidol1.jpeg', alt: 'Divine Idol' },
    { src: '/assets/realidol2.jpeg', alt: 'Sacred Shrine' },
    { src: '/assets/anadanamimage_forntpage.jpeg', alt: 'Annadanam Seva' },
  ]

  const serverGalleryImages = (galleryImages || []).map((image) => ({
    src: image.image_url,
    alt: image.title || 'Temple Gallery',
    title: image.title || '',
    description: image.description || '',
  }))

  const combinedImages = [...serverGalleryImages, ...staticGalleryImages]
  const galleryLightboxItems = combinedImages.map((image) => ({
    src: image.src,
    alt: image.alt,
  }))
  const donationLightboxItems = donations.map((donation) => ({
    src: donation.image_url,
    alt: donation.donor_name,
  }))

  const galleryTotalPages = Math.max(1, Math.ceil(combinedImages.length / ITEMS_PER_PAGE))
  const donationTotalPages = Math.max(1, Math.ceil(donations.length / ITEMS_PER_PAGE))

  const paginatedGalleryImages = combinedImages.slice((galleryPage - 1) * ITEMS_PER_PAGE, galleryPage * ITEMS_PER_PAGE)
  const paginatedDonations = donations.slice((donationPage - 1) * ITEMS_PER_PAGE, donationPage * ITEMS_PER_PAGE)

  useEffect(() => {
    setGalleryPage(1)
  }, [combinedImages.length])

  useEffect(() => {
    setDonationPage(1)
  }, [donations.length])

  const renderPagination = (currentPage, totalPages, onPageChange) => {
    if (totalPages <= 1) return null

    return (
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="px-3 py-1.5 text-sm rounded-md border border-[#C9A24D]/30 text-[#4A3F35] bg-white hover:bg-[#FAF9F6] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`min-w-[36px] px-2.5 py-1.5 text-sm rounded-md border transition-colors ${
              currentPage === page
                ? 'bg-[#C9A24D] text-white border-[#C9A24D]'
                : 'bg-white text-[#4A3F35] border-[#C9A24D]/30 hover:bg-[#FAF9F6]'
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="px-3 py-1.5 text-sm rounded-md border border-[#C9A24D]/30 text-[#4A3F35] bg-white hover:bg-[#FAF9F6] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    )
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[320px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image src="/assets/templemain.jpeg" alt="Temple Gallery" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#4A3F35]/70" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-[#FFD700] text-[13px] tracking-[0.15em] uppercase mb-3" style={{fontFamily:'Inter,sans-serif', textShadow: '0 0 20px rgba(255,215,0,0.7)', fontWeight:600}}>{t('gallery.visualJourney')}</p>
          <h1 className="text-[2.2rem] md:text-[3rem] mb-4" style={{fontFamily:'Cinzel,serif', fontWeight:600, textShadow: '0 0 30px rgba(255,215,0,0.8), 0 0 60px rgba(255,215,0,0.4)', color:'#FFFFFF'}}>{t('gallery.title')}</h1>
          <p className="text-white/80 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>{t('gallery.subtitle')}</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section bg-[#FAF9F6]">
        <div className="container-temple">

          {/* Image Grid - Unified Display */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
            {paginatedGalleryImages.map((image, index) => (
              <div
                key={index}
                onClick={(event) => openLightbox(event, galleryLightboxItems, (galleryPage - 1) * ITEMS_PER_PAGE + index)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg cursor-zoom-in border border-[#C9A24D]/10"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A3F35]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium" style={{fontFamily:'Cinzel,serif', fontSize:'15px'}}>{image.title || image.alt}</p>
                    {image.description && (
                      <p className="text-white/80 text-[12px] mt-1" style={{fontFamily:'EB Garamond,serif'}}>
                        {image.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-premium">
                    <svg className="w-6 h-6 text-[#C9A24D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="sm:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-1 px-1 hide-scrollbar">
            {paginatedGalleryImages.map((image, index) => (
              <div
                key={index}
                onClick={(event) => openLightbox(event, galleryLightboxItems, (galleryPage - 1) * ITEMS_PER_PAGE + index)}
                className="group relative min-w-[84%] max-w-[84%] aspect-[4/3] rounded-xl overflow-hidden shadow-lg cursor-zoom-in border border-[#C9A24D]/10 snap-start"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A3F35]/70 via-transparent to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-medium" style={{fontFamily:'Cinzel,serif', fontSize:'15px'}}>{image.title || image.alt}</p>
                    {image.description && (
                      <p className="text-white/80 text-[12px] mt-1" style={{fontFamily:'EB Garamond,serif'}}>
                        {image.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {renderPagination(galleryPage, galleryTotalPages, setGalleryPage)}

          {galleryTotalPages > 1 && (
            <div className="sm:hidden flex justify-center mt-3">
              <div className="swipe-hint">
                <span>Swipe to see next</span>
                <svg viewBox="0 0 24 24" aria-hidden>
                  <path strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" d="M7 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          )}

          {/* Annadanam Donors Section */}
          <div className="mt-20">
            <div className="text-center mb-10">
              <h2 className="text-[1.8rem] text-[#1C1C1C] mb-4" style={{fontFamily:'Cinzel,serif'}}>{t('gallery.donorsTitle')}</h2>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="block w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C9A24D]" />
                <svg className="w-3 h-3 text-[#C9A24D]" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>
                <span className="block w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C9A24D]" />
              </div>
              <p className="text-[#6B6B6B] max-w-2xl mx-auto text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                {t('gallery.donorsDesc')}
              </p>
            </div>

            {donations.length > 0 ? (
              <>
              <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
                {paginatedDonations.map((donation, index) => (
                  <div
                    key={donation.id}
                    className="bg-white rounded-xl overflow-hidden border border-[#C9A24D]/20 shadow-md hover:shadow-xl transition-all duration-500 group"
                  >
                    <div
                      onClick={(event) => openLightbox(event, donationLightboxItems, (donationPage - 1) * ITEMS_PER_PAGE + index)}
                      className="relative aspect-[4/3] overflow-hidden cursor-zoom-in"
                    >
                      <img
                        src={donation.image_url}
                        alt={donation.donor_name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      {/* Gold accent bar at top */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
                    </div>
                    <div className="p-6 text-center bg-gradient-to-b from-white to-[#FAF9F6]">
                      <h4 className="text-[#1C1C1C] mb-2 text-[17px] tracking-wide" style={{fontFamily:'Cinzel,serif'}}>
                        {donation.donor_name}
                      </h4>
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="block w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C9A24D]" />
                        <svg className="w-2.5 h-2.5 text-[#C9A24D]" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>
                        <span className="block w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C9A24D]" />
                      </div>
                      <p className="text-[#C9A24D] font-semibold text-[20px]" style={{fontFamily:'Cinzel,serif'}}>
                        {formatCurrency(donation.amount)}
                      </p>
                      <p className="text-[11px] text-[#6B6B6B] mt-2 tracking-wider uppercase" style={{fontFamily:'Inter,sans-serif'}}>
                        {new Date(donation.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="sm:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 -mx-1 px-1 hide-scrollbar">
                {paginatedDonations.map((donation, index) => (
                  <div
                    key={donation.id}
                    className="min-w-[84%] max-w-[84%] snap-start bg-white rounded-xl overflow-hidden border border-[#C9A24D]/20 shadow-md"
                  >
                    <div
                      onClick={(event) => openLightbox(event, donationLightboxItems, (donationPage - 1) * ITEMS_PER_PAGE + index)}
                      className="relative aspect-[4/3] overflow-hidden cursor-zoom-in"
                    >
                      <img
                        src={donation.image_url}
                        alt={donation.donor_name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
                    </div>
                    <div className="p-6 text-center bg-gradient-to-b from-white to-[#FAF9F6]">
                      <h4 className="text-[#1C1C1C] mb-2 text-[17px] tracking-wide" style={{fontFamily:'Cinzel,serif'}}>
                        {donation.donor_name}
                      </h4>
                      <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="block w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C9A24D]" />
                        <svg className="w-2.5 h-2.5 text-[#C9A24D]" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>
                        <span className="block w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C9A24D]" />
                      </div>
                      <p className="text-[#C9A24D] font-semibold text-[20px]" style={{fontFamily:'Cinzel,serif'}}>
                        {formatCurrency(donation.amount)}
                      </p>
                      <p className="text-[11px] text-[#6B6B6B] mt-2 tracking-wider uppercase" style={{fontFamily:'Inter,sans-serif'}}>
                        {new Date(donation.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {renderPagination(donationPage, donationTotalPages, setDonationPage)}

              {donationTotalPages > 1 && (
                <div className="sm:hidden flex justify-center mt-3">
                  <div className="swipe-hint">
                    <span>Swipe to see next</span>
                    <svg viewBox="0 0 24 24" aria-hidden>
                      <path strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" d="M7 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
              </>
            ) : (
              <div className="bg-[#F8F6F2] p-10 rounded-xl text-center border border-[#C9A24D]/20">
                <p className="text-[#6B6B6B] mb-6 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
                  {t('gallery.donorsEmpty')}
                </p>
                <Link href="/donate" className="btn-gold">{t('gallery.sponsorAnnadanam')}</Link>
              </div>
            )}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <p className="text-[#6B6B6B] mb-6 text-[16px]" style={{fontFamily:'EB Garamond,serif'}}>
              {t('gallery.contributeImages')}
            </p>
            <Link href="/contact" className="btn-secondary">{t('gallery.contactUs')}</Link>
          </div>
        </div>
      </section>

      <ImageLightbox
        lightbox={lightboxImage}
        onRequestClose={() => setLightboxImage(null)}
      />
    </>
  )
}
