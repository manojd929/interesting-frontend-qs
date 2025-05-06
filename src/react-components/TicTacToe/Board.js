import React, { useState } from 'react'
import './style.css'
import { calculateWinner } from './utils/util'

const getBoardStyle = (boardSize) => ({
    width: `${60 * boardSize}px`,
    height: `${60 * boardSize}px`,
    gridTemplateColumns: `repeat(${boardSize}, 1fr)`,
    gridTemplateRows: `repeat(${boardSize}, 1fr)`
})

const Cell = ({ value, onClickCell }) => {
    return (
        <div className="cell" onClick={onClickCell}>
            {value}
        </div>
    )
}

const Board = (props) => {
    const { size: boardSize, winningCombinations } = props
    const [board, setBoard] = useState(new Array(boardSize * boardSize).fill(''))
    const [isX, setIsX] = useState(true)

    let winner = calculateWinner(board, winningCombinations)

    const onClickCell = (index) => {
        if (board[index] || winner) {
            return
        }
        const newBoard = board.slice()
        newBoard[index] = isX ? 'X' : 'O'
        setBoard(newBoard)
        setIsX((prevState) => !prevState)
    }

    if (winner) {
        return (
            <div className="result">
                {`Player '${winner}' wins!!`}
            </div>
        )
    }

    return (
        <div>
            <div className='board' style={getBoardStyle(boardSize)}>
                {board.map((cell, index) => (
                    <Cell
                        key={`cell-${index}`}
                        value={cell}
                        onClickCell={() => onClickCell(index)}
                    />
                ))}
            </div>
        </div >
    )
}

export default Board
