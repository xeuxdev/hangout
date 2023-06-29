import { UserProfile } from "@/types"
import axios from "axios"

export async function getFilteredUsers(
  userId: string | undefined
): Promise<UserProfile[]> {
  const users = (await axios(`${process.env.FRONTEND_URL}/api/users/all`).then(
    (res) => {
      return res.data
    }
  )) as UserProfile[]

  const filteredUsers = users.filter((user) => user._id !== userId)
  return filteredUsers
}
