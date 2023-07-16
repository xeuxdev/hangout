"use client"
import { LilCard } from "@/client/components/Cards"
import Text from "@/client/components/Typography/Text"
import { useMediaQuery } from "@/client/hooks/useMediaQuery"
import { calculateAge } from "@/helpers/CalculateAge"
import { UserProfile } from "@/types"
import { useFilterUsersStore } from "@/zustand/store"
import { Carousel } from "@mantine/carousel"
import { rem } from "@mantine/core"
import Image from "next/image"
import Link from "next/link"

function Slider({ users }: { users: UserProfile[] }) {
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
    <Carousel
      slideSize={"50%"}
      height={mobile ? 440 : 700}
      slidesToScroll={mobile ? 1 : 3}
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 40 }]}
      slideGap="lg"
      loop
      dragFree
      withControls={false}
      withIndicators
      styles={{
        indicator: {
          width: rem(12),
          height: rem(4),
          transition: "width 250ms ease",

          "&[data-active]": {
            width: rem(40),
            backgroundColor: "#9610FF",
          },
          " :not([data-active])": {
            backgroundColor: "#fff",
            /* Styles for elements that do not have the attribute [data-active] */
          },
        },
        viewport: {
          maxWidth: 800,
          marginInline: "auto",
        },
      }}
    >
      {filteredUsers.length == 0
        ? users?.map((user, index) => (
            <Carousel.Slide key={index}>
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
            </Carousel.Slide>
          ))
        : filteredUsers?.map((user, index) => (
            <Carousel.Slide key={index}>
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
            </Carousel.Slide>
          ))}

      {/* ...slides */}
    </Carousel>
  )
}

export default Slider
