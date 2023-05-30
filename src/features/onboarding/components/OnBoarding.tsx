"use client"
import { Circles } from "@/client/components/UiElements"
import React, { useEffect, useState } from "react"
import Slides from "./IntroSlides/Slides"

function OnBoarding() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [showSlides, setShowSlides] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSlides(true)
    }, 1000)

    return () => {
      clearTimeout(timeout)
    }
  })

  return (
    <>
      {!showSlides && (
        <div>
          <div className="flex items-center gap-3 -mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              width={50}
            >
              <path
                d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5zM432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm47.9-225c4.3 3.7 5.4 9.9 2.6 14.9L452.4 356H488c5.2 0 9.8 3.3 11.4 8.2s-.1 10.3-4.2 13.4l-96 72c-4.5 3.4-10.8 3.2-15.1-.6s-5.4-9.9-2.6-14.9L411.6 380H376c-5.2 0-9.8-3.3-11.4-8.2s.1-10.3 4.2-13.4l96-72c4.5-3.4 10.8-3.2 15.1 .6z"
                fill="#9610FF"
              />
            </svg>
            <p className="font-bold text-3xl">Hangout</p>
          </div>

          <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
            <Circles />
          </div>
        </div>
      )}

      {showSlides && (
        <Slides activeSlide={activeSlide} setActiveSlide={setActiveSlide} />
      )}
    </>
  )
}

export default OnBoarding