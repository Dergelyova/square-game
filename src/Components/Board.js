import React, { useEffect, useState } from "react";

export const Board = ({ mode, isStarted }) => {
    const [hovered, setHovered] = useState([]);
    const [board, setBoard] = useState([]);

    const squareWhite = 'square';
    const squareBlue = 'square-blue';

    useEffect(() => {
        setBoard(Array(mode.field).fill(0).map((row, i) => new Array(mode.field).fill(i)));
        setHovered([]);
    }, [mode])

    const handleHover = (e, row, col) => {
        if (isStarted) {
            if (e.target.className === squareWhite) {
                e.target.className = squareBlue;
                setHovered([`row ${row + 1} column ${col + 1}`, ...hovered,]);
            } else {
                e.target.className = squareWhite;
                setHovered(hovered.filter(str => str !== `row ${row + 1} column ${col + 1}`))
            }


        }
    }

    return (
        <div className="flex">
            <div className='board' style={{ gridTemplateColumns: `repeat(${mode.field}, fit-content(100%))`, gridTemplateRows: `repeat(${mode.field}, fit-content(100%))`, '--box-size': `${mode.field > 20 ? 20 : 40}px` }}>
                {board.map(col => (
                    col.map((row, i) => (
                        <div className={squareWhite} key={`${mode.name}${i}${row}`} onMouseEnter={(e) => handleHover(e, row, i)}></div>
                    ))
                ))
                }
            </div>
            <div className="print-block">
                <h2>Hover Squares</h2>
                {hovered.map((str, i) => <p key={i} className='print-squares'>{str}</p>)}
            </div>
        </div>
    )

}