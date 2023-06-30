import { ChatHeader, ChatsContainer, fetchUserData } from "@/features/chats"

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

      <ChatsContainer />
    </div>
  )
}

export default MessagesPage
