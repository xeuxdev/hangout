import { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "../db/mongodb"
import axios from "axios"

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
        const res = await axios.post(
          `${process.env.NEXTAUTH_URL}/api/users/login`,
          credentials
        )
        const user = res.data

        // If no error and we have user data, return it
        if (user) {
          // console.log(user)
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
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
