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
        <button
          className="text-purple-700 font-bold pl-2 cursor-pointer select-none"
          onClick={() => router.push(route)}
        >
          {cta}
        </button>
      </p>
    </div>
  )
}

export default Navigation
