import { SearchIcon } from "@/client/components/Icons"
import NavHeader from "@/client/components/Navigation/NavHeader"
import Text from "@/client/components/Typography/Text"
import { NowActive } from "@/features/chats"
import { serverSession } from "@/lib/auth/serverSession"
import { getFilteredUsers } from "@/utils/api/services"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Chats",
  description: "Chat with people around the world",
}

async function Chats() {
  const session = await serverSession()

  const users = await getFilteredUsers(session?.user.id)

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

        <NowActive users={users} />
      </section>

      {/* chats */}

      <section className="mt-10 space-y-6 pb-20">
        {users.map((user, idx) => (
          <div className="flex items-center justify-between" key={user.name}>
            <div className="flex items-center gap-4">
              <div className="relative w-[3.75rem] h-[3.75rem]">
                <Image
                  src={user.image}
                  alt={user.name + " image"}
                  fill
                  className="rounded-full"
                />
              </div>

              <div className="space-y-1">
                <Text content={`${user.name}`} size="lg" font="semibold" />

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
