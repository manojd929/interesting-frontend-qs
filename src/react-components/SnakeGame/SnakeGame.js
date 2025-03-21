import React from 'react';
import './game.css';
import {
  updateSnake,
  drawSnake,
  getSnakeHead,
  isSnakeIntersecting,
} from './snake.js';
import { updateFood, drawFood } from './food.js';
import { isOutsideGrid } from './grid';

const REFRESH_TIME = 2; // 2 times per second
let lastRenderTime = 0;
let GAME_OVER = false;

const SnakeGame = () => {
  const [displayGame, setDisplayGame] = React.useState(false);

  const updateGame = () => {
    if (GAME_OVER) {
      setDisplayGame(false);
      return;
    }

    updateSnake();
    updateFood();
    checkGameOver();
  };

  const drawGame = () => {
    const gameBoard = document.getElementById('game-board');
    if (gameBoard) {
      gameBoard.innerHTML = '';
      drawSnake();
      drawFood();
    }
  };

  const checkGameOver = () => {
    GAME_OVER = isOutsideGrid(getSnakeHead()) || isSnakeIntersecting();
  };

  const game = (currentTime) => {
    window.requestAnimationFrame(game);

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / REFRESH_TIME) {
      return;
    }
    lastRenderTime = currentTime;

    updateGame();
    drawGame();
  };

  const playGame = () => {
    setDisplayGame(true);
    window.requestAnimationFrame(game);
  };

  return (
    <>
      <button onClick={() => playGame()}>Play Game</button>
      {displayGame && (
        <div id="container">
          <div id="game-board"></div>
        </div>
      )}
    </>
  );
};

export default SnakeGame;
