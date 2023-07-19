"use client"
import Text from "@/client/components/Typography/Text"
import { calculateAge } from "@/helpers/CalculateAge"
import { UserData } from "@/types"
import Image from "next/image"
import Link from "next/link"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import { useMediaQuery } from "@/client/hooks/useMediaQuery"

function Slider({ users }: { users: UserData[] }) {
  //   console.log(users)
  const mobile = useMediaQuery("(max-width: 768px)")

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={mobile ? 1.5 : 3}
        height={350}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        // loopPreventsSliding
        effect="coverflow"
        style={{
          marginBottom: 30,
        }}
      >
        {users?.map((user, index) => (
          <SwiperSlide key={user._id}>
            <YourMatchCard user={user} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default Slider

function YourMatchCard({ user }: { user: UserData }) {
  return (
    <Link href={`/profile/${user.userName}`}>
      <div className=" w-56 h-[19rem] relative space-y-5">
        <div className="relative w-56 h-full max-h-[19rem]">
          <Image
            src={`${user.image}`}
            alt={user.name + "image"}
            fill
            className="overflow-hidden rounded-3xl"
          />
        </div>

        <div className="absolute bottom-0 w-full h-48 -translate-x-1/2 left-1/2 bg-gradient-to-t from-pri_btn to-pri_btn/20 opacity-40 blur" />

        <div className="absolute left-0 flex items-center justify-between w-full px-5 bottom-5">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Text
                content={user.name.split(" ")[0]}
                font="bold"
                size="xl"
                extraStyle="text-white"
              />
              <Text
                content={`${calculateAge(user.birthday)}`}
                font="bold"
                size="xl"
                extraStyle="text-white"
              />
            </div>

            <Text
              content={user.occupation}
              size="sm"
              font="medium"
              extraStyle="text-white"
            />
          </div>
        </div>
      </div>
    </Link>
  )
}

{
  /* <Link href={`/profile/${user.userName}`}>
<div className="h-full w-56 max-h-[19rem] relative overflow-hidden">
  <Image
    src={`${user.image}`}
    alt={"image" + index}
    fill
    className="rounded-3xl"
  />

  <div className="absolute bottom-0 w-full h-48 -translate-x-1/2 left-1/2 bg-gradient-to-t from-pri_btn to-pri_btn/20 opacity-40 blur" />

  <div className="absolute left-0 flex items-center justify-between w-full px-5 bottom-5">
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <Text
          content={user.name.split(" ")[0]}
          font="bold"
          size="xl"
          extraStyle="text-white"
        />
        <Text
          content={`${calculateAge(user.birthday)}`}
          font="bold"
          size="xl"
          extraStyle="text-white"
        />
      </div>

      <Text
        content={user.occupation}
        size="sm"
        font="medium"
        extraStyle="text-white"
      />
    </div>
  </div>
</div>
</Link> */
}
