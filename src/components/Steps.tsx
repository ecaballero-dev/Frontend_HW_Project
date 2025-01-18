import type { ChangeEvent, ReactNode } from 'react'
interface Props {
  input?: string;
  handleInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  balance?: string;
  step: string;
}
const Steps = (props: Props) => {
  const {
    input,
    balance,
    step,
    handleInput
  } = props
  const renderStep = (stepName: string) => ({
    PINPAD: (
      <div className="flex flex-col justify-center items-center gap-2 ">
        <div>Enter PIN</div>
        <input type="text" value={input} onChange={handleInput} autoFocus
               className="h-16 font-bold text-3xl w-[100px] text-center" maxLength={4} minLength={0}/>
      </div>
    ) as ReactNode,
    WITHDRAW: (
      <div className="absolute bottom-0 w-full">
        <div className="flex flex-col justify-center items-center gap-2">
          <p>How much would you like to withdraw?</p>
          <div>${balance}</div>
        </div>
        <div className="grid grid-cols-2 grid-rows-4 justify-around gap-4 px-2">
          <div/>
          <div className="text-end font-extrabold">$20</div>
          <div className="text-start font-extrabold">$50</div>
          <div className="text-end font-extrabold">$100</div>
          <div className="text-start font-extrabold">$250</div>
          <div className="text-end font-extrabold">$500</div>
          <div className="text-start font-extrabold">$1000</div>
          <div className="text-end font-extrabold">Go Back</div>
        </div>
      </div>
    ) as ReactNode,
    DEPOSIT: (
      <div className="absolute bottom-0 w-full">
        <div className="flex flex-col justify-center items-center gap-2 ">
          <p>How much would you like to deposit?</p>
          <div>${balance}</div>
        </div>
        <div className="grid grid-cols-2 grid-rows-4 justify-around gap-4 px-2">
          <div/>
          <div className="text-end font-extrabold">$20</div>
          <div className="text-start font-extrabold">$50</div>
          <div className="text-end font-extrabold">$100</div>
          <div className="text-start font-extrabold">$250</div>
          <div className="text-end font-extrabold">$500</div>
          <div className="text-start font-extrabold">$1000</div>
          <div className="text-end font-extrabold">Go Back</div>
        </div>
      </div>
    ) as ReactNode,
    BALANCE: (
      <div className="absolute bottom-0 w-full">
        <div className="flex flex-col justify-center items-center gap-2 ">
          <p>Your Balance</p>
          <div>${balance}</div>
        </div>
        <div className="grid grid-cols-2 grid-rows-4 justify-around gap-4 px-2">
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div className="text-end font-extrabold">Go Back</div>
        </div>
      </div>
    ) as ReactNode,
    ATM: (
      <div className="absolute bottom-0 w-full row-span-2">
        <div className="grid grid-cols-2 grid-rows-4 justify-around gap-4 px-2">
          <div/>
          <div/>
          <div/>
          <div className="text-end font-extrabold">Exit</div>
          <div className="text-start font-extrabold">Withdraw</div>
          <div className="text-end font-extrabold">Balance</div>
          <div className="text-start font-extrabold">Deposit</div>
          <div className="text-end font-extrabold">Re-Enter PIN</div>
        </div>
      </div>
    ) as ReactNode,
    INITIAL: (
      <div className="absolute bottom-0 w-full">
        <div className="grid grid-cols-2 grid-rows-4 justify-around gap-4 px-2">
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div/>
          <div className="text-end font-extrabold">Enter PIN</div>
        </div>
      </div>
    ) as ReactNode,
  }[stepName])
  return renderStep(step)
}

export default Steps