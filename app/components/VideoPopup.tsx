'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface VideoPopupProps {
  isOpen: boolean
  onClose: () => void
  videoUrl?: string
  videoId?: string // For YouTube videos
}

export default function VideoPopup({ isOpen, onClose, videoUrl, videoId }: VideoPopupProps) {
  const [isLoading, setIsLoading] = useState(true)

  const handleClose = () => {
    setIsLoading(true)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-6xl mx-4 bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video Container */}
            <div className="relative w-full aspect-video">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                </div>
              )}

              {videoId ? (
                // YouTube Video
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="DYNASTY Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  onLoad={() => setIsLoading(false)}
                />
              ) : videoUrl ? (
                // Direct Video URL
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full"
                  onLoadedData={() => setIsLoading(false)}
                />
              ) : (
                // Default placeholder
                <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">
                  <p>No video URL provided</p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
