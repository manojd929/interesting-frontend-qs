import React from 'react'
import Board from './Board'
import './style.css'
import { getWinningCombination } from './utils/util'

const TicTacToe = () => {
    const [size, setSize] = React.useState(3)
    const [showBoard, setShowBoard] = React.useState(false)
    const [winningCombinations, setWinningCombinations] = React.useState(null)

    const onChangeSize = (value) => {
        setSize(value)
    }

    const checkGridSize = () => {
        if (size > 0) {
            setWinningCombinations(getWinningCombination(size))
            setShowBoard(!showBoard)
        }
    }

    const getInputComp = () => (
        <div className='form'>
            <div>Enter Grid Size: </div>
            <div>
                <input
                    type="number"
                    value={size}
                    onChange={(e) => onChangeSize(e.target.value)}
                />
            </div>
            <div>
                <button onClick={() => checkGridSize()}>Submit</button>
            </div>
        </div>
    )
    return (
        <div className='game-container'>
            <h1 className='header'>Tic Tac Toe</h1>
            {showBoard ? <Board size={size} winningCombinations={winningCombinations} /> : getInputComp()}
        </div>
    )
}

export default TicTacToe
