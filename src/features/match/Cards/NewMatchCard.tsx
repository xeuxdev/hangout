import Text from "@/client/components/Typography/Text"
import { calculateAge } from "@/helpers/CalculateAge"
import { UserData } from "@/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"

function NewMatchCard({ user }: { user: UserData }) {
  return (
    <Link href={`/profile/${user.userName}`}>
      <div className="max-w-[14rem] w-full h-[19rem] relative overflow-hidden">
        <Image
          src={`${user.image}`}
          alt={user.name + "image"}
          fill
          className="rounded-xl"
        />

        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-full h-24 bg-gradient-to-t from-[#9610FF] to-purple-800 opacity-75 blur-lg" />

        <div className="absolute bottom-5 left-0 w-full flex items-center justify-between px-5">
          {/* info */}
          <div className="flex gap-3 flex-col">
            <div className="flex items-center gap-3">
              <Text content={user.name.split(" ")[0]} font="bold" size="lg" />
              <Text
                content={`${calculateAge(user.birthday)}`}
                font="bold"
                size="lg"
              />
            </div>

            <Text content={user.occupation} size="sm" font="medium" />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NewMatchCard
