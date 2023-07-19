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
import { useMediaQuery } from "@/client/hooks/useMediaQuery"

function YourMatchSlider({
  users,
  userData,
}: {
  users: UserData[]
  userData: UserData
}) {
  const [showMatchPopUp, setShowMatchPopUp] = useState(false)
  const [selectedUser, setSelectedUser] = useState({} as UserData)
  const mobile = useMediaQuery("(max-width: 768px)")

  //   console.log(users)

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={mobile ? 1.5 : 3}
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
            <YourMatchCard user={user} />
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
