export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    "/home/:path*",
    "/profile/:path*",
    "/setup/:path*",
    "/match/:path*",
    "/chats/:path*",
    "/settings/:path*",
    "/messages/:path*",
  ],
}
