"use client"
import { SubmitButton } from "@/client/components/Buttons"
import { EditIcon } from "@/client/components/Icons"
import { UserData } from "@/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { Modal } from "@mantine/core"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { EditProfileSchema } from "../../utils/Schema"
import { EditProfileType } from "../../types"
import { useMutation } from "@tanstack/react-query"
import { editProfile } from "../../services/editProfile"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"

function EditProfile({ userData }: { userData: UserData }) {
  const [showEditProfile, setShowEditProfile] = useState(false)
  const router = useRouter()

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<EditProfileType>({
    resolver: zodResolver(EditProfileSchema),
    defaultValues: {
      about: userData.about,
      name: userData.name,
      occupation: userData.occupation,
      userName: userData.userName,
    },
  })

  const { mutateAsync, isLoading } = useMutation({
    mutationKey: ["edit-profile"],
    mutationFn: editProfile,
  })

  const onsubmit = (values: EditProfileType) => {
    // console.log(values)

    const payload = {
      userId: userData._id,
      profileInfo: {
        name: values.name,
        userName: values.userName,
        about: values.about,
        occupation: values.occupation,
      },
    }

    mutateAsync(payload)
      .then((res) => {
        res && toast.success(res.message)
      })
      .catch((err) => {
        err && toast.error(err.response.data.message)
      })
      .finally(() => {
        setShowEditProfile(false)
        router.refresh()
      })
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h5 className="font-semibold text-xl mb-5">Your Profile Info</h5>
        <span onClick={() => setShowEditProfile(true)}>
          <EditIcon />
        </span>
      </div>

      {/* stale data */}
      <div className="space-y-3">
        <p className="rounded-lg bg-input_bg_light dark:bg-input_bg_dark p-3">
          {userData.name}
        </p>
        <p className="rounded-lg bg-input_bg_light dark:bg-input_bg_dark p-3">
          {userData.userName}
        </p>
        {userData.occupation !== "" && (
          <p className="rounded-lg bg-input_bg_light dark:bg-input_bg_dark p-3">
            {userData.occupation}
          </p>
        )}
        <p className="rounded-lg bg-input_bg_light dark:bg-input_bg_dark p-3">
          {userData.about}
        </p>
      </div>

      <Modal
        opened={showEditProfile}
        onClose={() => setShowEditProfile(false)}
        title="Edit Profile"
        centered
      >
        <form className="space-y-4" onSubmit={handleSubmit(onsubmit)}>
          {/* name */}
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className=" w-full flex items-center h-14 bg-input_bg_light dark:bg-input_bg_dark text-primary_dark dark:text-primary font-semibold px-5 focus:ring-1 focus-visible:ring-pri_btn outline-none rounded-lg"
              placeholder="enter name..."
            />
            <p className="text-xs text-red-500">{errors.name?.message}</p>
          </div>

          {/* username */}
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="font-medium">
              UserName
            </label>
            <input
              type="text"
              id="username"
              {...register("userName")}
              className=" w-full flex items-center h-14 bg-input_bg_light dark:bg-input_bg_dark text-primary_dark dark:text-primary font-semibold px-5 focus:ring-1 focus-visible:ring-pri_btn outline-none rounded-lg"
              placeholder="enter userName..."
            />
            <p className="text-xs text-red-500">{errors.about?.message}</p>
          </div>

          {/* about */}

          <div className="flex flex-col gap-1">
            <label htmlFor="about" className="font-medium">
              About
            </label>
            <input
              type="text"
              id="about"
              {...register("about")}
              className=" w-full flex items-center h-14 bg-input_bg_light dark:bg-input_bg_dark text-primary_dark dark:text-primary font-semibold px-5 focus:ring-1 focus-visible:ring-pri_btn outline-none rounded-lg"
              placeholder="telk a lil about yourself..."
            />
            <p className="text-xs text-red-500">{errors.about?.message}</p>
          </div>

          {/* occupation */}

          <div className="flex flex-col gap-1">
            <label htmlFor="occupation" className="font-medium">
              Occupation
            </label>
            <input
              type="text"
              id="occupation"
              {...register("occupation")}
              className=" w-full flex items-center h-14 bg-input_bg_light dark:bg-input_bg_dark text-primary_dark dark:text-primary font-semibold px-5 focus:ring-1 focus-visible:ring-pri_btn outline-none rounded-lg"
              placeholder="enter occupation..."
            />
            <p className="text-xs text-red-500">{errors.occupation?.message}</p>
          </div>
          <SubmitButton
            content={isLoading ? "updating..." : "Update"}
            variant="filled"
          />
        </form>
      </Modal>
    </>
  )
}

export default EditProfile
