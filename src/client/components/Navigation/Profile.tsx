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
        <div className="relative flex items-center">
          <button
            type="button"
            className="relative flex w-8 h-8 mr-3 overflow-hidden text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
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
                className="object-cover rounded-full"
              />
            ) : (
              <div className="relative w-8 h-8">
                <Image
                  className="object-cover rounded-full"
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
              className="absolute z-50 hidden pl-2 my-4 text-base list-none divide-y divide-gray-100 rounded shadow-xl bg-background_light dark:bg-background dark:divide-gray-600 top-7 -right-10 pr-7"
              id="user-dropdown"
              ref={dropdownRef}
            >
              <Link href={"/home"} className="px-4 py-3">
                <span className="block text-sm text-gray-900 capitalize dark:text-white">
                  {user?.userName}
                </span>
                <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                  {user?.email}
                </span>
              </Link>
              <ul className="py-1" aria-labelledby="user-menu-button">
                {/* nav links */}
                {NavLinks.map((link) => (
                  <li key={link}>
                    <Link
                      href={`/${link}`}
                      className="block px-4 py-2 text-sm text-gray-700 capitalize cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
                {/* logout */}
                <li
                  onClick={() => signOut({ callbackUrl: "/auth/signin" })}
                  className="block px-4 py-2 text-sm text-red-500 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-400 dark:hover:text-white"
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
