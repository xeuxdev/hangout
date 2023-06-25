import { AppResponse } from "@/lib/api/response"
import dbConnect from "@/lib/db/dbConnect"
import ImagesModel from "@/server/models/Images.model"
import UsersModel from "@/server/models/Users.model"

export async function POST(request: Request) {
  await dbConnect()

  const { image, userId, userName } = await request.json()

  if (!image) {
    return AppResponse("invalid profile image", 400)
  }

  const UserImages = await ImagesModel.findOne({
    $and: [{ userId: userId }, { userName: userName }],
  })

  // console.log(UserImages, "UserImages")

  const User = await UsersModel.findOne({
    _id: userId,
  })

  if (!UserImages || !User) {
    return AppResponse("not found", 404)
  }

  UserImages.profileImage = image
  User.image = image

  const res = await UserImages.save()
  const resp = await User.save()

  if (res && resp) {
    return AppResponse("Image Saved successful", 200)
  } else {
    return AppResponse("Image save failed", 500)
  }
}
