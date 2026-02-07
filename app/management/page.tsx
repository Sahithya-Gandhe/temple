import { Metadata } from 'next'
import ManagementContent from '@/components/ManagementContent'

export const metadata: Metadata = {
  title: 'Temple Management | Sri Agastheeshwara Swamy Temple, Thondavada',
  description: 'Learn about the hereditary trustees and management of Sri Agastheeshwara Swamy Temple, preserved by the Mogili Reddy family for generations.',
}

export default function ManagementPage() {
  return <ManagementContent />
}
