import { SearchIcon } from "@/client/components/Icons"
import NavHeader from "@/client/components/Navigation/NavHeader"
import React from "react"
import Slider from "./Slider"
import axios from "axios"
import { UserData } from "@/types"
import { serverSession } from "@/lib/auth/serverSession"

export const metadata = {
  title: "find matches",
}
async function MatchPage() {
  const session = await serverSession()

  const users = (await axios(`${process.env.FRONTEND_URL}/api/users/all`).then(
    (res) => {
      return res.data
    }
  )) as UserData[]

  const filteredUsers = users.filter((user) => user._id !== session?.user.id)
  return (
    <>
      <div className="flex items-center justify-between">
        <NavHeader content="Match" />
        <div className="-mt-10">
          <SearchIcon />
        </div>
      </div>

      {/* new match */}
      <section className="">
        <header className="flex items-center justify-between mb-6">
          <h1 className="font-bold text-lg">New Match</h1>
          <p className="text-pri_btn">See All</p>
        </header>

        <Slider users={filteredUsers} />
      </section>
    </>
  )
}

export default MatchPage
