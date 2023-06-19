import React, { HTMLAttributes, ReactNode } from "react"

export interface GeneralButtonType {
  content: string
  link: string
  variant: "filled" | "empty"
  children?: ReactNode
  extraStyle?: string
}

export type LinkButtonProps = React.FunctionComponent<
  React.HTMLAttributes<HTMLButtonElement> & GeneralButtonType
>

// export interface EmptyButton extends GeneralButtonType {}
export type ButtonType = React.FunctionComponent<
  React.ButtonHTMLAttributes<HTMLButtonElement> &
    Omit<GeneralButtonType, "link">
>
