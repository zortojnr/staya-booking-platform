import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { Toaster } from 'react-hot-toast'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Staya Bookings - Hotel & Travel Booking Platform for Taraba State',
  description: 'Book hotels, lodges, and travel tickets across Taraba State. Modern, secure, and reliable booking platform with instant confirmations.',
  keywords: 'hotel booking, travel booking, Taraba State, Nigeria, accommodation, bus tickets',
  authors: [{ name: 'Staya Bookings' }],
  creator: 'Staya Bookings',
  publisher: 'Staya Bookings',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://stayabookings.com'),
  openGraph: {
    title: 'Staya Bookings - Hotel & Travel Booking Platform',
    description: 'Book hotels, lodges, and travel tickets across Taraba State',
    url: 'https://stayabookings.com',
    siteName: 'Staya Bookings',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Staya Bookings Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Staya Bookings - Hotel & Travel Booking Platform',
    description: 'Book hotels, lodges, and travel tickets across Taraba State',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1CBCCF',
                color: '#fff',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}