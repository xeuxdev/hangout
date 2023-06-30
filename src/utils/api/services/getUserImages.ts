export async function getUserImages(
  userName: string | undefined
): Promise<{ images: string[] }> {
  const response = await fetch(
    `${process.env.FRONTEND_URL}/api/users/profile/${userName}/images`
  ).then((res) => {
    return res.json()
  })

  return response
}
