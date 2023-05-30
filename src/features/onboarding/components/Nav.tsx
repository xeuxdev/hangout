"use client"
import { useRouter } from "next/navigation"
import React from "react"

function Navigation({ route, content }: { route: string; content: string }) {
  const router = useRouter()
  return (
    <div>
      <p>
        {content}
        <span
          className="text-purple-700 font-bold pl-2"
          onClick={() => router.push(route)}
        >
          Sign up
        </span>
      </p>
    </div>
  )
}

export default Navigation
