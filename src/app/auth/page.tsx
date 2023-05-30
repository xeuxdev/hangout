import { Button } from "@/client/components/Buttons"
import Googleicon from "@/client/components/Icons/Googleicon"
import { Navigation } from "@/features/onboarding"

function Auth() {
  return (
    <>
      <header className="text-3xl text-primary_dark dark:text-primary mb-10">
        Let&apos;s get you in
      </header>

      <div className="w-full text-center space-y-8">
        <div className="flex items-center justify-center gap-4 h-16 border border-gray_1 dark:border-[#33363D] dark:bg-[#1F222A] rounded-lg shadow-lg w-full">
          <Googleicon />
          <p className="font-semibold">Continue with Google</p>
        </div>

        <p>or</p>

        <Button content="Sign in with password" variant="filled" />

        <Navigation content="Don't have an account" route="/auth/signup" />
      </div>
    </>
  )
}

export default Auth
