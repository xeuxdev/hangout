"use client"

import { useState } from "react"
import ChevronRight from "../../Icons/ChevronRight"
import { motion } from "framer-motion"
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
      <motion.div
        className="flex items-center gap-5 cursor-pointer"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, x: 100, transition: { duration: 0.2 } }}
      >
        <p
          className="font-semibold capitalize text-lg select-none"
          onClick={() => setShowDropDown(true)}
        >
          {selectedOption}
        </p>
        <ChevronRight />

        {showDropDown && (
          <div className="absolute top-0 right-0 w-40 h-49 bg-input_bg_light dark:bg-input_bg_dark z-50 px-5 py-2 rounded-lg">
            {options.map((option) => {
              return (
                <p
                  key={option}
                  onClick={() => {
                    setSelectedOption(option)
                    setShowDropDown(false)
                  }}
                  className="hover:bg-input_bg_light2/40 hover:dark:bg-input_bg_dark/40 cursor-pointer font-semibold capitalize"
                >
                  {option}
                </p>
              )
            })}
          </div>
        )}
      </motion.div>
    </ClickAwayListener>
  )
}

export default DropDown
