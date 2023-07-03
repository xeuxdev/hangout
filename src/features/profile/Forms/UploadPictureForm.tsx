import Image from "next/image"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { ImageSchema } from "../utils/Schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitButton } from "@/client/components/Buttons"
import { useSession } from "next-auth/react"
import { uploadImage } from "../services/uploadImage"
import { toast } from "react-hot-toast"
import { CyclicLoader } from "@/client/components/UiElements"
import { useRouter } from "next/navigation"

type ImageType = {
  image: string
}

function UploadPictureForm() {
  const { data: session } = useSession()
  const [imagePreview, setImagePreview] = useState<File>()
  const [isUploading, setIsUploading] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ImageType>({
    resolver: zodResolver(ImageSchema),
  })

  const onsubmit = async (data: ImageType) => {
    // console.log(data)
    setIsUploading(true)
    // console.log(data.image[0])

    // console.log(session?.user)

    await uploadImage({
      userId: session?.user.id,
      userName: session?.user.userName,
      newImage: data.image[0],
    })
      .then((val) => {
        val.status == "success" && toast.success(val.message)
        val.status == "failure" && toast.error(val.message)
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
      .finally(() => {
        setIsUploading(false)
        router.refresh()
      })
  }

  if (isUploading) {
    return <CyclicLoader />
  }

  return (
    <>
      <form className="space-y-2" onSubmit={handleSubmit(onsubmit)}>
        <div className="flex flex-col gap-1.5 h-10">
          <label htmlFor="image" className="text-primary dark:text-light_Gray">
            <input
              type="file"
              {...register("image")}
              className=""
              onChange={(e) => {
                setImagePreview(e.target?.files?.[0])
              }}
            />
          </label>

          <p className="text-sm text-error">{errors.image?.message}</p>
        </div>

        {/* image preview */}
        {imagePreview ? (
          <div className="relative w-28 h-28">
            <Image
              src={URL.createObjectURL(
                imagePreview as unknown as Blob | MediaSource
              )}
              alt={imagePreview?.name as string}
              fill
              className="object-fill object-center"
            />
          </div>
        ) : null}

        <SubmitButton
          variant="empty"
          content="upload"
          extraStyle="mt-5 text-xs w-fit h-7 px-2"
        />
      </form>
    </>
  )
}

export default UploadPictureForm
