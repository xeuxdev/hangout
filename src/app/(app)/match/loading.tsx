import { SearchIcon } from "@/client/components/Icons"
import NavHeader from "@/client/components/Navigation/NavHeader"

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
      <section className="mb-8 overflow-hidden">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-lg font-bold">New Match</h1>
          <p className="text-pri_btn">See All</p>
        </header>

        <div className="flex items-center gap-5 w-[30rem] ">
          <div className="w-56 h-[19rem] rounded-3xl bg-gray-400 dark:bg-gray-600 animate-pulse" />
          <div className="w-56 h-[19rem] rounded-3xl bg-gray-400 dark:bg-gray-600 animate-pulse" />
        </div>
      </section>

      {/* your match */}

      <section className="overflow-hidden">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-lg font-bold">Your Match</h1>
          <p className="text-pri_btn">See All</p>
        </header>

        <div className="mt-5 flex items-center gap-5 w-[30rem] ">
          <div className="w-56 h-[19rem] rounded-3xl bg-gray-400 dark:bg-gray-600 animate-pulse" />
          <div className="w-56 h-[19rem] rounded-3xl bg-gray-400 dark:bg-gray-600 animate-pulse" />
        </div>
      </section>
    </>
  )
}

export default MatchLoader
