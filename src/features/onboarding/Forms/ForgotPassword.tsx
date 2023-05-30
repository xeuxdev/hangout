import { SubmitButton } from "@/client/components/Buttons"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

type ForgotPassword = {
  email: string
}

const Schema = z.object({
  email: z.string().email(),
})

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPassword>({
    resolver: zodResolver(Schema),
  })

  const onsubmit = (values: ForgotPassword) => {
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="w-full my-5">
        <div className="w-full relative group">
          <input
            type="text"
            {...register("email")}
            className=" w-full flex items-center h-14 bg-input_bg_light dark:bg-input_bg_dark text-primary_dark dark:text-primary font-semibold pl-12 pr-5 focus:ring-1 focus:ring-pri_btn outline-none rounded-lg"
            placeholder="email"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="absolute top-1/2 -translate-y-1/2 left-4 group-hover:fill-pri_btn fill-gray-500 dark:group-hover:fill-white"
            width={15}
          >
            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
          </svg>
        </div>
        <p className="text-sm text-red-500">{errors.email?.message}</p>
      </div>

      {/* @ts-ignore */}
      <SubmitButton content="Reset" variant="filled" disabled={errors.email} />
    </form>
  )
}

export default ForgotPassword
