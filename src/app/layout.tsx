import "./globals.css"
import { Inter } from "next/font/google"
import Toast from "@/providers/UI/Toast"
import Providers from "@/providers/Provider"
import Header from "@/client/components/Header/Header"

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
        <Providers>
          <Header />
          {children}
        </Providers>
        <Toast />
      </body>
    </html>
  )
}
