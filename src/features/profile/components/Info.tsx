"use client"
import { calculateAge } from "@/helpers/CalculateAge"
import { getZodiacSign } from "@/helpers/getZodiacSign"
import { UserData } from "@/types"
import React, { useState } from "react"
import { m } from "framer-motion"
import { EditIcon } from "@/client/components/Icons"
import { useSession } from "next-auth/react"
import { LilCard } from "@/client/components/Cards"
import { useMediaQuery } from "@/client/hooks/useMediaQuery"

function Info({ userData }: { userData: UserData }) {
  const { data: session } = useSession()
  const [height, setHeight] = useState<"auto" | "40">("auto")
  const matches = useMediaQuery("(min-width: 768px)")

  return (
    <m.div
      className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-${height} max-w-lg lg:bottom-1/2 lg:translate-y-1/2 lg:right-0 lg:min-h-[20.5rem] lg:-translate-x-0  px-5 pt-10 pb-3 rounded-t-3xl bg-primary dark:bg-primary_dark overflow-y-scroll z-50 duration-300  scrollbar-none `}
      animate={{
        height: !matches && height == "40" ? "auto" : 160,
      }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute h-1 mx-auto -translate-x-1/2 cursor-pointer top-5 left-1/2 w-7 bg-pri_btn"
        onClick={() => {
          height === "auto" ? setHeight("40") : setHeight("auto")
        }}
      />
      <h1 className="text-2xl font-bold">
        {userData.name}, {calculateAge(userData.birthday)}
      </h1>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <p>{userData.occupation}</p>
          <div className="px-2 py-1 font-bold bg-gray-200 rounded-full dark:bg-gray-900 w-fit text-pri_btn">
            {getZodiacSign(userData.birthday)}
          </div>
        </div>
        {session?.user.userName === userData.userName ? (
          <EditIcon route="/profile/edit" />
        ) : (
          <LilCard content="2km" variant="empty" />
        )}
      </div>

      <div className="my-4">
        <h2 className="mb-4 text-lg font-semibold">About</h2>
        <p>{userData.about}</p>
      </div>

      {/* interests */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Interests</h3>

        <div className="flex flex-wrap items-center gap-4">
          {userData.interests?.map((interest) => (
            <div
              key={interest}
              className={`px-4 py-1 rounded-full w-fit ring-2 font-medium bg-pri_btn`}
            >
              {interest}
            </div>
          ))}
        </div>
      </div>
    </m.div>
  )
}

export default Info
