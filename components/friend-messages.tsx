"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

type FriendMessage = {
  id: number
  name: string
  message: string
}

const messages: FriendMessage[] = [
  {
    id: 1,
    name: "Reni",
    message: "Happy birthday aunty. vazhga valamudan vaysagiruchi nu feel panadha just accept the fact and move on",
  },
  {
    id: 2,
    name: "Stephanas",
    message:
      "Iniya piranda naal unakuuuuu🤌🏻🥺\nPongal la poduvanga vellam mouli dan en chellam",
  },
  {
    id: 3,
    name: "Priyanka",
    message:
      "Habby barthuday machan... Love u machan a word ra its an emotion. Mathavanga clg start panradhuthuku munnadiye namma kaal thada padhichavanga daa... epdi da clg ah survive panna poorom nenachitu irundha naa apo dhan unna paathen... U were heartwarming... Thank u. Our bonding totally different macha yaarukum puriyadhu... Meiyyazhagan maari... Love u machan And Welcome to the aunty's club.",
  },
  {
    id: 4,
    name: "Varsha",
    message: "Many happy returns of the day! Keep shining on and off the court. You're truly amazing!",
  },
  {
    id: 5,
    name: "Saranya",
    message:
      "Happy birthday Moulieswari! Your passion for badminton and your friendly nature make you special. Have a blast!",
  },
]

export default function FriendMessages() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextMessage = () => {
    setCurrentIndex((prev) => (prev + 1) % messages.length)
  }

  const prevMessage = () => {
    setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length)
  }

  return (
    <div className="relative">
      <Card className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 min-h-[180px] flex flex-col justify-between">
        <div className="flex items-start gap-3">
          <div>
            <h4 className="font-semibold text-purple-700">{messages[currentIndex].name}</h4>
            <p className="text-gray-700 mt-2">{messages[currentIndex].message}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <Button variant="outline" size="icon" onClick={prevMessage} className="rounded-full h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous message</span>
          </Button>

          <span className="text-sm text-gray-500">
            {currentIndex + 1} of {messages.length}
          </span>

          <Button variant="outline" size="icon" onClick={nextMessage} className="rounded-full h-8 w-8">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next message</span>
          </Button>
        </div>
      </Card>
    </div>
  )
}

