import Image from "next/image"

const Match = ({
  imgUrl,
  imgUrl2,
  icon,
  matchPercentage,
}: {
  imgUrl: string
  imgUrl2: string
  icon: string
  matchPercentage: number
}) => {
  return (
    <div className="flex items-center relative">
      <div className="relative w-48 h-48">
        <div className="w-full h-full overflow-hidden absolute top-0 left-0  ring-8 ring-pri_btn rounded-full">
          <Image
            src={imgUrl}
            alt="Image 1"
            fill
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      <div className="relative w-48 h-48 -ml-16">
        <div className="w-full h-full overflow-hidden absolute top-0 left-0 ring-8 ring-pri_btn rounded-full">
          <Image
            src={imgUrl2}
            alt="Image 2"
            className="w-full h-full object-cover rounded-full"
            fill
          />
        </div>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2">
        <div className="w-20 h-20 rounded-full bg-white -ml-5 grid place-items-center">
          <div className="h-12 w-12 rounded-full ring-8 border-pri_btn grid place-items-center">
            <p className="text-xs text-primary_dark font-semibold">
              {matchPercentage}%
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Match
