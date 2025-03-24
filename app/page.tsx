"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"
const ReactConfetti = dynamic(() => import("react-confetti"), { ssr: false })
import { Card } from "@/components/ui/card"
import { BombIcon as Balloon, Gift, MessageSquare, Timer, ClubIcon as BadmintonIcon, Trophy, Heart } from "lucide-react"
import CountdownTimer from "@/components/countdown-timer"
import FriendMessages from "@/components/friend-messages"
import RandomWishGenerator from "@/components/random-wish-generator"

export default function BirthdayCard() {
  const [showConfetti, setShowConfetti] = useState(true)
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })
  const router = useRouter()

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    // Stop confetti after 10 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 flex flex-col items-center justify-start pt-8 px-4 overflow-x-hidden">
      {showConfetti && (
        <ReactConfetti width={windowSize.width} height={windowSize.height} recycle={true} numberOfPieces={200} />
      )}

      <div className="w-full max-w-4xl">
        <div className="text-center mb-8 animate-bounce">
          <div className="flex justify-center gap-3 mb-2">
            <Balloon className="h-8 w-8 text-pink-500" />
            <Gift className="h-8 w-8 text-purple-500" />
            <Balloon className="h-8 w-8 text-pink-500" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            Happy Birthday!
          </h1>
          <h2 className="text-3xl font-semibold mt-2 text-purple-700">MOULIESWARI N K</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur">
            <div className="flex items-center gap-2 mb-4">
              <BadmintonIcon className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-semibold text-purple-700">Champion Badminton Player</h3>
            </div>
            <p className="text-gray-700">
            To the smash champion who dominates courts and hearts –
            may your year be as winning as your drop shots,
            as bright as your sportsmanship,
            and as unstoppable as your spirit.
            Thank you for being the racket to my shuttlecock of life,
            always lifting me higher.
            Here’s to more aces on court & endless joy off it! 🥇✨
            </p>
            <div className="flex mt-4 gap-2 flex-wrap">
              <div className="flex items-center gap-1 bg-purple-100 px-3 py-1 rounded-full">
                <Trophy className="h-4 w-4 text-yellow-600" />
                <span className="text-sm text-purple-700">Inter-College Champion</span>
              </div>
              <div className="flex items-center gap-1 bg-pink-100 px-3 py-1 rounded-full">
                <Trophy className="h-4 w-4 text-yellow-600" />
                <span className="text-sm text-pink-700">Tournament Winner</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow bg-white/80 backdrop-blur">
            <div className="flex items-center gap-2 mb-4">
              <Timer className="h-6 w-6 text-purple-600" />
              <h3 className="text-xl font-semibold text-purple-700">Birthday Countdown</h3>
            </div>
            <CountdownTimer />
          </Card>
        </div>

        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow mb-8 bg-white/80 backdrop-blur">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="h-6 w-6 text-purple-600" />
            <h3 className="text-xl font-semibold text-purple-700">Messages From Friends</h3>
          </div>
          <FriendMessages />
        </Card>

        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow mb-8 bg-white/80 backdrop-blur">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="h-6 w-6 text-pink-500" />
            <h3 className="text-xl font-semibold text-purple-700">Special Birthday Wishes</h3>
          </div>
          <RandomWishGenerator />
        </Card>
      </div>
    </main>
  )
}

