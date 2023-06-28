import NavHeader from "@/client/components/Navigation/NavHeader"

export default function PersonalInfoLoader() {
  return (
    <>
      <NavHeader content="Personal Information" />

      <section className="mx-auto max-w-lg space-y-6 pb-14">
        {Array(6)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className="w-full h-[4.5rem] bg-input_bg_light dark:bg-input_bg_dark rounded-xl animate-pulse"
            />
          ))}
      </section>
    </>
  )
}
