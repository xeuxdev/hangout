import { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../db/mongodb"

export const authOptions: AuthOptions = {
  // adapter: PrismaAdapter(prisma),
  adapter: MongoDBAdapter(clientPromise),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",

      // @ts-ignore
      async authorize(
        credentials: {
          email: string
          password: string
        },
        req
      ) {
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/users/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },
        })
        const user = await res.json()

        // If no error and we have user data, return it
        if (res.ok && user) {
          console.log(user)
          return user
        }
        // Return null if user data could not be retrieved
        return null
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 3 * 24 * 60 * 60,
  },

  callbacks: {
    async jwt({ token, account, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account?.access_token
        token.id = user.id
      }
      if (user) {
        token.id = user.id
        token.name = user?.name
        token.userName = user?.userName
        token.email = user?.email
        token.image = user?.image
        token.access_token = user?.access_token
      }

      // console.log(token, "token")

      return token
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      if (token) {
        session.accessToken = token.accessToken
          ? token.accessToken
          : token.access_token
        session.user.id = token.id
        session.user.name = token.name
        session.user.userName = token.userName
        session.user.email = token.email
        session.user.image = token.image
      }

      // console.log(session, "session")

      return session
    },
  },
  pages: {
    signIn: "/auth",
    error: "/auth",
    //  newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  secret: process.env.NEXTAUTH_SECRET,
}
