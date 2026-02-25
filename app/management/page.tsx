import { Metadata } from 'next'
import ManagementContent from '@/components/ManagementContent'

export const metadata: Metadata = {
  title: 'Temple Management | Sri Agastheeswara Swamy Temple, Thondavada',
  description: 'Learn about the hereditary trustees and management of Sri Agastheeswara Swamy Temple, preserved by the Mogili Reddy family for generations.',
}

export default function ManagementPage() {
  return <ManagementContent />
}
