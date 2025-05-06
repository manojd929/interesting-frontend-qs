import React, { useState } from 'react'
import './style.css'
import { calculateWinner } from './utils/util'

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

    const onResetGame = () => {
        setBoard(new Array(boardSize * boardSize).fill(''))
        setIsX(true)
        winner = null
    }

    if (winner) {
        return (
            <div className="result">
                ${winner} wins!!
            </div>
        )
    }

    return (
        <div>
            <div className='board'>
                {board.map((cell, index) => (
                    <Cell
                        key={`cell-${index}`}
                        value={cell}
                        onClickCell={() => onClickCell(index)}
                    />
                ))}
            </div>
            <div className='reset-container'>
                <button onClick={() => onResetGame()}>Reset</button>
            </div>
        </div>
    )
}

export default Board
