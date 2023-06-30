function SenderMessage({ message }: { message: string }) {
  return (
    <div className="p-5 bg-pri_btn text-primary w-fit ml-auto rounded-2xl">
      {message}
    </div>
  )
}

export default SenderMessage
