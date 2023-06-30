import { UserProfile } from "@/types"
import Image from "next/image"
import Link from "next/link"

function NowActive({ users }: { users: UserProfile[] }) {
  // console.log(users)
  return (
    <div className="flex items-center gap-3 overflow-x-scroll">
      {users.slice(0, 4)?.map((user, index) => (
        <Link href={`/messages/${user._id}`} key={index}>
          <div className="h-16 w-16 relative">
            <Image
              src={`${user.image}`}
              alt={user.name + " image"}
              fill
              className="rounded-full"
            />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default NowActive
