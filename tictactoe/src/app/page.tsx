'use client'
import Image from 'next/image'
import Square from './components/Square'
import { useState } from 'react'
import ButtonReset from './components/ButtonReset'

const TURNS = {
  X: 'X',
  O: 'O'
}

const WINNER_LINES = [
  [0, 1, 2], // Primera fila
  [3, 4, 5], // Segunda fila
  [6, 7, 8], // Tercera fila
  [0, 3, 6], // Primera columna
  [1, 4, 7], // Segunda columna
  [2, 5, 8], // Tercera columna
  [0, 4, 8], // Diagonal 1
  [2, 4, 6] // Diagonal 2
]

export default function Home() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const [winner, setWinner] = useState<string | null | boolean>(null) // null, X, O

  const checkWinner = (boardToCheck: any) => {
    for (const line of WINNER_LINES) {
      const [a, b, c] = line
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
        setWinner(boardToCheck[a])
        console.log("Partida terminada, gana " + boardToCheck[a])
        return boardToCheck[a]
      }
    }
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
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
      setWinner(newWinner)
    } else if(!newBoard.includes(null)) {
      setWinner(false)
    }

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    console.log("Se debería actualizar el board ")
  }

  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen bg-[#2e2e2e] text-4xl">
      <h1 className='mb-10 decoration-[#46B2F9] decoration-[3] decoration underline underline-offset-8'>Tic tac Toe</h1>
      <ButtonReset resetGame= {resetGame}>Reset game</ButtonReset>
      <div className='grid grid-cols-3 grid-cols-3 font-light'>
        {
          board.map((_, index) => {
            return (
              <div className='border-4 w-[130px] h-[130px] flex justify-center items-center'>
                <Square key={index} index={index} updateBoard={updateBoard}>{board[index]}
                </Square>
              </div>
            )
          })
        }
      </div>
      <section className='flex m-8'>
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {
        winner !== null && (
          <section className='absolute grid place-items-center w-[100vw] h-[100vh] bg-[#111]/70'>
            <div className='flex flex-col gap-20 border-4 border-gray-100 rounded-3xl items-center justify-center bg-[#1e1e1e] h-[600px] w-[620px]'>
              <h2>{
                winner === false ? 'Draw' : 'Winner:'}</h2>
              <header>
                {winner && (
                  <div className='border-4 flex items-center justify-center w-[150px] h-[150px]'>
                    <Square>{winner}</Square>
                  </div>
                )}
              </header>

              <footer>
              <ButtonReset resetGame= {resetGame}>Reset game</ButtonReset>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}
