import Link from "next/link";
import Image from "next/image"

export default function GameSelector({ name, link, icon, key }: any) {

    return (
        <div className="border-2 p-4 text-xl flex flex-wrap space-between rounded-xl min-w-[200px]">
            <Image src="/images/tictactoe.png" alt={"tictactoe icon"} width={40} height={50} ></Image>
            <strong className="p-2 ">{name}</strong>
            <Link href="/tictactoe">
                <button className=" border rounded-xl px-4 py-2">jugar</button>
            </Link>
        </div>

    )
}