"use client"
import { useTheme } from "next-themes"
import React from "react"

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {theme == "light" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={20}
            className="fill-primary_dark"
          >
            <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            width={20}
            className="fill-primary"
          >
            <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
          </svg>
        )}
        <p className="font-semibold capitalize text-lg">Dark Mode</p>
      </div>

      <div className="relative inline-block w-12 h-6">
        <input
          type="checkbox"
          id="darkMode"
          className="sr-only"
          checked={theme == "dark"}
          onChange={toggleTheme}
        />
        <label
          htmlFor="darkMode"
          className={`flex items-center cursor-pointer w-full h-full bg-gray-400 dark:bg-pri_btn rounded-full`}
        >
          <span
            className={`absolute left-1 top-1/2 -translate-y-1/2 transition-transform duration-300 ease-in-out rounded-full w-4 h-4 bg-white ${
              theme == "dark" ? "transform translate-x-[1.4rem] right-0" : ""
            }`}
          />
        </label>
      </div>
    </div>
  )
}

export default ThemeToggle
