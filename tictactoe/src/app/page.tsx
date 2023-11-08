"use client"

import Square from './components/Square'
import { useState } from 'react'
import ButtonReset from './components/ButtonReset'
import { checkWinner } from './logic/game'
import { TURNS } from './constants/constants'
import WinnerModal from './components/WinnerModal'
import confetti from 'canvas-confetti'

export default function Home() {
  const [board, setBoard] = useState<any>(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board')
    return (boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null))
   })

  const [turn, setTurn] = useState(() => {

    const turnFromLocalStorage = window.localStorage.getItem('turn')
    return (turnFromLocalStorage ? turnFromLocalStorage : TURNS.X)
  })

  const [winner, setWinner] = useState<string | null | boolean>(null) // null, X, O

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index: any) => {

    // Si el cuadrado ya está ocupado, no se hace nada
    if (board[index] !== null || winner) {
      return
    }

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newWinner = checkWinner(newBoard)

    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (!newBoard.includes(null)) {
      setWinner(false)
    }

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

  }

  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen bg-[#2e2e2e] text-4xl">
      <h1 className='mb-10 decoration-[#46B2F9] decoration-[3] decoration underline underline-offset-8'>Tic tac Toe</h1>
      <ButtonReset resetGame={resetGame}>Reset game</ButtonReset>
      <div className='grid grid-cols-3 grid-cols-3 font-light'>
        {
          board.map((square: String, index: number) => {
            return (
              <div key={index} className='border-4 w-[130px] h-[130px] flex justify-center items-center'>
                <Square index={index} updateBoard={updateBoard} isInTable={true}>{square}
                </Square>
              </div>
            )
          })
        }
      </div>
      <section className='flex m-8'>
        <Square isSelected={turn === TURNS.X}  isInTable={false}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}  isInTable={false}>{TURNS.O}</Square>
      </section>

      {
        winner !== null && (
          <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
        )
      }
    </main>
  )
}
