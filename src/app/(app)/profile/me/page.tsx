import BackButton from "@/client/components/Buttons/BackButton"
import { ImageSlider, Info } from "@/features/profile"
import { serverSession } from "@/lib/auth/serverSession"
import { getUserData, getUserImages } from "@/utils/api/services"
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

  const userData = await getUserData(session?.user.userName)

  const imgData = await getUserImages(session?.user.userName)

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
