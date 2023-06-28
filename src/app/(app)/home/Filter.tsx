"use client"
import { Button } from "@/client/components/Buttons"
import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FilterIcon } from "@/client/components/Icons"
import ClickAwayListener from "react-click-away-listener"
import { RangeSlider, Select } from "@mantine/core"
import { useFilterUsersStore } from "@/zustand/store"

function Filter() {
  const [showFilter, setShowFilter] = useState(false)
  const [selectedGender, setSelectedGender] = useState<
    "male" | "female" | "random"
  >("random")
  const [ageRange, setAgeRange] = useState<[number, number]>([18, 80])

  const setFilters = useFilterUsersStore((state) => state.setFilters)
  const resetFilters = useFilterUsersStore((state) => state.resetFilters)

  const setUsersFilters = () => {
    setFilters({
      age: ageRange,
      gender: selectedGender,
      // location: "",
    })
  }

  return (
    <>
      <div
        className="flex items-center gap-5 cursor-pointer"
        onClick={() => setShowFilter(true)}
      >
        <FilterIcon />
        {showFilter && (
          <div className="absolute top-0 left-0 w-full h-full opacity-50 bg-primary_dark z-40" />
        )}
      </div>

      <AnimatePresence mode="wait" onExitComplete={() => null} initial={false}>
        {showFilter && (
          <ClickAwayListener
            onClickAway={() => {
              setShowFilter(false)
            }}
          >
            <motion.div
              className="fixed bottom-0 left-0 lg:right-0 lg:left-auto w-full max-w-lg min-h-56 rounded-t-3xl z-50 bg-input_bg_light2 dark:bg-input_bg_dark px-5 py-10 space-y-5"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              exit={{
                opacity: 0,
                y: 100,
                transition: { duration: 0.5 },
              }}
            >
              <header className="text-xl text-primary_dark dark:text-primary font-bold text-center select-none">
                Filter
              </header>

              {/* gender */}
              <div className="space-y-3">
                <header className="text-xl text-primary_dark dark:text-primary font-bold select-none">
                  Gender
                </header>

                <div className="flex items-center justify-between gap-3">
                  {["male", "female", "random"].map((gender) => (
                    <Button
                      key={gender}
                      content={gender}
                      variant={gender === selectedGender ? "filled" : "empty"}
                      onClick={() => {
                        // @ts-ignore
                        setSelectedGender(gender)
                      }}
                      extraStyle="px-3 h-9"
                    />
                  ))}
                </div>
              </div>

              {/* age */}

              <div className="">
                <header className="text-xl text-primary_dark dark:text-primary font-bold pb-8 select-none">
                  Age
                </header>

                <RangeSlider
                  value={ageRange}
                  onChange={setAgeRange}
                  labelAlwaysOn
                  styles={{
                    bar: { backgroundColor: "#AF48FF" },
                  }}
                  min={18}
                />
              </div>

              {/* location */}

              {/* <div className="space-y-3">
                <header className="text-xl text-primary_dark dark:text-primary font-bold select-none">
                  Location
                </header>

                <div>
                  <Select
                    data={[
                      {
                        value: "hey",
                        label: "hey",
                      },
                    ]}
                    searchable
                    multiple
                    creatable
                    onChange={(val) => {
                      console.log(val)
                    }}
                  />
                </div>
              </div> */}

              <div className="flex items-center gap-5">
                <Button
                  content="reset"
                  variant="empty"
                  extraStyle="h-11 px-3"
                  onClick={() => {
                    setShowFilter(false)
                    resetFilters()
                    setSelectedGender("random")
                    setAgeRange([18, 80])
                    // console.log("clicked")
                  }}
                />
                <Button
                  content="apply"
                  variant="filled"
                  extraStyle="h-11 px-3"
                  onClick={() => {
                    setShowFilter(false)
                    setUsersFilters()
                  }}
                />
              </div>
            </motion.div>
          </ClickAwayListener>
        )}
      </AnimatePresence>
    </>
  )
}

export default Filter
