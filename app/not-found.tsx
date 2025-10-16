import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark px-6">
      <div className="text-center">
        <Image 
          src="/images/logo.svg" 
          alt="Dynasty Logo" 
          width={163} 
          height={19}
          className="h-[30px] w-auto mx-auto mb-8"
        />
        <h1 className="text-6xl font-bold mb-4 text-primary">404</h1>
        <h2 className="text-2xl mb-6">Pagina nu a fost găsită</h2>
        <p className="text-white/60 mb-8">
          Ne pare rău, pagina pe care o cauți nu există.
        </p>
        <Link 
          href="/"
          className="inline-block bg-primary text-white px-8 py-3 rounded-sm hover:bg-primary/90 transition-all"
        >
          Înapoi la pagina principală
        </Link>
      </div>
    </div>
  )
}

