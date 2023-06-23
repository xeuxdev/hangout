import { AppResponse, AppResponseData } from "@/lib/api/response"
import dbConnect from "@/lib/db/dbConnect"
import { headers } from "next/headers"
import jwt, { JwtPayload } from "jsonwebtoken"
import Users from "@/server/models/Users.model"
import bcrypt from "bcrypt"
import { passwordRegex } from "@/constants/regex"

export async function POST(request: Request) {
  await dbConnect()

  const { currentPassword, newPassword } = await request.json()

  const headersList = headers()
  const authorization = headersList.get("authorization")

  const token = authorization?.split(" ")[1]

  if (!currentPassword || !newPassword) {
    return AppResponse("Invalid credentials", 400)
  }
  if (!token) return AppResponse("Invalid credentials", 400)

  try {
    const data = jwt.verify(`${token}`, process.env.JWT_SECRET) as {
      id: string
    } & JwtPayload

    const UserInfo = await Users.findOne({
      _id: `${data.id}`,
    })

    if (!UserInfo) return AppResponse("not found", 404)

    const isPasswordCorrect = await bcrypt.compare(
      currentPassword,
      UserInfo.password
    )

    if (!isPasswordCorrect) return AppResponse("invalid password", 400)

    if (!passwordRegex.test(newPassword)) {
      return AppResponse("password not strong enough", 400)
    }

    const newPasswordHash = await bcrypt.hash(newPassword, 12)

    const res = await Users.findOneAndUpdate(
      {
        _id: data.id,
      },
      {
        password: newPasswordHash,
      }
    )

    if (res) {
      return AppResponseData("Password Changed Successfully", 200)
    } else {
    }
    return AppResponseData("something went wrong", 500)

    // return NextResponse.json(UserInfo)
  } catch (error) {
    return AppResponse("unauthorized", 401)
    // return NextResponse.json({ message: "unauthorized" }, { status: 401 })
  }
}
