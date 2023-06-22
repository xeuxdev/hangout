"use client"

import { Button } from "@/client/components/Buttons"
import { Toggle } from "@/client/components/UiElements"
import { useState } from "react"

function Security() {
  const [rememberMe, setRememberMe] = useState(false)
  return (
    <>
      <section className="max-w-lg mx-auto space-y-8">
        {/* remember me */}
        <div className="flex items-center justify-between">
          <p className="font-medium capitalize">Remember Me</p>
          <Toggle defaultValue={rememberMe} setDefaultValue={setRememberMe} />
        </div>

        <Button content="Change Password" variant="empty" />
      </section>
    </>
  )
}

export default Security
