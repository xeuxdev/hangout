import { getGreetingTime } from "@/helpers/getGreetingTime"
import Filter from "./Filter"
import { ProfileImage } from "@/features/profile"
import Slider from "./Slider"
import { serverSession } from "@/lib/auth/serverSession"
import { getFilteredUsers, getUserData } from "@/utils/api/services"

export const metadata = {
  title: "Home",
  description: "Find your dates",
}

async function HomePage() {
  const session = await serverSession()

  const userData = await getUserData(session?.user.userName)

  const filteredUsers = await getFilteredUsers(session?.user.id)

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

      <section className="pt-10 pb-20 xl:py-40">
        <Slider users={filteredUsers} />
      </section>
    </>
  )
}

export default HomePage
