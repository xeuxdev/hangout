import { UserData } from "@/types"

export async function getUserData(
  userName: string | undefined
): Promise<UserData> {
  const response = await fetch(
    `${process.env.FRONTEND_URL}/api/users/${userName}`
  ).then((response) => {
    return response.json()
  })

  return response as UserData
}
