export const metadata = {
  title: "Sign in",
  description: "A dating app for everyone",
}

export default function OnBoardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="bg-primary dark:bg-primary_dark flex items-center justify-center flex-col min-h-screen">
      <section className="w-full max-w-md px-5">{children}</section>
    </main>
  )
}
