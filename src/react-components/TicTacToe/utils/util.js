const getWinningCombination = (boardSize = 1) => {
    if (boardSize <= 1) {
        return null
    }


    const combinations = []

    // Rows
    for (let row = 0; row < boardSize; row++) {
        const line = []
        for (let col = 0; col < boardSize; col++) {
            line.push(row * boardSize + col)
        }
        combinations.push(line)
    }


    // Columns
    for (let col = 0; col < boardSize; col++) {
        const line = []
        for (let row = 0; row < boardSize; row++) {
            line.push(row * boardSize + col)
        }
        combinations.push(line)
    }


    // 3. Main Diagonal
    const diagonal = [];
    for (let i = 0; i < boardSize; i++) {
        diagonal.push(i * (boardSize + 1));
    }
    combinations.push(diagonal);

    // 4. Anti-Diagonal
    const antiDiagonal = [];
    for (let i = 1; i <= boardSize; i++) {
        antiDiagonal.push(i * (boardSize - 1));
    }
    combinations.push(antiDiagonal);

    return combinations
}

const calculateWinner = (board, winningCombinations) => {
    for (const line of winningCombinations) {
        const [first, ...rest] = line;
        if (board[first] && rest.every((i) => board[i] === board[first])) {
            return `Player ${board[first]} Wins!!`;
        }
    }

    if (board.every((i) => board[i] === 'X' || board[i] === 'O')) {
        return "It's a Draw"
    }
    return null
}

export {
    getWinningCombination,
    calculateWinner,
}
