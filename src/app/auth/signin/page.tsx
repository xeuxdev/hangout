import { LoginForm, Navigation } from "@/features/onboarding"
import Image from "next/image"
import React from "react"

function SignIn() {
  return (
    <>
      <header className="space-y-8 pt-10 text-center">
        <Image
          src={"/logo.svg"}
          alt="Logo"
          width={80}
          height={80}
          className="mx-auto"
        />
        <p className="text-2xl font-bold">Login to Your Account</p>
      </header>

      <div className="mt-14 w-full">
        <LoginForm />
      </div>

      <div className="pb-5">
        <Navigation
          content="Don't have an account?"
          route="/auth/signup"
          cta="Sign up"
        />
      </div>
    </>
  )
}

export default SignIn
