export const saveGameToStorage = ({board, newTurn})=>{
    // guardar partida
    window.localStorage.setItem('board', JSON.stringify(board))
    window.localStorage.setItem('turn', newTurn)
    // revisar si hay ganador
}

export const resetGameStorage = () =>{
    Window.localStorage.removeItem('board')
    Window.localStorage.removeItem('turn')
}