import BackButton from "@/client/components/Buttons/BackButton"
import { ImageSlider, Info } from "@/features/profile"
import { getUserData, getUserImages } from "@/utils/api/services"
import { redirect } from "next/navigation"
import { Suspense } from "react"

export async function generateMetadata({
  params,
}: {
  params: { username: string }
}) {
  const user = await getUserData(params.username)

  return {
    title: user?.userName + " " + "Profile",
    description: user.about,
  }
}

async function PeepsProfilePage({ params }: { params: { username: string } }) {
  const userData = await getUserData(params.username)

  const imgData = await getUserImages(params.username)

  if (!userData.userName) {
    redirect("/home")
  }

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

      {userData && <Info userData={userData} />}
    </>
  )
}

export default PeepsProfilePage
