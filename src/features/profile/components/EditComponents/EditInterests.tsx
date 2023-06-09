"use client"
import { Button } from "@/client/components/Buttons"
import EditIcon from "@/client/components/Icons/EditIcon"
import { interests } from "@/constants/interests"
import { UserData } from "@/types"
import { Modal } from "@mantine/core"
import React, { useState } from "react"
import { toast } from "react-hot-toast"

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

  console.log(selectedInterests)

  const handleSubmit = () => {
    let result = selectedInterests.map((index) => interests[index])

    console.log(result)

    if (result.length == 0) {
      toast.error("Please select an interest")
      return
    }
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-xl mb-5">Your Interests</h3>
        <span onClick={() => setShowEditInterestsModal(true)}>
          <EditIcon />
        </span>
      </div>

      <div className="flex items-center flex-wrap gap-4">
        {userData.interests.map((interest) => (
          <div
            key={interest}
            className={`px-4 py-1 rounded-full w-fit font-medium bg-pri_btn`}
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
      >
        <div className="flex flex-wrap gap-7 my-5">
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
          content="Save Interests"
          variant="filled"
          onClick={handleSubmit}
        />
      </Modal>
    </>
  )
}

export default EditInterests
