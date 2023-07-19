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
    <div className="relative flex items-center">
      <div className="relative w-48 h-48">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-full ring-8 ring-pri_btn">
          <Image
            src={imgUrl}
            alt="Image 1"
            fill
            className="object-cover w-full h-full rounded-full"
          />
        </div>
      </div>

      <div className="relative w-48 h-48 -ml-16">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-full ring-8 ring-pri_btn">
          <Image
            src={imgUrl2}
            alt="Image 2"
            className="object-cover w-full h-full rounded-full"
            fill
          />
        </div>
      </div>

      <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <div className="grid w-20 h-20 -ml-5 bg-white rounded-full place-items-center">
          <div className="grid w-12 h-12 rounded-full ring-8 border-pri_btn place-items-center">
            <p className="text-xs font-semibold text-primary_dark">
              {matchPercentage.toFixed(0)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Match
