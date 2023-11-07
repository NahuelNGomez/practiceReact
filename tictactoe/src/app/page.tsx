'use client'
import Image from 'next/image'
import Square from './components/Square'
import { useState } from 'react'

const TURNS = {
  X: 'X',
  O: 'O'
}

export default function Home() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index: any) => {

    // Si el cuadrado ya está ocupado, no se hace nada
    if (board[index] !== null) {
      return
    }

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    console.log("Se debería actualizar el board ")
  }

  return (
    <main className="flex flex-col justify-center items-center w-screen h-screen bg-[#2e2e2e] text-4xl">
      <h1 className='mb-10 decoration-[#46B2F9] decoration-[3] decoration underline underline-offset-8'>Tic tac Toe</h1>
      <div className='grid grid-cols-3 grid-cols-3 font-light'>
        {
          board.map((_, index) => {
            return (
              <div className='border-4 w-[200px] h-[200px]'>
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
    </main>
  )
}
