import NavHeader from "@/client/components/Navigation/NavHeader"
import Text from "@/client/components/Typography/Text"
import { serverSession } from "@/lib/auth/serverSession"
import { getFilteredUsers } from "@/utils/api/services"
import Image from "next/image"
import Link from "next/link"
import React from "react"

export const metadata = {
  title: "All Active Chats",
  description: "See All your Active Matches",
}

async function AllActivePage() {
  const session = await serverSession()
  const users = await getFilteredUsers(session?.user.id)

  return (
    <>
      <NavHeader content="All Active" />

      <section className="mt-10 space-y-6 pb-20">
        {users.map((user, idx) => (
          <Link
            href={`/chats/${user._id}`}
            className="flex items-center justify-between"
            key={user.name}
          >
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
          </Link>
        ))}
      </section>
    </>
  )
}

export default AllActivePage
