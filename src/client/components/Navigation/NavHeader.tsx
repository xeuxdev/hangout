import React from "react"
import BackButton from "../Buttons/BackButton"

function NavHeader({ content }: { content: string }) {
  return (
    <header className="flex items-center gap-5 mb-10">
      <BackButton />

      <h1 className="font-semibold text-xl">{content}</h1>
    </header>
  )
}

export default NavHeader
