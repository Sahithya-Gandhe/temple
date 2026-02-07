import { Metadata } from 'next'
import AboutContent from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'About | Sri Agastheeshwara Swamy Temple, Thondavada',
  description: 'Learn about Sri Agastheeshwara Swamy Temple, the presiding deities, and its spiritual significance as a sacred Shaiva Kshetram.',
}

export default function AboutPage() {
  return <AboutContent />
}
