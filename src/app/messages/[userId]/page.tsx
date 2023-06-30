import {
  ChatHeader,
  ChatInput,
  ReceiverMessage,
  SenderMessage,
  fetchUserData,
} from "@/features/chats"

export async function generateMetadata({
  params,
}: {
  params: { userId: string }
}) {
  const userData = await fetchUserData({ userid: params.userId })

  return {
    title: userData?.userName + " " + "Chat",
    description: userData.about,
  }
}

async function MessagesPage({ params }: { params: { userId: string } }) {
  const userData = await fetchUserData({ userid: params.userId })

  return (
    <div className="relative max-w-xl mx-auto">
      <ChatHeader user_name={userData.name} />
      {/* {<p>{params.userId}</p>} */}

      <section className="pt-12 pb-16 flex flex-col w-full gap-5">
        <SenderMessage message="Hey man what's up" />
        <ReceiverMessage message="Hey man what's up" />
      </section>

      {/* inputs */}

      <ChatInput />
    </div>
  )
}

export default MessagesPage
