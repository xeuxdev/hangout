"use client"
import Text from "@/client/components/Typography/Text"
import { useMediaQuery } from "@/client/hooks/useMediaQuery"
import { calculateAge } from "@/helpers/CalculateAge"
import { UserData } from "@/types"
import { Carousel } from "@mantine/carousel"
import Image from "next/image"
import Link from "next/link"

function Slider({ users }: { users: UserData[] }) {
  const matches = useMediaQuery("(min-width: 768px)")

  //   console.log(users)

  return (
    <Carousel slideSize="50%" height={350} slideGap="md" withControls={false}>
      {users?.map((user, index) => (
        <Carousel.Slide key={index}>
          <Link href={`/profile/${user.userName}`}>
            <div className="h-full w-56 max-h-[19rem] relative overflow-hidden">
              <Image
                src={`${user.image}`}
                alt={"image" + index}
                fill
                className="rounded-3xl"
              />

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-48 bg-gradient-to-t from-pri_btn to-pri_btn/20 opacity-40 blur" />

              <div className="absolute bottom-5 left-0 w-full flex items-center justify-between px-5">
                {/* info */}
                <div className="flex gap-3 flex-col">
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
        </Carousel.Slide>
      ))}
      {/* ...slides */}
    </Carousel>
  )
}

export default Slider
