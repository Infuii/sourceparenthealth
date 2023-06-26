import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { env } from "process"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/signin"
  }
}
export default NextAuth(authOptions)