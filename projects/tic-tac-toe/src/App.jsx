import { useState } from 'react'
import './App.css'

const TURNS = {
  X: 'x',
  O: 'o'
}



const Square = ({ children, isSelected, updateBoard, index}) => {
  
  const className = `square ${isSelected ? 'is-selected': ''}`

  const handleClick= () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick}  className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function App() {
  
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) 
  // Null = no hay ganador, False hay empate

  const checkWinner = (boardToCheck) => {
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

  const updateBoard = (index) => {
    // no actualizamos esta pos si ya tiene algo
    if (board[index] || winner) return
    // -------
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiamos el turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner){
      setWinner((prevWinner)=>{
        console.log(`El ganador es ${newWinner}, el anterior ganador era ${prevWinner}`)
        return newWinner
      })
      // setWinner(newWinner) 
      // Las actualizaciones de estados en React son Asincronos (Async)
      // Por lo que al realizar tareas al mismo tiempo sin necesidad de que esta termine
      // Causa que la alerta salte antes de que el estado del ganador sea actualizado
      // Lo que da como resultado que al finalizar el juego, el estado siga siendo null
      // alert(`El ganador es ${newWinner}`)
    }
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {
          board.map((_,index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn == TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )    
}

export default App
