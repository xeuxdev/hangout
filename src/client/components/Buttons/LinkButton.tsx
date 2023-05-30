import { ReactNode } from "react"
import { LinkButtonProps } from "./types"
import Link from "next/link"

const Button: LinkButtonProps = ({
  content,
  children,
  link,
  variant = "filled",
  extraStyle,
  ...rest
}: {
  content: string
  variant: "filled" | "empty"
  children?: ReactNode
  link: string
  extraStyle?: string
}) => {
  return (
    <Link
      href={`/${link}`}
      className={` ${
        variant === "empty"
          ? "bg-sec_btn_bg text-sec_btn_text hover:ring-[3px]"
          : "text-white bg-pri_btn"
      } gap-5 py-3 px-10 h-14 w-full rounded-full font-medium text-base hover:scale-[1.015] duration-300 focus-visible:shadow-xl outline-none flex items-center justify-center ${extraStyle}`}
      {...rest}
    >
      {content}
      <>{children}</>
    </Link>
  )
}

export default Button
