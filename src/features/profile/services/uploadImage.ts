import axios from "axios"

type EditProfileProps = {
  userId: string | undefined
  userName: string | undefined
  newImage: string
}

export async function uploadImage({
  userId,
  newImage,
  userName,
}: EditProfileProps) {
  let message = ""
  let status = ""
  let profileUrl = ""

  const imgUrl = newImage

  const image = new FormData()
  image.append("file", imgUrl)
  image.append(
    "upload_preset",
    process.env.NEXT_PUBLIC_CLOUD_UPLOAD_PRESET_PICS
  )
  // console.log(imgUrl)

  if (imgUrl) {
    await axios(process.env.NEXT_PUBLIC_CLOUD_UPLOAD_URL, {
      method: "POST",
      data: image,
    })
      .then((response) => {
        // console.log(response.data)
        // console.log(response.data.secure_url.toString())
        profileUrl = response.data.secure_url.toString()
      })
      .catch((error) => {
        // console.log(error.response.data)
        message = error.response.data
        status = "failure"
      })
  }

  await axios
    .post(`/api/users/profile/${userName}/images/create`, {
      image: profileUrl,
      userId: userId,
    })
    .then((res) => {
      // console.log(res.data)
      message = res.data.message
      status = "success"
      // toast("Logout and login to see changes")
    })
    .catch((err) => {
      // console.log(err.response.data)
      message = err.response.data.message
      status = "failure"
    })

  return { message, status }
}
