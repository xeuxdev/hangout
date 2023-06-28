import { SearchIcon } from "@/client/components/Icons"
import NavHeader from "@/client/components/Navigation/NavHeader"
import Skeleton from "react-loading-skeleton"

function ChatsLoader() {
  return (
    <>
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

        <div className="flex items-center gap-4">
          {Array(50)
            .fill(0)
            .map((_, idx) => (
              <Skeleton
                key={idx}
                height={80}
                width={80}
                className="rounded-full "
              />
            ))}
        </div>
      </section>

      <section className="mt-10 space-y-3 pb-20">
        {Array(20)
          .fill(0)
          .map((_, idx) => (
            <div className="flex items-center justify-between" key={idx}>
              {/*  */}
              <div className="flex items-center gap-4">
                <Skeleton height={50} width={50} className="rounded-full" />

                <div className="space-y-1">
                  <Skeleton height={20} width={200} />

                  <Skeleton height={10} width={200} />
                </div>
              </div>
            </div>
          ))}
      </section>
    </>
  )
}

export default ChatsLoader
