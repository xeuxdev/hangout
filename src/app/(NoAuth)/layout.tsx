export default function NoAuthRoutesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="bg-primary dark:bg-primary_dark min-h-screen py-6">
      <section className="w-full max-w-lg px-5 mx-auto">{children}</section>
    </main>
  )
}
