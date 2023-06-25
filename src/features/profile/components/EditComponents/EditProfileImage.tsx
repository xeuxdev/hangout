"use client"
import { CameraIcon, EditIcon } from "@/client/components/Icons"
import React, { useState } from "react"
import ProfileImage from "../ProfileImage"
import { UserData } from "@/types"
import { Modal } from "@mantine/core"
import Image from "next/image"
import { SubmitButton } from "@/client/components/Buttons"
import { useSession } from "next-auth/react"
import { editProfileImage } from "../../services/editProfileImage"

function EditProfileImage({ userData }: { userData: UserData }) {
  const { data: session } = useSession()
  const [showEditProfile, setShowEditProfile] = useState(false)
  const [profileImageInput, setProfileImageInput] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const payload = {
      profileImage: profileImageInput,
      userId: session?.user.id,
      userName: session?.user.userName,
    }

    // console.log(payload)

    await editProfileImage(payload).then(() => {
      setShowEditProfile(false)
    })
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-xl mb-5">Your Profile Image</h2>
        <span onClick={() => setShowEditProfile(true)}>
          <EditIcon />
        </span>
      </div>

      <>
        <ProfileImage userData={userData} width={100} />
      </>

      {showEditProfile && (
        <Modal
          centered
          title="Edit Profile Pic"
          opened={showEditProfile}
          onClose={() => {
            setShowEditProfile(false)
          }}
        >
          <>
            <form onSubmit={handleSubmit}>
              <div className="w-40 h-40 rounded-full mx-auto relative mb-10">
                {/* if user wants to upload new pic preview is handled here */}
                {profileImageInput !== "" ? (
                  <div className="w-full h-full rounded-full overflow-hidden relative mx-auto">
                    <Image
                      src={`${URL.createObjectURL(
                        profileImageInput as unknown as Blob | MediaSource
                      )}`}
                      alt={"profile image"}
                      fill
                      className="object-fill "
                    />
                  </div>
                ) : (
                  <ProfileImage userData={userData} width={200} />
                )}
                {/* for profile update */}
                <div className="absolute -bottom-2 right-5 bg-white w-10 h-10 rounded-full grid place-items-center z-20">
                  <label
                    htmlFor="profile-image-input"
                    className="w-full h-full"
                  >
                    <input
                      type="file"
                      className="w-0 h-0 "
                      id="profile-image-input"
                      onChange={(e) => {
                        // @ts-ignore
                        setProfileImageInput(e.target.files[0])
                        // console.log(e.target.files)
                      }}
                    />
                    <CameraIcon />
                  </label>
                </div>
              </div>

              <SubmitButton content="Done" variant="empty" />
            </form>
          </>
        </Modal>
      )}
    </>
  )
}

export default EditProfileImage
