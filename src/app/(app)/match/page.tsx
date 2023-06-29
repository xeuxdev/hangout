import { SearchIcon } from "@/client/components/Icons"
import NavHeader from "@/client/components/Navigation/NavHeader"
import React from "react"
import Slider from "./Slider"
import { serverSession } from "@/lib/auth/serverSession"
import Link from "next/link"
import YourMatchSlider from "@/features/match/components/YourMatchSlider"
import { getFilteredUsers } from "@/utils/api/services"

export const metadata = {
  title: "find matches",
  description: "find people that match you",
}

async function MatchPage() {
  const session = await serverSession()

  const filteredUsers = await getFilteredUsers(session?.user.id)

  return (
    <section className="max-w-lg mx-auto">
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
          <h2 className="font-bold text-lg">Your Match</h2>
          <Link href={"/match/your-match"} className="text-pri_btn">
            See All
          </Link>
        </header>

        <YourMatchSlider users={filteredUsers} />
      </section>
    </section>
  )
}

export default MatchPage
