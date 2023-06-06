import { AppResponse } from "@/lib/api/response"
import { authOptions } from "@/lib/auth/authOptions"
import dbConnect from "@/lib/db/dbConnect"
import Users from "@/server/models/Users.model"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

type SETUPPROPS = {
  country: string
  fullName: string
  userName: string
  birthday: string
  gender: string
  phoneNumber: string
  occupation: string
  interests: string[]
  preferences: string[]
  userId: string
}

export async function POST(request: Request) {
  await dbConnect()
  //   const session = await getServerSession(authOptions)
  const body = (await request.json()) as SETUPPROPS

  const { birthday, country, fullName, gender, userName, userId } = body
  //   console.log(body)
  if (!country || !fullName || !birthday || !gender || !userName || !userId) {
    return AppResponse("please enter fields", 400)
  }

  const user = await Users.findOne({
    _id: userId,
  })

  if (!user) {
    return AppResponse("Unauthenticated", 401)
  }

  user.birthday = body.birthday
  user.country = body.country
  user.fullName = body.fullName
  user.interests = body.interests
  user.occupation = body.occupation
  user.phone = body.phoneNumber
  user.preferences = body.preferences
  user.userName = body.userName
  user.gender = body.gender

  const res = await user.save()

  if (res) {
    return AppResponse("Profile setup successful", 200)
  } else {
    return AppResponse("Profile setup failed", 500)
  }

  //   return NextResponse.json({ res })
}
