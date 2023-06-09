import BackButton from "@/client/components/Buttons/BackButton"
import EditIcon from "@/client/components/Icons/EditIcon"
import { LineWave } from "@/client/components/UiElements"
import { EditImagesSlider, EditInterests } from "@/features/profile"
import { authOptions } from "@/lib/auth/authOptions"
import { UserData } from "@/types"
import axios from "axios"
import { getServerSession } from "next-auth"
import { Suspense } from "react"

export const metadata = {
  title: "Edit Profile",
}
async function EditProfile() {
  const session = await getServerSession(authOptions)

  const res = await axios(`${process.env.FRONTEND_URL}/api/users/me`, {
    headers: {
      Authorization: "Bearer " + session?.accessToken,
    },
  })

  const userData = res.data as UserData

  return (
    <>
      <header className="flex items-center gap-5 mb-10">
        <BackButton />

        <h1 className="font-semibold text-xl">Edit Profile</h1>
      </header>

      <div className="space-y-7 pb-20">
        {/* photos */}
        <div>
          <h2 className="font-semibold text-xl mb-5">Your Best Photos</h2>
          <Suspense fallback={<LineWave />}>
            <EditImagesSlider />
          </Suspense>
        </div>

        {/* interests */}
        <EditInterests userData={userData} />

        {/* profile */}
        <div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-xl mb-5">Your Profile</h4>
            <EditIcon />
          </div>

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
        </div>
      </div>
    </>
  )
}

export default EditProfile
