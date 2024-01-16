import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'

function App() {
  
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) 
  // Null = no hay ganador, False hay empate

  

  const resetGame = ()=>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
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
    const newWinner = checkWinnerFrom(newBoard)
    
    if (newWinner){
      confetti()
      setWinner(newWinner)
      
    } else if(checkEndGame(newBoard)){
      setWinner(false)
    }// check if game is over

    // setWinner(newWinner) 
      // Las actualizaciones de estados en React son Asincronos (Async)
      // Por lo que al realizar tareas al mismo tiempo sin necesidad de que esta termine
      // Causa que la alerta salte antes de que el estado del ganador sea actualizado
      // Lo que da como resultado que al finalizar el juego, el estado siga siendo null
      // alert(`El ganador es ${newWinner}`)
  }

  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className='game'>
        {
          board.map((_,index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
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
      
      <WinnerModal resetGame = {resetGame} winner = {winner}></WinnerModal>
      
    </main>
  )    
}

export default App
