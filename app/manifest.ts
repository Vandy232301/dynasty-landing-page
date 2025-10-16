import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'DYNASTY - Comunitate de Trading',
    short_name: 'DYNASTY',
    description: 'Cea mai puternică comunitate de Educație Dinamică, Trading și Semnale',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#5500FF',
    icons: [
      {
        src: '/images/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}

