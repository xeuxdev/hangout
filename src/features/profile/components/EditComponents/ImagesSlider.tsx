"use client"

import EditIcon from "@/client/components/Icons/EditIcon"
import { Carousel } from "@mantine/carousel"
import Image from "next/image"

function EditImagesSlider() {
  return (
    <>
      <Carousel slideSize="50%" height={200} slideGap="md" withControls={false}>
        {Array(4)
          .fill(0)
          ?.map((_, index) => (
            <Carousel.Slide key={index}>
              <div className=" w-40 h-[12.25rem] relative">
                <Image
                  src={`/images/${index}.jpg`}
                  alt={"image" + index}
                  fill
                  className="object-fill"
                />
                <div className="absolute bottom-2 right-2">
                  <EditIcon />
                </div>
              </div>
            </Carousel.Slide>
          ))}
        {/* ...slides */}
      </Carousel>
    </>
  )
}

export default EditImagesSlider
