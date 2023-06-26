import { AppResponse, AppResponseData } from "@/lib/api/response"
import dbConnect from "@/lib/db/dbConnect"
import UsersModel from "@/server/models/Users.model"

export async function GET() {
  await dbConnect()

  const Users = await UsersModel.find()

  if (!Users) {
    return AppResponse("hian, nawa o, could not find users", 404)
  }

  return AppResponseData(Users, 200)
}
