"use client"

import { useEffect, useState } from "react"
import ButtonReset from "../components/ButtonReset"
import Square from "../components/Square"
import { TURNS } from "../constants/constants"
import WinnerModal from "../components/WinnerModal"
import confetti from "canvas-confetti"
import { checkWinner } from "../logic/game"

export default function Home() {
    const [board, setBoard] = useState<any>(Array(9).fill(null))
  
    const [turn, setTurn] = useState(TURNS.X)
  
    const [winner, setWinner] = useState<string | null | boolean>(null) // null, X, O
  
    const resetGame = () => {
      setBoard(Array(9).fill(null))
      setTurn(TURNS.X)
      setWinner(null)
      if (typeof window !== 'undefined') {
        window.localStorage.removeItem('board')
        window.localStorage.removeItem('turn')
      }
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
  
    useEffect(() => {
      const boardFromLocalStorage = window.localStorage.getItem('board')
      setBoard(boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : board)
  
      const turnFromLocalStorage = window.localStorage.getItem('turn')
      setTurn(turnFromLocalStorage ? turnFromLocalStorage : turn)
    }, [])
  
    return (
      <main className="flex flex-col justify-center items-center h-[100vh] w-[100vw] bg-[#2e2e2e] text-4xl md:text-4xl">
        <h1 className='mb-10 decoration-[#46B2F9] underline underline-offset-8'>Tic Tac Toe</h1>
        <ButtonReset resetGame={resetGame}>Reset game</ButtonReset>
        <div className='grid grid-cols-3 grid-cols-3 font-light gap-2 bg-gradient-to-r from-[#b6bfff] via-[#5d61ff] to-[#00d4ff] rounded-xl'>
          {
            board.map((square: String, index: number) => {
              return (
                <div key={index} className='bg-[#2e2e2e] h-[10vh] w-[18vw] max-w-[130px] flex justify-center items-center'>
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