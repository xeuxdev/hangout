import axios from "axios"

export const getData = async ({
  route,
  method,
  data,
}: {
  route: string
  method: "POST" | "GET"
  data?: any
}) => {
  const response = await axios(`${route}`, {
    method: method,
    data: data,
  })

  return response.data
}
