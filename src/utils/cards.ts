const CARDS = [
  'PLUS',
  'MAESTRO',
  'STAR',
  'MASTERCARD',
  'VISA',
  'STAR'
]

export const getRandomCard = () => CARDS[Math.floor(Math.random() * CARDS.length)]