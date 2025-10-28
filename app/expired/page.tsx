'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ExpiredPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 1, // 1 minute countdown
    seconds: 0
  })
  const router = useRouter()

  // Check if offer has expired on component mount
  useEffect(() => {
    const offerExpired = localStorage.getItem('offerExpired')
    if (offerExpired === 'true') {
      router.push('/normal')
    }
  }, [router])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else {
          // Timer expired, mark as expired and redirect to normal price page
          clearInterval(timer)
          localStorage.setItem('offerExpired', 'true')
          router.push('/normal')
          return prev
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  const formatTime = (value: number) => value.toString().padStart(2, '0')

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Image - Matching Figma Design */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(/images/brand-background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <img
            src="/images/dynasty-logo-expired.png"
            alt="DYNASTY Logo"
            className="w-[422px] h-[75px] object-contain"
          />
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white mb-6"
          style={{ 
            fontWeight: 500,
            fontSize: '65px',
            lineHeight: '1.2102272620567909em',
            textAlign: 'left'
          }}
        >
          Convinge-te SINGUR!
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white mb-12"
          style={{
            fontWeight: 400,
            fontSize: '45px',
            lineHeight: '1.2102272620567909em',
            textAlign: 'center'
          }}
        >
          Testeaza DYNASTY 3 zile<br />
          pentru doar 29 Euro
        </motion.p>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative group mb-12"
        >
          <a
            href="https://whop.com/dynasty001/dynasty-wealth-all-in-one-29/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white text-[16px] leading-[1.21] px-20 py-5 rounded-full hover:bg-primary/90 transition-all hover:scale-105"
          >
            Accesează DYNASTY
          </a>
          
          {/* Hover Tooltip */}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
            Testează DYNASTY 3 zile pentru doar 29 Euro
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
          </div>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          {/* Timer Label */}
          <p 
            className="text-white mb-3"
            style={{
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '1.2102272510528564em'
            }}
          >
            OFERTA EXPIRA in:
          </p>
          
          {/* Timer Display */}
          <div className="flex justify-center gap-4">
            <div className="bg-[rgba(255,47,154,0.1)] border border-[rgba(255,47,154,0.19)] rounded-lg px-4 py-3 text-center">
              <div 
                className="text-white"
                style={{
                  fontWeight: 400,
                  fontSize: '34px',
                  lineHeight: '1.2102272620567909em'
                }}
              >
                {formatTime(timeLeft.hours)}
              </div>
              <div 
                className="text-white"
                style={{
                  fontWeight: 400,
                  fontSize: '8px',
                  lineHeight: '1.2102272510528564em'
                }}
              >
                Ore
              </div>
            </div>
            <div className="bg-[rgba(255,47,154,0.1)] border border-[rgba(255,47,154,0.19)] rounded-lg px-4 py-3 text-center">
              <div 
                className="text-white"
                style={{
                  fontWeight: 400,
                  fontSize: '34px',
                  lineHeight: '1.2102272620567909em'
                }}
              >
                {formatTime(timeLeft.minutes)}
              </div>
              <div 
                className="text-white"
                style={{
                  fontWeight: 400,
                  fontSize: '8px',
                  lineHeight: '1.2102272510528564em'
                }}
              >
                Minute
              </div>
            </div>
            <div className="bg-[rgba(255,47,154,0.1)] border border-[rgba(255,47,154,0.19)] rounded-lg px-4 py-3 text-center">
              <div 
                className="text-white"
                style={{
                  fontWeight: 400,
                  fontSize: '34px',
                  lineHeight: '1.2102272620567909em'
                }}
              >
                {formatTime(timeLeft.seconds)}
              </div>
              <div 
                className="text-white"
                style={{
                  fontWeight: 400,
                  fontSize: '8px',
                  lineHeight: '1.2102272510528564em'
                }}
              >
                Secunde
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}