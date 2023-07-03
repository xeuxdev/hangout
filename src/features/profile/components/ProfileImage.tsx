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
    <div
      className={`relative mx-auto`}
      style={{
        width: `${width / 16}rem`,
        height: `${width / 16}rem`,
      }}
    >
      {userData.image == "" || userData.image == undefined ? (
        <Image
          src={`https://api.multiavatar.com/${userData.userName}.svg`}
          alt={userData.name + " image"}
          // width={width}
          // height={width}
          fill
          className="rounded-full object-cover mx-auto"
        />
      ) : (
        <Image
          src={userData.image as string}
          alt={userData.name + " image"}
          // width={width}
          // height={width}
          fill
          className="rounded-full object-fill mx-auto"
        />
      )}
    </div>
  )
}

export default ProfileImage
