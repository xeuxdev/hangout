import NavHeader from "@/client/components/Navigation/NavHeader"
import React from "react"

function SettingsLoader() {
  return (
    <>
      <NavHeader content="Settings" />

      <section className="space-y-10 max-w-md mx-auto">
        {Array(7)
          .fill(0)
          .map((_, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 h-7">
                <div className="w-7 h-7 rounded-full  bg-gray-400 dark:bg-gray-600 animate-pulse" />
                <div className="w-64 h-5  bg-gray-400 dark:bg-gray-600 animate-pulse" />
              </div>
            </div>
          ))}
      </section>
    </>
  )
}

export default SettingsLoader
