'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [donors, setDonors] = useState([])
  const [uploading, setUploading] = useState(false)
  const [newDonor, setNewDonor] = useState({ name: '', image: null })

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem('adminAuth')
    if (auth !== 'true') {
      window.location.href = '/admin'
      return
    }
    setIsAuthenticated(true)

    // Load donors from localStorage (demo - replace with actual DB)
    const savedDonors = localStorage.getItem('annadanamDonors')
    if (savedDonors) {
      setDonors(JSON.parse(savedDonors))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('adminAuth')
    window.location.href = '/admin'
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewDonor({ ...newDonor, image: reader.result })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAddDonor = (e) => {
    e.preventDefault()
    if (!newDonor.image) return

    setUploading(true)
    
    const donor = {
      id: Date.now(),
      name: newDonor.name || 'Anonymous Devotee',
      image: newDonor.image,
      date: new Date().toLocaleDateString('en-IN'),
      approved: true
    }

    const updatedDonors = [...donors, donor]
    setDonors(updatedDonors)
    localStorage.setItem('annadanamDonors', JSON.stringify(updatedDonors))
    
    setNewDonor({ name: '', image: null })
    setUploading(false)
  }

  const handleDeleteDonor = (id) => {
    if (confirm('Are you sure you want to delete this donor image?')) {
      const updatedDonors = donors.filter(d => d.id !== id)
      setDonors(updatedDonors)
      localStorage.setItem('annadanamDonors', JSON.stringify(updatedDonors))
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-ivory flex items-center justify-center">
        <p className="text-temple-text/60">Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-ivory">
      {/* Admin Header */}
      <header className="bg-temple-accent text-white p-4 shadow-lg">
        <div className="container-temple flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🛕</span>
            <div>
              <h1 className="font-serif text-lg text-white">Admin Dashboard</h1>
              <p className="text-white/70 text-xs">Sri Agastheeshwara Devasthanam</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-white/80 hover:text-white text-sm transition-colors">
              View Website
            </Link>
            <button
              onClick={handleLogout}
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded text-sm transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container-temple py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Upload Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-sandalwood/20 sticky top-8">
              <h2 className="text-xl font-serif text-temple-accent mb-6">
                Upload Annadanam Donor Image
              </h2>

              <form onSubmit={handleAddDonor} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-temple-text mb-2">
                    Donor Name (Optional)
                  </label>
                  <input
                    type="text"
                    value={newDonor.name}
                    onChange={(e) => setNewDonor({ ...newDonor, name: e.target.value })}
                    className="w-full px-4 py-3 border border-sandalwood/30 rounded-lg focus:outline-none focus:border-temple-accent"
                    placeholder="Enter donor name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-temple-text mb-2">
                    Image <span className="text-sandalwood">*</span>
                  </label>
                  <div className="border-2 border-dashed border-sandalwood/30 rounded-lg p-6 text-center hover:border-temple-accent transition-colors">
                    {newDonor.image ? (
                      <div className="relative">
                        <img
                          src={newDonor.image}
                          alt="Preview"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => setNewDonor({ ...newDonor, image: null })}
                          className="absolute top-2 right-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      <label className="cursor-pointer block">
                        <span className="text-4xl mb-2 block">📷</span>
                        <span className="text-temple-text/60 text-sm">
                          Click to upload image
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                      </label>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={!newDonor.image || uploading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {uploading ? 'Uploading...' : 'Upload Image'}
                </button>
              </form>
            </div>
          </div>

          {/* Donors List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-sandalwood/20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-serif text-temple-accent">
                  Annadanam Donors
                </h2>
                <span className="text-sm text-temple-text/60">
                  {donors.length} {donors.length === 1 ? 'image' : 'images'}
                </span>
              </div>

              {donors.length === 0 ? (
                <div className="text-center py-12">
                  <span className="text-6xl mb-4 block opacity-50">🍛</span>
                  <p className="text-temple-text/60">
                    No donor images uploaded yet.
                  </p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {donors.map((donor) => (
                    <div
                      key={donor.id}
                      className="bg-ivory rounded-lg overflow-hidden border border-sandalwood/20"
                    >
                      <div className="relative aspect-square">
                        <img
                          src={donor.image}
                          alt={donor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-3">
                        <p className="font-medium text-temple-accent truncate">
                          {donor.name}
                        </p>
                        <p className="text-xs text-temple-text/60">{donor.date}</p>
                        <div className="flex gap-2 mt-2">
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                            Approved
                          </span>
                          <button
                            onClick={() => handleDeleteDonor(donor.id)}
                            className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200"
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

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="bg-white rounded-lg p-4 border border-sandalwood/20 text-center">
                <p className="text-3xl font-serif text-temple-accent">{donors.length}</p>
                <p className="text-xs text-temple-text/60">Donor Images</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-sandalwood/20 text-center">
                <p className="text-3xl font-serif text-temple-accent">300+</p>
                <p className="text-xs text-temple-text/60">Daily Devotees</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-sandalwood/20 text-center">
                <p className="text-3xl font-serif text-temple-accent">12:30</p>
                <p className="text-xs text-temple-text/60">Annadanam Time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
