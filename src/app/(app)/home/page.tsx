import { getGreetingTime } from "@/helpers/getGreetingTime"
import Filter from "./Filter"
import axios from "axios"
import { UserData, UserProfile } from "@/types"
import { ProfileImage } from "@/features/profile"
import Slider from "./Slider"
import { serverSession } from "@/lib/auth/serverSession"

export const metadata = {
  title: "Home",
  description: "Find your dates",
}

async function HomePage() {
  const session = await serverSession()

  const userData = (await axios(
    `${process.env.FRONTEND_URL}/api/users/${session?.user.userName}`
  ).then((res) => {
    return res.data
  })) as UserData

  // const userData = res.data as UserData

  const users = (await axios(`${process.env.FRONTEND_URL}/api/users/all`).then(
    (res) => {
      return res.data
    }
  )) as UserProfile[]

  const filteredUsers = users.filter((user) => user._id !== session?.user.id)

  // console.log(users)
  return (
    <>
      <header className="flex items-center justify-between lg:pr-20">
        <div className="flex items-center gap-4">
          <ProfileImage width={40} userData={userData} />

          <div>
            <p className="">{getGreetingTime()}👋</p>
            <h1 className="font-bold text-xl">{session?.user.name}</h1>
          </div>
        </div>
        <div>
          <Filter />
        </div>
      </header>

      <section className="pt-10 pb-20">
        <Slider users={filteredUsers} />
      </section>
    </>
  )
}

export default HomePage
