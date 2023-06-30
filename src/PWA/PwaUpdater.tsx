import { Modal } from "@mantine/core"
import { useEffect, useState } from "react"
import { useDisclosure } from "@mantine/hooks"
import { Button } from "@/client/components/Buttons"

declare global {
  interface Window {
    wb: {
      messageSkipWaiting(): void
      register(): void
      //   addEventListener(name: string, callback: () => unknown)
      addEventListener(
        type: string,
        listener: (this: Window, ev: UIEvent) => any,
        options?: boolean | AddEventListenerOptions | undefined
      ): () => void
    }
  }
}

const PwaUpdater = () => {
  const wb = window.wb
  const onConfirmActivate = () => wb.messageSkipWaiting()
  const [opened, { open, close }] = useDisclosure(false)

  useEffect(() => {
    wb?.addEventListener("controlling", () => {
      window.location.reload()
    })

    wb?.addEventListener("waiting", () => open())
    wb?.register()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Modal opened={opened} onClose={close} title="Update App">
      {/* Modal content */}

      <div>Hey, a new version is available! Please click below to update.</div>

      <Button
        onClick={onConfirmActivate}
        content="Reload and update"
        variant="filled"
      />
      <Button onClick={() => close()} content="Cancel" variant="empty" />
    </Modal>
  )
}

export default PwaUpdater
