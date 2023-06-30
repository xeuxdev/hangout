import { AppResponse, AppResponseData } from "@/lib/api/response"
import dbConnect from "@/lib/db/dbConnect"
import UsersModel from "@/server/models/Users.model"

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  await dbConnect()
  const slug = params.userId

  console.log(slug)

  const UserInfo = await UsersModel.findOne({
    _id: slug,
  })

  if (!UserInfo) {
    return AppResponse("not found", 404)
  }

  return AppResponseData(UserInfo, 200)
}
