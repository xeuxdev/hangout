import { passwordRegex } from "@/constants/regex"
import { z } from "zod"

export const SignupSchema = z.object({
  email: z.string().email(),
  password: z
    .string({ required_error: "password is required" })
    .min(8, { message: "password is required" })
    .regex(passwordRegex, { message: "password is not strong enough" }),
})
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters" }),
})

export const FillProfileSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "full name must be at least 2 characters" }),
  userName: z
    .string()
    .min(2, { message: "user name must be at least 2 characters" }),
  birthday: z.string().min(1, { message: "required" }),
  gender: z.string().min(2, { message: "required" }),
  phoneNumber: z.string(),
  occupation: z.string(),
})
