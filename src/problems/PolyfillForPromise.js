import React from 'react';

const STATE = {
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
};

class MyPromise {
  #value;
  #state = STATE.PENDING;
  #thenCallbacks = [];
  #catchCallbacks = [];
  #onSuccessBind = this.#onSuccess.bind(this);
  #onFailBind = this.#onFail.bind(this);

  constructor(cb) {
    try {
      cb(this.#onSuccessBind, this.#onFailBind);
    } catch (e) {
      this.#onFail(e);
    }
  }

  #onSuccess(value) {
    if (this.#state != STATE.PENDING) {
      return;
    }

    this.#value = value;
    this.#state = STATE.FULFILLED;
    this.#runCallbacks();
  }

  #onFail(value) {
    if (this.#state != STATE.PENDING) {
      return;
    }

    this.#value = value;
    this.#state = STATE.REJECTED;
    this.#runCallbacks();
  }

  #runCallbacks() {
    if (this.#state == STATE.FULFILLED) {
      this.#thenCallbacks.forEach((cb) => {
        cb(this.#value);
      });

      this.#thenCallbacks = [];
    }

    if (this.#state == STATE.REJECTED) {
      this.#catchCallbacks.forEach((cb) => {
        cb(this.#value);
      });

      this.#catchCallbacks = [];
    }
  }

  then(thenCb, catchCb) {
    return new MyPromise((resolve, reject) => {
      this.#thenCallbacks.push((result) => {
        if (thenCb == null) {
          resolve(result);
          return;
        }

        try {
          resolve(thenCb(result));
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  catch(cb) {
    this.then(undefined, cb);
  }
}

const PolyfillForPromise = () => {
  const p = new MyPromise((resolve, reject) => {
    resolve(1);
  });
  console.log(p);

  p.then((res) => console.log('---', res));
  return (
    <div>
      <section>Please check console</section>
    </div>
  );
};

export default PolyfillForPromise;
