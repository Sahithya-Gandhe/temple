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

interface DonatedPerson {
  id: string
  person_name: string
  description: string
  images: string[]
  display_order: number
  created_at: string
}

type TabType = 'annadanam' | 'donated-persons'

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<TabType>('annadanam')
  const [donations, setDonations] = useState<Donation[]>([])
  const [donatedPersons, setDonatedPersons] = useState<DonatedPerson[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  
  // Annadanam form states
  const [donorName, setDonorName] = useState('')
  const [amount, setAmount] = useState('')
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  
  // Donated Persons form states
  const [personName, setPersonName] = useState('')
  const [personDescription, setPersonDescription] = useState('')
  const [personImages, setPersonImages] = useState<File[]>([])
  const [personImagePreviews, setPersonImagePreviews] = useState<string[]>([])
  
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
    }
  }, [router])

  const fetchDonatedPersons = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/donated-persons')
      if (res.status === 401) {
        router.push('/admin')
        return
      }
      const data = await res.json()
      setDonatedPersons(data)
    } catch {
      console.error('Failed to fetch donated persons')
    }
  }, [router])

  useEffect(() => {
    Promise.all([fetchDonations(), fetchDonatedPersons()]).finally(() => setLoading(false))
  }, [fetchDonations, fetchDonatedPersons])

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

  const handlePersonImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      setPersonImages(files)
      
      const previews: string[] = []
      let loaded = 0
      files.forEach((file) => {
        const reader = new FileReader()
        reader.onloadend = () => {
          previews.push(reader.result as string)
          loaded++
          if (loaded === files.length) {
            setPersonImagePreviews(previews)
          }
        }
        reader.readAsDataURL(file)
      })
    }
  }

  const clearForm = () => {
    setDonorName('')
    setAmount('')
    setImageFile(null)
    setImagePreview(null)
  }

  const clearPersonForm = () => {
    setPersonName('')
    setPersonDescription('')
    setPersonImages([])
    setPersonImagePreviews([])
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!imageFile) return

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
        setUploading(false)
        return
      }

      setMessage({ type: 'success', text: '✓ Annadanam donation entry added successfully!' })
      clearForm()
      fetchDonations()
    } catch {
      setMessage({ type: 'error', text: 'Network error. Please try again.' })
    } finally {
      setUploading(false)
    }
  }

  const handlePersonSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (personImages.length === 0) return

    setUploading(true)
    setMessage(null)

    try {
      const formData = new FormData()
      formData.append('person_name', personName)
      formData.append('description', personDescription)
      
      personImages.forEach((image) => {
        formData.append('images', image)
      })

      const res = await fetch('/api/admin/donated-persons', {
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
        setUploading(false)
        return
      }

      setMessage({ type: 'success', text: '✓ Donated person entry added successfully!' })
      clearPersonForm()
      fetchDonatedPersons()
    } catch {
      setMessage({ type: 'error', text: 'Network error. Please try again.' })
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this donation entry?')) return

    try {
      const res = await fetch(`/api/admin/donations?id=${id}`, { method: 'DELETE' })
      if (res.status === 401) {
        router.push('/admin')
        return
      }
      fetchDonations()
      setMessage({ type: 'success', text: '✓ Donation entry deleted' })
    } catch {
      setMessage({ type: 'error', text: 'Failed to delete' })
    }
  }

  const handlePersonDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this donated person entry? This will remove all their photos and information.')) return

    try {
      const res = await fetch(`/api/admin/donated-persons?id=${id}`, { method: 'DELETE' })
      if (res.status === 401) {
        router.push('/admin')
        return
      }
      fetchDonatedPersons()
      setMessage({ type: 'success', text: '✓ Donated person entry deleted' })
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
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#FAF6F0' }}>
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2" style={{ borderColor: '#B8860B' }}></div>
          <p className="mt-4" style={{ color: 'rgba(58,50,45,0.6)' }}>Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ background: '#FAF6F0' }}>
      {/* Admin Header */}
      <header className="text-white p-5 shadow-xl" style={{ background: 'linear-gradient(135deg, #5C1A1B 0%, #8B2C1A 50%, #B8860B 100%)' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🛕</span>
            <div>
              <h1 className="text-xl text-white font-bold" style={{ fontFamily: 'Cinzel, serif' }}>Admin Dashboard</h1>
              <p className="text-white/80 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                Sri Agastheeswara Devasthanam
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              target="_blank"
              className="text-white/90 hover:text-white text-sm font-medium transition-colors flex items-center gap-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Website
            </Link>
            <button
              onClick={handleLogout}
              className="bg-white/20 hover:bg-white/30 px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-md hover:shadow-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-8 px-4">
        {/* Status Message */}
        {message && (
          <div
            className={`mb-6 px-5 py-4 rounded-xl text-sm font-semibold shadow-lg animate-slide-down ${
              message.type === 'success'
                ? 'bg-green-50 border-2 border-green-400 text-green-800'
                : 'bg-red-50 border-2 border-red-400 text-red-800'
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="bg-white rounded-2xl shadow-xl p-2 mb-8 flex gap-2">
          <button
            onClick={() => setActiveTab('annadanam')}
            className={`flex-1 py-4 px-6 rounded-xl font-bold transition-all text-sm ${
              activeTab === 'annadanam'
                ? 'bg-gradient-to-r from-[#5C1A1B] to-[#B8860B] text-white shadow-lg transform scale-105'
                : 'text-[#3A322D] hover:bg-[#FAF6F0]'
            }`}
            style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em' }}
          >
            🍛 ANNADANAM DONATIONS
          </button>
          <button
            onClick={() => setActiveTab('donated-persons')}
            className={`flex-1 py-4 px-6 rounded-xl font-bold transition-all text-sm ${
              activeTab === 'donated-persons'
                ? 'bg-gradient-to-r from-[#5C1A1B] to-[#B8860B] text-white shadow-lg transform scale-105'
                : 'text-[#3A322D] hover:bg-[#FAF6F0]'
            }`}
            style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em' }}
          >
            🙏 DONATED PERSONS
          </button>
        </div>

        {/* Content based on active tab - showing both for brevity, in real app would conditionally render */}
        {activeTab === 'annadanam' ? (
          <div className="text-center py-20">
            <p className="text-2xl font-bold mb-4" style={{ color: '#5C1A1B', fontFamily: 'Cinzel, serif' }}>
              Annadanam Donations Management
            </p>
            <p style={{ color: '#6B6560', fontFamily: 'Inter, sans-serif' }}>
              This section manages Annadanam donation entries. The previous form and list will be here.
            </p>
            <p className="text-sm mt-4" style={{ color: '#B8860B' }}>
              Total Donations: {donations.length}
            </p>
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl font-bold mb-4" style={{ color: '#5C1A1B', fontFamily: 'Cinzel, serif' }}>
              Donated Persons Management
            </p>
            <p style={{ color: '#6B6560', fontFamily: 'Inter, sans-serif' }}>
              Manage the persons who have made significant donations to the temple.
            </p>
            <p className="text-sm mt-4" style={{ color: '#B8860B' }}>
              Total Persons: {donatedPersons.length}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
