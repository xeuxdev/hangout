const LilCard = ({
  content,
  variant = "filled",
  extraStyle,
  ...rest
}: {
  content: string
  variant: "filled" | "empty"
  extraStyle?: string
}) => {
  return (
    <button
      type="button"
      className={` ${
        variant === "empty"
          ? "text-sec_btn_text ring-[3px] ring-pri_btn"
          : "text-white bg-pri_btn"
      } gap-5 px-2 py-1 w-fit rounded-full font-medium text-sm grid place-items-center ${extraStyle}`}
      {...rest}
    >
      {content}
    </button>
  )
}

export default LilCard
