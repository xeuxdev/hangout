"use client"
import React, { ChangeEvent, useState } from "react"
import { SetupProps } from "../../types"
import { Button } from "@/client/components/Buttons"
import Image from "next/image"
import Countries from "@/utils/data/countries.json"
import { toast } from "react-hot-toast"
import { useSetUpAccountData } from "../../contexts/SetUpContext"

function SelectCountry({ formStep, nextFormStep }: SetupProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("")
  const { setSetUpValues } = useSetUpAccountData()
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const filteredCountries = Countries.filter((country) =>
    searchQuery == ""
      ? Countries
      : country.commonName.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const searchProps = {
    searchQuery,
    setSearchQuery,
    handleSearchChange,
  }

  const handleSubmit = () => {
    if (selectedCountry == "") {
      toast.error("Please select a country")
      return
    } else {
      setSetUpValues({
        country: selectedCountry,
      })
      nextFormStep()
    }
  }

  return (
    <section
      className={`w-full flex-col ${
        formStep === 0 ? "flex justify-center" : "hidden"
      } relative h-full pt-20 `}
    >
      <SearchComponent {...searchProps} />

      <div className="fixed z-30 top-0 min-w-screen left-0 right-0 h-48 bg-primary dark:bg-primary_dark max-w-screen mx-auto "></div>

      {/* countries */}
      <div className="space-y-5 pt-20 mb-14">
        {filteredCountries.map((c, i) => (
          <div
            key={i + c.commonName}
            className={`flex items-center justify-between ring-1 rounded-xl py-4 px-4 relative z-20 cursor-pointer hover:ring-pri_btn 
              ${activeIndex == i ? "ring-pri_btn" : "ring-gray-400"}
            `}
            onClick={() => {
              setSelectedCountry(c.commonName)
              setActiveIndex(i)
            }}
          >
            <div className="flex items-center gap-5 w-full">
              {/* flag */}
              <div className="relative w-8 h-8">
                <Image
                  src={c.flag.png}
                  alt={c.commonName + " flag"}
                  fill
                  className="object-fill rounded-md"
                />
              </div>
              {/* shortnanme */}
              <p className="uppercase">{c.altSpellings[0]}</p>
              {/* name */}
              <p className="capitalize ">{c.commonName}</p>

              <div className="w-4 h-4 rounded-full ring-[3px] ring-pri_btn ml-auto flex items-center justify-center">
                {activeIndex == i && (
                  <div className="ring-2 ring-input_bg_light dark:ring-input_bg_dark w-3 h-3 bg-pri_btn rounded-md"></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] z-30 max-w-lg">
        <Button
          content="continue"
          variant="filled"
          onClick={() => handleSubmit()}
        />
      </div>
    </section>
  )
}

export default SelectCountry

const SearchComponent = ({
  searchQuery,
  handleSearchChange,
}: {
  searchQuery: string
  handleSearchChange: (event: any) => void
}) => {
  return (
    <div className="flex items-center fixed top-20 inset-0 mx-auto h-12 w-[90%] z-40 group mt-7 mb-7 max-w-lg md:px-5">
      <div className="relative w-full h-full flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 460 512"
          className="h-5 w-5 fill-gray-400 group-hover:fill-pri_btn absolute left-4"
        >
          <path d="M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7 52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2 11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7 16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0 33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z" />
        </svg>
        <input
          type="search"
          className=" w-full h-full pl-12 pr-4 rounded-xl outline-none focus:ring-2 focus:ring-pri_btn bg-input_bg_light2 text-primary_dark dark:bg-input_bg_dark dark:text-primary"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  )
}
