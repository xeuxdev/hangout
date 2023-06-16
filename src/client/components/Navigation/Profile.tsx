"use client"
import { Skeleton } from "@mantine/core"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import ClickAwayListener from "react-click-away-listener"

const NavLinks = ["profile", "match", "chats", "settings"]

const Profile = () => {
  const dropdownRef = useRef({} as HTMLDivElement)
  const { data: session } = useSession()

  const user = session?.user

  const handleDropdown = () => {
    dropdownRef.current.classList.contains("hidden")
      ? dropdownRef.current.classList.remove("hidden")
      : dropdownRef.current.classList.add("hidden")
  }

  const handleClickAway = () => {
    dropdownRef.current.classList.add("hidden")
  }

  return (
    <>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className="flex items-center relative">
          <button
            type="button"
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 relative w-8 h-8 overflow-hidden"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={handleDropdown}
          >
            <span className="sr-only">Open user menu</span>
            {user?.image == undefined ? (
              <Skeleton width={32} height={32} />
            ) : user?.image == "" ? (
              <Image
                src={`https://api.multiavatar.com/${user.name}.svg`}
                alt={user.userName + "profile image"}
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 relative">
                <Image
                  className="rounded-full object-cover"
                  fill
                  src={`${user.image}`}
                  alt={`${user?.userName} avatar`}
                />
              </div>
            )}
          </button>
          {/* <!-- Dropdown menu --> */}
          <div className="hidden lg:flex">
            <div
              className="z-50 hidden my-4 text-base list-none bg-background_light dark:bg-background divide-y divide-gray-100 rounded shadow-xl dark:divide-gray-600 absolute top-7 -right-10 pl-2 pr-7"
              id="user-dropdown"
              ref={dropdownRef}
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white capitalize">
                  {user?.userName}
                </span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                  {user?.email}
                </span>
              </div>
              <ul className="py-1" aria-labelledby="user-menu-button">
                {/* nav links */}
                {NavLinks.map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white cursor-pointer capitalize"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
                {/* logout */}
                <li
                  onClick={() => signOut({ callbackUrl: "/auth/signin" })}
                  className="block px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-400 dark:hover:text-white cursor-pointer"
                >
                  Log out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ClickAwayListener>
    </>
  )
}

export default Profile
