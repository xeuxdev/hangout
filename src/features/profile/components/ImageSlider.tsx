"use client"
import { useMediaQuery } from "@/client/hooks/useMediaQuery"
import { Carousel } from "@mantine/carousel"
import { rem } from "@mantine/core"
import Image from "next/image"

function ImageSlider({ images }: { images: String[] }) {
  const matches = useMediaQuery("(min-width: 768px)")

  // console.log(images)

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:left-20 lg:-translate-x-0 w-full max-w-lg select-none ">
      <Carousel
        slideSize={!matches ? "100%" : "75%"}
        height={!matches ? 500 : 400}
        slideGap="md"
        loop
        withControls={false}
        withIndicators
        dragFree
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
            maxWidth: "32rem",
            marginInline: "auto",
          },
        }}
      >
        {images.length == 0 && <div className="pt-28">No image yet</div>}
        {images?.map((img, index) => (
          <Carousel.Slide key={index}>
            <div className=" min-w-screen h-[31.25rem] lg:h-[25rem] relative">
              {img === "" ? (
                <div className="flex items-center justify-center h-full">
                  No Image
                </div>
              ) : (
                <Image
                  src={`${img}`}
                  alt={"image" + index}
                  fill
                  className="object-fill rounded-lg"
                />
              )}
            </div>
          </Carousel.Slide>
        ))}

        {/* ...slides */}
      </Carousel>
    </div>
  )
}

export default ImageSlider
