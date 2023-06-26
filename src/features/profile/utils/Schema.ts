import { z } from "zod"

export const EditProfileSchema = z.object({
  name: z.string().max(100).optional(),
  userName: z.string().max(50).optional(),
  occupation: z.string().max(100).optional(),
  about: z.string().max(150).optional(),
})

const MAX_FILE_SIZE = 5_000_000
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/svg+xml",
]

export const ImageSchema = z.object({
  image: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    )
    .refine(
      (files) => !ACCEPTED_IMAGE_TYPES.includes(files?.type),
      ".jpg, .jpeg, .png and .webp files are accepted."
    ),
})
