import dbConnect from "@/lib/db/dbConnect"
import Users from "@/server/models/Users.model"
import { NextResponse } from "next/server"
import { headers } from "next/headers"
import jwt, { JwtPayload } from "jsonwebtoken"

export async function GET(request: Request) {
  await dbConnect()

  //   const body = await request.json()
  const headersList = headers()
  const authorization = headersList.get("authorization")

  const token = authorization?.split(" ")[1]

  //   const session = await getServerSession(authOptions)

  try {
    const data = jwt.verify(`${token}`, process.env.JWT_SECRET) as {
      id: string
    } & JwtPayload
    const UserInfo = await Users.findOne({
      _id: `${data.id}`,
    })

    return NextResponse.json(UserInfo)
  } catch (error) {
    return NextResponse.json({ message: "unauthorized" }, { status: 401 })
  }
}
