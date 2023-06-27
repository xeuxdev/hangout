import Text from "@/client/components/Typography/Text"
import { calculateAge } from "@/helpers/CalculateAge"
import { UserData } from "@/types"
import Image from "next/image"
import React from "react"

function YourMatchCard({ user }: { user: UserData }) {
  return (
    <>
      <div className=" w-56 h-[19rem] relative space-y-5">
        <div className="h-60 w-56 relative">
          <Image
            src={`${user.image}`}
            alt={user.name + "image"}
            fill
            className="rounded-3xl overflow-hidden"
          />
        </div>

        <div className=" w-full flex items-center justify-center  flex-col gap-3">
          {/* info */}

          <Text content={user.name.split(" ")[0]} font="bold" size="lg" />
          <Text
            content={`${calculateAge(user.birthday)}`}
            font="bold"
            size="lg"
          />
        </div>
      </div>
    </>
  )
}

export default YourMatchCard
