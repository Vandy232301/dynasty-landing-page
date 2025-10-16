'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-dark-secondary border-l border-dark-accent z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Logo */}
              <div className="mb-12">
                <Image 
                  src="/images/logo.svg" 
                  alt="Dynasty Logo" 
                  width={163} 
                  height={19}
                  className="h-[19px] w-auto"
                />
              </div>

              {/* Navigation Links */}
              <nav className="space-y-6">
                <a
                  href="#memecoin"
                  onClick={onClose}
                  className="block text-base text-white/90 hover:text-primary transition-colors"
                >
                  Memecoin Trading
                </a>
                <a
                  href="#futures"
                  onClick={onClose}
                  className="block text-base text-white/90 hover:text-primary transition-colors"
                >
                  Futures Trading
                </a>
                <a
                  href="#wealth"
                  onClick={onClose}
                  className="block text-base text-white/90 hover:text-primary transition-colors"
                >
                  Wealth Trading
                </a>
                
                <div className="pt-6">
                  <a
                    href="https://whop.com/dynasty001/dynasty-all-in-one/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="block w-full bg-primary text-white text-center text-sm px-6 py-3 rounded-sm hover:bg-primary/90 transition-all"
                  >
                    Accesează DYNASTY
                  </a>
                </div>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

