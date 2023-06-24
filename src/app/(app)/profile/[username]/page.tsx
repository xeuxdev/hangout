import BackButton from "@/client/components/Buttons/BackButton"
import { ImageSlider, Info } from "@/features/profile"
import { UserData } from "@/types"
import { Suspense } from "react"

export async function generateMetadata(params: { username: string }) {
  const res = await fetch(
    `${process.env.FRONTEND_URL}/api/users/profile/${params.username}`,
    {
      method: "GET",
    }
  )

  const userData = (await res.json()) as UserData
  return {
    title: userData?.userName + " " + "Profile",
    description: userData.about,
  }
}

async function PeepsProfilePage({ params }: { params: { username: string } }) {
  console.log(params)

  const res = await fetch(
    `${process.env.FRONTEND_URL}/api/users/profile/${params.username}`,
    {
      method: "GET",
    }
  )

  const userData = (await res.json()) as UserData

  //   console.log(userData)

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

      {userData && <Info userData={userData} />}
    </>
  )
}

export default PeepsProfilePage
