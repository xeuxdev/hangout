import React from "react"
import SuccessIcon from "../Icons/SuccessIcon"
import { Circles } from "../UiElements"

function SuccessModal({ content }: { content: string }) {
  return (
    <>
      <div className="fixed w-full h-full z-40 top-0 left-0 bg-input_bg_dark/50"></div>

      <div className="bg-input_bg_light dark:bg-input_bg_dark rounded-3xl h-[29.75rem] w-[21.25rem] absolute inset-0 m-auto z-50 p-6">
        <div className="flex justify-center mb-10 mt-7">
          <SuccessIcon />
        </div>

        <div className="space-y-4 text-center">
          <p className="text-2xl text-pri_btn font-bold">Congratulations!</p>
          <p>{content}</p>
        </div>

        <div className="w-16 h-16 mx-auto mt-10">
          <Circles />
        </div>
      </div>
    </>
  )
}

export default SuccessModal
