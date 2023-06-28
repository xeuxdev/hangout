import { SearchIcon } from "@/client/components/Icons"
import NavHeader from "@/client/components/Navigation/NavHeader"
import { CyclicLoader } from "@/client/components/UiElements"
import Link from "next/link"

function MatchLoader() {
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

        <div className=" flex items-center gap-5">
          <div className="w-full h-[19rem] rounded-3xl bg-gray-400 dark:bg-gray-600 animate-pulse" />
          <div className="w-full h-[19rem] rounded-3xl bg-gray-400 dark:bg-gray-600 animate-pulse" />
        </div>
      </section>

      {/* your match */}

      <section className="">
        <header className="flex items-center justify-between mb-6">
          <h1 className="font-bold text-lg">Your Match</h1>
          <Link href={"/match/all"} className="text-pri_btn">
            See All
          </Link>
        </header>

        <div className="mt-5">
          <div className="w-56 h-[19rem] rounded-3xl bg-gray-400 dark:bg-gray-600 animate-pulse" />
          {/* <div className="w-56 h-[19rem] rounded-3xl bg-gray-400 dark:bg-gray-600 animate-pulse" /> */}
        </div>
      </section>
    </>
  )
}

export default MatchLoader
