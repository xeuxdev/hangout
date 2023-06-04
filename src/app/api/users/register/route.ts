import { emailRegex, passwordRegex } from "@/constants/regex"
import { AppResponse } from "@/lib/api/response"
import clientPromise from "@/lib/db/mongodb"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  // await clientPromise
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

  // const hashedPassword = await bcrypt.hash(body.password, 12)
  //

  // const res = await
  // const res = await prisma.user.create({
  //   data: {
  //     email: body.email,
  //     password: hashedPassword,
  //   },
  // })

  // return NextResponse.json({ res }, { status: 201 })
  return NextResponse.json({ body }, { status: 201 })
}
