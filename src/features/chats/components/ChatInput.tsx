"use client"

import { useMessagesStore } from "@/zustand/message.store"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSession } from "next-auth/react"
import { useForm } from "react-hook-form"
import { z } from "zod"

type MessageType = {
  message: string
}

const messageSchema = z.object({
  message: z.string().nonempty(),
})

function ChatInput() {
  const setMessage = useMessagesStore((state) => state.setNewMessage)
  const { data: session } = useSession()
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<MessageType>({
    resolver: zodResolver(messageSchema),
  })

  const onsubmit = ({ message }: MessageType) => {
    // console.log(message)
    setMessage({
      message: message,
      owner: session?.user.id,
      time: `${new Date().getTime()}`,
    })
    reset({ message: "" })
  }

  return (
    <div className="fixed bottom-5 lg:bottom-0 lg:pb-4 left-1/2 -translate-x-1/2 w-full max-w-xl bg-primary dark:bg-primary_dark">
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="w-full h-14 px-5 relative ">
          <input
            type="text"
            {...register("message")}
            className="w-full h-full text-primary_dark dark:text-primary tracking-wide bg-input_bg_light dark:bg-input_bg_dark rounded-xl caret-primary_dark dark:caret-primary px-5 outline-pri_btn ring-1 ring-gray-950/10"
            placeholder="enter message..."
          />

          <button type="submit" disabled={!!errors.message}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="fill-pri_btn w-6 absolute right-9 top-1/2 -translate-y-1/2"
            >
              <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChatInput
