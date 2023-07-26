class RateLimiter {
  constructor(interval, limit) {
    this.requests = [];
    this.limit = limit;
    this.interval = interval;
  }

  allowRequest() {
    const startTime = Date.now() - this.interval;
    this.requests = this.requests.filter(
      (requestTime) => requestTime >= startTime
    );
    return this.requests.length < this.limit;
  }

  addRequest(request) {
    this.requests.push(Date.now());
  }
}

const limiter = new RateLimiter(5000, 10);

for (let i = 1; i <= 50; i++) {
  if (!limiter.allowRequest()) {
    console.log('REQUEST NOT ALLOWED', i, ' Exceeded rate limit');
  } else {
    limiter.addRequest();
    console.log('REQUEST ADDED ', i);
  }
}
