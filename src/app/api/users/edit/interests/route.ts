import { AppResponse, AppResponseData } from "@/lib/api/response"
import dbConnect from "@/lib/db/dbConnect"
import UsersModel from "@/server/models/Users.model"

export async function POST(request: Request) {
  await dbConnect()

  const { interests, userId } = await request.json()

  if (!interests || !userId) {
    return AppResponse("invalid request", 400)
  }

  const UserInfo = await UsersModel.findOne({
    _id: userId,
  })

  if (!UserInfo) {
    return AppResponse("User not found", 404)
  }

  const res = await UsersModel.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      interests: interests,
    }
  )

  if (res) {
    return AppResponse("Interests Updated Successfully", 201)
  } else {
    return AppResponse("Interests Update failed", 500)
  }
}
