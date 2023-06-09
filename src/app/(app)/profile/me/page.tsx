import BackButton from "@/client/components/Buttons/BackButton"
import { ImageSlider, Info } from "@/features/profile"
import { authOptions } from "@/lib/auth/authOptions"
import { UserData } from "@/types"
import axios from "axios"
import { getServerSession } from "next-auth"
import { Suspense } from "react"

async function MyProfilePage() {
  const session = await getServerSession(authOptions)

  const res = await axios(`${process.env.FRONTEND_URL}/api/users/me`, {
    headers: {
      Authorization: "Bearer " + session?.accessToken,
    },
  })

  const userData = res.data as UserData

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
