import { getInputDirection } from './input';

let snakeBody = [{ x: 10, y: 10 }];

export const updateSnake = () => {
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
};

export const drawSnake = () => {
  const gameBoard = document.getElementById('game-board');
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');

    if (gameBoard) {
      gameBoard.append(snakeElement);
    }
  });
};
