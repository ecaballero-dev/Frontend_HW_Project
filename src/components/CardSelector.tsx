import { type ReactNode } from 'react'
interface Props {
  card: string;
}
const CardSelector = (props: Props) => {
  const { card } = props;
  const cards: {[card: string]: ReactNode} = {
    STAR: (
      <div
        className={`bg-gradient-to-r from-15% to-0% from-transparent to-atm-body/80 z-10 w-full h-[25px] top-0 absolute`}/>
    ),
    PULSE: (
      <>
        <div
          className={`bg-gradient-to-r from-15% to-15% to-transparent from-atm-body/80 z-10 w-full h-[25px] top-0 absolute`}/>
        <div
          className={`bg-gradient-to-l from-65% to-0% to-transparent from-atm-body/80 z-10 w-full h-[25px] top-0 absolute`}/>
      </>
    ),
    MAESTRO: (
      <>
        <div
          className={`bg-gradient-to-r from-35% to-35% to-transparent from-atm-body/80 z-10 w-full h-[25px] top-0 absolute`}/>
        <div
          className={`bg-gradient-to-l from-45% to-0% to-transparent from-atm-body/80 z-10 w-full h-[25px] top-0 absolute`}/>
      </>
    ),
    MASTERCARD: (
      <>
        <div
          className={`bg-gradient-to-r from-55% to-55% to-transparent from-atm-body/80 z-10 w-full h-[25px] top-0 absolute`}/>
        <div
          className={`bg-gradient-to-l from-30% to-0% to-transparent from-atm-body/80 z-10 w-full h-[25px] top-0 absolute`}/>
      </>
    ),
    PLUS: (
      <>
        <div
          className={`bg-gradient-to-r from-70% to-70% to-transparent from-atm-body/80 z-10 w-full h-[25px] top-0 absolute`}/>
        <div
          className={`bg-gradient-to-l from-15% to-0% to-transparent from-atm-body/80 z-10 w-full h-[25px] top-0 absolute`}/>
      </>
    ),
    VISA: (
      <div
        className={`bg-gradient-to-l from-10% to-0% from-transparent to-atm-body/80 z-10 w-full h-[25px] top-0 absolute`}/>
    )
  }
  return cards[card]
}

export default CardSelector