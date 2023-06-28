import { AppResponse, AppResponseData } from "@/lib/api/response"
import dbConnect from "@/lib/db/dbConnect"
import FeedbackModel from "@/server/models/Feedback.model"

export async function POST(request: Request) {
  await dbConnect()

  const { feedback, rating, userName } = await request.json()

  if (!feedback || !rating || !userName) {
    return AppResponse("invalid data", 400)
  }

  const res = await FeedbackModel.create({
    feedback: feedback,
    rating: rating,
    userName: userName,
  })

  if (res) {
    return AppResponse("feedback sent successfully", 201)
  } else {
    return AppResponse("failed to create feedback", 500)
  }
}
