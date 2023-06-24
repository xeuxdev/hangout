import { AppResponse } from "@/lib/api/response"
import dbConnect from "@/lib/db/dbConnect"
import UsersModel from "@/server/models/Users.model"

export async function POST(request: Request) {
  await dbConnect()

  const { profileInfo, userId } = await request.json()

  if (!profileInfo || !userId) {
    return AppResponse("invalid request", 400)
  }

  const UserInfo = await UsersModel.findOne({
    _id: userId,
  })

  if (!UserInfo) {
    return AppResponse("User not found", 404)
  }

  // return AppResponseData(UserInfo, 200)

  const res = await UsersModel.findOneAndUpdate(
    {
      _id: userId,
    },
    {
      name: profileInfo.name,
      userName: profileInfo.userName,
      about: profileInfo.about,
      occupation: profileInfo.occupation,
    }
  )

  if (res) {
    return AppResponse("Profile Updated Successfully", 201)
  } else {
    return AppResponse("Profile Update failed", 500)
  }
}
