"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

function Navigation() {
  const pathname = usePathname()

  const isHomeActive = pathname?.startsWith("/home")
  const isMatchActive = pathname?.startsWith("/match")
  const isChatsActive = pathname?.startsWith("/chats")
  const isProfileActive = pathname?.startsWith("/profile")
  return (
    <div className="fixed bottom-0 left-0 w-full bg-primary dark:bg-primary_dark lg:hidden">
      <div className="flex items-center justify-between w-full px-5 py-3">
        <Link href={"/home"} className="flex flex-col items-center gap-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            viewBox="0 0 576 512"
            className={`${
              isHomeActive
                ? "fill-pri_btn"
                : "fill-primary_dark dark:fill-primary"
            }`}
          >
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg>
          <p
            className={`${
              isHomeActive
                ? "fill-pri_btn"
                : "fill-primary_dark dark:fill-primary"
            } text-xs`}
          >
            Home
          </p>
        </Link>

        <Link href={"/match"} className="flex flex-col items-center gap-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={20}
            className={`${
              isMatchActive
                ? "fill-pri_btn"
                : "fill-primary_dark dark:fill-primary"
            }`}
          >
            <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
          </svg>
          <p
            className={`${
              isHomeActive
                ? "fill-pri_btn"
                : "fill-primary_dark dark:fill-primary"
            } text-xs`}
          >
            Match
          </p>
        </Link>

        <Link href={"/chats"} className="flex flex-col items-center gap-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={20}
            className={`${
              isChatsActive
                ? "fill-pri_btn"
                : "fill-primary_dark dark:fill-primary"
            }`}
          >
            <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
          </svg>
          <p
            className={`${
              isChatsActive
                ? "fill-pri_btn"
                : "fill-primary_dark dark:fill-primary"
            } text-xs`}
          >
            Chats
          </p>
        </Link>

        <Link href={"/profile"} className="flex flex-col items-center gap-3 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            width={20}
            className={`${
              isProfileActive
                ? "fill-pri_btn"
                : "fill-primary_dark dark:fill-primary"
            }`}
          >
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
          <p
            className={`${
              isProfileActive
                ? "fill-pri_btn"
                : "fill-primary_dark dark:fill-primary"
            } text-xs`}
          >
            Profile
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Navigation
