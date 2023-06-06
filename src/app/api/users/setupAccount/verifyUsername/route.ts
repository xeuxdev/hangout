import { AppResponse } from "@/lib/api/response"
import dbConnect from "@/lib/db/dbConnect"
import Users from "@/server/models/Users.model"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  await dbConnect()
  //   const session = await getServerSession(authOptions)
  const body = await request.json()

  if (!body.userName) {
    return AppResponse("username is required", 400)
  }

  const user = await Users.findOne({
    userName: body.userName,
  })

  if (user) {
    return AppResponse("username already in use", 200)
  } else {
    return AppResponse("accepted", 200)
  }

  //   return NextResponse.json({ user })
}
