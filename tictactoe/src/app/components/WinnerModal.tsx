"use client"

import ButtonReset from "./ButtonReset";
import Square from "./Square";

export default function WinnerModal({ winner, resetGame }: any) {
  const winnerText = winner ? 'Winner:' : 'Draw'

  return (

    <section className='absolute grid place-items-center w-[100vw] h-[100vh] bg-[#111]/70'>
      <div className='flex flex-col gap-20 border-2 border-gray-100 rounded-3xl items-center justify-center bg-[#1e1e1e] h-[600px] w-[350px]'>
        <h2 className="underline underline-offset-8 decoration-[#46B2F9]">{winnerText}</h2>
        <header>
          {winner && (
            <div className='rounded-xl bg-gradient-to-r from-[#b6bfff]/60 via-[#5d61ff]/60 to-[#00d4ff]/60 flex items-center justify-center w-[150px] h-[150px]'>
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