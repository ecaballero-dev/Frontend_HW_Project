import { useEffect, useState } from 'react'
import type { ChangeEvent } from 'react'
import Button from './Button'
import useATM from '../hooks/useATM'
import Steps from './Steps'
import type { Step } from '../types'
import { getRandomName } from '../utils/names'
import { getRandomCard } from '../utils/cards'

interface Props {
  balance?: number;
  pin: string;
  handlePinInput: (event: ChangeEvent<HTMLInputElement>) => void;
  resetPin: () => void;
  handleCard: (card: string) => void;
}

const Screen = (props: Props) => {
  const {
    pin,
    handlePinInput,
    resetPin,
    handleCard
  } = props
  const { initializePin, handleOperation, getPinInfo } = useATM()
  const [balance, setBalance] = useState('')
  const [name, setName] = useState('')
  const [alert, setAlert] = useState('')
  const [input, setInput] = useState('')
  const [step, setStep] = useState<Step>('INITIAL')
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (/^\d+$/.test(e.target.value) || !e.target.value) {
      setInput(e.target.value)
      handlePinInput(e)
    }
  }

  useEffect(() => {
    if (input && input.length === 4) {
      initializePin(input, {
        balance: Math.floor(Math.random() * 1000),
        name: getRandomName(),
        card: getRandomCard()
      })
      setBalance(getPinInfo(input).balance)
      setName(getPinInfo(input).name)
      handleCard(getPinInfo(input).card)
      setStep('ATM')
    }
  }, [input])

  useEffect(() => {
    if (step === 'PINPAD') {
      setInput('')
    }
  }, [step])

  const handleExitATM = () => {
    setStep('INITIAL')
    setInput('')
    setAlert('')
    resetPin()
  }

  const handleBalance = (operation: number) => setBalance((prevState) => {
    handleOperation(pin, prevState + operation)
    return prevState + operation
  })

  const handleWithdraw = (amount: number) => {
    if (step === 'WITHDRAW' && parseInt(balance) > amount) {
      handleBalance(-amount)
      setAlert('')
    } else {
      setAlert('Not enough funds')
    }
  }

  return (
    <div className="flex flex-row items-end justify-center min-w-[460px] w-full gap-1">
      <div className="grid grid-rows-4 gap-3">{/*flex flex-col gap-2*/}
        <Button right/>
        <Button right onClick={() => {
          if (step === 'DEPOSIT') handleBalance(50)
          if (step === 'WITHDRAW') handleWithdraw(50)
        }}/>
        <Button right onClick={() => {
          if (step === 'ATM') setStep('WITHDRAW')
          if (step === 'WITHDRAW') handleWithdraw(250)
          if (step === 'DEPOSIT') handleBalance(250)
        }}/>
        <Button right onClick={() => {
          if (step === 'ATM') setStep('DEPOSIT')
          if (step === 'WITHDRAW') handleWithdraw(1000)
          if (step === 'DEPOSIT') handleBalance(1000)
        }}/>
      </div>
      <div className="bg-atm-screen h-64 min-w-[70%] border-atm-screen-border border-8 relative grid grid-rows-2">
        {step === 'INITIAL' && <p className="h-16 font-extrabold text-4xl text-wrap pt-6">Welcome to the ATM</p>}
        {step === 'ATM' && (
          <div className="h-16">
            <p className="font-extrabold text-2xl text-wrap pt-6">Hi {name}!</p>
            <p className="font-extrabold text-xl text-wrap pt-1">Please make a choice...</p>
          </div>
        )}
        {alert && <div
          className="absolute bg-red-400 border-2 border-red-800 text-xs px-4 py-2 rounded top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">{alert}</div>}
        <Steps step={step} input={input} handleInput={handleInput} balance={balance} />
      </div>
      <div className="grid grid-rows-4 gap-3">
        <Button
          right={false}
          onClick={() => {
          if (step === 'DEPOSIT') handleBalance(20)
          if (step === 'WITHDRAW') handleWithdraw(20)
        }}/>
        <Button
          right={false}
          onClick={() => {
            if (step === 'ATM') handleExitATM()
            if (step === 'DEPOSIT') handleBalance(100)
            if (step === 'WITHDRAW') handleWithdraw(100)
          }}
        />
        <Button
          right={false}
          onClick={() => {
          if (step === 'ATM') setStep('BALANCE')
          if (step === 'DEPOSIT') handleBalance(500)
          if (step === 'WITHDRAW') handleWithdraw(500)
        }}/>
        <Button
          right={false}
          onClick={() => {
            if (step !== 'PINPAD') setStep('PINPAD')
            if (step !== 'PINPAD' && step !== 'INITIAL' && step !== 'ATM') setStep('ATM')
            setAlert('')
         }}
        />
      </div>
    </div>
  )
}

export default Screen