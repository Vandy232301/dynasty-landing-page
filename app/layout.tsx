import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://yourdomain.com'),
  title: 'DYNASTY - Cea mai puternică comunitate de Trading și Educație',
  description: 'Ecosistem complet de educație, informație și semnale — construit să-ți crească disciplina, claritatea și capitalul. DYNASTY îmbină educație aplicată, semnale filtrate și suport zilnic.',
  keywords: ['trading', 'memecoin', 'futures trading', 'wealth trading', 'educație financiară', 'semnale trading', 'cryptocurrency', 'discord trading', 'comunitate trading'],
  authors: [{ name: 'DYNASTY' }],
  creator: 'DYNASTY',
  publisher: 'DYNASTY',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'DYNASTY - Cea mai puternică comunitate de Trading',
    description: 'Ecosistem complet de educație, informație și semnale pentru trading profesionist',
    type: 'website',
    locale: 'ro_RO',
    siteName: 'DYNASTY',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DYNASTY - Cea mai puternică comunitate de Trading',
    description: 'Ecosistem complet de educație, informație și semnale pentru trading profesionist',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'DYNASTY',
              description: 'Cea mai puternică comunitate de Educație Dinamică, Trading și Semnale',
              url: 'https://yourdomain.com',
              logo: 'https://yourdomain.com/images/logo.svg',
              sameAs: [
                'https://discord.gg/dynasty',
                'https://t.me/dynasty'
              ],
              offers: {
                '@type': 'Offer',
                name: 'DYNASTY Membership',
                description: 'Acces complet la comunitatea DYNASTY cu educație, semnale și suport',
                price: '99',
                priceCurrency: 'EUR',
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

