'use client'
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Donation {
  id: string
  donor_name: string
  amount: number
  image_url: string
  approved: boolean
  created_at: string
}

export default function AdminDashboard() {
  const [donations, setDonations] = useState<Donation[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [donorName, setDonorName] = useState('')
  const [amount, setAmount] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const router = useRouter()

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
    } finally {
      setLoading(false)
    }
  }, [router])

  useEffect(() => {
    fetchDonations()
  }, [fetchDonations])

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    router.push('/admin')
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => setImagePreview(reader.result as string)
      reader.readAsDataURL(file)
    }
  }

  const clearForm = () => {
    setDonorName('')
    setAmount('')
    setImageFile(null)
    setImagePreview(null)
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

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val)

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })

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
    <div className="min-h-screen bg-[#FAF9F6]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FAF9F6] border-b border-[#C9A24D]/20 px-4 py-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#C9A24D]/10 rounded-full flex items-center justify-center border-2 border-[#C9A24D]/40">
              <span className="text-xl">🛕</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-[#1C1C1C]" style={{ fontFamily: 'Cinzel, serif' }}>Admin Dashboard</h1>
              <p className="text-xs text-[#6B6B6B] tracking-wide uppercase" style={{ fontFamily: 'Inter, sans-serif' }}>Annadanam Management</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" target="_blank" className="text-[#C9A24D] hover:text-[#4A3F35] text-sm font-medium transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              View Site →
            </Link>
            <button onClick={handleLogout} className="px-5 py-2 bg-[#C9A24D] text-white text-sm font-medium rounded-md hover:bg-[#D4B56A] transition-all shadow-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        {/* Message */}
        {message && (
          <div className={`mb-6 p-4 rounded-lg text-sm font-medium ${message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
            }`} style={{ fontFamily: 'Inter, sans-serif' }}>
            {message.text}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 border border-[#C9A24D]/15 sticky top-24">
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
                        <span className="text-3xl block mb-2">📷</span>
                        <span className="text-sm text-[#6B6B6B]" style={{ fontFamily: 'Inter, sans-serif' }}>Click to upload photo</span>
                        <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
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
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-6 border border-[#C9A24D]/15">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-semibold text-[#C9A24D]" style={{ fontFamily: 'Cinzel, serif' }}>
                  Donations ({donations.length})
                </h2>
                <p className="text-sm text-[#4A3F35] font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Total: {donations.length > 0 ? formatCurrency(donations.reduce((sum, d) => sum + Number(d.amount), 0)) : '₹0'}
                </p>
              </div>

              {donations.length === 0 ? (
                <div className="text-center py-16 bg-[#FAF9F6] rounded-xl border border-[#C9A24D]/10">
                  <span className="text-5xl block mb-4 opacity-40">🍛</span>
                  <p className="text-[#6B6B6B]" style={{ fontFamily: 'EB Garamond, serif' }}>No donations yet</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-5">
                  {donations.map((d) => (
                    <div key={d.id} className="bg-[#FAF9F6] rounded-xl overflow-hidden border border-[#C9A24D]/15 shadow-sm hover:shadow-md transition-shadow">
                      <div className="aspect-[4/3] relative">
                        <img src={d.image_url} alt={d.donor_name} className="w-full h-full object-cover" />
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
