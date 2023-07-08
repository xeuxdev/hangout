import { DetermineYourMatch } from "@/algorithm/match-algo/your-match"
import { SearchIcon } from "@/client/components/Icons"
import NavHeader from "@/client/components/Navigation/NavHeader"
import { NewMatchCard } from "@/features/match"
import { serverSession } from "@/lib/auth/serverSession"
import { getFilteredUsers, getUserData } from "@/utils/api/services"

async function YourMatchPage() {
  const session = await serverSession()

  const filteredUsers = await getFilteredUsers(session?.user.id)
  const UserData = await getUserData(session?.user.userName)

  const filteredUsersByAlgo = DetermineYourMatch(filteredUsers, UserData)

  // console.log(filteredUsersByAlgo)

  return (
    <section className="pb-20 max-w-lg mx-auto">
      <div className="flex items-center justify-between">
        <NavHeader content="Your Match" />
        <div className="-mt-10">
          <SearchIcon />
        </div>
      </div>

      <section className="grid grid-cols-2 lg:grid-cols-3 gap-3 gap-y-10 ">
        {filteredUsersByAlgo.map((user) => (
          <NewMatchCard user={user} key={user._id} />
        ))}
      </section>
    </section>
  )
}

export default YourMatchPage
