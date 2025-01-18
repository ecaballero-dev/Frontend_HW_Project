import type { ButtonHTMLAttributes } from 'react'
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  right: boolean;
}
const Button = (props: Props) => {
  const { right } = props
  return (
    <button
      className={`relative bg-atm-screen-button h-8 w-16 after:content-['-'] after:absolute ${right ? 'after:-right-[7px]' : 'after:-left-[7px]'} after:bottom-[3px] after:white after:text-black after:z-10`}
      {...props}
    />
  )
}

export default Button