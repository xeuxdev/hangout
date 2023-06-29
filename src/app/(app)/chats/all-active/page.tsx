import NavHeader from "@/client/components/Navigation/NavHeader"
import Text from "@/client/components/Typography/Text"
import Image from "next/image"
import React from "react"

export const metadata = {
  title: "All Active Chats",
  description: "See All your Active Matches",
}

async function AllActivePage() {
  const users = (await fetch("https://randomuser.me/api/?results=20").then(
    (res) => {
      return res.json()
    }
  )) as { results: any[] }

  return (
    <>
      <NavHeader content="All Active" />

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

export default AllActivePage
