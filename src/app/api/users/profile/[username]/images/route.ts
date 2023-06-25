import { AppResponse, AppResponseData } from "@/lib/api/response"
import dbConnect from "@/lib/db/dbConnect"
import ImagesModel from "@/server/models/Images.model"

export async function GET(
  request: Request,
  { params }: { params: { username: string } }
) {
  await dbConnect()
  const slug = params.username // 'a', 'b', or 'c'

  const UserImages = await ImagesModel.findOne({
    userName: slug,
  })

  if (!UserImages) {
    return AppResponse("not found", 404)
  }

  return AppResponseData(UserImages, 200)
}
