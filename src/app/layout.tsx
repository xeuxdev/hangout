import "./globals.css"
import { Inter } from "next/font/google"
import Toast from "@/providers/UI/Toast"
import Providers from "@/providers/Provider"
import Header from "@/client/components/Header/Header"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hangout",
  description: "A dating app for everyone",
  generator: "Next.js",
  applicationName: "Hangout",
  openGraph: {
    title: "Hangout",
    description: "The React Framework for the Web",
    url: "https://hangout-mu.vercel.app",
    siteName: "Hangout",
    images: [
      {
        url: "https://hangout-mu.vercel.app/logo.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://hangout-mu.vercel.app/logo.png",
        width: 1800,
        height: 1600,
        alt: "Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "hsl(0, 0%, 100%)" },
    { media: "(prefers-color-scheme: dark)", color: "#181A20" },
  ],
  manifest: "/manifest.json",
  twitter: {
    card: "summary_large_image",
    title: "Hangout",
    description: "A dating app for everyone",
    creator: "@Headbwoi_1",
    images: ["https://hangout-mu.vercel.app/logo.svg"],
  },
  appleWebApp: {
    title: "Hangout",
    statusBarStyle: "black-translucent",
    startupImage: [
      "/pwa-icons/apple-icon-180.png",
      {
        url: "/pwa-icons/apple-icon-180.png",
        media: "(device-width: 768px) and (device-height: 1024px)",
      },
    ],
  },
  category: "relationship",
  metadataBase: new URL("https://hangout-mu.vercel.app"),
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
          <Analytics />
        </Providers>
        <Toast />
      </body>
    </html>
  )
}
