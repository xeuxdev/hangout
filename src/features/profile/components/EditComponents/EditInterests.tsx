"use client"
import { Button } from "@/client/components/Buttons"
import EditIcon from "@/client/components/Icons/EditIcon"
import { interests } from "@/constants/interests"
import { UserData } from "@/types"
import { Modal } from "@mantine/core"
import { useMutation } from "@tanstack/react-query"
import React, { useState } from "react"
import { toast } from "react-hot-toast"
import { editInterests } from "../../services/editInterests"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"

function findIndices(array1: string[], array2: string[]) {
  return array1.map(function (element) {
    return array2.indexOf(element)
  })
}

function EditInterests({ userData }: { userData: UserData }) {
  const [showEditInterestsModal, setShowEditInterestsModal] = useState(false)
  const [selectedInterests, setSelectedInterests] = useState<number[]>(
    findIndices(userData.interests, interests)
  )
  const router = useRouter()
  const { theme } = useTheme()

  // console.log(selectedInterests)

  const { mutateAsync, error, isLoading } = useMutation({
    mutationKey: ["edit-Interests"],
    mutationFn: editInterests,
  })

  const handleSubmit = () => {
    let result = selectedInterests.map((index) => interests[index])

    // console.log(result)

    if (result.length == 0) {
      toast.error("Please select an interest")
      return
    }

    const payload = {
      interests: result,
      userId: userData._id,
    }

    mutateAsync(payload)
      .then((res) => {
        res && toast.success(res.message)
        setShowEditInterestsModal(false)
      })
      .catch((err) => {
        error && toast.error(err.response.data.message)
      })
      .finally(() => {
        router.refresh()
      })
  }

  const style = {
    background: theme == "dark" ? "#181A20" : "hsl(0, 0%, 100%)",
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h4 className="font-semibold text-xl mb-5">Your Interests</h4>
        <span onClick={() => setShowEditInterestsModal(true)}>
          <EditIcon />
        </span>
      </div>

      <div className="flex items-center flex-wrap gap-4">
        {userData.interests.map((interest) => (
          <div
            key={interest}
            className={`px-4 py-1 rounded-full w-fit font-medium bg-pri_btn text-primary`}
          >
            {interest}
          </div>
        ))}
      </div>

      <Modal
        opened={showEditInterestsModal}
        onClose={() => setShowEditInterestsModal(false)}
        title="Edit Interests"
        centered
        styles={{
          header: {
            backgroundColor: style.background,
            color: theme == "dark" ? "hsl(0,0%,85%)" : "hsl(0, 0%, 8%)",
          },
          body: {
            backgroundColor: style.background,
            color: theme == "dark" ? "hsl(0,0%,85%)" : "hsl(0, 0%, 8%)",
          },
          close: {
            color: theme == "dark" ? "#fff" : "#000",
          },
        }}
      >
        <div className="flex flex-wrap gap-7 py-5">
          {interests.map((interest, index) => (
            <button
              key={interest + index}
              className={`px-4 py-1 rounded-full w-fit ring-2 ring-pri_btn hover:ring-[3px] font-medium ${
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

        <Button
          content={isLoading ? "Saving..." : "Save Interests"}
          variant="filled"
          onClick={handleSubmit}
        />
      </Modal>
    </>
  )
}

export default EditInterests
