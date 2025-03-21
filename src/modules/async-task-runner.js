class TaskRunner {
  constructor() {
    this.queue = [];
    this.runningTasks = 0;
    this.concurrency = 2;
  }

  async registerTask(task) {
    if (typeof task !== 'function') {
      throw new Error('Task of type function required');
    }

    if (this.runningTasks < this.concurrency) {
      await this.executeTask(task);
    } else {
      this.queue.push(task);
    }
  }

  async executeTask(task) {
    this.runningTasks += 1;
    try {
      await task();
    } catch (err) {
      console.error('ERROR', 'Error in RUNNING TASK');
    } finally {
      this.runningTasks -= 1;
      if (this.queue.length && this.runningTasks < this.concurrency) {
        const newTask = this.queue.shift();
        this.executeTask(newTask);
      }
    }
  }
}

const executor = (delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
};
const t1 = async () => {
  console.log('START T1');
  await executor(1000);
  console.log('END T1');
};
const t2 = async () => {
  console.log('START T2');
  await executor(1500);
  console.log('END T2');
};
const t3 = async () => {
  console.log('START T3');
  await executor(2000);
  console.log('END T3');
};
const t4 = async () => {
  console.log('START T4');
  await executor(100);
  console.log('END T4');
};
const t5 = async () => {
  console.log('START T5');
  await executor(500);
  console.log('END T5');
};
const taskRunner = new TaskRunner();
taskRunner.registerTask(t1);
taskRunner.registerTask(t2);
taskRunner.registerTask(t3);
taskRunner.registerTask(t4);
taskRunner.registerTask(t5);
