"use client"
import { Controller, useForm } from "react-hook-form"
import { FillProfileType, SetupProps } from "../../types"
import { zodResolver } from "@hookform/resolvers/zod"
import { FillProfileSchema } from "../../utils/Schema"
import { SubmitButton } from "@/client/components/Buttons"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { useTheme } from "next-themes"
import { useSetUpAccountData } from "../../contexts/SetUpContext"
import { useSession } from "next-auth/react"
import { verifyUsername } from "../../services/verifyUsername"
import { toast } from "react-hot-toast"
import { getTime18YearsBack } from "@/helpers/getTime18YearsBack"

function FillYourProfile({ formStep, nextFormStep }: SetupProps) {
  const { theme } = useTheme()
  const { setSetUpValues } = useSetUpAccountData()
  const { data: session } = useSession()

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FillProfileType>({
    resolver: zodResolver(FillProfileSchema),
    defaultValues: {
      fullName: session?.user.name as string,
    },
  })

  const onsubmit = async (profileData: FillProfileType) => {
    // console.log(profileData)
    setSetUpValues(profileData)
    const res = await verifyUsername(profileData.userName)

    if (res.status === "rejected") {
      toast.error(res.msg)
    } else {
      // toast.success(res.msg)
      nextFormStep()
    }
  }

  return (
    <div
      className={`w-full flex-col ${
        formStep === 1 ? "flex justify-center" : "hidden"
      } relative h-full pt-20 `}
    >
      <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-7">
        {/* full name */}
        <div className="w-full">
          <label htmlFor="fullname" className="sr-only">
            full name
          </label>
          <input
            id="fullname"
            {...register("fullName")}
            className="w-full h-14 px-5 rounded-md bg-input_bg_light2 dark:bg-input_bg_dark outline-none focus-visible:ring-2 focus-visible:ring-pri_btn"
            placeholder="Full Name"
          />
          <p className="text-xs text-red-500">{errors.fullName?.message}</p>
        </div>

        {/* username */}
        <div className="w-full">
          <label htmlFor="username" className="sr-only">
            user name
          </label>
          <input
            id="username"
            {...register("userName")}
            className="w-full h-14 px-5 rounded-md bg-input_bg_light2 dark:bg-input_bg_dark outline-none focus-visible:ring-2 focus-visible:ring-pri_btn"
            placeholder="User Name"
          />
          <p className="text-xs text-red-500">{errors.userName?.message}</p>
        </div>

        {/* date of birth */}

        <div className="w-full">
          <label htmlFor="birthday" className="sr-only">
            birthday
          </label>
          <input
            type="date"
            id="birthday"
            max={getTime18YearsBack()}
            {...register("birthday")}
            className="w-full h-14 px-5 rounded-md bg-input_bg_light2 dark:bg-input_bg_dark outline-none focus-visible:ring-2 focus-visible:ring-pri_btn"
            placeholder="Date of Birth"
          />
          <p className="text-xs text-red-500">{errors.birthday?.message}</p>
        </div>

        {/* gender */}
        <div className="w-full">
          <label htmlFor="gender" className="sr-only">
            Gender
          </label>

          <select
            id="gender"
            className="w-full h-14 px-5 rounded-md bg-input_bg_light2 dark:bg-input_bg_dark outline-none focus-visible:ring-2 focus-visible:ring-pri_btn"
            {...register("gender")}
          >
            <option value="">---Select Gender---</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <p className="text-xs text-red-500">{errors.gender?.message}</p>
        </div>

        {/* phone number */}
        <div className="w-full">
          <label htmlFor="phonenumber" className="sr-only">
            phonenumber
          </label>
          <Controller
            control={control}
            name="phoneNumber"
            rules={{ required: false }}
            render={({ field: { ref, ...field } }) => (
              <PhoneInput
                {...field}
                inputProps={{
                  name: "phoneNumber",
                  ref,
                  required: false,
                }}
                inputStyle={{
                  width: "100%",
                  height: "2.5rem",
                  fontSize: "0.875rem",
                  paddingLeft: "4rem",
                  borderRadius: "8px",
                  backgroundColor: `${theme == "dark" ? "#1F222A" : "#F5F5F5"}`,
                }}
                country={""}
                countryCodeEditable={true}
                specialLabel={"Phone Number"}
                placeholder="e.g. +(12)3456 789"
              />
            )}
          />
          <p className="text-xs text-red-500">{errors.occupation?.message}</p>
        </div>

        {/* occupation */}
        <div className="w-full">
          <label htmlFor="occupation" className="sr-only">
            occupation
          </label>
          <input
            type="text"
            id="occupation"
            {...register("occupation")}
            className="w-full h-14 px-5 rounded-md bg-input_bg_light2 dark:bg-input_bg_dark outline-none focus-visible:ring-2 focus-visible:ring-pri_btn"
            placeholder="Occupation"
          />
          <p className="text-xs text-red-500">{errors.occupation?.message}</p>
        </div>

        <SubmitButton content="continue" variant="filled" />
      </form>
    </div>
  )
}

export default FillYourProfile
