import { UserData } from "@/types"
import axios from "axios"

export async function getUserData(
  userName: string | undefined
): Promise<UserData> {
  const response = await axios(
    `${process.env.FRONTEND_URL}/api/users/${userName}`
  )

  return response.data as UserData
}
