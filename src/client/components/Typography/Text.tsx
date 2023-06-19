import React from "react"

type TypographyProps = React.FunctionComponent<
  React.HTMLAttributes<HTMLParagraphElement> & {
    content: string
    size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"
    font: "bold" | "semibold" | "medium" | "regular"
    children?: React.ReactNode
    extraStyle?: string
  }
>

const Text: TypographyProps = ({
  content,
  size,
  font = "regular",
  children,
  extraStyle,
  ...rest
}: {
  content: string
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"
  font: "bold" | "semibold" | "medium" | "regular"
  children?: React.ReactNode
  extraStyle?: string
}) => {
  return (
    <p
      className={`text-primary_dark dark:text-primary text-${size} font-${font} flex items-center gap-3 capitalize ${extraStyle}`}
      {...rest}
    >
      {content}
      {children}
    </p>
  )
}

export default Text
