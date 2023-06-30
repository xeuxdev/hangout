import { useState, useEffect } from "react"

const useInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event>()

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: any) => {
      //   console.log(event)
      event.preventDefault()
      setDeferredPrompt(event)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      )
    }
  }, [])

  return deferredPrompt
}

export default useInstallPrompt
