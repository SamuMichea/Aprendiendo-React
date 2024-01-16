import { WINNER_COMBOS } from "../constants"

export const checkWinnerFrom = (boardToCheck) => {
    //revisamos todas las combinaciones posibles
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo 
      if (
        boardToCheck[a] && 
        boardToCheck[a] == boardToCheck[b] && 
        boardToCheck[a] == boardToCheck[c] 
        ) {
          return boardToCheck[a]
        }
    }
    // no hay ganador
    return null
  }

export const checkEndGame = (newBoard) => {
    return newBoard.every((Square) => Square != null)
  }