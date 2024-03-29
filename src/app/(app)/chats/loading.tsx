import { SearchIcon } from "@/client/components/Icons"
import NavHeader from "@/client/components/Navigation/NavHeader"

function ChatsLoader() {
  return (
    <section className="max-w-xl mx-auto">
      <div className="flex items-center justify-between">
        <NavHeader content="Chats" />
        <div className="-mt-10">
          <SearchIcon />
        </div>
      </div>

      <section>
        <header className="flex items-center justify-between mb-6">
          <h1 className="font-bold text-lg">Now Active</h1>
        </header>
      </section>

      <div className="flex items-center gap-4 ml-2">
        {Array(5)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className="w-[3.5rem] h-[3.5rem] rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse"
            />
          ))}
      </div>

      <section className="mt-10 space-y-6 pb-20">
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
    </section>
  )
}

export default ChatsLoader
