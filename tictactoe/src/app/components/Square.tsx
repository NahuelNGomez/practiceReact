import React, { ReactNode } from 'react';


export default function Square({ children, isSelected, updateBoard, index } : any) {

    const handlerClick = () => {
        updateBoard(index)
    }
    const styles = isSelected ? 'p-20 bg-blue-500 rounded-3xl' : 'p-20'
    return (
        <div onClick={handlerClick} className= {styles}>
            {children}
        </div>
    );
}