"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "next-themes"
import dynamic from "next/dynamic"
import { useEffect, useState } from "react"
import { SkeletonTheme } from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
const PwaUpdater = dynamic(() => import(`@/PWA/PwaUpdater`), { ssr: false })
import { LazyMotion, domAnimation } from "framer-motion"

function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const queryClient = new QueryClient()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <SessionProvider>
      <PwaUpdater />
      <QueryClientProvider client={queryClient}>
        <LazyMotion features={domAnimation}>
          <ThemeProvider attribute="class">
            <SkeletonTheme baseColor="#E8E8E8" highlightColor="##E8E8E8">
              {children}
            </SkeletonTheme>
          </ThemeProvider>
        </LazyMotion>
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default Providers
