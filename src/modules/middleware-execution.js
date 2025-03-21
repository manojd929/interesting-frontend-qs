class MiddlewareRegistry {
  constructor() {
    this.middlewares = [];
    this.executionCount = 0;
  }

  register(func) {
    if (typeof func !== 'function') {
      throw new Error('Middleware function not of type function');
    }
    this.middlewares.push(func.bind(this));
  }

  use(cb) {
    if (typeof cb !== 'function') {
      throw new Error('Callback function not of type function');
    }

    const nextCb = () => {
      this.executionCount++;

      if (this.executionCount < this.middlewares.length) {
        this.middlewares[this.executionCount](nextCb);
      } else {
        cb.bind(this)();
      }
    };
    this.middlewares[this.executionCount](nextCb);
  }
}

const mw = new MiddlewareRegistry();
mw.register(function (next) {
  setTimeout(() => {
    this.value1 = 5;
    console.log('M1', this.value1);
    next();
  }, 300);
});

mw.register(function (next) {
  setTimeout(() => {
    this.value2 = 10;
    console.log('M2', this.value2);
    next();
  }, 200);
});

mw.use(function () {
  console.log('M3', this.value1, this.value2);
  console.log('SUM', this.value1 + this.value2);
});
