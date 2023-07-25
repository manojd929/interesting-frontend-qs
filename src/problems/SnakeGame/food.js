let foodPoint = { x: 5, y: 5 };

export const updateFood = () => {};

export const drawFood = () => {
  const gameBoard = document.getElementById('game-board');

  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = foodPoint.y;
  foodElement.style.gridColumnStart = foodPoint.x;
  foodElement.classList.add('food');

  if (gameBoard) {
    gameBoard.append(foodElement);
  }
};
