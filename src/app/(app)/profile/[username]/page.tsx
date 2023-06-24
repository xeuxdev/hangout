import BackButton from "@/client/components/Buttons/BackButton"
import { ImageSlider, Info } from "@/features/profile"
import { UserData } from "@/types"
import { redirect } from "next/navigation"
import { Suspense } from "react"

export async function generateMetadata({
  params,
}: {
  params: { username: string }
}) {
  const user = (await fetch(
    `${process.env.FRONTEND_URL}/api/users/profile/${params.username}`
  ).then((res) => {
    return res.json()
  })) as UserData

  return {
    title: user?.userName + " " + "Profile",
    description: user.about,
  }
}

async function PeepsProfilePage({ params }: { params: { username: string } }) {
  const res = await fetch(
    `${process.env.FRONTEND_URL}/api/users/profile/${params.username}`
  )

  const userData = (await res.json()) as UserData

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
          <ImageSlider />
        </Suspense>
      </div>

      {/* info */}

      {userData && <Info userData={userData} />}
    </>
  )
}

export default PeepsProfilePage
