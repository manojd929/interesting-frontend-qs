const STATE = {
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
  PENDING: 'pending',
};

class MyPromise {
  #state = STATE.PENDING;
  #value;
  #thenCbs = [];
  #catchCbs = [];
  #onSuccessBinded = this.#onSuccess.bind(this);
  #onFailBinded = this.#onFail.bind(this);

  constructor(cb) {
    try {
      cb(this.#onSuccessBinded, this.#onFailBinded);
    } catch (err) {
      this.#onFail(err);
    }
  }

  #onSuccess(value) {
    if (this.#state !== STATE.PENDING) {
      return;
    }
    this.#value = value;
    this.#state = STATE.FULFILLED;
    this.#runCallbacks();
  }

  #onFail(value) {
    if (this.#state !== STATE.PENDING) {
      return;
    }
    this.#value = value;
    this.#state = STATE.REJECTED;
    this.#runCallbacks();
  }

  #runCallbacks() {
    if (this.#state === STATE.FULFILLED) {
      this.#thenCbs.forEach((callback) => callback(this.#value));
      this.#thenCbs = [];
    }

    if (this.#state === STATE.REJECTED) {
      this.#catchCbs.forEach((callback) => callback(this.#value));
      this.#catchCbs = [];
    }
  }

  then(thenCb, catchCb) {
    if (thenCb !== null) {
      this.#thenCbs.push(thenCb);
    }
    if (catchCb !== null) {
      this.#catchCbs.push(catchCb);
    }
    this.#runCallbacks();
  }

  catch(catchCb) {
    this.then(undefined, catchCb);
  }
}

const p1 = new MyPromise((resolve, reject) => resolve(1));
p1.then((res) => console.log(res));

const p2 = new MyPromise((resolve, reject) => reject(1));
p1.catch((res) => console.log(res));
