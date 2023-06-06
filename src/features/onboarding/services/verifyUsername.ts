import axios from "axios"

export async function verifyUsername(userName: string) {
  const response = await axios.post("/api/users/setupAccount/verifyUsername", {
    userName: userName,
  })

  return {
    msg: response.data.message,
    status:
      response.data.message == "username already in use"
        ? "rejected"
        : ("accepted" as "accepted" | "rejected"),
  }
}
