import { UserData } from "@/types"

export async function fetchUserData({
  userid,
}: {
  userid: string
}): Promise<UserData> {
  const response = await fetch(
    `${process.env.FRONTEND_URL}/api/users/chats/${userid}`
  ).then((res) => {
    return res.json()
  })

  return response
}
