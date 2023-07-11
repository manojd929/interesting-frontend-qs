import React from 'react';

const solution = (initial = 0, steps = 1) => {
  let count = initial;
  let intervalId = null;

  const startTimer = () => {
    if (intervalId === null) {
      intervalId = setInterval(() => {
        console.log(count);
        count += steps;
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    intervalId = null;
  };

  return {
    startTimer,
    stopTimer,
  };
};

const GOD = solution(10, 1);

const PausableAutoIncrementer = () => {
  GOD.startTimer();
  setTimeout(() => {
    GOD.stopTimer();
  }, 8000);
  return <div>Please Check Console</div>;
};

export default PausableAutoIncrementer;
