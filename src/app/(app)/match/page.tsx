import { SearchIcon } from "@/client/components/Icons"
import NavHeader from "@/client/components/Navigation/NavHeader"
import React from "react"
import Slider from "./Slider"
import { serverSession } from "@/lib/auth/serverSession"
import Link from "next/link"
import YourMatchSlider from "@/features/match/components/YourMatchSlider"
import { getUserData } from "@/utils/api/services"
import { getMatches } from "@/features/match"

export const metadata = {
  title: "find matches",
  description: "find people that match you",
}

async function MatchPage() {
  const session = await serverSession()

  const UserData = await getUserData(session?.user.userName)

  const matchData = await getMatches(session?.user.id)

  return (
    <section className="">
      <div className="flex items-center justify-between">
        <NavHeader content="Match" />
        <div className="-mt-10">
          <SearchIcon />
        </div>
      </div>

      {/* new match */}
      <section className="">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-lg font-bold">New Match</h1>
          <Link href={"/match/all"} className="text-pri_btn">
            See All
          </Link>
        </header>

        <Slider users={matchData} />
      </section>

      {/* your match */}

      <section className="relative pb-20">
        <header className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">Your Match</h2>
          {/* <Link href={"/match/your-match"} className="text-pri_btn">
            See All
          </Link> */}
        </header>

        <YourMatchSlider users={matchData} userData={UserData} />
      </section>
    </section>
  )
}

export default MatchPage
