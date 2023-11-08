"use client"

import ButtonReset from "./ButtonReset";
import Square from "./Square";
import Confetti from 'react-confetti'


export default function WinnerModal({ winner, resetGame }: any) {
  const winnerText = winner ? 'Winner:' : 'Draw'

  return (

    <section className='absolute grid place-items-center w-[100vw] h-[100vh] bg-[#111]/70'>
      <div className='flex flex-col gap-20 border-4 border-gray-100 rounded-3xl items-center justify-center bg-[#1e1e1e] h-[600px] w-[620px]'>
        <h2>{winnerText}</h2>
        <header>
          {winner && (
            <div className='border-4 flex items-center justify-center w-[150px] h-[150px]'>
              <Square>{winner}</Square>
            </div>
          )}
        </header>

        <footer>
          <ButtonReset resetGame={resetGame}>Reset game</ButtonReset>
        </footer>
      </div>
    </section>
  )
}