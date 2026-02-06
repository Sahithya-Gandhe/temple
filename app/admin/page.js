'use client'
import { useState } from 'react'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simple demo authentication - replace with actual auth logic
    if (email === 'admin@agastheeshwaradevasthanam.in' && password === 'temple2024') {
      localStorage.setItem('adminAuth', 'true')
      window.location.href = '/admin/dashboard'
    } else {
      setError('Invalid credentials. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-sandalwood/20">
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-5xl mb-4 block">🛕</span>
            <h1 className="text-2xl font-serif text-temple-accent">Admin Login</h1>
            <p className="text-sm text-temple-text/60 mt-2">
              Sri Agastheeshwara Devasthanam
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-temple-text mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-sandalwood/30 rounded-lg focus:outline-none focus:border-temple-accent focus:ring-1 focus:ring-temple-accent transition-colors"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-temple-text mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-sandalwood/30 rounded-lg focus:outline-none focus:border-temple-accent focus:ring-1 focus:ring-temple-accent transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p className="text-center text-xs text-temple-text/50 mt-6">
            This area is for authorized temple administrators only.
          </p>
        </div>
      </div>
    </div>
  )
}
