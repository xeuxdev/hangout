import NavHeader from "@/client/components/Navigation/NavHeader"
import FeedbackForm from "./Form"

export const metadata = {
  title: "Feedback - Provide feedback",
  description: "Please provide feedback for us",
}

function Feedback() {
  return (
    <>
      <NavHeader content="Feedback" />

      <section className="max-w-lg mx-auto space-y-7">
        <div>
          <header className="font-medium text-lg">
            Please Share your feedback
          </header>
          <p className="mt-2">
            Stating exactly what you&apos;re experiencing would help us serve
            you better.
          </p>
        </div>

        <FeedbackForm />
      </section>
    </>
  )
}

export default Feedback
