import { AppResponse, AppResponseData } from "@/lib/api/response"
import { serverSession } from "@/lib/auth/serverSession"
import dbConnect from "@/lib/db/dbConnect"
import UsersModel from "@/server/models/Users.model"

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  await dbConnect()

  const userId = params.userId

  const Users = await UsersModel.find({
    $and: [
      {
        _id: { $ne: userId },
      },
    ],
  }).limit(100)

  if (!Users) {
    return AppResponse("hian, nawa o, could not find users", 404)
  }

  return AppResponseData(Users, 200)
}
