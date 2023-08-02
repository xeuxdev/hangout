import { UserProfile } from "@/types"

export async function getMatches(
  userId: string | undefined
): Promise<UserProfile[]> {
  const users = (await fetch(
    `${process.env.FRONTEND_URL}/api/match/${userId}`
  ).then((res) => {
    return res.json()
  })) as UserProfile[]

  return users
}
