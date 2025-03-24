"use client"

import { useState, useEffect, useMemo } from "react"
import { Card } from "@/components/ui/card"

export default function CountdownTimer() {
  const birthdayDate = useMemo(() => {
    const date = new Date()
    // Set to today 23:59 (11:59 PM)
    date.setHours(23, 59, 59, 999) // 23:59:59.999
    return date
  }, [])

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = +birthdayDate - +now
  
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24), // Fixed line
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [birthdayDate])

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-3 gap-2 w-full">
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
      <p className="mt-4 text-center text-purple-600">
      Moments before midnight...
      </p>
    </div>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <Card className="w-full aspect-square flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
        <span className="text-2xl font-bold text-white">
          {value.toString().padStart(2, '0')}
        </span>
      </Card>
      <span className="text-xs mt-1 text-gray-600">{label}</span>
    </div>
  )
}