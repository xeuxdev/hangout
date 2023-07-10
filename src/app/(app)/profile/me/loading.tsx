import BackButton from "@/client/components/Buttons/BackButton"

function ProfileLoader() {
  return (
    <>
      <header className="relative z-20">
        <BackButton />
      </header>

      <section className="lg:flex lg:relative lg:h-[80vh] lg:w-full">
        <div className="mb-10">
          {/* height={!matches ? 500 : 400} */}
          <div className=" w-full h-[31.25rem] relative rounded-xl bg-gray-400 dark:bg-gray-600 animate-pulse" />
        </div>

        {/* info */}
        <div className=" w-full h-40 relative rounded-xl bg-gray-400 dark:bg-gray-600 animate-pulse" />
      </section>
    </>
  )
}

export default ProfileLoader
