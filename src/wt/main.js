import { Worker } from 'worker_threads';
import { cpus } from 'os';

export const performCalculations = async () => {
  const createWorkerPromise = (n) => {
    const worker = new Worker('./worker.js', {  workerData: {n: n} });
    return new Promise((resolve) => {
      const result = { status: 'error', data: null };
      worker.on('message', message => {
        result.status = 'resolved';
        result.data = message;
        resolve(result);
      });
      worker.on('error', () => resolve(result));
      worker.on('exit', (code) => {
        if (code !== 0)
          resolve(result);
      });
    });
  };

  const emptyArr = new Array(cpus().length).fill(null);
  const promises = emptyArr.map((item, pos) => createWorkerPromise(pos + 10));

  return Promise.all(promises);
};

console.log(await performCalculations());