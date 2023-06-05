import { emailRegex, passwordRegex } from "@/constants/regex"
import { AppResponse } from "@/lib/api/response"
import dbConnect from "@/lib/db/dbConnect"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"
import Users from "@/server/models/Users.model"

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
  // .toArray()

  if (user) {
    return AppResponse("user already exists", 400)
  }

  const hashedPassword = await bcrypt.hash(body.password, 12)

  const res = await Users.create({
    email: body.email,
    password: hashedPassword,
  })

  return NextResponse.json({ res }, { status: 201 })
}
