import { getServerSession } from "next-auth"
import { authOptions } from "./authOptions"

export const serverSession = async () => {
  return await getServerSession(authOptions)
}
