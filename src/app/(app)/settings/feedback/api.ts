import axios from "axios"

export async function sendFeedback({
  feedback,
  rating,
  userName,
}: {
  feedback: string
  rating: number
  userName: string | undefined
}) {
  const res = await axios.post("/api/users/feedback", {
    feedback: feedback,
    rating: rating,
    userName: userName,
  })

  return res.data
}
