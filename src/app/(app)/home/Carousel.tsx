"use client"
import { LilCard } from "@/client/components/Cards"
import Text from "@/client/components/Typography/Text"
import { useMediaQuery } from "@/client/hooks/useMediaQuery"
import { calculateAge } from "@/helpers/CalculateAge"
import { UserProfile } from "@/types"
import { useFilterUsersStore } from "@/zustand/store"
import Image from "next/image"
import Link from "next/link"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"

function Carousel({ users }: { users: UserProfile[] }) {
  const mobile = useMediaQuery("(max-width: 768px)")
  const filter = useFilterUsersStore((state) => state.filterUsers)

  const filteredUsers = users.filter((user) => {
    const isMatchGender = user.gender == filter.gender
    const isAgeInRange =
      calculateAge(user.birthday) >= filter.age[0] &&
      calculateAge(user.birthday) <= filter.age[1]
    // const isLocationMatch = user === 'New York';

    return isMatchGender && isAgeInRange
  })

  return (
    <Swiper
      spaceBetween={mobile ? 30 : 50}
      slidesPerView={mobile ? 1 : 3}
      height={mobile ? 440 : 700}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      // loopPreventsSliding
      effect="coverflow"
    >
      {filteredUsers.length == 0
        ? users?.map((user, index) => (
            <SwiperSlide key={index}>
              <Link href={`/profile/${user.userName}`}>
                <div className=" min-w-screen h-[31.25rem] lg:h-[25rem] relative overflow-hidden ">
                  {user.image === "" ? (
                    <div className="flex items-center justify-center h-full">
                      No Image
                    </div>
                  ) : (
                    <Image
                      src={`${user.image}`}
                      alt={"image" + index}
                      fill
                      className="object-fill rounded-3xl"
                    />
                  )}

                  <div className="absolute bottom-0 w-full h-48 -translate-x-1/2 left-1/2 bg-gradient-to-t from-pri_btn to-pri_btn/20 opacity-40 blur" />

                  <div className="absolute left-0 flex items-center justify-between w-full px-5 bottom-16">
                    {/* info */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <Text
                          content={user.name}
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

                    {/* disance */}
                    <LilCard content="2km" variant="filled" />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))
        : filteredUsers?.map((user, index) => (
            <SwiperSlide key={index}>
              <Link href={`/profile/${user.userName}`}>
                <div className=" min-w-screen h-[31.25rem] lg:h-[25rem] relative overflow-hidden ">
                  {user.image === "" ? (
                    <div className="flex items-center justify-center h-full">
                      No Image
                    </div>
                  ) : (
                    <Image
                      src={`${user.image}`}
                      alt={"image" + index}
                      fill
                      className="object-fill rounded-3xl"
                    />
                  )}

                  <div className="absolute bottom-0 w-full h-48 -translate-x-1/2 left-1/2 bg-gradient-to-t from-pri_btn to-pri_btn/20 opacity-40 blur" />

                  <div className="absolute left-0 flex items-center justify-between w-full px-5 bottom-16">
                    {/* info */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <Text
                          content={user.name}
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

                    {/* disance */}
                    <LilCard content="2km" variant="filled" />
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}

      {/* ...slides */}
    </Swiper>
  )
}

export default Carousel
