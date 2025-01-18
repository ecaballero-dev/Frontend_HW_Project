import { type ChangeEvent, useState } from 'react'
import CardLogos from '../assets/creditcard_sprite.png'
import ATMSign from '../assets/atm_sign.png'
import Graffiti from '../assets/graffiti.png'
import StickerGraffiti from '../assets/sticker_graf.png'
import Systems from '../assets/systems.png'
import Screen from './components/Screen.tsx'
import useATM from './hooks/useATM.ts'
import CardSelector from './components/CardSelector'
import './App.css'

function App() {
  const { getPinInfo } = useATM()
  const [pin, setPin] = useState('')
  const [card, setCard] = useState('')
  const handlePinInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (/^\d+$/.test(e.target.value) || !e.target.value) setPin(e.target.value)
  }
  const handleResetPin = () => setPin('')

  return (
    <main className="bg-pink-100 flex flex-col gap-3 justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-atm-sign rounded-xl px-8 py-4 relative flex justify-center">
          <img src={ATMSign} alt="ATM Sign" className="w-[80%] h-[200px]"/>
          <img src={Graffiti} alt="Graffiti on ATM Sign" className="absolute top-1/2 left-1/2 -translate-y-1/2 h-[80px]"/>
        </div>
        <div
          className="flex flex-col gap-3 justify-start items-center min-h-[800px] bg-atm-body min-w-[500px] max-w-[500px] px-4 pt-4 border-t-8 border-t-atm-shadow">
          <div className="relative h-[20px]">
            <img src={CardLogos} alt="Credit Card Logos Sprite"
                 className="h-[50px]"/>
            {getPinInfo(pin) ? <CardSelector card={card} /> : (
              <div
                className={`bg-gradient-to-r from-0% to-0% from-transparent to-atm-body/80 z-10 w-full h-[25px] top-0 absolute`}/>
            )}
          </div>
          <Screen pin={pin} handlePinInput={handlePinInput} resetPin={handleResetPin} handleCard={(card: string) => setCard(card)} />
          <div className="flex flex-row justify-between items-start w-[70%] relative">
            <img src={StickerGraffiti} alt="ATM Stricker with Graffiti" className="-top-7 -left-12 absolute pointer-events-none"/>
            <img src={Systems} alt="ATM Brand" className="absolute right-0"/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
