"use client"

import { Button, SubmitButton } from "@/client/components/Buttons"
import { Eye, EyeSlash, PasswordIcon } from "@/client/components/Icons"
import { Toggle } from "@/client/components/UiElements"
import { passwordRegex } from "@/constants/regex"
import { zodResolver } from "@hookform/resolvers/zod"
import { Modal } from "@mantine/core"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-hot-toast"
import { z } from "zod"

type ChangePasswordType = {
  currentPassword: string
  newPassword: string
}

const ChangePasswordSchema = z.object({
  currentPassword: z
    .string()
    .min(2, { message: "Please enter your old password" }),
  newPassword: z
    .string()
    .min(8, { message: "Please enter a strong new password" })
    .regex(passwordRegex),
})

function Security() {
  const [rememberMe, setRememberMe] = useState(false)
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false)
  const [passwordType, setPasswordType] = useState<"password" | "text">(
    "password"
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordType>({
    resolver: zodResolver(ChangePasswordSchema),
  })

  const handlePasswordToggle = () => {
    passwordType == "password"
      ? setPasswordType("text")
      : setPasswordType("password")
  }

  const onsubmit = (values: ChangePasswordType) => {
    console.log(values)
  }

  return (
    <>
      <section className="max-w-lg mx-auto space-y-8">
        {/* remember me */}
        <div className="flex items-center justify-between">
          <p className="font-medium capitalize">Remember Me</p>
          <Toggle defaultValue={rememberMe} setDefaultValue={setRememberMe} />
        </div>

        <Button
          content="Change Password"
          variant="empty"
          onClick={() => setShowChangePasswordModal(true)}
        />
      </section>

      {showChangePasswordModal && (
        <Modal
          onClose={() => setShowChangePasswordModal(false)}
          opened={showChangePasswordModal}
          title="Change Password"
          centered
        >
          <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
            {/* old password */}
            <div className="w-full space-y-2">
              <label htmlFor="current-password">Current Password</label>
              <div className="w-full relative group">
                <input
                  type={passwordType}
                  id="current-password"
                  {...register("currentPassword")}
                  className=" w-full flex items-center h-14 bg-input_bg_light dark:bg-input_bg_dark text-primary_dark dark:text-primary font-semibold pl-12 pr-5 focus:ring-1 focus-visible:ring-pri_btn outline-none rounded-lg"
                  placeholder="current password"
                />
                <PasswordIcon />
                <div
                  className="absolute top-1/2 -translate-y-1/2 right-14"
                  onClick={handlePasswordToggle}
                >
                  {passwordType == "password" ? <EyeSlash /> : <Eye />}
                </div>
              </div>
              <p className="text-sm text-red-500">
                {errors.currentPassword?.message}
              </p>
            </div>

            {/* new password */}
            <div className="w-full space-y-2">
              <label htmlFor="new-password">New Password</label>
              <div className="w-full relative group">
                <input
                  type={passwordType}
                  id="new-password"
                  {...register("newPassword")}
                  className=" w-full flex items-center h-14 bg-input_bg_light dark:bg-input_bg_dark text-primary_dark dark:text-primary font-semibold pl-12 pr-5 focus:ring-1 focus:ring-pri_btn outline-none rounded-lg"
                  placeholder="new password"
                />
                <PasswordIcon />
                <div
                  className="absolute top-1/2 -translate-y-1/2 right-14"
                  onClick={handlePasswordToggle}
                >
                  {passwordType == "password" ? <EyeSlash /> : <Eye />}
                </div>
              </div>
              <p className="text-sm text-red-500">
                {errors.newPassword?.message}
              </p>
            </div>

            <SubmitButton content="Submit" variant="filled" />
          </form>
        </Modal>
      )}
    </>
  )
}

export default Security
