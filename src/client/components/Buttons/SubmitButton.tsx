import { ReactNode } from "react"
import { ButtonType } from "./types"

const Button: ButtonType = ({
  content,
  children,
  variant = "filled",
  extraStyle,
  ...rest
}: {
  content: string
  variant: "filled" | "empty"
  children?: ReactNode
  extraStyle?: string
}) => {
  return (
    <button
      type="submit"
      className={` ${
        variant === "empty"
          ? "bg-sec_btn_bg text-sec_btn_text hover:ring-[3px]"
          : "text-white bg-pri_btn"
      } gap-5 py-3 px-10 h-14 w-full rounded-full font-medium text-base hover:scale-[1.015] duration-300 focus-visible:shadow-xl outline-none flex items-center justify-center ${extraStyle}`}
      {...rest}
    >
      {content}
      <>{children}</>
    </button>
  )
}

export default Button
