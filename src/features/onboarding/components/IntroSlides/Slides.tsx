"use client"
import { Button } from "@/client/components/Buttons"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useTheme } from "next-themes"

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
  const { theme } = useTheme()

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

  // console.log(activeSlide)

  return (
    <div className="w-full max-w-lg px-5 pb-10 text-center">
      {/* images */}

      {/* text */}
      <div className="mb-10">
        {/* <motion.div
          className="relative w-full h-96"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
        >
          <Image
            src={`/onboarding/${theme}_Slide_${activeSlide}.png`}
            alt={"image" + activeSlide}
            fill
            className="duration-300"
          />
        </motion.div> */}
        <p className="px-5 text-3xl font-semibold text-primary_dark dark:text-primary">
          {texts[activeSlide]}
        </p>
      </div>

      {/* slide indicator */}

      <div className="flex items-center justify-center gap-1 mb-11">
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full duration-300 ${
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
          if (activeSlide == 2) {
            router.push("/auth")
            return
          }
          setActiveSlide((prev) => prev + 1)
        }}
      />
    </div>
  )
}

export default Slides
