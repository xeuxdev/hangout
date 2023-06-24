import axios from "axios"

export async function editProfile({
  userId,
  profileInfo,
}: {
  userId: string
  profileInfo: {
    name: string
    userName: string
    about: string
    occupation: string
  }
}) {
  const result = await axios.post("/api/users/edit/profile", {
    profileInfo: profileInfo,
    userId: userId,
  })

  return result.data
}
