"use client"

import { useState, useEffect, useMemo } from "react"
import { Card } from "@/components/ui/card"

export default function CountdownTimer() {
  // Set target date to March 24, 2026
  const birthdayDate = useMemo(() => {
    // Months are 0-indexed in JavaScript (0 = January, 11 = December)
    return new Date(2026, 2, 24) // March 24, 2026
  }, [])

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
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
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [birthdayDate])

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 gap-2 w-full">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
      <p className="mt-4 text-center text-purple-600">
        {timeLeft.days > 0 
          ? `Counting down to March 24, 2026! 🎉` 
          : "Happy Birthday! 🎂"}
      </p>
    </div>
  )
}

// TimeUnit component remains the same
function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <Card className="w-full aspect-square flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
        <span className="text-2xl font-bold text-white">{value}</span>
      </Card>
      <span className="text-xs mt-1 text-gray-600">{label}</span>
    </div>
  )
}