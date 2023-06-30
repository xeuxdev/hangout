import BackButton from "@/client/components/Buttons/BackButton"

function EditPageLoader() {
  return (
    <>
      <header className="flex items-center gap-5 mb-10">
        <BackButton />

        <h1 className="font-semibold text-xl">Edit Profile</h1>
      </header>

      <div className="space-y-7 pb-20">
        {/* your profile image */}
        <section>
          <h1 className="font-semibold text-xl mb-5">Your Profile Image</h1>

          <>
            <div className="h-24 w-24 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse mx-auto" />
          </>
        </section>

        {/* your best photos */}

        <div>
          <h3 className="font-semibold text-xl mb-5">Your Best Photos</h3>
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <div
                className="w-full h-[12.25rem]  rounded-xl bg-gray-400 dark:bg-gray-600 animate-pulse"
                key={index}
              />
            ))}
        </div>

        {/* interests */}

        <div className="flex items-center justify-between mt-10">
          <h4 className="font-semibold text-xl mb-5">Your Interests</h4>

          <div className="flex items-center flex-wrap gap-4">
            {Array(4)
              .fill(0)
              .map((_, idx) => (
                <div
                  className="h-8 w-28 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse"
                  key={idx}
                />
              ))}
          </div>
        </div>

        {/* edit profile */}
        <div className="flex items-center justify-between">
          <h5 className="font-semibold text-xl mb-5">Your Profile Info</h5>
        </div>

        <div className="space-y-3">
          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <div
                className="h-12 w-56 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse"
                key={idx}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default EditPageLoader
