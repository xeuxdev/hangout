import { SetUpWrapper } from "@/features/onboarding"
import { serverSession } from "@/lib/auth/serverSession"
import { redirect } from "next/navigation"
import React from "react"

async function Setup() {
  const session = await serverSession()

  // console.log(session?.user)

  if (!session) {
    redirect("/auth/signin")
  }

  if (session.user.userName !== "" && session.user.userName) {
    redirect("/home")
  }
  return (
    <>
      <SetUpWrapper />
    </>
  )
}

export default Setup
