"use client"
import React, { useEffect, useState } from "react"
import Search from "../components/Utils/Search"
import { Accordion } from "@mantine/core"
import { FAQS } from "./data"

function Faq() {
  const [searchQuery, setSearchQuery] = useState("")

  const searchProps = { searchQuery, setSearchQuery }

  const filterFaq = FAQS.filter((faq) => faq.question.includes(searchQuery))

  return (
    <>
      <Search {...searchProps} />

      <div>
        <Accordion defaultValue="">
          {filterFaq.map((faq, index) => (
            <Accordion.Item value={faq.question} key={faq.question + index}>
              <Accordion.Control>{faq.question}</Accordion.Control>
              <Accordion.Panel>{faq.answer}</Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </>
  )
}

export default Faq
