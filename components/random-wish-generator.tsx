"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

const birthdayWishes = [
  "May your day be as bright as your smile and as lovely as you. Happy birthday, Moulieswari!",
  "Wishing you a year filled with as many victories as your badminton career! Happy birthday!",
  "May your birthday be as special as you are to everyone around you!",
  "Here's to another year of amazing achievements both on and off the court!",
  "Happy birthday to someone who brings joy to everyone they meet. Have a fantastic day!",
  "May your birthday bring you as much happiness as you bring to others!",
  "Wishing you a day filled with laughter, love, and unforgettable moments!",
  "May all your birthday wishes come true, just like your dreams on the badminton court!",
  "Happy birthday to a true champion! May your day be as spectacular as your badminton skills!",
  "Another year older, another year more amazing! Happy birthday, Moulieswari!",
  "May your birthday be the start of a year filled with good luck, good health, and much happiness!",
  "Sending you smiles for every moment of your special day. Have a wonderful time and a very happy birthday!",
  "Your talent and dedication inspire us all. Wishing you the happiest of birthdays!",
  "May your birthday be just the beginning of a year filled with precious memories and wonderful achievements!",
]

export default function RandomWishGenerator() {
  const [currentWish, setCurrentWish] = useState(birthdayWishes[0])
  const [isAnimating, setIsAnimating] = useState(false)

  const generateRandomWish = () => {
    setIsAnimating(true)

    // Get a new random wish different from the current one
    let newWish
    do {
      newWish = birthdayWishes[Math.floor(Math.random() * birthdayWishes.length)]
    } while (newWish === currentWish)

    setTimeout(() => {
      setCurrentWish(newWish)
      setIsAnimating(false)
    }, 500)
  }

  return (
    <div className="flex flex-col items-center">
      <Card
        className={`p-6 bg-gradient-to-r from-purple-100 to-pink-100 text-center min-h-[120px] flex items-center justify-center transition-opacity duration-500 w-full ${isAnimating ? "opacity-0" : "opacity-100"}`}
      >
        <p className="text-lg text-purple-800 font-medium">{currentWish}</p>
      </Card>

      <Button
        onClick={generateRandomWish}
        className="mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
      >
        <Sparkles className="mr-2 h-4 w-4" />
        Generate New Wish
      </Button>
    </div>
  )
}

