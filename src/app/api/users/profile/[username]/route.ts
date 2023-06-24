import { AppResponse, AppResponseData } from "@/lib/api/response"
import dbConnect from "@/lib/db/dbConnect"
import UsersModel from "@/server/models/Users.model"

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  await dbConnect()
  const slug = params.username // 'a', 'b', or 'c'

  const UserInfo = await UsersModel.findOne({
    userName: slug,
  })

  if (!UserInfo) {
    return AppResponse("not found", 404)
  }

  return AppResponseData(UserInfo, 200)
}
