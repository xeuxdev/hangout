import BackButton from "@/client/components/Buttons/BackButton"
import { LineWave } from "@/client/components/UiElements"
import {
  EditImagesSlider,
  EditInterests,
  EditProfile,
  EditProfileImage,
} from "@/features/profile"
import { serverSession } from "@/lib/auth/serverSession"
import { getUserData, getUserImages } from "@/utils/api/services"
import { Suspense } from "react"

export const metadata = {
  title: "Edit Profile",
}
async function EditProfilePage() {
  const session = await serverSession()

  const userData = await getUserData(session?.user.userName)

  const imgData = await getUserImages(session?.user.userName)

  return (
    <>
      <header className="flex items-center gap-5 mb-10">
        <BackButton />

        <h1 className="font-semibold text-xl">Edit Profile</h1>
      </header>

      <div className="space-y-7 pb-20 max-w-xl mx-auto">
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
