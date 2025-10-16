'use client'

import { motion } from 'framer-motion'

interface AchievementBadgeProps {
  className?: string
}

export default function AchievementBadge({ className = '' }: AchievementBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative inline-flex items-center gap-4 rounded-full px-6 py-4 bg-[#1A1A1A] border border-[#2A2A2A] ${className}`}
    >
      {/* bottom glow to match Figma */}
      <span className="pointer-events-none absolute -bottom-2 left-4 right-4 h-3 rounded-full bg-yellow-400/35 blur-md" />

      {/* Trophy Icon (compact, left aligned) */}
      <div className="flex-shrink-0 text-yellow-400">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 4h10c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-1v2c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2V10H7c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" />
          <path d="M9 16h6v2H9z" />
          <path d="M11 18h2v2h-2z" />
        </svg>
      </div>

      {/* Text */}
      <span className="text-white text-[18px] md:text-[20px] leading-none font-semibold">
        Numarul 1 in Comunitati de Trading si Investitii
      </span>
    </motion.div>
  )
}

// Alternative version with stars above
export function AchievementBadgeWithStars({ className = '' }: AchievementBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col items-center ${className}`}
    >
      {/* Stars */}
      <div className="flex items-center gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.div
            key={star}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25, delay: star * 0.08 }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-yellow-400"
            >
              <path d="M12 2l3.09 6.26L22 9l-5 5 1.18 7L12 17.77 5.82 21 7 14 2 9l6.91-.74L12 2z" />
            </svg>
          </motion.div>
        ))}
      </div>
      
      {/* Badge */}
      <div className="inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 bg-[#212121] border border-[#333]">
        {/* Trophy Cup Emoji */}
        <div className="flex-shrink-0 text-lg">
          🏆
        </div>
        
        {/* Text */}
        <span className="text-white font-medium leading-tight text-sm">
          Numarul 1 in Comunitati de Trading si Investitii
        </span>
      </div>
    </motion.div>
  )
}
