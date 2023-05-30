import { Navigation, SignUpForm } from "@/features/onboarding"
import Image from "next/image"
import React from "react"

function SignUp() {
  return (
    <>
      <header className="space-y-8 pt-10">
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={80}
          height={80}
          className="mx-auto"
        />
        <p className="text-2xl font-bold">Create Your Account</p>
      </header>

      <div className="mt-14 w-full">
        <SignUpForm />
      </div>

      <div className="pb-5">
        <Navigation
          content="Already have an account?"
          route="/signin"
          cta="Sign in"
        />
      </div>
    </>
  )
}

export default SignUp
