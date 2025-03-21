import React from 'react';

const fetchWithTimeout = (url, duration) => {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    const { signal } = controller;
    let timerId = null;

    timerId = setTimeout(() => {
      controller.abort();
    }, duration);

    fetch(url, { signal })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        clearTimeout(timerId);
        resolve(data);
      })
      .catch((err) => {
        reject(err.toString());
      });
  });
};

const FetchWithTimeout = () => {
  React.useEffect(() => {
    async function getData() {
      try {
        const todo = await fetchWithTimeout(
          'https://jsonplaceholder.typicode.com/todos/1',
          100
        );
        console.log('TODO:', todo);
        return todo;
      } catch (err) {
        console.log('ERROR FETCHING TODO', err);
      }
    }
    getData();
  }, []);

  return <div>Please Check Console</div>;
};

export default FetchWithTimeout;
