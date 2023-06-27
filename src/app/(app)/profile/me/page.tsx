import BackButton from "@/client/components/Buttons/BackButton"
import { ImageSlider, Info } from "@/features/profile"
import { serverSession } from "@/lib/auth/serverSession"
import { UserData } from "@/types"
import { Suspense } from "react"

export async function generateMetadata() {
  const session = await serverSession()
  return {
    title: session?.user.userName + " " + "Profile",
    description: "Your Profile Info",
  }
}

async function MyProfilePage() {
  const session = await serverSession()

  const userData = (await fetch(
    `${process.env.FRONTEND_URL}/api/users/${session?.user.userName}`
  ).then((response) => {
    return response.json()
  })) as UserData

  const imgData = (await fetch(
    `${process.env.FRONTEND_URL}/api/users/profile/${session?.user.userName}/images`
  ).then((response) => {
    return response.json()
  })) as { images: string[] }

  // const imgData = (await img.data) as { images: string[] }

  return (
    <>
      <header className="relative z-20">
        <BackButton />
      </header>

      <div>
        <Suspense fallback={<div>loading.....</div>}>
          <ImageSlider images={imgData.images} />
        </Suspense>
      </div>

      {/* info */}

      <Info userData={userData} />
    </>
  )
}

export default MyProfilePage
