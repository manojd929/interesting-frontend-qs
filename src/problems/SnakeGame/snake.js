import { getInputDirection } from './input';

let snakeBody = [{ x: 10, y: 10 }];
const INCREMENT_SIZE = 1;

let newSegments = 0;

export const updateSnake = () => {
  addSegments();
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

export const expandSnake = () => {
  newSegments += INCREMENT_SIZE;
};

export const hasEaten = (foodPosition) => {
  return snakeBody.some((segment) => {
    return segment.x === foodPosition.x && segment.y === foodPosition.y;
  });
};

export const getSnakeHead = () => {
  return snakeBody[0];
};

export const isSnakeIntersecting = () => {
  const snakeHead = snakeBody[0];
  return snakeBody.slice(1).some((segment) => {
    return snakeHead.x === segment.x && snakeHead.y === segment.y;
  });
};

const addSegments = () => {
  for (let i = 0; i < newSegments; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegments = 0;
};
