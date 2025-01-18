const NAMES = [
  'Edward Stone',
  'Peter Parker',
  'John Johnson',
  'Charlie Parker',
  'Chuck Brown',
  'Joe Smith',
  'Jonathan Jones',
  'Louis Parker',
  'Danielle Smith',
  'Daniel Miller',
  'Elizabeth Rodriguez',
  'Elisa Williams',
  'Maggie Brown',
  'Diane Jones',
  'Ethan Johnson',
  'Jack Smith',
  'Tom Griffin',
]

export const getRandomName = () => NAMES[Math.floor(Math.random() * NAMES.length)]