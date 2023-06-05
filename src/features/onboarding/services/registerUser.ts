import axios from "@/lib/axios"
import { SignUpType } from "../types"
import { UserData } from "@/types"

export async function registerUser(values: SignUpType) {
  const { email, password } = values

  try {
    const res = await axios.post("/api/users/register", {
      email: email,
      password: password,
    })
    return {
      data: res.data as UserData,
      status: res.status,
      message: res.data.message as string,
    }
  } catch (error: any) {
    return {
      status: error.status,
      message: error.response.data.message as string,
    }
  }
  // const res = await axios.post("/api/users/register", {
  //   email: email,
  //   password: password,
  // })
  // return res.data as UserData
}
