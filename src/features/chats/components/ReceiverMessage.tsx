function ReceiverMessage({ message }: { message: string }) {
  return (
    <div className="p-5 bg-msg_receiver_light dark:bg-msg_receiver_dark text-primary w-fit mr-auto rounded-2xl">
      {message}
    </div>
  )
}

export default ReceiverMessage
