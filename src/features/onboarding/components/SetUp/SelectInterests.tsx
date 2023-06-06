"use client"
import React, { useEffect, useState } from "react"
import { SetupProps } from "../../types"
import { interests } from "../../data/interests"
import { Button } from "@/client/components/Buttons"
import { useSetUpAccountData } from "../../contexts/SetUpContext"
import { toast } from "react-hot-toast"

function SelectInterests({ formStep, nextFormStep }: SetupProps) {
  const [selectedInterests, setSelectedInterests] = useState<number[]>([0])
  const { setSetUpValues } = useSetUpAccountData()

  // useEffect(() => {
  //   console.log(selectedInterests)
  // }, [selectedInterests])

  const handleSubmit = () => {
    let result = selectedInterests.map((index) => interests[index])

    if (result.length == 0) {
      toast.error("Please select an interest")
      return
    }

    setSetUpValues({
      interests: result,
    })
    nextFormStep()
  }

  return (
    <div
      className={`w-full flex-col ${
        formStep === 2 ? "flex justify-center" : "hidden"
      } relative h-full pt-10`}
    >
      <div className="fixed z-30 top-0 min-w-screen left-0 right-0 h-36 bg-primary dark:bg-primary_dark max-w-screen mx-auto "></div>

      <header className="mb-7 z-40 fixed top-20">
        Select your interests to match with soul mate who have things in common
      </header>

      <div className="flex flex-wrap gap-7 mt-20 mb-10">
        {interests.map((interest, index) => (
          <button
            key={interest + index}
            className={`px-4 py-1 rounded-full w-fix ring-2 ring-pri_btn hover:ring-[3px] font-medium ${
              selectedInterests.includes(index) ? "bg-pri_btn text-white" : ""
            }`}
            onClick={() => {
              const newArr = [...selectedInterests]
              const indexPosition = newArr.indexOf(index)

              if (indexPosition !== -1) {
                newArr.splice(indexPosition, 1) // Remove the index from array
              } else {
                newArr.push(index) // Add the index to array
              }
              setSelectedInterests(newArr)
            }}
          >
            {interest}
          </button>
        ))}
      </div>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] z-30 max-w-lg">
        <Button content="continue" variant="filled" onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default SelectInterests
