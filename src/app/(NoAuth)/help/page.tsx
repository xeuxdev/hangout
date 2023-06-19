import HelpCenter from "@/client/HelpCenter/HelpCenter"
import NavHeader from "@/client/components/Navigation/NavHeader"
import React from "react"

export const metadata = {
  title: "Help - find helpful information",
  description: "Find helpful information here",
}

function Help() {
  return (
    <>
      <NavHeader content="Help Center" />

      <HelpCenter />
    </>
  )
}

export default Help
