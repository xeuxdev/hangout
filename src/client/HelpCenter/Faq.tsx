"use client"
import React, { useEffect, useState } from "react"
import Search from "../components/Utils/Search"
import { Accordion } from "@mantine/core"
import { FAQS } from "./data"

function Faq() {
  const [searchQuery, setSearchQuery] = useState("")

  const searchProps = { searchQuery, setSearchQuery }

  const filterFaq = FAQS.filter((faq) =>
    faq.question.includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <Search {...searchProps} />

      <div className="pb-10">
        <Accordion defaultValue="">
          {filterFaq.map((faq, index) => (
            <Accordion.Item value={faq.question} key={faq.question + index}>
              <Accordion.Control className="text-primary_dark dark:text-primary">
                {faq.question}
              </Accordion.Control>
              <Accordion.Panel className="text-primary_dark dark:text-primary">
                {faq.answer}
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  )
}

export default Faq
