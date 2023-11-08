export const TURNS = {
  X: '×',
  O: '⚪'
}

export const ICON_X = () => {
  return (
    <svg className="h-16 w-16 text-[#46e3ae]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
  )
}

export const ICON_O = () => {
  return (
    <svg className="h-16 w-16 text-[#b91c51] transition duration-1000" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" /></svg>
  )
}

export const WINNER_LINES = [
  [0, 1, 2], // Primera fila
  [3, 4, 5], // Segunda fila
  [6, 7, 8], // Tercera fila
  [0, 3, 6], // Primera columna
  [1, 4, 7], // Segunda columna
  [2, 5, 8], // Tercera columna
  [0, 4, 8], // Diagonal 1
  [2, 4, 6] // Diagonal 2
]