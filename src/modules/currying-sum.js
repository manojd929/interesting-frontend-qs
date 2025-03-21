const sum = (...firstArgs) => {
  return (...secondArgs) => {
    const finalArgs = [...firstArgs, ...secondArgs];
    if (!secondArgs.length) {
      return finalArgs.reduce((acc, value) => (acc += value), 0);
    }
    return sum(...finalArgs);
  };
};

console.log(sum(1)(2)(3)());
console.log(sum(4)(4)(4)());
