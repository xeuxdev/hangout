import { SearchIcon } from "@/client/components/Icons"
import NavHeader from "@/client/components/Navigation/NavHeader"
import React from "react"
import Slider from "./Slider"
import axios from "axios"
import { UserData } from "@/types"
import { serverSession } from "@/lib/auth/serverSession"
import Link from "next/link"
import YourMatchSlider from "@/features/match/components/YourMatchSlider"

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
          <Link href={"/match/all"} className="text-pri_btn">
            See All
          </Link>
        </header>

        <Slider users={filteredUsers} />
      </section>

      {/* your match */}

      <section className="pb-20 relative">
        <header className="flex items-center justify-between mb-6">
          <h1 className="font-bold text-lg">Your Match</h1>
          <Link href={"/match/your-match"} className="text-pri_btn">
            See All
          </Link>
        </header>

        <YourMatchSlider users={filteredUsers} />
      </section>
    </>
  )
}

export default MatchPage
