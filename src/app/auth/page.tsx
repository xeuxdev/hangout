import { Button } from "@/client/components/Buttons"
import { Navigation } from "@/features/onboarding"
import { SignUpWithGoogleButton } from "@/features/onboarding"

function Auth() {
  return (
    <>
      <header className="text-3xl text-primary_dark dark:text-primary mb-10">
        Let&apos;s get you in
      </header>

      <div className="w-full text-center space-y-8">
        <SignUpWithGoogleButton />

        <p>or</p>

        <Button content="Sign in with password" variant="filled" />

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
