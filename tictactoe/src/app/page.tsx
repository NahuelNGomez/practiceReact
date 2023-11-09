"use client"

import { arrayBuffer } from 'stream/consumers'
import GameSelector from './components/GameSelector'

const createGame = ({name, link, icon}: any) =>{
  return {
    name: name,
    link: link,
    icon: icon,
  }
}


let games: { name: any; link: any; icon: any }[] = []

games.unshift(createGame({name: "Tic Tac Toe", link: "/tictactoe",
              icon: "https://img.icons8.com/ios/452/tic-tac-toe.png"}))
              
export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-[100vh] w-[100vw] bg-[#2e2e2e] text-4xl md:text-4xl">
      <h1 className= "mb-10 decoration-[#46B2F9] underline underline-offset-8">Bienvenido</h1>
      <section className='grid grid-cols-1 lg:grid-cols-3 justify-center items-center place-items-center'>
        {
          games.map((game, index) => {
            return (
              <div className='p-3' key={index}>
              <GameSelector name={game.name} link={game.link} icon={game.icon}/>
              </div>
            )
          })
        }
      </section>

    </main>
  )
}
