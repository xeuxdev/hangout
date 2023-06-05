"use client"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignupSchema } from "../utils/Schema"
import { SignUpType } from "../types"
import { SubmitButton } from "@/client/components/Buttons"
import SignUpWithGoogleButton from "../components/SignUpWithGoogleButton"
import { registerUser } from "../services/registerUser"
import { toast } from "react-hot-toast"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

function SignUpForm() {
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  )
  const [Loading, setLoading] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpType>({
    resolver: zodResolver(SignupSchema),
  })

  const handlePasswordToggle = () => {
    passwordType == "password"
      ? setPasswordType("text")
      : setPasswordType("password")
  }

  const onsubmit = async (values: SignUpType) => {
    await registerUser(values).then((res) => {
      // console.log(res.data)
      if (res.status == 201) {
        toast.success("Account created successfully")
        toast
          .promise(
            signIn("credentials", {
              email: values.email,
              password: values.password,
              redirect: false,
            }),
            {
              loading: "signing you in",
              error: "something went wrong",
              success: "signed in successfully",
            }
          )
          .then((res) => {
            if (res?.ok) router.replace("/setup")
          })
        return
      }
      toast.error(res.message)
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onsubmit)} className="space-y-7">
        {/* email */}
        <div className="w-full">
          <div className="w-full relative group">
            <input
              type="text"
              {...register("email")}
              className=" w-full flex items-center h-14 bg-input_bg_light dark:bg-input_bg_dark text-primary_dark dark:text-primary font-semibold pl-12 pr-5 focus:ring-1 focus:ring-pri_btn outline-none rounded-lg"
              placeholder="email"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="absolute top-1/2 -translate-y-1/2 left-4 group-hover:fill-pri_btn fill-gray-500 dark:group-hover:fill-white"
              width={15}
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          </div>
          <p className="text-sm text-red-500">{errors.email?.message}</p>
        </div>

        {/* password */}
        <div className="w-full">
          <div className="w-full relative group">
            <input
              type={passwordType}
              {...register("password")}
              className=" w-full flex items-center h-14 bg-input_bg_light dark:bg-input_bg_dark text-primary_dark dark:text-primary font-semibold pl-12 pr-5 focus:ring-1 focus:ring-pri_btn outline-none rounded-lg"
              placeholder="password"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="absolute top-1/2 -translate-y-1/2 left-4 group-hover:fill-pri_btn fill-gray-500 dark:group-hover:fill-white"
              width={15}
            >
              <path d="M224 64c-44.2 0-80 35.8-80 80v48H384c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80V144C80 64.5 144.5 0 224 0c57.5 0 107 33.7 130.1 82.3c7.6 16 .8 35.1-15.2 42.6s-35.1 .8-42.6-15.2C283.4 82.6 255.9 64 224 64zm32 320c17.7 0 32-14.3 32-32s-14.3-32-32-32H192c-17.7 0-32 14.3-32 32s14.3 32 32 32h64z" />
            </svg>
            <div
              className="absolute top-1/2 -translate-y-1/2 right-14"
              onClick={handlePasswordToggle}
            >
              {passwordType == "password" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512 "
                  className="absolute top-1/2 -translate-y-1/2 left-4 group-hover:fill-pri_btn fill-gray-500 dark:group-hover:fill-white"
                  width={15}
                >
                  <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className="absolute top-1/2 -translate-y-1/2 left-4 group-hover:fill-pri_btn fill-gray-500 dark:group-hover:fill-white"
                  width={15}
                >
                  <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                </svg>
              )}
            </div>
          </div>
          <p className="text-sm text-red-500">{errors.password?.message}</p>
        </div>

        <div>
          <label
            htmlFor="remember"
            className="flex items-center justify-center gap-3"
          >
            <input type="checkbox" name="remember" id="remember" />
            <p>Remember me</p>
          </label>
        </div>

        <SubmitButton content="Sign up" variant="filled" />
      </form>

      <div className="my-7">
        <p className="text-center my-2">Or </p>

        <SignUpWithGoogleButton />
      </div>
    </>
  )
}

export default SignUpForm
