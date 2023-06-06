"use client"
import React, { useEffect, useState } from "react"
import { SetupProps } from "../../types"
import Image from "next/image"
import { Button } from "@/client/components/Buttons"
import { toast } from "react-hot-toast"
import { useSetUpAccountData } from "../../contexts/SetUpContext"

const preferences = [
  {
    src: "./assets/love.svg",
    name: "Love",
  },
  {
    src: "./assets/friends.svg",
    name: "Friends",
  },
  {
    src: "./assets/fling.svg",
    name: "Fling",
  },
  {
    src: "./assets/business.svg",
    name: "Business",
  },
]

function Preference({ formStep, nextFormStep }: SetupProps) {
  const [selectedPreference, setSelectedPreference] = useState<number[]>([0])
  const { setSetUpValues } = useSetUpAccountData()

  useEffect(() => {
    console.log(selectedPreference)
  }, [selectedPreference])

  const handleSubmit = () => {
    let result = selectedPreference.map((index) => preferences[index].name)

    if (result.length == 0) {
      toast.error("Please select an interest")
      return
    }

    setSetUpValues({
      preferences: result,
    })
    nextFormStep()
  }

  return (
    <div
      className={`w-full flex-col ${
        formStep === 3 ? "flex justify-center" : "hidden"
      } relative h-full pt-10`}
    >
      <header className="font-medium my-2">
        What are you hoping to find on the Hangout Dating app
      </header>

      <div className="pt-10 grid grid-cols-2 gap-10 mb-10">
        {preferences.map((preference, index) => (
          <div
            className={`rounded-3xl max-w-[11.25rem] h-[11.25rem] ring-1 ring-gray-400 flex items-center justify-center flex-col gap-5 ${
              selectedPreference.includes(index) ? "ring-pri_btn ring-4" : ""
            }`}
            key={preference.name + index}
            onClick={() => {
              const newArr = [...selectedPreference]
              const indexPosition = newArr.indexOf(index)

              if (indexPosition !== -1) {
                newArr.splice(indexPosition, 1) // Remove the index from array
              } else {
                newArr.push(index) // Add the index to array
              }
              setSelectedPreference(newArr)
            }}
          >
            <div className="w-20 h-20 rounded-full bg-input_bg_light dark:bg-input_bg_dark grid place-items-center">
              <Image
                src={preference.src}
                alt={preference.name}
                width={28}
                height={28}
              />
            </div>
            <p className="font-bold">{preference.name}</p>
          </div>
        ))}
      </div>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] z-30 max-w-lg">
        <Button content="continue" variant="filled" onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default Preference
