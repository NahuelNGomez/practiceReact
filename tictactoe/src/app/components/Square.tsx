import React, { ReactNode } from 'react';
import { TURNS, ICON_O, ICON_X } from '../constants/constants';


export default function Square({ children, isSelected, isInTable, updateBoard, index }: any) {

    const handlerClick = () => {
        updateBoard(index)
    }
    const handlerDummy = () => {
    }
    const styles = isSelected ? 'p-12 bg-gray-900 rounded-3xl text-6xl' : 'p-12 text-6xl'
    const handler = isInTable ? handlerClick : handlerDummy;

    const icon = () =>{
        return children === TURNS.X ? ICON_X() : children === TURNS.O ? ICON_O() : null
    }

    return (
        <div onClick={handler} className={styles}> 
            {icon()}
        </div>
    );
}