const playerCount = 2;
const trackSize = 5;
const players = new Array(playerCount).fill(0);
let previousChance = -1;
let previousPickCount = 0;
let winner = -1;

function getRandomPlayer() {
  const index = Math.floor(Math.random() * playerCount);
  return index;
}

function play() {
  if (winner !== -1) {
    console.log(`Player ${winner + 1} has already won the game!`);
    return;
  }

  let index;
  index = getRandomPlayer();

  if (previousPickCount === 2 && index === previousChance) {
    while (index === previousChance) index = getRandomPlayer();
  }

  if (index === previousChance) previousPickCount++;
  else previousPickCount = 1;
  previousChance = index;
  players[index]++;

  if (players[index] === trackSize) {
    winner = index;
    console.log(`Player ${index + 1} has won!`);
  }

  console.log('Scores', players);
}

for (let i = 0; i < 10; i++) play();
