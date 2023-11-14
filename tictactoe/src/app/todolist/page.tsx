"use client"

import { useState } from "react"

const initialTasks = [
    {
        id: 1,
        name: 'tarea1'
    },
    {
        id: 2,
        name: 'tarea2'
    },
    {
        id: 3,
        name: 'tarea3'
    },
    {
        id: 4,
        name: 'tarea4'
    },
]

export default function ToDoList() {
    const [tasks, setTasks] = useState<any>(initialTasks)

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
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
            setTasks(tasks.filter((task: any) => task.id !== id))
    }


    return (
        <>
            <h1>Lista de tareas</h1>
            <section className="grid grid-cols-4 items-center justify-center w-[100vw] h-[80vh] px-20">
                <form className="border bg-[#2e2e2e] flex flex-wrap justify-center items-center h-[300px]" onSubmit={handleSubmit}>
                    <label className="p-2">Escribe tu tarea:
                        <input className="m-2 text-black" type="text" id="tarea" name="tarea" />
                    </label>
                    <button className="border p-2 rounded-xl bg-[#111111]">Enviar</button>
                </form>
                <aside className="border bg-[#4e4e4e] col-span-3 h-[300px]">
                    Apartado de tareas
                    <ul>
                        <li>Tarea1</li>
                        <li>Tarea2</li>
                        <li>Tarea3</li>
                        <li>Tarea4</li>
                    </ul>
                    {
                        tasks.map((task: any) => {
                            return (
                                <>
                                    <li key={task.id} className="inline p-2">{task.name}</li>
                                    <button className="border" onClick={handleRemoveElement(task.id)}> remove</button>
                                </>
                            )
                        })
                    }
                </aside>
            </section>
        </>
    )
}