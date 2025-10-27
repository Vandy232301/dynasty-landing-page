'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'
import MobileMenu from '../components/MobileMenu'
import ScrollToTop from '../components/ScrollToTop'
import AchievementBadge, { AchievementBadgeWithStars } from '../components/AchievementBadge'
import VideoPopup from '../components/VideoPopup'

export default function NormalPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main ref={ref} className="w-full">
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <ScrollToTop />
      <VideoPopup 
        isOpen={isVideoPopupOpen} 
        onClose={() => setIsVideoPopupOpen(false)}
        videoUrl="/videos/Dynasty_Video_Prez.mov"
      />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark/70 backdrop-blur-md border-b border-dark-accent">
        <nav className="max-w-[1512px] mx-auto px-4 sm:px-6 h-[61px] flex items-center justify-between">
          <div className="flex items-center">
            <Image 
              src="/images/logo.svg" 
              alt="Dynasty Logo" 
              width={163} 
              height={19}
              className="h-[19px] w-auto"
            />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#memecoin" className="text-xs text-white/90 hover:text-primary transition-colors">
              Memecoin Trading
            </a>
            <a href="#futures" className="text-xs text-white/90 hover:text-primary transition-colors">
              Futures Trading
            </a>
            <a href="#wealth" className="text-xs text-white/90 hover:text-primary transition-colors">
              Wealth Trading
            </a>
            <a 
              href="https://whop.com/dynasty001/dynasty-wealth-all-in-one-149/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white text-xs px-6 py-2.5 rounded-full hover:bg-primary/90 transition-all"
            >
              Accesează DYNASTY
            </a>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Image 
              src="/images/menu-icon.svg" 
              alt="Menu" 
              width={31} 
              height={27}
            />
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-[61px] overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/brand-background.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-[1512px] mx-auto">
          {/* Achievement Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 sm:mb-8"
          >
            <AchievementBadgeWithStars />
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[45px] leading-[1.21] font-normal mb-6 max-w-[1034px] mx-auto"
          >
            Cea mai puternică comunitate de Educație Dinamică, Trading și Semnale
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg opacity-50 mb-6 sm:mb-8 px-2"
          >
            Ecosistem complet de educație, informație și semnale — construit să-ți crească disciplina, claritatea şi capitalul.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xs opacity-50 mb-6 sm:mb-8 px-2"
          >
            Organizare premium pe Discord • Suport uman + tool-uri avansate
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-6"
          >
            <a 
              href="https://whop.com/dynasty001/dynasty-wealth-all-in-one-149/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white text-lg px-16 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105"
            >
              Accesează DYNASTY
            </a>
          </motion.div>
        </div>
      </section>

      {/* Video Presentation Button */}
      <section className="max-w-[1512px] mx-auto px-4 sm:px-6 py-6 sm:py-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <button 
            onClick={() => setIsVideoPopupOpen(true)}
            className="inline-block bg-gradient-to-r from-primary to-[#330099] border border-[#742FFF] text-white text-lg px-12 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105"
          >
            Vezi VIDEO de Prezentare
          </button>
        </motion.div>
      </section>

      {/* Trust Section */}
      <section className="max-w-[1512px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-center mb-8 sm:mb-12"
        >
          Incredere deplina cu:
        </motion.p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-3 max-w-[1320px] mx-auto">
          {[
            { src: '/images/partner-logo-2.svg', alt: 'Discord' },
            { src: '/images/partner-logo-1.svg', alt: 'Whop' },
            { src: '/images/partner-logo-4.svg', alt: 'Stripe' },
            { src: '/images/partner-logo-3.svg', alt: 'BYBİT' },
            { src: '/images/partner-logo-5.svg', alt: 'MEXC' },
            { src: '/images/partner-logo-7.svg', alt: 'BINANCE' },
            { src: '/images/partner-logo-8.svg', alt: 'Partner' },
            { src: '/images/axiom-logo.svg', alt: 'Axiom' },
            { src: '/images/gmgn-logo.svg', alt: 'GMGN' },
          ].map((logo, i) => (
            <motion.div
              key={logo.alt}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-center h-[90px] md:h-[120px] hover:opacity-80 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={300}
                height={80}
                className="max-w-full h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Secondary Hero */}
      <section className="max-w-[1512px] mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block mb-6 sm:mb-8"
        >
          <div className="bg-dark-border border border-[rgba(71,71,71,0.25)] rounded-full px-4 sm:px-8 py-2 sm:py-2.5">
            <p className="text-xs sm:text-sm text-white">
              Structură clară • Semnale zilnice • Risk management • Mindset & execuție • Tool-uri proprietare
            </p>
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-[1.21] font-normal mb-4 sm:mb-6 max-w-[1034px] mx-auto"
        >
          Mai mult decât o comunitate de trading,<br />un sistem care te ține în joc
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base lg:text-lg opacity-50 max-w-[616px] mx-auto"
        >
          DYNASTY îmbină educație aplicată, semnale filtrate și suport zilnic. Tot ce-ți trebuie ca să evoluezi din haos în metodă.
        </motion.p>
      </section>

      {/* Three Pillars Section */}
      <section className="max-w-[1512px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-[1.21] font-normal text-center mb-8 sm:mb-16">
          Trei piloni. O singură direcție: PROFIT.
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:gap-12 max-w-[1320px] mx-auto">
          {/* Memecoin Trading */}
          <motion.div
            id="memecoin"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-dark-secondary border border-dark-border rounded-sm p-6 sm:p-8 lg:p-12 grid md:grid-cols-2 gap-6 sm:gap-8 items-center hover:border-primary/30 transition-colors"
          >
            <div className="order-2 md:order-1">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-[1.21] font-medium mb-4 sm:mb-6 text-[#5500FF]">
                MEMECOIN TRADING
              </h3>
              <p className="text-sm sm:text-[16px] leading-[1.21] mb-3 sm:mb-4 text-white">
                Call-uri zilnice pe monede cu potențial exploziv.<br />
                Boți și alerte pentru proiecte timpurii.<br />
                CT Tracker – monitorizează trendurile virale.<br />
                Suport și explicații clare, pas cu pas.
              </p>
              <p className="text-[12px] leading-[1.21] opacity-50 text-white">
                (Printre ultimele semnale a generat +163.000% – adică peste 1630X profit real)
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-2 mb-12"
              >
                <p className="text-[45px] leading-[1.21] text-[#5500FF]">
                  Prinde MEMECOIN-uri Explozive care pot performa sute de X-uri într-un termen scurt, și cu care poți transforma 100$ în mii, zeci de mii sau sute de mii de $.
                </p>
              </motion.div>
            </div>
            <div className="relative aspect-[645/363] rounded-sm overflow-hidden order-1 md:order-2">
              <Image
                src="/images/trading-result-3.png"
                alt="Memecoin Trading Results"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
          
          {/* Futures Trading */}
          <motion.div
            id="futures"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-dark-secondary border border-dark-border rounded-sm p-6 sm:p-8 lg:p-12 grid md:grid-cols-2 gap-6 sm:gap-8 items-center hover:border-primary/30 transition-colors"
          >
            <div className="relative aspect-[645/363] rounded-sm overflow-hidden order-1 md:order-1">
              <Image
                src="/images/trading-result-1.png"
                alt="Futures Trading Results"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-2 md:order-2">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-[1.21] font-medium mb-4 sm:mb-6 text-[#00FFFF]">
                FUTURES TRADING
              </h3>
              <p className="text-sm sm:text-[16px] leading-[1.21] mb-3 sm:mb-4 text-white">
                Analiză tehnică avansată și entry-uri precise.<br />
                Risk management strict și position sizing.<br />
                Suport 24/7 pentru execuția perfectă.<br />
                Educație continuă și dezvoltare personală.
              </p>
              <p className="text-[12px] leading-[1.21] opacity-50 text-white">
                (Strategiile noastre au generat profituri consistente de peste 200% pe lună)
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-2 mb-12"
              >
                <p className="text-[45px] leading-[1.21] text-[#00FFFF]">
                  Masterează FUTURES Trading cu strategii dovedite și transformă-ți capitalul în profituri consistente și predictibile, cu risc controlat și rezultate măsurabile.
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Wealth Portfolio */}
          <motion.div
            id="wealth"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-dark-secondary border border-dark-border rounded-sm p-6 sm:p-8 lg:p-12 grid md:grid-cols-2 gap-6 sm:gap-8 items-center hover:border-primary/30 transition-colors"
          >
            <div className="order-2 md:order-1">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-[1.21] font-medium mb-4 sm:mb-6 text-[#FF69B4]">
                WEALTH PORTFOLIO
              </h3>
              <p className="text-sm sm:text-[16px] leading-[1.21] mb-3 sm:mb-4 text-white">
                Diversificare inteligentă pe multiple asset-uri.<br />
                Analiză fundamentală și identificare oportunități.<br />
                Strategii de acumulare pe termen lung.<br />
                Protecție capital și creștere sustenabilă.
              </p>
              <p className="text-[12px] leading-[1.21] opacity-50 text-white">
                (Portofoliul nostru a crescut cu peste 500% în ultimul an)
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-2 mb-12"
              >
                <p className="text-[45px] leading-[1.21] text-[#FF69B4]">
                  Construiește un WEALTH PORTFOLIO solid și diversificat care îți asigură independența financiară pe termen lung, cu strategii de investiții dovedite și risc minimizat.
                </p>
              </motion.div>
            </div>
            <div className="relative aspect-[645/363] rounded-sm overflow-hidden order-1 md:order-2">
              <Image
                src="/images/trading-result-2.png"
                alt="Wealth Portfolio Results"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-[1512px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-[1.21] font-normal text-center mb-8 sm:mb-16"
        >
          Rezultate Reale. Profituri Reale.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-[1320px] mx-auto mb-4 sm:mb-6">
          {Array.from({ length: 39 }, (_, i) => {
            const imageNumber = i + 1;
            if (imageNumber === 27) return null; // Skip C27 as it doesn't exist
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="w-full"
              >
                <img
                  src={`/images/C${imageNumber}.png`}
                  alt={`Trading Result ${imageNumber}`}
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-[1512px] mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[45px] leading-[1.21] font-normal mb-4 sm:mb-6"
        >
          Gata să-ți transformi viața financiară?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg opacity-50 mb-8 max-w-[616px] mx-auto"
        >
          Educația financiară te duce de la confuzie la control. DYNASTY îți oferă sistemul complet pentru a deveni liber financiar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <a 
            href="https://whop.com/dynasty001/dynasty-wealth-all-in-one-149/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white text-lg px-16 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105"
          >
            Accesează DYNASTY
          </a>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-xs opacity-50"
        >
          © 2024 DYNASTY. Toate drepturile rezervate.
        </motion.p>
      </section>
    </main>
  )
}
