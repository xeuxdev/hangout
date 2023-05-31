import { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "../prisma"

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // CredentialsProvider({
    //     name: 'Credentials',

    //     credentials: {
    //     //   username: { label: "Username", type: "text", placeholder: "jsmith" },
    //     //   password: { label: "Password", type: "password" }
    //     },
    //     async authorize(credentials, req) {

    //       const res = await fetch("/your/endpoint", {
    //         method: 'POST',
    //         body: JSON.stringify(credentials),
    //         headers: { "Content-Type": "application/json" }
    //       })
    //       const user = await res.json()

    //       // If no error and we have user data, return it
    //       if (res.ok && user) {
    //         return user
    //       }
    //       // Return null if user data could not be retrieved
    //       return null
    //     }
    //   })
  ],

  session: {
    strategy: "jwt",
    maxAge: 3 * 24 * 60 * 60,
  },

  callbacks: {
    async jwt({ token, account, profile, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token
        token.id = user?.id

        console.log(token, "token")
      }
      return token
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      if (token) {
        session.accessToken = token.accessToken
        session.user.id = token.id
      }

      console.log(session, "session")

      return session
    },
  },
  pages: {
    signIn: "/auth",
    //  newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  secret: process.env.NEXTAUTH_SECRET,
}
