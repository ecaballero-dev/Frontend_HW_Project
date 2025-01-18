import { UserInfo } from '../types'
const useATM = () => {
  const getPinInfo = (itemKey: string) => JSON.parse(localStorage.getItem(itemKey) as string)

  const handleOperation = (itemKey: string, itemValue: number) => {
    if (localStorage.getItem(itemKey) && itemValue !== JSON.parse(localStorage.getItem(itemKey) as string).balance) {
      localStorage.setItem(itemKey, JSON.stringify({
        name: JSON.parse(localStorage.getItem(itemKey) as string).name,
        card: JSON.parse(localStorage.getItem(itemKey) as string).card,
        balance: itemValue,
      }))
    }
  }

  const initializePin = (itemKey: string, itemValue: UserInfo) => {
    // Verify pin hasn't been used before
    if (!localStorage.getItem(itemKey)) localStorage.setItem(itemKey, JSON.stringify(itemValue))
  }
  return { getPinInfo, initializePin, handleOperation }
}

export default useATM