import React, { ReactNode } from 'react';
import { TURNS, ICON_O, ICON_X } from '../constants/constants';


export default function Square({ children, isSelected, isInTable, updateBoard, index }: any) {

    const handlerClick = () => {
        updateBoard(index)
    }
    const handlerDummy = () => {
    }
    let styles = isSelected ? 'bg-gradient-to-r from-[#b6bfff]/60 via-[#5d61ff]/60 to-[#00d4ff]/60 ' : ''
    styles = styles + ' p-12 rounded-3xl text-6xl'
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