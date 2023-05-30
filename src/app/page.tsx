import { OnBoarding } from "@/features/onboarding"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-primary dark:bg-primary_dark">
      <OnBoarding />
    </main>
  )
}
