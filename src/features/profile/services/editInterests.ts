import axios from "axios"

export async function editInterests({
  interests,
  userId,
}: {
  interests: string[]
  userId: string
}) {
  const res = await axios.post("/api/users/edit/interests", {
    interests: interests,
    userId: userId,
  })

  return res.data
}
