'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'
import MobileMenu from './components/MobileMenu'
import ScrollToTop from './components/ScrollToTop'
import AchievementBadge, { AchievementBadgeWithStars } from './components/AchievementBadge'
import CountdownTimer from './components/CountdownTimer'
import VideoPopup from './components/VideoPopup'

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showHeaderCountdown, setShowHeaderCountdown] = useState(false)
  const [headerTimeLeft, setHeaderTimeLeft] = useState(10 * 60) // 10 minutes in seconds
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Show header countdown when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setShowHeaderCountdown(scrollPosition > 100) // Show after 100px scroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Header countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setHeaderTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (value: number) => value.toString().padStart(2, '0')
  const hours = Math.floor(headerTimeLeft / 3600)
  const minutes = Math.floor((headerTimeLeft % 3600) / 60)
  const seconds = headerTimeLeft % 60

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
        <nav className="max-w-[1512px] mx-auto px-6 h-[61px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image 
              src="/images/logo.svg" 
              alt="Dynasty Logo" 
              width={163} 
              height={19}
              className="h-[19px] w-auto"
            />
            
            {/* Header Countdown Timer - Shows when scrolling */}
            {showHeaderCountdown && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="hidden lg:flex items-center"
              >
                <div className="flex gap-2">
                  <div className="bg-[rgba(255,47,154,0.1)] border border-[rgba(255,47,154,0.19)] rounded px-2 py-1 text-center">
                    <div className="text-[16px] leading-[1.21] font-normal">{formatTime(hours)}</div>
                    <div className="text-[6px] leading-[1.21]">Ore</div>
                  </div>
                  <div className="bg-[rgba(255,47,154,0.1)] border border-[rgba(255,47,154,0.19)] rounded px-2 py-1 text-center">
                    <div className="text-[16px] leading-[1.21] font-normal">{formatTime(minutes)}</div>
                    <div className="text-[6px] leading-[1.21]">Minute</div>
                  </div>
                  <div className="bg-[rgba(255,47,154,0.1)] border border-[rgba(255,47,154,0.19)] rounded px-2 py-1 text-center">
                    <div className="text-[16px] leading-[1.21] font-normal">{formatTime(seconds)}</div>
                    <div className="text-[6px] leading-[1.21]">Secunde</div>
                  </div>
                </div>
              </motion.div>
            )}
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
              href="https://whop.com/dynasty001/dynasty-all-in-one/" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white text-xs px-6 py-2.5 rounded-sm hover:bg-primary/90 transition-all"
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
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark z-10" />
          <Image
            src="/images/brand-background.png"
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </motion.div>

        <div className="relative z-10 max-w-[1512px] mx-auto px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
          <AchievementBadgeWithStars />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[45px] leading-[1.21] font-normal mb-6 max-w-[1034px] mx-auto"
          >
            Cea mai puternică comunitate de Educație Dinamică, Trading și Semnale
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg opacity-50 mb-8 max-w-[616px] mx-auto"
          >
            Ecosistem complet de educație, informație și semnale — construit să-ți crească disciplina, claritatea și capitalul.
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xs opacity-50 mb-8"
          >
            Organizare premium pe Discord • Suport uman + tool-uri avansate
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-6"
          >
            <a 
              href="https://whop.com/dynasty001/dynasty-all-in-one/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white text-lg px-16 py-4 rounded-full hover:bg-primary/90 transition-all hover:scale-105"
            >
              Accesează DYNASTY - Oferta LIMITATA 99 Euro
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg mb-8"
          >
            Pret normal 149 Euro - OFERTA EXPIRA in:
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            <CountdownTimer />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <button 
              onClick={() => setIsVideoPopupOpen(true)}
              className="inline-block bg-gradient-to-r from-primary to-[#330099] border border-[#742FFF] text-white text-lg px-12 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105"
            >
              Vezi VIDEO de Prezentare
            </button>
          </motion.div>
        </div>
      </section>

      {/* Showcase Image */}
      <section className="max-w-[1512px] mx-auto px-6 py-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[1321/743] rounded-sm overflow-hidden"
        >
          <Image
            src="/images/main-showcase.png"
            alt="Dynasty Platform Showcase"
            fill
            className="object-cover"
          />
        </motion.div>
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
      <section className="max-w-[1512px] mx-auto px-6 py-16">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg text-center mb-12"
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
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-[1.21] font-medium mb-4 sm:mb-6">
                MEMECOIN TRADING
              </h3>
              <p className="text-sm sm:text-base leading-[1.21] mb-3 sm:mb-4">
                Call-uri zilnice pe monede cu potențial exploziv.<br />
                Boți și alerte pentru proiecte timpurii.<br />
                CT Tracker – monitorizează trendurile virale.<br />
                Suport și explicații clare, pas cu pas.
              </p>
              <p className="text-xs opacity-50">
                (Printre ultimele semnale a generat +163.000% – adică peste 1630X profit real)
              </p>
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
            <div className="order-2 md:order-1">
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-[1.21] font-medium mb-4 sm:mb-6">
                FUTURES TRADING
              </h3>
              <p className="text-sm sm:text-base leading-[1.21] mb-3 sm:mb-4">
                Intrări și ieșiri precise, zilnic.<br />
                Strategia profitului compus 2%/zi.<br />
                Obiectiv: 1.000.000$ prin disciplină.<br />
                Suport pentru risk și execuție corectă.
              </p>
              <p className="text-xs opacity-50">
                (Winrate constant între 90% și 100% pe semnale validate)
              </p>
            </div>
            <div className="relative aspect-[645/363] rounded-sm overflow-hidden order-1 md:order-2">
              <Image
                src="/images/trading-result-2.png"
                alt="Futures Trading Results"
                fill
                className="object-cover"
              />
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
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[65px] leading-[1.21] font-medium mb-4 sm:mb-6">
                WEALTH PORTFOLIO
              </h3>
              <p className="text-sm sm:text-base leading-[1.21] mb-3 sm:mb-4">
                Strategii pe termen scurt, mediu, lung.<br />
                Spot trading organizat și planificat.<br />
                Analize macro și trenduri fundamentale.<br />
                Ghidaj pentru stabilitate financiară reală.
              </p>
              <p className="text-xs opacity-50">
                (Construiește un portofoliu solid și diversificat pe termen lung)
              </p>
            </div>
            <div className="relative aspect-[645/363] rounded-sm overflow-hidden order-1 md:order-2">
              <Image
                src="/images/trading-result-1.png"
                alt="Wealth Portfolio Results"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why It Works Section */}
      <section className="max-w-[1512px] mx-auto px-6 py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[45px] leading-[1.21] font-normal text-center mb-16"
        >
          De ce funcționează?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1280px] mx-auto">
          {[
            { icon: '🧭', text: 'Structură premium pe Discord' },
            { icon: '📚', text: 'Educație aplicată, nu teorie' },
            { icon: '👥', text: 'Echipa DYNASTY (calleri, analiști, mentori)' },
            { icon: '🛠️', text: 'Tool-uri & trackere proprii' },
            { icon: '⚡', text: 'Suport rapid, uman' },
            { icon: '✅', text: 'Rezultate verificate (PNL-uri & recenzii)' },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-dark-border border border-[rgba(71,71,71,0.25)] rounded-full px-6 h-14 md:h-16 text-xs md:text-sm leading-none hover:border-primary/50 transition-colors flex items-center justify-center gap-3"
            >
              <span className="text-sm md:text-base" aria-hidden>{feature.icon}</span>
              <span className="text-center whitespace-nowrap">{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section className="max-w-[1512px] mx-auto px-6 py-20">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[45px] leading-[1.21] font-normal text-center mb-4"
        >
          Rezultatele comunității
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs text-center mb-16"
        >
          +100 membri • rezultate consistente • disciplină • profit
        </motion.p>

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

      {/* Test Our Style CTA */}
      <section className="max-w-[1512px] mx-auto px-6 py-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[45px] leading-[1.21] font-normal mb-6"
        >
          Vrei să ne testezi stilul?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg opacity-50 mb-8 max-w-[852px] mx-auto"
        >
          Intră gratuit în comunitatea VANDY (Telegram) și urmărește LIVE călătoria de la 100$ la 1.000.000$. Primești informații gratuite, update-uri din piață și strategii reale aplicate zilnic.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a 
            href="https://t.me/VANDY_001_Official"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-dark-accent border border-[#1E1E1E] text-white text-xs px-12 py-3 rounded-sm hover:bg-dark-accent/80 hover:border-primary/50 transition-all"
          >
            Accesează comunitatea gratuită
          </a>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="relative max-w-[1512px] mx-auto px-6 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <Image
            src="/images/bottom-background.png"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[45px] leading-[1.21] font-normal mb-6"
          >
            E momentul să faci parte din Elită
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
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
              href="https://whop.com/dynasty001/dynasty-all-in-one/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary text-white text-xs px-12 py-3 rounded-sm hover:bg-primary/90 transition-all hover:scale-105"
            >
              Accesează DYNASTY
            </a>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-xs"
          >
            Atentie! Oferta DYNASTY este limitata. Pretul ar putea creste in orice moment.
          </motion.p>
        </div>
      </section>

      {/* Footer / Disclaimer */}
      <footer className="max-w-[1512px] mx-auto px-6 py-16 text-center border-t border-dark-accent">
        <p className="text-xs opacity-50 max-w-[772px] mx-auto leading-[1.21]">
          Conținutul și semnalele oferite în comunitatea DYNASTY au scop exclusiv educațional și informativ. 
          Nu constituie sfaturi financiare, de investiții sau garanții de profit. Tranzacționarea implică risc 
          ridicat de pierdere a capitalului. Performanțele anterioare nu garantează rezultate viitoare. 
          Prin accesarea comunității DYNASTY, confirmi că înțelegi și îți asumi aceste riscuri.
        </p>
      </footer>
    </main>
  )
}

