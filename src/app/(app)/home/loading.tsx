import { FilterIcon } from "@/client/components/Icons"

function HomeLoader() {
  return (
    <>
      <header className="flex items-center justify-between lg:pr-20">
        <div className="flex items-center gap-4">
          {/* <ProfileImage width={40} userData={userData} /> */}
          <div className="mr-5 bg-gray-400 rounded-full h-14 w-14 dark:bg-gray-600 animate-pulse" />

          <div className="space-y-2">
            <div className="h-5 bg-gray-400 rounded-full w-28 dark:bg-gray-600 animate-pulse" />
            <div className="w-32 h-5 bg-gray-400 rounded-full dark:bg-gray-600 animate-pulse" />
          </div>
        </div>
        <div>
          <FilterIcon />
        </div>
      </header>

      <section className="pt-10 pb-20 xl:py-40">
        <div className="w-full max-w-md mx-auto h-[31.25rem] lg:h-[25rem] rounded-3xl bg-gray-400 dark:bg-gray-600 animate-pulse" />
      </section>
    </>
  )
}

export default HomeLoader
