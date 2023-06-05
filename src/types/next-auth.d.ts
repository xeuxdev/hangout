import type { User } from "next-auth"
import "next-auth/jwt"

type UserId = string

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId
    accessToken: string | undefined
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: UserId
    }
    accessToken: string | undefined
  }
  interface User {
    fullName: string | undefined
    nickname: string | undefined
    access_token: string | undefined
  }
}
