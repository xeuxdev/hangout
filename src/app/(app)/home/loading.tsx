import { FilterIcon } from "@/client/components/Icons"

function HomeLoader() {
  return (
    <>
      <header className="flex items-center justify-between lg:pr-20">
        <div className="flex items-center gap-4">
          {/* <ProfileImage width={40} userData={userData} /> */}
          <div className="h-14 w-14 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse mr-5" />

          <div className="space-y-2">
            <div className="h-5 w-28 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse" />
            <div className="h-5 w-32 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse" />
          </div>
        </div>
        <div>
          <FilterIcon />
        </div>
      </header>

      <section className="pt-10 pb-20">
        <div className="w-full max-w-md h-[31.25rem] lg:h-[25rem] rounded-3xl bg-gray-400 dark:bg-gray-600 animate-pulse" />
      </section>
    </>
  )
}

export default HomeLoader
