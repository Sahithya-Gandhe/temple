'use client'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import ImageLightbox from '@/components/ImageLightbox'

interface Donation {
  id: string
  donor_name: string
  amount: number
  image_url: string
  approved: boolean
  created_at: string
}

interface GalleryImage {
  id: string
  image_url: string
  title: string | null
  description: string | null
  uploaded_at: string
}

export default function AdminDashboard() {
  const ITEMS_PER_PAGE = 4
  const [activeTab, setActiveTab] = useState<'donations' | 'gallery'>('donations')
  const [donations, setDonations] = useState<Donation[]>([])
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([])
  const [donationPage, setDonationPage] = useState(1)
  const [galleryPage, setGalleryPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [donorName, setDonorName] = useState('')
  const [amount, setAmount] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [galleryUploading, setGalleryUploading] = useState(false)
  const [galleryTitle, setGalleryTitle] = useState('')
  const [galleryDescription, setGalleryDescription] = useState('')
  const [galleryFile, setGalleryFile] = useState<File | null>(null)
  const [galleryPreview, setGalleryPreview] = useState<string | null>(null)
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string; originRect: { top: number; left: number; width: number; height: number } } | null>(null)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const router = useRouter()

  const openLightbox = (event: React.MouseEvent<HTMLDivElement>, src: string, alt: string) => {
    const rect = event.currentTarget.getBoundingClientRect()
    setLightboxImage({
      src,
      alt,
      originRect: {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      },
    })
  }

  const fetchDonations = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/donations')
      if (res.status === 401) {
        router.push('/admin')
        return
      }
      const data = await res.json()
      setDonations(data)
    } catch {
      console.error('Failed to fetch donations')
    }
  }, [router])

  const fetchGalleryImages = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/gallery-images')
      if (res.status === 401) {
        router.push('/admin')
        return
      }
      const data = await res.json()
      if (res.ok && Array.isArray(data)) {
        setGalleryImages(data)
      } else {
        setGalleryImages([])
        if (!res.ok) {
          console.error('Failed to fetch gallery images:', data?.error || 'Unknown error')
        }
      }
    } catch {
      console.error('Failed to fetch gallery images')
      setGalleryImages([])
    }
  }, [router])

  useEffect(() => {
    setLoading(true)
    Promise.all([fetchDonations(), fetchGalleryImages()]).finally(() => setLoading(false))
  }, [fetchDonations, fetchGalleryImages])

  useEffect(() => {
    setDonationPage(1)
  }, [donations.length])

  useEffect(() => {
    setGalleryPage(1)
  }, [galleryImages.length])

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
  }

  const handleDonationImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => setImagePreview(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const handleGalleryImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setGalleryFile(file)
      const reader = new FileReader()
      reader.onloadend = () => setGalleryPreview(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const clearForm = () => {
    setDonorName('')
    setAmount('')
    setImageFile(null)
    setImagePreview(null)
  }

  const clearGalleryForm = () => {
    setGalleryTitle('')
    setGalleryDescription('')
    setGalleryFile(null)
    setGalleryPreview(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!imageFile || !amount) return

    setUploading(true)
    setMessage(null)

    try {
      const formData = new FormData()
      formData.append('donor_name', donorName || 'Anonymous Devotee')
      formData.append('amount', amount)
      formData.append('image', imageFile)

      const res = await fetch('/api/admin/donations', {
        method: 'POST',
        body: formData,
      })

      if (res.status === 401) {
        router.push('/admin')
        return
      }

      if (!res.ok) {
        const data = await res.json()
        setMessage({ type: 'error', text: data.error || 'Upload failed' })
        return
      }

      setMessage({ type: 'success', text: '✓ Donation entry added!' })
      clearForm()
      fetchDonations()
    } catch {
      setMessage({ type: 'error', text: 'Network error' })
    } finally {
      setUploading(false)
    }
  }

  const handleGallerySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!galleryFile) return

    setGalleryUploading(true)
    setMessage(null)

    try {
      const formData = new FormData()
      formData.append('title', galleryTitle)
      formData.append('description', galleryDescription)
      formData.append('image', galleryFile)

      const res = await fetch('/api/admin/gallery-images', {
        method: 'POST',
        body: formData,
      })

      if (res.status === 401) {
        router.push('/admin')
        return
      }

      if (!res.ok) {
        const data = await res.json()
        setMessage({ type: 'error', text: data.error || 'Upload failed' })
        return
      }

      setMessage({ type: 'success', text: '✓ Gallery image added!' })
      clearGalleryForm()
      fetchGalleryImages()
    } catch {
      setMessage({ type: 'error', text: 'Network error' })
    } finally {
      setGalleryUploading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this donation entry?')) return

    try {
      const res = await fetch(`/api/admin/donations?id=${id}`, { method: 'DELETE' })
      if (res.status === 401) {
        router.push('/admin')
        return
      }
      fetchDonations()
      setMessage({ type: 'success', text: '✓ Deleted' })
    } catch {
      setMessage({ type: 'error', text: 'Failed to delete' })
    }
  }

  const handleGalleryDelete = async (id: string) => {
    if (!confirm('Delete this gallery image?')) return

    try {
      const res = await fetch(`/api/admin/gallery-images?id=${id}`, { method: 'DELETE' })
      if (res.status === 401) {
        router.push('/admin')
        return
      }
      fetchGalleryImages()
      setMessage({ type: 'success', text: '✓ Deleted' })
    } catch {
      setMessage({ type: 'error', text: 'Failed to delete' })
    }
  }

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val)

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })

  const donationTotalPages = Math.max(1, Math.ceil(donations.length / ITEMS_PER_PAGE))
  const galleryTotalPages = Math.max(1, Math.ceil(galleryImages.length / ITEMS_PER_PAGE))

  const paginatedDonations = donations.slice((donationPage - 1) * ITEMS_PER_PAGE, donationPage * ITEMS_PER_PAGE)
  const paginatedGalleryImages = galleryImages.slice((galleryPage - 1) * ITEMS_PER_PAGE, galleryPage * ITEMS_PER_PAGE)

  const renderPagination = (
    currentPage: number,
    totalPages: number,
    onPageChange: (page: number) => void
  ) => {
    if (totalPages <= 1) return null

    return (
      <div className="mt-6 flex flex-wrap items-center justify-center gap-2" style={{ fontFamily: 'Inter, sans-serif' }}>
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-[#C9A24D] border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-3 text-[#4A3F35]" style={{ fontFamily: 'EB Garamond, serif' }}>Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FAF9F6] border-b border-[#C9A24D]/20 px-3 sm:px-4 py-4 shadow-sm overflow-x-hidden">
        <div className="max-w-6xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between min-w-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C9A24D]/40 shadow-sm">
              <Image src="/assets/templelogoheader.jpeg" alt="Temple Logo" width={48} height={48} className="w-full h-full object-cover" />
            </div>
            <div className="min-w-0">
              <h1 className="!text-3xl sm:!text-xl leading-tight font-semibold text-[#1C1C1C] break-words" style={{ fontFamily: 'Cinzel, serif' }}>Admin Dashboard</h1>
              <p className="text-xs text-[#6B6B6B] tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>Annadanam Management</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 w-full sm:w-auto min-w-0">
            <LanguageSwitcher />
            <Link href="/" target="_blank" className="text-[#C9A24D] hover:text-[#4A3F35] text-xs sm:text-sm font-medium transition-colors whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
              View Site →
            </Link>
            <button onClick={handleLogout} className="px-4 sm:px-5 py-2 bg-[#C9A24D] text-white text-xs sm:text-sm font-medium rounded-md hover:bg-[#D4B56A] transition-all shadow-sm whitespace-nowrap" style={{ fontFamily: 'Inter, sans-serif' }}>
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
        {/* Message */}
        {message && (
          <div className={`mb-6 p-4 rounded-lg text-sm font-medium break-words ${message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
            }`} style={{ fontFamily: 'Inter, sans-serif' }}>
            {message.text}
          </div>
        )}

        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('donations')}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-all w-full sm:w-auto ${activeTab === 'donations'
              ? 'bg-[#C9A24D] text-white shadow-sm'
              : 'bg-white text-[#4A3F35] border border-[#C9A24D]/30 hover:bg-[#FAF9F6]'
            }`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Donations
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`px-4 py-2 rounded-md text-sm font-semibold transition-all w-full sm:w-auto ${activeTab === 'gallery'
              ? 'bg-[#C9A24D] text-white shadow-sm'
              : 'bg-white text-[#4A3F35] border border-[#C9A24D]/30 hover:bg-[#FAF9F6]'
            }`}
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Gallery
          </button>
        </div>

        {activeTab === 'donations' ? (
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-8 min-w-0">
            {/* Upload Form */}
            <div className="lg:col-span-1 min-w-0">
              <div className="bg-white rounded-xl shadow-md p-3.5 sm:p-6 border border-[#C9A24D]/15 lg:sticky lg:top-24 min-w-0 max-w-full overflow-hidden">
                <h2 className="text-lg font-semibold text-[#C9A24D] mb-5" style={{ fontFamily: 'Cinzel, serif' }}>
                  Add Donation
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#4A3F35] mb-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>Donor Name</label>
                    <input
                      type="text"
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      className="w-full px-4 py-2.5 border border-[#C9A24D]/25 rounded-lg focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D]/20 transition-all"
                      placeholder="Anonymous Devotee"
                      style={{ fontFamily: 'EB Garamond, serif' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A3F35] mb-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>Amount (₹) *</label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      required
                      min="1"
                      className="w-full px-4 py-2.5 border border-[#C9A24D]/25 rounded-lg focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D]/20 transition-all"
                      placeholder="5000"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A3F35] mb-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>Photo *</label>
                    <div className="border-2 border-dashed border-[#C9A24D]/30 rounded-lg p-4 text-center hover:border-[#C9A24D] transition-colors cursor-pointer bg-[#FAF9F6]">
                      {imagePreview ? (
                        <div className="relative">
                          <img src={imagePreview} alt="Preview" className="w-full h-36 object-cover rounded-lg" />
                          <button
                            type="button"
                            onClick={() => { setImageFile(null); setImagePreview(null) }}
                            className="absolute top-2 right-2 w-7 h-7 bg-red-500 text-white rounded-full text-sm shadow-md hover:bg-red-600"
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <label className="cursor-pointer block py-4">
                          <svg className="w-8 h-8 mx-auto mb-2 text-[#C9A24D]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"/></svg>
                          <span className="block text-center text-xs sm:text-sm text-[#6B6B6B] break-words" style={{ fontFamily: 'Inter, sans-serif' }}>Click to upload photo</span>
                          <input type="file" accept="image/*" onChange={handleDonationImageChange} className="hidden" />
                        </label>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!imageFile || !amount || uploading}
                    className="w-full py-3 rounded-lg text-white text-sm font-semibold bg-[#C9A24D] hover:bg-[#D4B56A] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.05em' }}
                  >
                    {uploading ? 'Uploading...' : 'Add Donation'}
                  </button>
                </form>
              </div>
            </div>

            {/* Donations List */}
            <div className="lg:col-span-2 min-w-0">
              <div className="bg-white rounded-xl shadow-md p-3.5 sm:p-6 border border-[#C9A24D]/15 min-w-0 max-w-full overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-3 mb-5">
                  <h2 className="text-lg font-semibold text-[#C9A24D]" style={{ fontFamily: 'Cinzel, serif' }}>
                    Donations ({donations.length})
                  </h2>
                  <p className="text-sm text-[#4A3F35] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Total: {donations.length > 0 ? formatCurrency(donations.reduce((sum, d) => sum + Number(d.amount), 0)) : '₹0'}
                  </p>
                </div>

                {donations.length === 0 ? (
                  <div className="text-center py-12 sm:py-16 bg-[#FAF9F6] rounded-xl border border-[#C9A24D]/10">
                    <svg className="w-12 h-12 mx-auto mb-4 text-[#C9A24D]/30" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/></svg>
                    <p className="text-[#6B6B6B]" style={{ fontFamily: 'EB Garamond, serif' }}>No donations yet</p>
                  </div>
                ) : (
                  <>
                  <div className="hidden sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-5">
                    {paginatedDonations.map((d) => (
                      <div key={d.id} className="bg-[#FAF9F6] rounded-xl overflow-hidden border border-[#C9A24D]/15 shadow-sm hover:shadow-md transition-shadow">
                        <div onClick={(event) => openLightbox(event, d.image_url, d.donor_name)} className="aspect-[5/4] relative cursor-zoom-in">
                          <img src={d.image_url} alt={d.donor_name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                          {/* Name Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                            <p className="text-[#C9A24D] font-semibold text-lg truncate w-full" style={{ fontFamily: 'Cinzel, serif', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                              {d.donor_name}
                            </p>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <p className="text-xl font-bold text-[#C9A24D]" style={{ fontFamily: 'Cinzel, serif' }}>{formatCurrency(d.amount)}</p>
                            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${d.approved ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                              {d.approved ? 'Approved' : 'Pending'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#C9A24D]/10">
                            <p className="text-xs text-[#6B6B6B]" style={{ fontFamily: 'Inter, sans-serif' }}>{formatDate(d.created_at)}</p>
                            <button
                              onClick={() => handleDelete(d.id)}
                              className="text-xs px-3 py-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors font-medium"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="sm:hidden w-full max-w-full flex gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pb-2 hide-scrollbar">
                    {paginatedDonations.map((d) => (
                      <div key={d.id} className="min-w-[84%] max-w-[84%] snap-start bg-[#FAF9F6] rounded-xl overflow-hidden border border-[#C9A24D]/15 shadow-sm">
                        <div onClick={(event) => openLightbox(event, d.image_url, d.donor_name)} className="aspect-[4/3] relative cursor-zoom-in">
                          <img src={d.image_url} alt={d.donor_name} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                            <p className="text-[#C9A24D] font-semibold text-lg truncate w-full" style={{ fontFamily: 'Cinzel, serif', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                              {d.donor_name}
                            </p>
                          </div>
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between">
                            <p className="text-xl font-bold text-[#C9A24D]" style={{ fontFamily: 'Cinzel, serif' }}>{formatCurrency(d.amount)}</p>
                            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${d.approved ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`} style={{ fontFamily: 'Inter, sans-serif' }}>
                              {d.approved ? 'Approved' : 'Pending'}
                            </span>
                          </div>
                          <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#C9A24D]/10">
                            <p className="text-xs text-[#6B6B6B]" style={{ fontFamily: 'Inter, sans-serif' }}>{formatDate(d.created_at)}</p>
                            <button
                              onClick={() => handleDelete(d.id)}
                              className="text-xs px-3 py-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors font-medium"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              Delete
                            </button>
                          </div>
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
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-8 min-w-0">
            {/* Gallery Upload Form */}
            <div className="lg:col-span-1 min-w-0">
              <div className="bg-white rounded-xl shadow-md p-3.5 sm:p-6 border border-[#C9A24D]/15 lg:sticky lg:top-24 min-w-0 max-w-full overflow-hidden">
                <h2 className="text-lg font-semibold text-[#C9A24D] mb-5" style={{ fontFamily: 'Cinzel, serif' }}>
                  Add Gallery Image
                </h2>

                <form onSubmit={handleGallerySubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-[#4A3F35] mb-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>Title</label>
                    <input
                      type="text"
                      value={galleryTitle}
                      onChange={(e) => setGalleryTitle(e.target.value)}
                      className="w-full px-4 py-2.5 border border-[#C9A24D]/25 rounded-lg focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D]/20 transition-all"
                      placeholder="Temple festival"
                      style={{ fontFamily: 'EB Garamond, serif' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A3F35] mb-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>Description</label>
                    <textarea
                      value={galleryDescription}
                      onChange={(e) => setGalleryDescription(e.target.value)}
                      rows={3}
                      className="w-full px-4 py-2.5 border border-[#C9A24D]/25 rounded-lg focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D]/20 transition-all"
                      placeholder="Optional short note"
                      style={{ fontFamily: 'EB Garamond, serif' }}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#4A3F35] mb-1.5" style={{ fontFamily: 'Inter, sans-serif' }}>Photo *</label>
                    <div className="border-2 border-dashed border-[#C9A24D]/30 rounded-lg p-4 text-center hover:border-[#C9A24D] transition-colors cursor-pointer bg-[#FAF9F6]">
                      {galleryPreview ? (
                        <div className="relative">
                          <img src={galleryPreview} alt="Preview" className="w-full h-36 object-cover rounded-lg" />
                          <button
                            type="button"
                            onClick={() => { setGalleryFile(null); setGalleryPreview(null) }}
                            className="absolute top-2 right-2 w-7 h-7 bg-red-500 text-white rounded-full text-sm shadow-md hover:bg-red-600"
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <label className="cursor-pointer block py-4">
                          <svg className="w-8 h-8 mx-auto mb-2 text-[#C9A24D]" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z"/></svg>
                          <span className="block text-center text-xs sm:text-sm text-[#6B6B6B] break-words" style={{ fontFamily: 'Inter, sans-serif' }}>Click to upload photo</span>
                          <input type="file" accept="image/*" onChange={handleGalleryImageChange} className="hidden" />
                        </label>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={!galleryFile || galleryUploading}
                    className="w-full py-3 rounded-lg text-white text-sm font-semibold bg-[#C9A24D] hover:bg-[#D4B56A] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    style={{ fontFamily: 'Cinzel, serif', letterSpacing: '0.05em' }}
                  >
                    {galleryUploading ? 'Uploading...' : 'Add Image'}
                  </button>
                </form>
              </div>
            </div>

            {/* Gallery List */}
            <div className="lg:col-span-2 min-w-0">
              <div className="bg-white rounded-xl shadow-md p-3.5 sm:p-6 border border-[#C9A24D]/15 min-w-0 max-w-full overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 sm:gap-3 mb-5">
                  <h2 className="text-lg font-semibold text-[#C9A24D]" style={{ fontFamily: 'Cinzel, serif' }}>
                    Gallery Images ({galleryImages.length})
                  </h2>
                  <p className="text-xs text-[#6B6B6B]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Latest upload first
                  </p>
                </div>

                {galleryImages.length === 0 ? (
                  <div className="text-center py-12 sm:py-16 bg-[#FAF9F6] rounded-xl border border-[#C9A24D]/10">
                    <svg className="w-12 h-12 mx-auto mb-4 text-[#C9A24D]/30" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V8.25M6.75 9.75h10.5M12 3v6m0 0H9m3 0h3"/></svg>
                    <p className="text-[#6B6B6B]" style={{ fontFamily: 'EB Garamond, serif' }}>No gallery images yet</p>
                  </div>
                ) : (
                  <>
                  <div className="hidden sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-5">
                    {paginatedGalleryImages.map((image) => (
                      <div key={image.id} className="bg-[#FAF9F6] rounded-xl overflow-hidden border border-[#C9A24D]/15 shadow-sm hover:shadow-md transition-shadow">
                        <div onClick={(event) => openLightbox(event, image.image_url, image.title || 'Gallery image')} className="aspect-[5/4] relative cursor-zoom-in">
                          <img src={image.image_url} alt={image.title || 'Gallery image'} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                          {image.title && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                              <p className="text-[#FFD877] font-semibold text-lg truncate w-full" style={{ fontFamily: 'Cinzel, serif', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                                {image.title}
                              </p>
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          {image.description && (
                            <p className="text-sm text-[#4A3F35] mb-3" style={{ fontFamily: 'EB Garamond, serif' }}>
                              {image.description}
                            </p>
                          )}
                          <div className="flex items-center justify-between pt-3 border-t border-[#C9A24D]/10">
                            <p className="text-xs text-[#6B6B6B]" style={{ fontFamily: 'Inter, sans-serif' }}>{formatDate(image.uploaded_at)}</p>
                            <button
                              onClick={() => handleGalleryDelete(image.id)}
                              className="text-xs px-3 py-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors font-medium"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="sm:hidden w-full max-w-full flex gap-4 overflow-x-auto overscroll-x-contain snap-x snap-mandatory pb-2 hide-scrollbar">
                    {paginatedGalleryImages.map((image) => (
                      <div key={image.id} className="min-w-[84%] max-w-[84%] snap-start bg-[#FAF9F6] rounded-xl overflow-hidden border border-[#C9A24D]/15 shadow-sm">
                        <div onClick={(event) => openLightbox(event, image.image_url, image.title || 'Gallery image')} className="aspect-[4/3] relative cursor-zoom-in">
                          <img src={image.image_url} alt={image.title || 'Gallery image'} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                          {image.title && (
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4">
                              <p className="text-[#FFD877] font-semibold text-lg truncate w-full" style={{ fontFamily: 'Cinzel, serif', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
                                {image.title}
                              </p>
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          {image.description && (
                            <p className="text-sm text-[#4A3F35] mb-3" style={{ fontFamily: 'EB Garamond, serif' }}>
                              {image.description}
                            </p>
                          )}
                          <div className="flex items-center justify-between pt-3 border-t border-[#C9A24D]/10">
                            <p className="text-xs text-[#6B6B6B]" style={{ fontFamily: 'Inter, sans-serif' }}>{formatDate(image.uploaded_at)}</p>
                            <button
                              onClick={() => handleGalleryDelete(image.id)}
                              className="text-xs px-3 py-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors font-medium"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              Delete
                            </button>
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
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <ImageLightbox
        lightbox={lightboxImage}
        onRequestClose={() => setLightboxImage(null)}
      />
    </div>
  )
}
