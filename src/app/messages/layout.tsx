export default function MessagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="bg-primary dark:bg-primary_dark min-h-screen">
      <section className="w-full px-5 py-6 container">{children}</section>
    </main>
  )
}
