"use client"
import { Button } from "@/client/components/Buttons"
import { signOut } from "next-auth/react"
import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

function LogOut() {
  const [showLogOut, setShowLogOut] = useState(false)

  return (
    <>
      <div
        className="flex items-center gap-5"
        onClick={() => setShowLogOut(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          className="fill-red-500"
          viewBox="0 0 512 512"
        >
          <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z" />
        </svg>

        <p className="font-semibold text-lg text-red-500">Logout</p>
        {showLogOut && (
          <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-primary_dark" />
        )}
      </div>

      <AnimatePresence mode="wait" onExitComplete={() => null} initial={false}>
        {showLogOut && (
          <>
            <motion.div
              className="fixed bottom-0 left-0 w-full h-56 rounded-t-3xl z-50 bg-input_bg_light2 dark:bg-input_bg_dark px-5 py-10 space-y-5 text-center"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{
                opacity: 0,
                y: 100,
                transition: { duration: 0.5 },
              }}
            >
              <header className="text-xl text-red-500 font-bold">Logout</header>

              <p className="font-medium text-lg">
                Are you sure you want to logout?
              </p>

              <div className="flex items-center gap-5">
                <Button
                  content="cancel"
                  variant="empty"
                  extraStyle="px-3"
                  onClick={() => {
                    setShowLogOut(false)
                    // console.log("clicked")
                  }}
                />
                <Button
                  content="yes, Logout"
                  variant="filled"
                  extraStyle=" px-3"
                  onClick={() => {
                    signOut({
                      callbackUrl: "/auth/signin",
                    })
                  }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default LogOut
