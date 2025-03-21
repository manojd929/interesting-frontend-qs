Array.prototype.myMap = function (cb) {
  if (typeof cb !== 'function') {
    throw new Error('callback not of type function');
  }

  let result = [];
  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      result.push(cb(this[index], index));
    }
  }

  return result;
};

Array.prototype.myFilter = function (cb) {
  if (typeof cb !== 'function') {
    throw new Error('callback not of type function');
  }

  let result = [];
  for (let index in this) {
    if (this.hasOwnProperty(index)) {
      if (cb(this[index], index, this)) {
        result.push(this[index]);
      }
    }
  }

  return result;
};

Array.prototype.myReduce = function (cb, initialValue) {
  if (typeof cb !== 'function') {
    throw new Error('callback not of type function');
  }

  let index = 0;
  let acc = initialValue ?? this[index++];

  for (let i = index; i < this.length; i++) {
    if (this.hasOwnProperty(i)) {
      acc = cb(acc, this[i], i, this);
    }
  }

  return acc;
};

const arr = [1, 2, 3];
console.log(
  'MAP::',
  arr,
  '=>',
  arr.map((val) => val * 2)
);
console.log(
  'MY_MAP::',
  arr,
  '=>',
  arr.myMap((val) => val * 2)
);
console.log(
  'FILTER::',
  arr,
  '=>',
  arr.filter((val) => val >= 2)
);
console.log(
  'MY_FILTER::',
  arr,
  '=>',
  arr.myFilter((val) => val >= 2)
);
console.log(
  'REDUCE::',
  arr,
  '=>',
  arr.reduce((acc, val) => (acc += val), 0)
);
console.log(
  'MY_REDUCE::',
  arr,
  '=>',
  arr.myReduce((acc, val) => (acc += val), 0)
);
