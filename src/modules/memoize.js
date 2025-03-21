const memoize = (fn) => {
  let memCache = {};

  return (...arguments) => {
    this.__proto__.cleanup = () => {
      memCache = {};
    };

    const key = [...arguments].toString();
    const value = memCache[key];
    if (!value) {
      const result = fn(...arguments);
      memCache[key] = result;
    }
    return memCache[key];
  };
};

const sum = (a, b, c) => {
  return a + b + c;
};

const memoizeSum = memoize(sum);
console.log(memoizeSum(1, 2, 3));
console.log(memoizeSum(1, 2, 3));
console.log(memoizeSum.cleanup());
console.log(memoizeSum(4, 5, 6));
console.log(memoizeSum(1, 2, 3));
