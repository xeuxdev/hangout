"use client"
import { Carousel } from "@mantine/carousel"
import { rem } from "@mantine/core"
import Image from "next/image"

function ImageSlider() {
  //     {
  //   data,
  // }: {
  //   data: {
  //     url: string
  //     thumbnailUrl: string
  //   }[]
  // }

  return (
    <div className="absolute top-0 left-0 w-full">
      <Carousel
        slideSize="100%"
        height={500}
        slideGap="md"
        loop
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
        }}
      >
        {Array(4)
          .fill(0)
          ?.map((_, index) => (
            <Carousel.Slide key={index}>
              <div className=" min-w-screen h-[31.25rem] relative">
                <Image
                  src={`/images/${index}.jpg`}
                  alt={"image" + index}
                  fill
                  className="object-fill"
                />
              </div>
            </Carousel.Slide>
          ))}
        {/* ...slides */}
      </Carousel>
    </div>
  )
}

export default ImageSlider
