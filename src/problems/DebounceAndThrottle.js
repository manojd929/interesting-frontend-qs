import React, { useState } from 'react';

let debounceTimer;
const debounce = (fn, delay) => {
  return (...args) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

let throttleFlag = true;
const throttle = (fn, delay) => {
  return (...args) => {
    if (throttleFlag) {
      fn(...args);
      throttleFlag = false;
      setTimeout(() => {
        throttleFlag = true;
      }, delay);
    }
  };
};

const DebounceAndThrottle = () => {
  const [value, setValue] = useState('');
  const [debounceValue, setDebounceValue] = useState('');
  const [throttleValue, setThrottleValue] = useState('');

  const handleDebounce = (args) => {
    setDebounceValue(args);
  };

  const handleThrottle = (args) => {
    setThrottleValue(args);
  };

  const debouncedChange = debounce(handleDebounce, 1000);
  const throttledChange = throttle(handleThrottle, 1000);

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    debouncedChange(val);
    throttledChange(val);
  };

  return (
    <div>
      <section>
        <input
          type="text"
          placeholder="Enter text"
          value={value}
          onChange={handleChange}
        />
      </section>
      <section>
        <p>
          <div>Default: {value}</div>
          <div>Debounce: {debounceValue}</div>
          <div>Throttle: {throttleValue}</div>
        </p>
      </section>
    </div>
  );
};

export default DebounceAndThrottle;
