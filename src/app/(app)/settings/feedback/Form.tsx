"use client"

import { SubmitButton } from "@/client/components/Buttons"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { sendFeedback } from "./api"
import { toast } from "react-hot-toast"

type FeedbackType = {
  feedback: string
  rating: number
}

const feedbackSchema = z.object({
  feedback: z.string().min(5, { message: "please enter feedback" }).optional(),
  rating: z.number().optional(),
})

function FeedbackForm() {
  const [filledStars, setFilledStars] = useState(1)
  const { data: session } = useSession()

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm<FeedbackType>({
    resolver: zodResolver(feedbackSchema),
  })

  const { mutateAsync, error, isLoading } = useMutation({
    mutationKey: ["feedback"],
    mutationFn: sendFeedback,
  })

  const onsubmit = (data: FeedbackType) => {
    const payload = {
      feedback: data.feedback,
      rating: filledStars,
      userName: session?.user.userName,
    }
    console.log(payload)

    mutateAsync(payload)
      .then((response) => {
        response && toast.success(response.message)
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  return (
    <div className="pb-14">
      <form onSubmit={handleSubmit(onsubmit)} className="space-y-10">
        <div className="space-y-3">
          <textarea
            {...register("feedback")}
            className="w-full h-52  rounded-md bg-input_bg_light dark:bg-input_bg_dark p-3 outline-none focus-visible:ring-pri_btn focus:ring-1"
            placeholder="Enter feedback"
          />
          <p className="text-xs text-red-500 ">{errors.feedback?.message}</p>
        </div>

        <div className="flex items-center justify-between">
          <>
            {Array(5)
              .fill(0)
              .map((_, ix) => (
                <button
                  key={ix}
                  onClick={() => {
                    setFilledStars(ix + 1)
                    setValue("rating", filledStars)
                  }}
                  className="focus-visible:ring-1 focus-visible:ring-pri_btn outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className={` w-10 ${
                      filledStars >= ix + 1 ? "fill-pri_btn" : "fill-white"
                    }`}
                  >
                    <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                  </svg>
                </button>
              ))}
          </>
        </div>

        <SubmitButton
          content={isLoading ? "Sending feedback" : "Submit feedback"}
          variant="filled"
        />
      </form>
    </div>
  )
}

export default FeedbackForm
