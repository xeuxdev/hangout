import BackButton from "@/client/components/Buttons/BackButton"
import { LineWave } from "@/client/components/UiElements"
import {
  EditImagesSlider,
  EditInterests,
  EditProfile,
  EditProfileImage,
} from "@/features/profile"
import { authOptions } from "@/lib/auth/authOptions"
import { UserData } from "@/types"
import axios from "axios"
import { getServerSession } from "next-auth"
import { Suspense } from "react"

export const metadata = {
  title: "Edit Profile",
}
async function EditProfilePage() {
  const session = await getServerSession(authOptions)

  const res = await axios(
    `${process.env.FRONTEND_URL}/api/users/${session?.user?.userName}`
  )

  const userData = res.data as UserData

  const img = await axios(
    `${process.env.FRONTEND_URL}/api/users/profile/${session?.user.userName}/images`
  )

  const imgData = (await img.data) as { images: string[] }

  return (
    <>
      <header className="flex items-center gap-5 mb-10">
        <BackButton />

        <h1 className="font-semibold text-xl">Edit Profile</h1>
      </header>

      <div className="space-y-7 pb-20">
        <>
          <EditProfileImage userData={userData} />
        </>

        {/* photos */}
        <div>
          <h3 className="font-semibold text-xl mb-5">Your Best Photos</h3>
          <Suspense fallback={<LineWave />}>
            <EditImagesSlider images={imgData.images} />
          </Suspense>
        </div>

        {/* interests */}
        <>
          <EditInterests userData={userData} />
        </>

        {/* profile */}

        <>
          <EditProfile userData={userData} />
        </>
      </div>
    </>
  )
}

export default EditProfilePage
