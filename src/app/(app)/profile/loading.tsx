import React from "react"

function ProfileLoader() {
  return (
    <>
      <div className="max-w-lg mx-auto pb-20">
        <h1 className="text-2xl font-semibold tracking-wide">Profile</h1>

        {/* profile */}
        <div className="mt-16 mb-10 flex items-center justify-between">
          <div className="flex items-center gap-7">
            {/* image */}
            <>
              <div className="h-28 w-28 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse" />
            </>

            {/* name and username */}
            <div className="space-y-1.5">
              <div className="h-5 w-28 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse" />
              <div className="h-5 w-28 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse" />
            </div>
          </div>
        </div>

        {/* links */}

        <div className="space-y-8 pt-16 pb-4">
          {Array(5)
            .fill(0)
            .map((_, idx) => (
              <div className="flex items-center justify-between" key={idx}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse" />
                  <div className="h-5 w-40 rounded-full bg-gray-400 dark:bg-gray-600 animate-pulse" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default ProfileLoader
