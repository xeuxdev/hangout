"use client"
import { useRouter } from "next/navigation"
import React from "react"

function Navigation({
  route,
  content,
  cta,
}: {
  route: string
  content: string
  cta: string
}) {
  const router = useRouter()
  return (
    <div>
      <p className="text-center">
        {content}
        <span
          className="text-purple-700 font-bold pl-2 cursor-pointer"
          onClick={() => router.push(route)}
        >
          {cta}
        </span>
      </p>
    </div>
  )
}

export default Navigation
