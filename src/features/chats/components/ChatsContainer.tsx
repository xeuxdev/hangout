"use client"
import { useEffect, useState } from "react"
import ChatInput from "./ChatInput"
import ReceiverMessage from "./ReceiverMessage"
import SenderMessage from "./SenderMessage"
import { useMessagesStore } from "@/zustand/message.store"
import { useSession } from "next-auth/react"

function ChatsContainer() {
  const { data: session } = useSession()

  const messages = useMessagesStore((state) => state.messages)

  useEffect(() => {
    const screenHeight = window.innerHeight
    window.scrollTo(0, screenHeight)
  }, [messages])

  return (
    <section className="pt-12 pb-16">
      <div className=" flex flex-col w-full gap-5">
        {messages.map((message) =>
          message.owner == session?.user.id
            ? message.message != "" && (
                <SenderMessage
                  message={message.message}
                  key={message.message + message.time}
                />
              )
            : message.message != "" && (
                <ReceiverMessage
                  message={message.message}
                  key={message.message + message.time}
                />
              )
        )}
      </div>

      {/* inputs */}

      <ChatInput />
    </section>
  )
}

export default ChatsContainer
