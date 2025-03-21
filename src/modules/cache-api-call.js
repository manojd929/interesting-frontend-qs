const cacheApi = (expiryTime) => {
  const apiCache = {};

  return async (url, config) => {
    try {
      const key = url + JSON.stringify(config);
      const value = apiCache[key];
      if (!value || Date.now() > value?.expiry) {
        let response = await fetch(url, config);
        response = await response.json();
        apiCache[key] = { value: response, expiry: Date.now() + expiryTime };
      }
      return apiCache[key].value;
    } catch (err) {
      console.log('ERROR', err);
      return null;
    }
  };
};

const api1 = cacheApi(1500);
api1('https://dummyjson.com/products/1', {
  method: 'GET',
}).then((res) => console.log(res.title));
setTimeout(() => {
  api1('https://dummyjson.com/products/1', {
    method: 'GET',
  }).then((res) => console.log(res.title));
}, 800);
setTimeout(() => {
  api1('https://dummyjson.com/products/1', {
    method: 'GET',
  }).then((res) => console.log(res.title));
}, 1700);
api1('https://dummyjson.com/users/1', {
  method: 'GET',
}).then((res) => console.log(res.firstName));
