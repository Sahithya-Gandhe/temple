import { Metadata } from 'next'
import LocationContent from '@/components/LocationContent'

export const metadata: Metadata = {
  title: 'Location | Sri Agastheeshwara Swamy Temple, Thondavada',
  description: 'How to reach Sri Agastheeshwara Swamy Temple, Thondavada - located 10 km from Tirupati on the Tirupati-Chittoor-Bengaluru Highway.',
}

export default function LocationPage() {
  return <LocationContent />
}
