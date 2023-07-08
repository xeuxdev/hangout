"use client"
import { UserData } from "@/types"
import { Carousel } from "@mantine/carousel"
import YourMatchCard from "../Cards/YourMatchCard"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import MatchPopUp from "./MatchPopUp"

function YourMatchSlider({ users }: { users: UserData[] }) {
  const [showMatchPopUp, setShowMatchPopUp] = useState(false)
  const [selectedUser, setSelectedUser] = useState({} as UserData)

  //   console.log(users)

  return (
    <>
      <Carousel
        slideSize="25%"
        height={350}
        slideGap="md"
        withControls={false}
        className="cursor-pointer"
      >
        {users?.map((user, index) => (
          <Carousel.Slide key={index}>
            {/* <Link href={`/profile/${user.userName}`}> */}
            <div
              onClick={() => {
                setSelectedUser(user)
                setShowMatchPopUp(true)
              }}
            >
              <YourMatchCard user={user} />
            </div>

            {/* </Link> */}
          </Carousel.Slide>
        ))}
        {/* ...slides */}
      </Carousel>

      <AnimatePresence mode="wait" onExitComplete={() => null} initial={false}>
        {showMatchPopUp && (
          <MatchPopUp
            setShowMatchPopUp={setShowMatchPopUp}
            user={selectedUser}
          />
        )}
      </AnimatePresence>
    </>
  )
}

export default YourMatchSlider
