import React, { ReactNode } from 'react';


export default function Square({ children, isSelected, isInTable, updateBoard, index }: any) {

    const handlerClick = () => {
        updateBoard(index)
    }
    const handlerDummy = () => {
    }
    const styles = isSelected ? 'p-20 bg-blue-500 rounded-3xl text-6xl' : 'p-20 text-6xl'
    const handler = isInTable ? handlerClick : handlerDummy;

    return (
        <div onClick={handler} className={styles}> 
            {children}
        </div>
    );
}