import NavHeader from "@/client/components/Navigation/NavHeader"
import Notifications from "./Notifications"

export const metadata = {
  title: "Notifications",
  description: "Manage your notifications",
}

function page() {
  return (
    <>
      <NavHeader content="Notifications" />

      <section className="max-w-lg mx-auto space-y-8 py-5">
        <Notifications />
      </section>
    </>
  )
}

export default page
