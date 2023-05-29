import AuthProvider from "@/providers/auth/AuthProvider"
import "./globals.css"
import { Inter } from "next/font/google"
import Toast from "@/providers/UI/Toast"
import Providers from "@/providers/auth/AuthProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hangout",
  description: "A dating app for everyone",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Toast />
      </body>
    </html>
  )
}
