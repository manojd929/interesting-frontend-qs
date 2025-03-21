/*
Implement Circuit Breaker that halts the function execution for x time if it fails for y number of times
*/

const circuitBreaker = (fn, failureCount, timeThreshold) => {
  let failures = 0;
  let timeSinceLastFailure = 0;
  let isClosed = false;

  return (...args) => {
    try {
      if (isClosed) {
        if (Date.now() - timeSinceLastFailure > timeThreshold) {
          isClosed = false;
        } else {
          console.log('SERVICE UNAVAILABLE');
          throw new Error(
            'Circuit Breaker Limit Reached, Retry after ' + timeThreshold + 'ms'
          );
        }
      }
      const result = fn(...args);
      console.log('RESULT', result);
      return result;
    } catch (err) {
      failures++;
      timeSinceLastFailure = Date.now();
      if (failures >= failureCount) {
        isClosed = true;
      }
    }
  };
};

const fn = () => {
  throw new Error('GENERIC ERROR');
};
const cfn = circuitBreaker(fn, 2, 1000);
cfn();
cfn();
cfn();
cfn();
setTimeout(() => {
  cfn();
}, 2000);
