"use client"
import { useMediaQuery } from "@/client/hooks/useMediaQuery"
import { Carousel } from "@mantine/carousel"
import { rem } from "@mantine/core"
import Image from "next/image"

function ImageSlider() {
  const matches = useMediaQuery("(min-width: 768px)")

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg ">
      <Carousel
        slideSize={!matches ? "100%" : "75%"}
        height={!matches ? 500 : 400}
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
              <div className=" min-w-screen h-[31.25rem] lg:h-[25rem] relative">
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
