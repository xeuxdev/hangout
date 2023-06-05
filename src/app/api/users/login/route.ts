import { emailRegex, passwordRegex } from "@/constants/regex"
import { AppResponse } from "@/lib/api/response"
import dbConnect from "@/lib/db/dbConnect"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"
import Users from "@/server/models/Users.model"
import jwt from "jsonwebtoken"

export async function POST(request: Request) {
  await dbConnect()
  const body = await request.json()

  if (!body) {
    return AppResponse("Please enter all fields.", 404)
  }

  if (!emailRegex.test(body.email)) {
    return AppResponse("please enter a valid email", 400)
  }
  if (!passwordRegex.test(body.password)) {
    return AppResponse("please enter a strong password", 400)
  }

  const user = await Users.findOne({
    email: body.email,
  })

  if (!user) {
    return AppResponse("user not found", 404)
  }

  //   const hashedPassword = await bcrypt.hash(body.password, 12)
  const isPassword = await bcrypt.compare(body.password, user.password)

  if (!isPassword) {
    return AppResponse("invalid credentials", 400)
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  )

  const resUser = {
    id: user._id,
    fullName: user.fullName,
    nickname: user.nickname,
    email: user._email,
    image: user.image,
    access_token: token,
  }

  if (isPassword && user) {
    return NextResponse.json(resUser, { status: 201 })
  }
}
