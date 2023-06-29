import { SearchIcon } from "@/client/components/Icons"
import NavHeader from "@/client/components/Navigation/NavHeader"
import { NewMatchCard } from "@/features/match"
import { serverSession } from "@/lib/auth/serverSession"
import { getFilteredUsers } from "@/utils/api/services"

async function SeeAllMatch() {
  const session = await serverSession()

  const filteredUsers = await getFilteredUsers(session?.user.id)

  return (
    <>
      <div className="flex items-center justify-between">
        <NavHeader content="New Match" />
        <div className="-mt-10">
          <SearchIcon />
        </div>
      </div>

      <section className="grid grid-cols-2 lg:grid-cols-3 gap-3 ">
        {filteredUsers.map((user) => (
          <NewMatchCard user={user} key={user._id} />
        ))}
      </section>
    </>
  )
}

export default SeeAllMatch
