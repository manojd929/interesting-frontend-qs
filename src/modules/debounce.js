const sum = (...args) => {
  return [...args].reduce((acc, value) => (acc += value), 0);
};

const debounce = (fn, timeout) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, [...args]);
    }, timeout);
  };
};

const debounceSum = debounce(sum, 1000);

debounceSum(1, 2, 3);
debounceSum(1, 2, 3);
debounceSum(4, 5, 6);
setTimeout(() => {
  debounceSum(8, 8, 8);
}, 1000);
