export default function ButtonReset({ children, resetGame }: any) {

    return (
        <button className='my-10 border-2 p-4 text-base rounded-2xl hover:bg-white hover:text-black font-bold transition
         duration-500 hover:scale-[1.2] hover:-translate-y-2' onClick={resetGame}>{children}</button>
    )
}