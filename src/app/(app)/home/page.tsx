import { getGreetingTime } from "@/helpers/getGreetingTime"
import { authOptions } from "@/lib/auth/authOptions"
import { getServerSession } from "next-auth"
import Filter from "./Filter"
import axios from "axios"
import { UserData } from "@/types"
import { ProfileImage } from "@/features/profile"
import Text from "@/client/components/Typography/Text"

export const metadata = {
  title: "Home",
  description: "Find your dates",
}

async function HomePage() {
  const session = await getServerSession(authOptions)

  const res = await axios(`${process.env.FRONTEND_URL}/api/users/me`, {
    headers: {
      Authorization: "Bearer " + session?.accessToken,
    },
  })

  const userData = res.data as UserData

  const users = (await axios(`${process.env.FRONTEND_URL}/api/users/all`).then(
    (res) => {
      return res.data
    }
  )) as UserData[]

  console.log(users)
  return (
    <>
      <header className="flex items-center justify-between lg:pr-20">
        <div className="flex items-center gap-4">
          <ProfileImage width={40} userData={userData} />

          <div>
            <p className="">{getGreetingTime()}👋</p>
            <p className="font-bold text-xl">{session?.user.name}</p>
          </div>
        </div>
        <div>
          <Filter />
        </div>
      </header>

      <section className="pt-5 pb-14">
        {users.map((user, index) => (
          <div key={user._id}>
            <Text
              content={user.name}
              font="bold"
              size="lg"
              extraStyle="text-red-500"
            />
          </div>
        ))}
      </section>
    </>
  )
}

export default HomePage
