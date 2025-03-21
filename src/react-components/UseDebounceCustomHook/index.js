import React, { useRef, useCallback } from 'react';

const useDebounce = (fn, delay) => {
  let timeout = useRef(null);
  let debounce = useCallback(
    function () {
      const context = this;
      const args = arguments;
      clearTimeout(timeout.current);
      timeout.current = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    },
    [fn, delay]
  );
  return debounce;
};

const UseDebounceCustomHook = () => {
  const onChange = (e) => {
    console.log(e.target.value);
  };

  const debounceSearch = useDebounce(onChange, 1000);

  return (
    <div>
      <input type="text" onChange={debounceSearch} />
      <div>Check Console</div>
    </div>
  );
};

export default UseDebounceCustomHook;
