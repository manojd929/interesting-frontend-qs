const sum = (...args) => {
  return [...args].reduce((acc, value) => (acc += value), 0);
};

const throttle = (fn, timeout) => {
  let shouldWait = false;
  return (...args) => {
    if (shouldWait) {
      return;
    }

    setTimeout(() => {
      shouldWait = false;
    }, timeout);

    shouldWait = true;
    return fn.apply(this, [...args]);
  };
};

const throttleSum = throttle(sum);
console.log(throttleSum(1, 2, 3));
