import BackButton from "@/client/components/Buttons/BackButton"
import { ImageSlider, Info } from "@/features/profile"
import { authOptions } from "@/lib/auth/authOptions"
import { UserData } from "@/types"
import axios from "axios"
import { getServerSession } from "next-auth"
import { Suspense } from "react"

export async function generateMetadata() {
  const session = await getServerSession(authOptions)
  return {
    title: session?.user.userName + " " + "Profile",
    description: "Your Profile Info",
  }
}

async function MyProfilePage() {
  const session = await getServerSession(authOptions)

  const res = await axios(`${process.env.FRONTEND_URL}/api/users/me`, {
    headers: {
      Authorization: "Bearer " + session?.accessToken,
    },
  })

  const userData = res.data as UserData

  console.log(userData)

  return (
    <>
      <header className="relative z-20">
        <BackButton />
      </header>

      <div>
        <Suspense fallback={<div>loading.....</div>}>
          <ImageSlider />
        </Suspense>
      </div>

      {/* info */}

      <Info session={session} userData={userData} />
    </>
  )
}

export default MyProfilePage
