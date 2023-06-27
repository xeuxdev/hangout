import Image from "next/image"

function NowActive({ users }: { users: any[] }) {
  //   console.log(users)
  return (
    <div className="flex items-center gap-3 overflow-x-scroll">
      {users.slice(0, 4)?.map((user, index) => (
        // <Carousel.Slide key={index}>
        <div key={index}>
          {/* <Link href={`/profile/${user.name}`}> */}
          <div className="h-20 w-20 relative">
            <Image
              src={`${user.picture.thumbnail}`}
              alt={"image" + index}
              fill
              className="rounded-full"
            />
          </div>
          {/* </Link> */}
        </div>
        // </Carousel.Slide>
      ))}
    </div>
  )
}

export default NowActive
