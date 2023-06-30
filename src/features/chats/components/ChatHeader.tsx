"use client"
import BackButton from "@/client/components/Buttons/BackButton"
import React, { useEffect, useState } from "react"

function ChatHeader({ user_name }: { user_name: string }) {
  const [showBg, setShowBg] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 20) {
        setShowBg(true)
      } else {
        setShowBg(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <div
      className={`top-0 lg:top-6 left-1/2 -translate-x-1/2 w-full mb-5 duration-300 ${
        showBg
          ? "fixed max-w-xl bg-input_bg_light dark:bg-input_bg_dark py-6 px-5"
          : "absolute"
      }`}
    >
      <header className="flex items-center gap-5">
        <BackButton />

        <h1 className="font-semibold text-xl tracking-wider">{user_name}</h1>
      </header>
    </div>
  )
}

export default ChatHeader
