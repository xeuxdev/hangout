"use client"
import React, { useEffect, useState } from "react"
import { SetupProps } from "../../types"
import Image from "next/image"
import { Button } from "@/client/components/Buttons"
import { toast } from "react-hot-toast"
import { useSetUpAccountData } from "../../contexts/SetUpContext"
import { setUpUserProfile } from "../../services/setUpProfile"
import { preferences } from "../../data/preferences"
import { useSession } from "next-auth/react"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import SuccessModal from "@/client/components/Modals/SuccessModal"

function Preference({ formStep }: SetupProps) {
  const [selectedPreference, setSelectedPreference] = useState<number[]>([0])
  const { setUpData, setSetUpValues } = useSetUpAccountData()
  const { data: session } = useSession()
  const router = useRouter()

  // useEffect(() => {
  //   console.log(selectedPreference)
  // }, [selectedPreference])

  const { mutate, data, error, isSuccess, isLoading } = useMutation({
    mutationKey: ["setupaccount"],
    mutationFn: setUpUserProfile,
  })

  const handleSubmit = async () => {
    let result = selectedPreference.map((index) => preferences[index].name)

    if (result.length == 0) {
      toast.error("Please select an interest")
      return
    }

    setSetUpValues({
      preferences: result,
    })

    let props = {
      ...setUpData,
      preferences: result,
      userId: session?.user.id,
    }

    mutate(props)
  }

  useEffect(() => {
    if (isSuccess) {
      toast.success(data?.message)

      setTimeout(() => {
        router.replace("/home")
      }, 1500)
    }

    if (error) {
      // @ts-ignore
      toast.error(error?.response?.data?.message)
    }

    if (isLoading) {
      toast.loading("Updating...")
    }
  }, [data, error, isLoading, isSuccess, router])

  return (
    <>
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
          <Button content="finish" variant="filled" onClick={handleSubmit} />
        </div>
      </div>

      {isSuccess && (
        <SuccessModal
          content="Your account is ready to use. You will be redirected to the home
        page in a few seconds."
        />
      )}
    </>
  )
}

export default Preference
