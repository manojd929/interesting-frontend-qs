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

  constructor(executor) {
    try {
      executor(this.#onSuccessBind, this.#onFailBind);
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
    if (thenCb != null) {
      this.#thenCallbacks.push(thenCb);
    }

    if (catchCb != null) {
      this.#catchCallbacks.push(catchCb);
    }

    this.#runCallbacks();
    return this;
  }

  catch(cb) {
    this.then(undefined, cb);
    return this;
  }

  finally(cb) {
    this.then(
      () => cb(),
      () => cb()
    );
    return this;
  }
}

const PolyfillForPromise = () => {
  console.log('RENDER');
  const myPro = new MyPromise((resolve, reject) => {
    resolve(1);
  });
  myPro.then((res) => console.log('Resolved value - ', res));
  return (
    <div>
      <section>Please check console</section>
    </div>
  );
};

export default PolyfillForPromise;
