import { SearchIcon } from "@/client/components/Icons"
import NavHeader from "@/client/components/Navigation/NavHeader"
import { NewMatchCard } from "@/features/match"
import { serverSession } from "@/lib/auth/serverSession"
import { UserData } from "@/types"
import axios from "axios"
import React from "react"

async function YourMatchPage() {
  const session = await serverSession()

  const users = (await axios(`${process.env.FRONTEND_URL}/api/users/all`).then(
    (res) => {
      return res.data
    }
  )) as UserData[]

  const filteredUsers = users.filter((user) => user._id !== session?.user.id)

  return (
    <section className="pb-20 max-w-lg mx-auto">
      <div className="flex items-center justify-between">
        <NavHeader content="Your Match" />
        <div className="-mt-10">
          <SearchIcon />
        </div>
      </div>

      <section className="grid grid-cols-2 lg:grid-cols-3 gap-3 gap-y-10 ">
        {filteredUsers.map((user) => (
          <NewMatchCard user={user} key={user._id} />
        ))}
      </section>
    </section>
  )
}

export default YourMatchPage
