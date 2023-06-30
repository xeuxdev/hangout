import { create } from "zustand"

type defaultValues = {
  message: string
  time: string
  owner: string | undefined
}

interface MessageState {
  setNewMessage: (message: defaultValues) => void
  messages: [
    {
      message: string
      time: string
      owner: string | undefined
    }
  ]
}

export const useMessagesStore = create<MessageState>()((set) => ({
  messages: [
    {
      message: "",
      time: new Date().toDateString(),
      owner: "",
    },
  ],
  cart: {
    gadgets: [
      {
        message: "",
        time: "",
        owner: "",
      },
    ],
  },

  setNewMessage: (data: defaultValues) =>
    // @ts-ignore
    set((state) => ({
      messages: [...state.messages, data],
    })),
}))
