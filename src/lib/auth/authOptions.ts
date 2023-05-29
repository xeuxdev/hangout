import { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 3 * 24 * 60 * 60,
  },
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
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
  pages: {
    signIn: "/auth",
    //  newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  secret: process.env.NEXTAUTH_SECRET,
}
