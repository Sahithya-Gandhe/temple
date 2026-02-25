import './globals.css'
import ClientProviders from '@/components/ClientProviders'
import RootShell from '@/components/RootShell'

export const metadata = {
  title: 'Sri Agastheeswara Swamy Temple, Thondavada | Sacred Shaiva Kshetram',
  description: 'Official website of Sri Agastheeswara Swamy Temple, Thondavada - A sacred Shaiva Kshetram on the banks of the Swarnamukhi River near Tirupati, Andhra Pradesh.',
  keywords: 'Sri Agastheeswara Swamy Temple, Thondavada, Shaiva Temple, Swarnamukhi River, Tirupati, Sage Agastya, Hindu Temple, Annadanam',
  openGraph: {
    title: 'Sri Agastheeswara Swamy Temple, Thondavada',
    description: 'A Sacred Shaiva Kshetram on the Banks of the Swarnamukhi River',
    url: 'https://www.agastheeswaradevasthanam.in',
    siteName: 'Sri Agastheeswara Devasthanam',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="antialiased">
        <ClientProviders>
          <RootShell>
            {children}
          </RootShell>
        </ClientProviders>
      </body>
    </html>
  )
}
