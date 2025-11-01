import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
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
          { url: '/favicon.svg', type: 'image/svg+xml' },
          { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
        ],
        apple: [
          { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
        ]
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
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DYNASTY - Cea mai puternică comunitate de Trading',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DYNASTY - Cea mai puternică comunitate de Trading',
    description: 'Ecosistem complet de educație, informație și semnale pentru trading profesionist',
    images: ['/og-image.png'],
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
            {/* Google Tag Manager */}
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WHGMCNZ6');`
              }}
            />
            {/* End Google Tag Manager */}
            <link rel="icon" href="/favicon.ico" sizes="32x32" />
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            <link rel="apple-touch-icon" href="/favicon-32x32.png" />
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
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WHGMCNZ6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FWST0CT1DH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FWST0CT1DH');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}

