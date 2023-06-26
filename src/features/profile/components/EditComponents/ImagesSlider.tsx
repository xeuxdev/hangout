"use client"

import EditIcon from "@/client/components/Icons/EditIcon"
import { Carousel } from "@mantine/carousel"
import Image from "next/image"
import UploadPictureForm from "../../Forms/UploadPictureForm"

function EditImagesSlider({ images }: { images: String[] }) {
  // console.log(images.length)
  return (
    <>
      <Carousel slideSize="50%" height={200} slideGap="md" withControls={false}>
        {images.map((img, index) => (
          <Carousel.Slide key={index}>
            <div className=" w-40 h-[12.25rem] relative">
              <>
                <Image
                  src={`${img}`}
                  alt={"image" + index}
                  fill
                  className="object-fill"
                />
                <div className="absolute bottom-2 right-2">
                  <EditIcon />
                </div>
              </>
            </div>
          </Carousel.Slide>
        ))}

        {images.length == 0 ||
          (images.length < 4 && (
            <div className="w-40 h-[12.25rem] relative">
              <UploadPictureForm />
            </div>
          ))}

        {/* ...slides */}
      </Carousel>
    </>
  )
}

export default EditImagesSlider
