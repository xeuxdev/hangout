import { AppResponse } from "@/lib/api/response"
import dbConnect from "@/lib/db/dbConnect"
import ImagesModel from "@/server/models/Images.model"

export async function POST(request: Request) {
  await dbConnect()

  const { image, userId, userName } = await request.json()

  if (!image) {
    return AppResponse("invalid profile image", 400)
  }

  const UserImages = await ImagesModel.findOne({
    $and: [{ _id: userId }, { userName: userName }],
  })

  if (!UserImages) {
    return AppResponse("not found", 404)
  }

  UserImages.profileImage = image

  const res = await UserImages.save()

  if (res) {
    return AppResponse("Image Saved successful", 200)
  } else {
    return AppResponse("Image save failed", 500)
  }
}
