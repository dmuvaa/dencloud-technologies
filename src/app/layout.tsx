import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Dencloud Technologies | Innovative Software Solutions',
  description: 'Empowering businesses with cutting-edge software solutions. We specialize in web and mobile app development, AI, cloud solutions, and more.',
  keywords: 'software development, web apps, mobile apps, AI, cloud solutions, SEO, e-commerce',
  openGraph: {
    title: 'Dencloud Technologies | Innovative Software Solutions',
    description: 'Empowering businesses with cutting-edge software solutions. We specialize in web and mobile app development, AI, cloud solutions, and more.',
    url: 'https://www.dencloudtechnologies.com',
    siteName: 'Dencloud Technologies',
    images: [
      {
        url: 'https://www.dencloudtechnologies.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dencloud Technologies | Innovative Software Solutions',
    description: 'Empowering businesses with cutting-edge software solutions. We specialize in web and mobile app development, AI, cloud solutions, and more.',
    images: ['https://www.dencloudtechnologies.com/twitter-image.jpg'],
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
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.dencloudtechnologies.com" />
        <meta name="author" content="Dencloud Technologies" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="content-language" content="en" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

