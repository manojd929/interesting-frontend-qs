import React, { useEffect } from 'react';
import './game.css';

let lastRenderTime = 0;
const REFRESH_TIME = 2; // 2 times per second

const update = () => {};

const draw = () => {};

const game = (currentTime) => {
  window.requestAnimationFrame(game);
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / REFRESH_TIME) return;
  lastRenderTime = currentTime;

  update();
  draw();
};

const SnakeGame = () => {
  useEffect(() => {
    window.requestAnimationFrame(game);
  }, []);

  return (
    <div id="container">
      <div id="game-board"></div>
    </div>
  );
};

export default SnakeGame;
