import { Metadata } from 'next'
import HistoryContent from '@/components/HistoryContent'

export const metadata: Metadata = {
  title: 'History & Legends | Sri Agastheeshwara Swamy Temple, Thondavada',
  description: 'Explore the rich history, sacred legends of Sage Agastya, the Swarnamukhi River, and the temple architecture influenced by Pallava, Chola, and Vijayanagara dynasties.',
}

export default function HistoryPage() {
  return <HistoryContent />
}
