import { LinkButton } from "@/client/components/Buttons"
import { Navigation } from "@/features/onboarding"
import { SignUpWithGoogleButton } from "@/features/onboarding"
import { authOptions } from "@/lib/auth/authOptions"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

async function Auth() {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect("/home")
  }

  return (
    <>
      <header className="text-3xl text-primary_dark dark:text-primary mb-10 text-center">
        Let&apos;s get you in
      </header>

      <div className="w-full text-center space-y-8">
        <SignUpWithGoogleButton />

        <p>or</p>

        <LinkButton
          content="Sign in with password"
          variant="filled"
          link="auth/signin"
        />

        <Navigation
          content="Don't have an account"
          route="/auth/signup"
          cta="Sign up"
        />
      </div>
    </>
  )
}

export default Auth
