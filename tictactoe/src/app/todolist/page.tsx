"use client"

import { useState } from "react"

const initialTasks = [
    {
        id: 1,
        name: 'Hacer las compras'
    },
    {
        id: 2,
        name: 'Limpiar la casa'
    },
    {
        id: 3,
        name: 'Estudiar'
    },
    {
        id: 4,
        name: 'Hacer deporte'
    },
]

export default function ToDoList() {
    const [tasks, setTasks] = useState<any>(initialTasks)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(tasks)
        const { elements } = event.currentTarget
        const input = elements.namedItem('tarea')
        const isInputValid = input instanceof HTMLInputElement

        if (!input || !isInputValid) return

        const tarea = {
            id: Date.now(),
            name: input.value
        }
        setTasks([...tasks, tarea])
    }

    const handleRemoveElement = (id: number) => () => {
        setTasks((prevItems: any[]) => { 
            return prevItems.filter(currentItem => currentItem.id !== id)
    }) }


    return (
        <section className="bg-[#2e2e2e] w-[100vw] h-[100vh] flex flex-col items-center justify-center">
            <h1 className="text-3xl text-[#aaaaff] underline">Lista de tareas</h1>
            <section className="grid grid-cols-4 items-center justify-center w-[100vw] h-[80vh] px-20">
                <form className=" bg-[#2e2e2e] flex flex-wrap justify-center items-center h-[300px]" onSubmit={handleSubmit}>
                    <label className="p-2">Escribe tu tarea:
                        <input className="m-2 text-black" type="text" id="tarea" name="tarea" />
                    </label>
                    <button className="border p-2 rounded-xl bg-[#111111]">Enviar</button>
                </form>
                <aside className=" rounded-3xl bg-[#4e4e4e] col-span-3 min-h-[300px] flex flex-col items-center justify-center">
                    <h2 className="text-lg text-[#aaaaff] underline">Apartado de tareas</h2>
                    {
                        tasks.length === 0 ? (
                            <article> <strong>No hay tareas Pendientes 😀</strong></article>
                        ) : (
                            tasks.map((task: any) => {
                                return (
                                    <article className="px-10 py-2 m-2 bg-[#3e3e3e] rounded-3xl w-[40em] flex flex-wrap justify-between">
                                        <li key={task.id} className="inline p-2">{task.name}</li>
                                        <button className="border bg-[#9e9e9e] text-gray-700 rounded-3xl px-4 hover:bg-[#2e2e2e] hover:text-[#9e9e9e] transition duration-300" onClick={handleRemoveElement(task.id)}> remove</button>
                                    </article>
                                )
                            }))
                    }
                    {


                    }
                </aside>
            </section>
        </section>
    )
}