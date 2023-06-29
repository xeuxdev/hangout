import NavHeader from "@/client/components/Navigation/NavHeader"
import Text from "@/client/components/Typography/Text"

// export async function generateMetadata({
//     params,
//   }: {
//     params: { username: string }
//   }) {
//     const user = (await fetch(
//       `${process.env.FRONTEND_URL}/api/users/profile/${params.username}`
//     ).then((res) => {
//       return res.json()
//     })) as UserData

//     return {
//       title: user?.userName + " " + "Profile",
//       description: user.about,
//     }
//   }

function UserChatPage({ params }: { params: { userId: string } }) {
  return (
    <>
      <NavHeader content="Chat" />
      {/* {<p>{params.userId}</p>} */}

      <Text content="Coming soon 😊" font="bold" size="2xl" />
    </>
  )
}

export default UserChatPage
