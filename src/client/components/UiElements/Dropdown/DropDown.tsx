"use client"

import { useState } from "react"
import ChevronRight from "../../Icons/ChevronRight"
import { m } from "framer-motion"
import ClickAwayListener from "react-click-away-listener"

function DropDown({ options }: { options: string[] }) {
  const [showDropDown, setShowDropDown] = useState(false)
  const [selectedOption, setSelectedOption] = useState(options[0])

  return (
    <ClickAwayListener
      onClickAway={() => {
        setShowDropDown(false)
      }}
    >
      <m.div
        className="flex items-center gap-5 cursor-pointer"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, x: 100, transition: { duration: 0.2 } }}
      >
        <p
          className="text-lg font-semibold capitalize select-none"
          onClick={() => setShowDropDown(true)}
        >
          {selectedOption}
        </p>
        <ChevronRight />

        {showDropDown && (
          <div className="absolute top-0 right-0 z-50 w-40 px-5 py-2 rounded-lg h-49 bg-input_bg_light dark:bg-input_bg_dark">
            {options.map((option) => {
              return (
                <p
                  key={option}
                  onClick={() => {
                    setSelectedOption(option)
                    setShowDropDown(false)
                  }}
                  className="font-semibold capitalize cursor-pointer hover:bg-input_bg_light2/40 hover:dark:bg-input_bg_dark/40"
                >
                  {option}
                </p>
              )
            })}
          </div>
        )}
      </m.div>
    </ClickAwayListener>
  )
}

export default DropDown
