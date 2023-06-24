import { z } from "zod"

export const EditProfileSchema = z.object({
  name: z.string().max(100).optional(),
  userName: z.string().max(50).optional(),
  occupation: z.string().max(100).optional(),
  about: z.string().max(150).optional(),
})
