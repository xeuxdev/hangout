import BackButton from "@/client/components/Buttons/BackButton"
import EditIcon from "@/client/components/Icons/EditIcon"
import { authOptions } from "@/lib/auth/authOptions"
import { UserData } from "@/types"
import axios from "axios"
import { getServerSession } from "next-auth"

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

      <div className="space-y-5">
        <div>
          <h2 className="font-semibold text-xl mb-5">Your Best Photos</h2>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-xl mb-5">Your Interests</h3>
            <EditIcon />
          </div>

          <div className="flex items-center flex-wrap gap-4">
            {userData.interests.map((interest) => (
              <div
                key={interest}
                className={`px-4 py-1 rounded-full w-fit ring-2 font-medium bg-pri_btn`}
              >
                {interest}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-xl mb-5">Your Profile</h4>
        </div>
      </div>
    </>
  )
}

export default EditProfile
