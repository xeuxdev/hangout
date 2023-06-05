export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    "/home/:path*",
    // "/profile/:path*",
    // "/campaigns/:path*",
    // "/settings/:path*",
  ],
}
