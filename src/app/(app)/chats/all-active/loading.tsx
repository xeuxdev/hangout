import NavHeader from "@/client/components/Navigation/NavHeader"

function AllActiveLoader() {
  return (
    <>
      <NavHeader content="All Active" />

      <section className="mt-10 space-y-6 pb-20 mx-auto max-w-xl">
        {Array(20)
          .fill(0)
          .map((_, idx) => (
            <div
              className="flex items-center justify-between h-[3.75rem] w-full"
              key={idx}
            >
              {/*  */}
              <div className="flex items-center gap-4 w-full">
                <div className="w-[3.75rem] h-[3.75rem] rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse" />

                <div className="space-y-1">
                  <div className="w-56 h-7 rounded-md bg-gray-400 dark:bg-gray-600 animate-pulse" />

                  <div className="w-20 h-4 rounded-md bg-gray-400 dark:bg-gray-600 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
      </section>
    </>
  )
}

export default AllActiveLoader
