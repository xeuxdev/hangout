import type { User } from "next-auth"
import "next-auth/jwt"

type UserId = string

declare module "next-auth/jwt" {
  interface JWT {
    id: UserId
    accessToken: string | undefined
    access_token: string | undefined
    name: string | null | undefined
    image: string | undefined | null
    userName: string | undefined
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
    userName: string | undefined
    access_token: string | undefined
  }
}
