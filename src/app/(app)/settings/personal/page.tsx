import NavHeader from "@/client/components/Navigation/NavHeader"
import { serverSession } from "@/lib/auth/serverSession"
import { UserProfile } from "@/types"
import { Suspense } from "react"

export const metadata = {
  title: "Personal Information",
  description: "see your personal information here",
}

async function page() {
  const session = await serverSession()
  const result = await fetch(
    process.env.FRONTEND_URL + "/api/users/" + session?.user.userName
  )
  const data = (await result.json()) as UserProfile

  //   console.log(data)

  return (
    <>
      <NavHeader content="Personal Information" />

      <section className="mx-auto max-w-lg space-y-6 pb-14">
        {/* <Suspense> */}
        <div className="w-full bg-input_bg_light dark:bg-input_bg_dark p-6 rounded-xl">
          {data.name}
        </div>
        <div className="w-full bg-input_bg_light dark:bg-input_bg_dark p-6 rounded-xl">
          {data.userName}
        </div>
        <div className="w-full bg-input_bg_light dark:bg-input_bg_dark p-6 rounded-xl">
          {data.email}
        </div>
        <div className="w-full bg-input_bg_light dark:bg-input_bg_dark p-6 rounded-xl">
          {data.birthday}
        </div>
        <div className="w-full bg-input_bg_light dark:bg-input_bg_dark p-6 rounded-xl">
          {data.gender}
        </div>
        <div className="w-full bg-input_bg_light dark:bg-input_bg_dark p-6 rounded-xl">
          {data.phone}
        </div>
        {/* </Suspense> */}
      </section>
    </>
  )
}

export default page
