import { Metadata } from 'next'
import ContactContent from '@/components/ContactContent'

export const metadata: Metadata = {
  title: 'Contact | Sri Agastheeswara Swamy Temple, Thondavada',
  description: 'Contact Sri Agastheeswara Swamy Temple trustees and administration for inquiries, donations, and visit planning.',
}

export default function ContactPage() {
  return <ContactContent />
}
