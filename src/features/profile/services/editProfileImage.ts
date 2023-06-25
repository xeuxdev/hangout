import axios from "axios"
import { toast } from "react-hot-toast"

type EditProfileProps = {
  userId: string | undefined
  userName: string | undefined
  profileImage: string
}

export async function editProfileImage({
  userId,
  profileImage,
  userName,
}: EditProfileProps) {
  let profileUrl = ""

  const imgUrl = profileImage

  const image = new FormData()
  image.append("file", imgUrl)
  image.append("upload_preset", process.env.NEXT_PUBLIC_CLOUD_UPLOAD_PRESET)
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
        toast.error(error.response.data)
      })
  }

  await axios
    .post("/api/users/edit/profile/profile_image", {
      image: profileUrl,
      userId: userId,
      userName: userName,
    })
    .then((res) => {
      // console.log(res.data)
      toast.success(res.data.message)
      // toast("Logout and login to see changes")
    })
    .catch((err) => {
      // console.log(err.response.data)
      toast.error(err.response.data.message)
    })
}
