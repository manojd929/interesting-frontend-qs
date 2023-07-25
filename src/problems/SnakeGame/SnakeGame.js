import React from 'react';
import './game.css';
import { updateSnake, drawSnake } from './snake';
import { updateFood, drawFood } from './food';

const REFRESH_TIME = 2; // 2 times per second
let lastRenderTime = 0;

const SnakeGame = () => {
  const [displayGame, setDisplayGame] = React.useState(false);

  const updateGame = () => {
    updateSnake();
    updateFood();
  };

  const drawGame = () => {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    drawSnake();
    drawFood();
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
