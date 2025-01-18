const useATM = () => {
  const getPinInfo = (itemKey: string) => JSON.parse(localStorage.getItem(itemKey) as any)

  const handleOperation = (itemKey: string, itemValue: any) => {
    if (localStorage.getItem(itemKey) && itemValue !== JSON.parse(localStorage.getItem(itemKey) as any).balance) {
      localStorage.setItem(itemKey, JSON.stringify({
        name: JSON.parse(localStorage.getItem(itemKey) as any).name,
        card: JSON.parse(localStorage.getItem(itemKey) as any).card,
        balance: itemValue,
      }))
    }
  }

  const initializePin = (itemKey: string, itemValue: any) => {
    // Verify pin hasn't been used before
    if (!localStorage.getItem(itemKey)) localStorage.setItem(itemKey, JSON.stringify(itemValue))
  }
  return { getPinInfo, initializePin, handleOperation }
}

export default useATM