import Navigation from "@/client/components/Navigation/Navigation"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-primary dark:bg-primary_dark min-h-screen">
      <section className="w-full px-5 py-6 container">{children}</section>
      <Navigation />
    </main>
  )
}
