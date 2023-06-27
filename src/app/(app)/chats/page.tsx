import { SearchIcon } from "@/client/components/Icons"
import NavHeader from "@/client/components/Navigation/NavHeader"
import Text from "@/client/components/Typography/Text"
import { NowActive } from "@/features/chats"
import { UserData } from "@/types"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

export const metadata = {
  title: "Chats",
  description: "Chat with people around the world",
}

async function Chats() {
  const users = (await fetch("https://randomuser.me/api/?results=50").then(
    (res) => {
      return res.json()
    }
  )) as { results: any[] }

  // console.log(users)

  return (
    <>
      <div className="flex items-center justify-between">
        <NavHeader content="Chats" />
        <div className="-mt-10">
          <SearchIcon />
        </div>
      </div>

      {/* now active */}
      <section>
        <header className="flex items-center justify-between mb-6">
          <h1 className="font-bold text-lg">Now Active</h1>
          <Link href={"/chats/all-active"} className="text-pri_btn">
            See All
          </Link>
        </header>

        <NowActive users={users.results} />
      </section>

      {/* chats */}

      <section className="mt-10 space-y-3 pb-20">
        {users.results.map((user, idx) => (
          <div
            className="flex items-center justify-between"
            key={user.name.first + user.name.last}
          >
            {/*  */}
            <div className="flex items-center gap-4">
              <Image
                src={user.picture.thumbnail}
                alt={user.name.first}
                width={60}
                height={60}
                className="rounded-full"
              />

              <div className="space-y-1">
                <Text
                  content={`${user.name.first}  ${user.name.last}`}
                  size="lg"
                  font="semibold"
                />

                <Text content="hey there" size="xs" font="normal" />
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default Chats
