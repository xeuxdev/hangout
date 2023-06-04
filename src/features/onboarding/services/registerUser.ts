import axios from "@/lib/axios"
import { SignUpType } from "../types"
export async function registerUser(values: SignUpType) {
  const { email, password } = values
  const res = await axios.post("/api/users/register", {
    email: email,
    password: password,
  })

  return res.data
}
