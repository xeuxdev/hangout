"use client"

import { useState } from "react"
import SelectCountry from "./SetUp/SelectCountry"
import { SetUpContextProvider } from "../contexts/SetUpContext"
import FillYourProfile from "./SetUp/FillYourProfile"

const headers = [
  "Select Country",
  "Fill Your Profile",
  "Select Your Interest",
  "Select Your Ideal Match",
]

function SetUpWrapper() {
  const [formStep, setFormStep] = useState(0)

  const nextFormStep = () => setFormStep((prev) => prev + 1)
  const prevFormStep = () => setFormStep((prev) => prev - 1)

  const props = {
    formStep,
    nextFormStep,
    prevFormStep,
  }

  return (
    <>
      <header className="flex items-center gap-5 fixed z-40">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          width={20}
          className="fill-black dark:fill-white"
          onClick={() => {
            if (formStep == 0) return
            prevFormStep()
          }}
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>

        <p>{headers[formStep]}</p>
      </header>
      <SetUpContextProvider>
        <SelectCountry {...props} />
        <FillYourProfile {...props} />
      </SetUpContextProvider>
    </>
  )
}

export default SetUpWrapper
