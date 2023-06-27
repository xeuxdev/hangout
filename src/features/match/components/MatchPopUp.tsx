"use client"
import { Button } from "@/client/components/Buttons"
import Text from "@/client/components/Typography/Text"
import { UserData } from "@/types"
import Match from "./Match"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

function MatchPopUp({
  setShowMatchPopUp,
  user,
}: {
  setShowMatchPopUp: React.Dispatch<React.SetStateAction<boolean>>
  user: UserData
}) {
  //   console.log(user)

  const { data: session } = useSession()
  const router = useRouter()

  return (
    <>
      <div className="fixed inset-0 bg-primary dark:bg-primary_dark py-10 px-5">
        <button className="" onClick={() => setShowMatchPopUp(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={15}
            viewBox="0 0 448 512"
            className="fill-primary_dark dark:fill-primary"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </button>

        <div className="flex justify-center items-center pb-10">
          <Match
            imgUrl={user.image}
            imgUrl2={session?.user.image as string}
            icon={"/assets/love.svg"}
          />
        </div>

        <section className=" flex justify-center items-center flex-col gap-8">
          <Text
            content="It's a match"
            font="bold"
            size="2xl"
            extraStyle="tracking-wider italic"
          />
          <Text
            content="Don't keep waiting. Say hello now"
            font="normal"
            size="sm"
          />

          <div className="space-y-4 w-full">
            <Button
              content="Say Hello"
              variant="filled"
              onClick={() => {
                router.push(`/profile/${user.userName}`)
              }}
            />
            <Button
              content="keep swiping"
              variant="empty"
              onClick={() => setShowMatchPopUp(false)}
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default MatchPopUp
