import ChevronRight from "@/client/components/Icons/ChevronRight"
import NavHeader from "@/client/components/Navigation/NavHeader"
import Link from "next/link"
import React from "react"

export const metadata = {
  title: "Settings",
  description: "manage your settings",
}

function Settings() {
  return (
    <>
      <NavHeader content="Settings" />

      <section className="space-y-10 max-w-md mx-auto">
        <Link
          href="/settings/personal"
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              width={20}
              className="fill-primary_dark dark:fill-primary"
            >
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
            </svg>
            <p className="font-semibold capitalize text-lg">
              Personal Information
            </p>
          </div>
          <ChevronRight />
        </Link>

        <Link
          href="/settings/discovery"
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={25}
              className="fill-primary_dark dark:fill-primary"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
            </svg>
            <p className="font-semibold capitalize text-lg">
              Discovery Settings
            </p>
          </div>
          <ChevronRight />
        </Link>

        <Link
          href="/settings/privacy"
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              className="fill-primary_dark dark:fill-primary"
              viewBox="0 0 448 512"
            >
              <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
            </svg>
            <p className="font-semibold capitalize text-lg">
              Privacy & Permissions
            </p>
          </div>
          <ChevronRight />
        </Link>

        <Link
          href="/settings/notification"
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width={20}
              className="fill-primary_dark dark:fill-primary"
            >
              <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
            </svg>
            <p className="font-semibold capitalize text-lg">Notification</p>
          </div>
          <ChevronRight />
        </Link>

        <Link
          href="/settings/security"
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              className="fill-primary_dark dark:fill-primary"
              viewBox="0 0 448 512"
            >
              <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
            </svg>
            <p className="font-semibold capitalize text-lg">Security</p>
          </div>
          <ChevronRight />
        </Link>

        <Link
          href="/settings/feedback"
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              className="fill-primary_dark dark:fill-primary"
              viewBox="0 0 512 512"
            >
              <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
            </svg>
            <p className="font-semibold capitalize text-lg">Feedback</p>
          </div>
          <ChevronRight />
        </Link>

        <Link
          href="/settings/about"
          className="flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              className="fill-primary_dark dark:fill-primary"
              viewBox="0 0 512 512"
            >
              <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
            </svg>
            <p className="font-semibold capitalize text-lg">About</p>
          </div>
          <ChevronRight />
        </Link>
      </section>
    </>
  )
}

export default Settings
