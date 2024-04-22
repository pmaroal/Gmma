import { IconProps } from '@/interfaces/icon-props'

interface BurgerProps extends IconProps {
  open?: boolean
  color?: string
  black?: boolean
}

export default function Burger(props: BurgerProps) {
  return (
    <div className={`flex h-fit w-full flex-col gap-2 ${props.className}`}>
      <div
        className={`onHover h-[0.5px] w-full ${
          props.open
            ? ' rotate-45 transform bg-black'
            : ` ${props.black ? 'bg-black' : 'bg-white'} `
        }`}
      ></div>
      <div
        className={`onHover h-[0.5px] w-full ${
          props.open
            ? ' -translate-y-[10px] -rotate-45 transform bg-black'
            : ` ${props.black ? 'bg-black' : 'bg-white'}`
        }`}
      ></div>
    </div>
  )
}
