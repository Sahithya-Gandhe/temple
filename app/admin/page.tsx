'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Invalid credentials')
        setLoading(false)
        return
      }

      router.push('/admin/dashboard')
    } catch {
      setError('Network error. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ background: '#FAF9F6' }}>
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg p-8 border" style={{ borderColor: 'rgba(201,162,77,0.2)' }}>
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 bg-[#C9A24D]/10 rounded-full flex items-center justify-center border-2 border-[#C9A24D]/40">
              <span className="text-3xl">🛕</span>
            </div>
            <h1 className="text-2xl font-semibold" style={{ fontFamily: 'Cinzel, serif', color: '#C9A24D' }}>
              Admin Login
            </h1>
            <p className="text-sm mt-2" style={{ color: '#6B6B6B', fontFamily: 'EB Garamond, serif' }}>
              Sri Agastheeshwara Devasthanam
            </p>
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#4A3F35', fontFamily: 'Inter, sans-serif' }}>
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D]/20 transition-all"
                style={{ borderColor: 'rgba(201,162,77,0.3)', fontFamily: 'Inter, sans-serif' }}
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" style={{ color: '#4A3F35', fontFamily: 'Inter, sans-serif' }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#C9A24D] focus:ring-1 focus:ring-[#C9A24D]/20 transition-all"
                style={{ borderColor: 'rgba(201,162,77,0.3)', fontFamily: 'Inter, sans-serif' }}
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-lg text-white text-sm font-medium uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
              style={{
                background: '#C9A24D',
                fontFamily: 'Cinzel, serif',
                letterSpacing: '0.08em',
              }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-xs mt-6" style={{ color: '#6B6B6B', fontFamily: 'Inter, sans-serif' }}>
            This area is for authorized temple administrators only.
          </p>
        </div>
      </div>
    </div>
  )
}
