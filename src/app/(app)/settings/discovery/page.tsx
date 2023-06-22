import ChevronRight from "@/client/components/Icons/ChevronRight"
import NavHeader from "@/client/components/Navigation/NavHeader"
import React from "react"
import SearchAreaToggle from "./searchAreaToggle"
import { DropDown } from "@/client/components/UiElements"

export const metadata = {
  title: "Discovery Settings",
  description: "How people discover you",
}

const showOptions = ["women only", "men only", "both"]
const LocationOptions = ["New york", "lagos", "los angelis"]

function DiscoverySettingsPage() {
  return (
    <>
      <NavHeader content="Discovery Settings" />

      <section className="mx-auto max-w-lg space-y-8">
        <div className="flex items-center justify-between relative cursor-pointer">
          <p>Location</p>
          <DropDown options={LocationOptions} />
        </div>

        {/* search area */}
        <div className="flex items-center justify-between">
          <p>Expand Search Area</p>
          <SearchAreaToggle />
        </div>

        <div className="flex items-center justify-between relative">
          <p>Show me</p>

          <DropDown options={showOptions} />
        </div>

        <div className="flex items-center justify-between">
          <p>Hide Last Seen</p>
          <SearchAreaToggle />
        </div>
      </section>
    </>
  )
}

export default DiscoverySettingsPage
