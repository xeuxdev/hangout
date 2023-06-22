import NavHeader from "@/client/components/Navigation/NavHeader"
import Security from "./Security"

export const metadata = {
  title: "Security",
  description: "manage your security",
}

function page() {
  return (
    <>
      <NavHeader content="Security" />

      <Security />
    </>
  )
}

export default page
