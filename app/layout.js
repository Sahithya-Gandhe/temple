import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AskNandi from '@/components/AskNandi'
import ClientProviders from '@/components/ClientProviders'

export const metadata = {
  title: 'Sri Agastheeshwara Swamy Temple, Thondavada | Sacred Shaiva Kshetram',
  description: 'Official website of Sri Agastheeshwara Swamy Temple, Thondavada - A sacred Shaiva Kshetram on the banks of the Swarnamukhi River near Tirupati, Andhra Pradesh.',
  keywords: 'Sri Agastheeshwara Swamy Temple, Thondavada, Shaiva Temple, Swarnamukhi River, Tirupati, Sage Agastya, Hindu Temple, Annadanam',
  openGraph: {
    title: 'Sri Agastheeshwara Swamy Temple, Thondavada',
    description: 'A Sacred Shaiva Kshetram on the Banks of the Swarnamukhi River',
    url: 'https://www.agastheeshwaradevasthanam.in',
    siteName: 'Sri Agastheeshwara Devasthanam',
    locale: 'en_IN',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ClientProviders>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <AskNandi />
        </ClientProviders>
      </body>
    </html>
  )
}
