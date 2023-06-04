import { DB_INFO } from "@/constants/db"
import { emailRegex, passwordRegex } from "@/constants/regex"
import { AppResponse } from "@/lib/api/response"
import clientPromise from "@/lib/db/mongodb"
import bcrypt from "bcrypt"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()
  const client = await clientPromise
  const db = client.db(DB_INFO.MAIN_DB)
  const collection = db.collection(DB_INFO.USERS)

  if (!body) {
    return AppResponse("Please enter all fields.", 404)
  }

  if (!emailRegex.test(body.email)) {
    return AppResponse("please enter a valid email", 400)
  }
  if (!passwordRegex.test(body.password)) {
    return AppResponse("please enter a strong password", 400)
  }
  const user = await collection.findOne({
    email: body.email,
  })
  // .toArray()

  if (user) {
    return AppResponse("user already exists", 400)
  }

  const hashedPassword = await bcrypt.hash(body.password, 12)

  const res = await collection.insertOne({
    email: body.email,
    password: hashedPassword,
  })

  return NextResponse.json({ res }, { status: 201 })
}
