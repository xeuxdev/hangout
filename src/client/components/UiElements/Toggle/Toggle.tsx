"use client"

import { useState } from "react"

function Toggle() {
  const [defaultValue, setDefaultValue] = useState(false)
  return (
    <>
      <div className="relative inline-block w-12 h-6">
        <input
          type="checkbox"
          id="darkMode"
          className="sr-only"
          checked={defaultValue}
          onChange={() => setDefaultValue((prev) => !prev)}
        />
        <label
          htmlFor="darkMode"
          className={`flex items-center cursor-pointer w-full h-full rounded-full ${
            defaultValue ? "bg-pri_btn" : "bg-gray-400"
          }`}
        >
          <span
            className={`absolute left-1 top-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out rounded-full w-4 h-4 bg-white ${
              defaultValue
                ? "transform translate-x-[1.4rem] right-0 bg-pri_btn"
                : ""
            }`}
          />
        </label>
      </div>
    </>
  )
}

export default Toggle
