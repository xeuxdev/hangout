import axios from "axios"
import { setUpData } from "../types"

export async function setUpUserProfile(
  userData: setUpData & { userId: string | undefined }
) {
  // console.log(userData)
  const response = await axios.post("/api/users/setupAccount/", userData)

  return response.data
}
