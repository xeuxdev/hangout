import { UserData } from "@/types"
import Image from "next/image"

function ProfileImage({
  userData,
  width,
}: {
  userData: UserData
  width: number
}) {
  return (
    <div>
      {userData.image == "" || userData.image == undefined ? (
        <Image
          src={`https://api.multiavatar.com/${userData.userName}.svg`}
          alt={userData.name + "image"}
          width={width}
          height={width}
          className="rounded-full object-cover mx-auto"
        />
      ) : (
        <Image
          src={userData.image as string}
          alt={userData.name + "image"}
          width={width}
          height={width}
          className="rounded-full object-fill mx-auto"
        />
      )}
    </div>
  )
}

export default ProfileImage
