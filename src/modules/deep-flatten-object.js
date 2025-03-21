import React from 'react';

const input = {
  A: '12',
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56,
    },
    Q: [1, 2],
  },
  Z: {
    D: [[8, 3], 5],
  },
};

const solution = (obj, prefix = '') => {
  let output = {};

  for (let key in obj) {
    let val = obj[key];
    let newKey = prefix === '' ? key : prefix + '.' + key;
    if (val !== null && typeof val === 'object') {
      let recursiveOutput = solution(val, newKey);
      output = { ...output, ...recursiveOutput };
    } else {
      output[newKey] = val;
    }
  }
  return output;
};

const DeepFlatten = () => {
  console.log(solution(input));
  return <div>Please Check Console</div>;
};

export default DeepFlatten;

/*
Input: 
{
  A: '12',
  B: 23,
  C: {
    P: 23,
    O: {
      L: 56
    },
    Q: [1,2]
  }
}

Output:
{
  A: '12',
  B: 23,
  C.P: 23,
  C.O.L: 56,
  C.Q.0: 1,
  C.Q.1: 2,
}
*/
