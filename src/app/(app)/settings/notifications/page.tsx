import NavHeader from "@/client/components/Navigation/NavHeader"
import { Toggle } from "@/client/components/UiElements"

export const metadata = {
  title: "Notifications",
  description: "Manage your notifications",
}

const notifications = [
  "show messages preview",
  "new message",
  "new match",
  "match around me",
  "you got likes",
  "you get likes",
  "subscription",
  "sound",
  "vibrate",
  "new updates",
  "VIP status",
  "new services",
]

function page() {
  return (
    <>
      <NavHeader content="Notifications" />

      <section className="max-w-lg mx-auto space-y-8 py-5">
        {notifications.map((notification) => (
          <div className="flex items-center justify-between" key={notification}>
            <p className="font-medium capitalize">{notification}</p>
            <Toggle />
          </div>
        ))}
      </section>
    </>
  )
}

export default page
