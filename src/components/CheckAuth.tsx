"use client"
import { LineWave } from "@/client/components/UiElements"
import { Session } from "next-auth"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"

function CheckAuth({ route }: { route: string }) {
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { data, status } = useSession()

  useEffect(() => {
    if (!data) {
      setLoading(false)
      return
    }

    if (data) {
      router.replace(route)
      console.log(data)
    }
  }, [route, router, data])

  if (status == "loading" || status == "authenticated" || loading) {
    return (
      <div className="grid place-items-center">
        <LineWave />
      </div>
    )
  }

  return <div className="hidden">CheckAuth</div>
}

export default CheckAuth
