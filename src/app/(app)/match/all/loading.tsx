import { SearchIcon } from "@/client/components/Icons"
import NavHeader from "@/client/components/Navigation/NavHeader"

function Loading() {
  return (
    <>
      <div className="flex items-center justify-between">
        <NavHeader content="New Match" />
        <div className="-mt-10">
          <SearchIcon />
        </div>
      </div>

      <section className="grid grid-cols-2 lg:grid-cols-3 gap-3 gap-y-10">
        {Array(6)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className=" w-full h-[19rem] relative rounded-xl bg-gray-400 dark:bg-gray-600 animate-pulse"
            />
          ))}
      </section>
    </>
  )
}

export default Loading
