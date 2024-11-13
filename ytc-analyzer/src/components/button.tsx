import type { ComponentProps, FC } from "react"

interface Props extends ComponentProps<"button"> {}
export const Button: FC<Props> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>
}
