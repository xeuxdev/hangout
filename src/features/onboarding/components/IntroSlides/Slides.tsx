"use client"
import { Button } from "@/components/Buttons"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const texts = [
  "It's easy to find a soul mate nearby & around you",
  "You can share, chat and video call with your match",
  "Don't wait anymore, find your soul mate right now!",
]

function Slides({
  activeSlide,
  setActiveSlide,
}: {
  activeSlide: number
  setActiveSlide: React.Dispatch<React.SetStateAction<number>>
}) {
  const router = useRouter()

  useEffect(() => {
    if (activeSlide == 2) return
    const interval = setInterval(() => {
      if (activeSlide > 2) {
        setActiveSlide(2)
      }
      setActiveSlide((prev) => prev + 1)
    }, 2500)

    return () => {
      clearInterval(interval)
    }
  }, [activeSlide, setActiveSlide])

  return (
    <div className="w-full max-w-lg px-5 text-center">
      {/* images */}

      {/* text */}
      <div className="mb-10">
        <p className="text-primary_dark dark:text-primary font-semibold text-3xl px-5">
          {texts[activeSlide]}
        </p>
      </div>

      {/* slide indicator */}

      <div className="flex items-center justify-center gap-1 mb-11">
        {Array.from([3, 3, 3])
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full ${
                activeSlide == i ? "bg-purple-600 w-5" : "bg-gray_1 w-1"
              }`}
            />
          ))}
      </div>

      {/* btn */}
      <Button
        content="Next"
        variant="filled"
        onClick={() => {
          setActiveSlide((prev) => prev + 1)
          if (activeSlide == 2) {
            router.push("/auth")
          }
        }}
      />
    </div>
  )
}

export default Slides
