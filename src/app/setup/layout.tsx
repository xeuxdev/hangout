export const metadata = {
  title: "Set up your account",
  description: "Setup your account here...",
}

export default function SetUpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="bg-primary dark:bg-primary_dark min-h-screen py-12">
      <section className="w-full max-w-lg px-5 mx-auto">{children}</section>
    </main>
  )
}
