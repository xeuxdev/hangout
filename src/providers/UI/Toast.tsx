import React from "react"
import { Toaster } from "react-hot-toast"

function Toast() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      toastOptions={{
        duration: 2500,
      }}
    />
  )
}

export default Toast
