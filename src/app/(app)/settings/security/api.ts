import axios from "axios"

export async function changePassword({
  currentPassword,
  newPassword,
  access_token,
}: {
  currentPassword: string
  newPassword: string
  access_token: string | undefined
}) {
  const result = await axios.post(
    "/api/users/reset/changepassword",
    {
      currentPassword: currentPassword,
      newPassword: newPassword,
    },
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  )

  return result.data
}
