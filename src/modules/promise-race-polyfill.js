const p1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve('p1s'), 300)
);
const p2 = new Promise((resolve, reject) =>
  setTimeout(() => reject('p2'), 500)
);
const p3 = new Promise((resolve, reject) =>
  setTimeout(() => resolve('p3'), 100)
);

const MyPromiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  });
};

Promise.race([p1, p2, p3])
  .then((val) => console.log(val))
  .catch((err) => console.error('ERROR', err));
MyPromiseRace([p1, p2, p3])
  .then((val) => console.log('MyPromise::', val))
  .catch((err) => console.error('MyPromise::ERROR::', err));
