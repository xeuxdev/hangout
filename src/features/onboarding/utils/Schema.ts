import { passwordRegex } from "@/constants/regex"
import { z } from "zod"

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().regex(passwordRegex),
})
