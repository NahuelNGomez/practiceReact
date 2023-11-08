import { WINNER_LINES } from "../constants/constants"

export const checkWinner = (boardToCheck: any) => {
    for (const line of WINNER_LINES) {
      const [a, b, c] = line
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
    return null
  }