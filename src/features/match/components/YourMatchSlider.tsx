"use client"
import { UserData } from "@/types"
import YourMatchCard from "../Cards/YourMatchCard"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import MatchPopUp from "./MatchPopUp"

import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"

function YourMatchSlider({
  users,
  userData,
}: {
  users: UserData[]
  userData: UserData
}) {
  const [showMatchPopUp, setShowMatchPopUp] = useState(false)
  const [selectedUser, setSelectedUser] = useState({} as UserData)

  //   console.log(users)

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1.5}
        height={350}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        // loopPreventsSliding
        effect="coverflow"
      >
        {users?.map((user, index) => (
          <SwiperSlide
            key={user._id}
            onClick={() => {
              setSelectedUser(user)
              setShowMatchPopUp(true)
            }}
          >
            {/* <Link href={`/profile/${user.userName}`}> */}
            {/* <div
              onClick={() => {
                setSelectedUser(user)
                setShowMatchPopUp(true)
              }}
              > */}
            <YourMatchCard user={user} />
            {/* </div> */}

            {/* </Link> */}
          </SwiperSlide>
        ))}
      </Swiper>

      <AnimatePresence mode="wait" onExitComplete={() => null} initial={false}>
        {showMatchPopUp && (
          <MatchPopUp
            setShowMatchPopUp={setShowMatchPopUp}
            user={selectedUser}
            you={userData}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default YourMatchSlider
