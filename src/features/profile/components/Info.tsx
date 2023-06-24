"use client"
import { calculateAge } from "@/helpers/CalculateAge"
import { getZodiacSign } from "@/helpers/getZodiacSign"
import { UserData } from "@/types"
import { Session } from "next-auth"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { motion } from "framer-motion"

function Info({
  session,
  userData,
}: {
  session: Session | null
  userData: UserData
}) {
  const router = useRouter()

  const [height, setHeight] = useState<"auto" | "40">("auto")
  return (
    <motion.div
      className={`absolute bottom-0 left-0 w-full h-${height} px-5 pt-10 pb-3 rounded-t-3xl bg-primary dark:bg-primary_dark overflow-y-scroll z-50 duration-300`}
      animate={{
        height: height == "40" ? "auto" : 160,
      }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute top-5 left-1/2 mx-auto w-5 h-1 bg-pri_btn"
        onClick={() => {
          height === "auto" ? setHeight("40") : setHeight("auto")
        }}
      />
      <h1 className="font-bold text-2xl">
        {session?.user.name}, {calculateAge(userData.birthday)}
      </h1>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <p>{userData.occupation}</p>
          <div className="px-2 py-1 bg-gray-200 dark:bg-gray-900 w-fit rounded-full text-pri_btn font-bold">
            {getZodiacSign(userData.birthday)}
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={20}
          className="fill-pri_btn"
          onClick={() => {
            router.push("/profile/edit")
          }}
        >
          <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
        </svg>
      </div>

      <div className="my-4">
        <h2 className="mb-4 font-semibold text-lg">About</h2>
        {/* <p>{}</p> */}
      </div>

      {/* interests */}
      <div>
        <h3 className="mb-4 font-semibold text-lg">Interests</h3>

        <div className="flex items-center flex-wrap gap-4">
          {userData.interests.map((interest) => (
            <div
              key={interest}
              className={`px-4 py-1 rounded-full w-fit ring-2 font-medium bg-pri_btn`}
            >
              {interest}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Info
