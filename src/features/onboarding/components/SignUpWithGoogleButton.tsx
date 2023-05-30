"use client"
import Googleicon from "@/client/components/Icons/Googleicon"
import { signIn } from "next-auth/react"
import React from "react"

function SignUpWithGoogleButton() {
  return (
    <button
      className="flex items-center justify-center gap-4 h-16 border border-gray_1 dark:border-[#33363D] dark:bg-input_bg_dark rounded-lg shadow-lg w-full"
      onClick={() => {
        signIn("google")
      }}
    >
      <Googleicon />
      <p className="font-semibold">Continue with Google</p>
    </button>
  )
}

export default SignUpWithGoogleButton
