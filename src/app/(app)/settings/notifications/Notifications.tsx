"use client"

import { Toggle } from "@/client/components/UiElements"
import { useState } from "react"

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

function Notifications() {
  const [defaultValue, setDefaultValue] = useState(false)

  return (
    <>
      {notifications.map((notification) => (
        <div className="flex items-center justify-between" key={notification}>
          <p className="font-medium capitalize">{notification}</p>
          <Toggle
            defaultValue={defaultValue}
            setDefaultValue={setDefaultValue}
          />
        </div>
      ))}
    </>
  )
}

export default Notifications
