import { getGreetingTime } from "@/helpers/getGreetingTime"
import { authOptions } from "@/lib/auth/authOptions"
import { getServerSession } from "next-auth"
import Image from "next/image"
import Filter from "./Filter"

export const metadata = {
  title: "Home",
  description: "Find your dates",
}

async function HomePage() {
  const session = await getServerSession(authOptions)
  return (
    <>
      <header className="flex items-center justify-between lg:pr-20">
        <div className="flex items-center gap-4">
          {session?.user.image == "" || session?.user.image == undefined ? (
            <Image
              src={`https://api.multiavatar.com/${session?.user.userName}.svg`}
              alt={session?.user.name + "image"}
              width={40}
              height={40}
              className="rounded-full"
            />
          ) : (
            <Image
              src={session?.user.image as string}
              alt={session?.user.name + "image"}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}

          <div>
            <p className="">{getGreetingTime()}👋</p>
            <p className="font-bold text-xl">{session?.user.name}</p>
          </div>
        </div>
        <div>
          <Filter />
        </div>
      </header>
    </>
  )
}

export default HomePage
