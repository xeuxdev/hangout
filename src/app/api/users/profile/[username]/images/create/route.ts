import { AppResponse, AppResponseData } from "@/lib/api/response"
import dbConnect from "@/lib/db/dbConnect"
import ImagesModel from "@/server/models/Images.model"

export async function POST(
  request: Request,
  { params }: { params: { username: string } }
) {
  await dbConnect()
  const slug = params.username // 'a', 'b', or 'c'

  const { image, userId } = await request.json()

  if (!image) {
    return AppResponse("invalid profile image", 400)
  }

  const UserImages = await ImagesModel.findOne({
    userId: userId,
  })

  if (!UserImages) {
    return AppResponse("not found", 404)
  }

  if (UserImages.images.length > 3) {
    return AppResponse("max number of images reached", 400)
  }

  // if (index) {
  //   UserImages.images[index] = image
  //   const res = await UserImages.save()
  //   if (res) {
  //     return AppResponse("Image Saved successful", 200)
  //   } else {
  //     return AppResponse("Image save failed", 500)
  //   }
  // } else {

  // UserImages.images = image

  // const response = await UserImages.save()
  const response = await ImagesModel.findOneAndUpdate(
    {
      userId: userId,
    },
    {
      $push: { images: image },
    }
  )

  if (response) {
    return AppResponse("Image Saved successful", 200)
  } else {
    return AppResponse("Image save failed", 500)
  }
}
