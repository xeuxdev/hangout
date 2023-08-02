"use client"
import { useState } from "react"
import Text from "../components/Typography/Text"
import { m } from "framer-motion"
import Faq from "./Faq"
import Support from "./Support"

function HelpCenter() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section>
      {/* change tabs */}
      <header className="flex items-center justify-around gap-5">
        {["faq", "support"].map((item, i) => (
          <div className="relative grid w-full place-items-center" key={item}>
            <Text
              content={item}
              size="lg"
              font="semibold"
              extraStyle="pb-3"
              onClick={() => setActiveTab(i)}
            />
            {activeTab === i && (
              <m.span
                className={`absolute bottom-0 left-0 w-full h-1 bg-pri_btn`}
                layoutId="activeTab"
                transition={{
                  duration: 0.4,
                }}
              />
            )}
          </div>
        ))}
      </header>

      {activeTab === 0 ? <Faq /> : <Support />}
    </section>
  )
}

export default HelpCenter
