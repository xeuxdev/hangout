import { UserProfile } from "@/types"

export async function getFilteredUsers(
  userId: string | undefined
): Promise<UserProfile[]> {
  const users = (await fetch(`${process.env.FRONTEND_URL}/api/users/all`).then(
    (res) => {
      return res.json()
    }
  )) as UserProfile[]

  const filteredUsers = users.filter((user) => user._id !== userId)
  return filteredUsers
}
