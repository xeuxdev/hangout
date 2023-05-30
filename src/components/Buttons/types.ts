import React, { HTMLAttributes, ReactNode } from "react"

export interface GeneralButtonType {
  content: string
  link: string
  variant: "filled" | "empty"
  children?: ReactNode
  extraStyles?: string
}

export type LinkButtonProps = React.FunctionComponent<
  React.HTMLAttributes<HTMLButtonElement> & GeneralButtonType
>

// export interface EmptyButton extends GeneralButtonType {}
export type ButtonType = React.FunctionComponent<
  React.HTMLAttributes<HTMLButtonElement> & Omit<GeneralButtonType, "link">
>
