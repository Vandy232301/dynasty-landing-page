'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface CountdownTimerProps {
  initialMinutes?: number
}

export default function CountdownTimer({ initialMinutes = 10 }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60) // Convert minutes to seconds
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          // Redirect to expired page when timer reaches zero
          router.push('/expired')
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [initialMinutes, router]) // Added router to dependency array

  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = timeLeft % 60

  const formatTime = (value: number) => value.toString().padStart(2, '0')

  return (
    <div className="flex justify-center gap-4 mb-8">
      <div className="bg-[rgba(255,47,154,0.1)] border border-[rgba(255,47,154,0.19)] rounded-lg px-4 py-3 text-center">
        <div className="text-[34px] leading-[1.21] font-normal">{formatTime(hours)}</div>
        <div className="text-[8px] leading-[1.21]">Ore</div>
      </div>
      <div className="bg-[rgba(255,47,154,0.1)] border border-[rgba(255,47,154,0.19)] rounded-lg px-4 py-3 text-center">
        <div className="text-[34px] leading-[1.21] font-normal">{formatTime(minutes)}</div>
        <div className="text-[8px] leading-[1.21]">Minute</div>
      </div>
      <div className="bg-[rgba(255,47,154,0.1)] border border-[rgba(255,47,154,0.19)] rounded-lg px-4 py-3 text-center">
        <div className="text-[34px] leading-[1.21] font-normal">{formatTime(seconds)}</div>
        <div className="text-[8px] leading-[1.21]">Secunde</div>
      </div>
    </div>
  )
}
