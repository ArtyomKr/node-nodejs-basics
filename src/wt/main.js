import { Worker } from 'worker_threads';
import { cpus } from 'os';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PATH = path.join(__dirname, './worker.js');

const performCalculations = async () => {
  const createWorkerPromise = (n) => {
    const worker = new Worker(PATH, { workerData: {n: n} });
    return new Promise((resolve) => {
      const result = { status: 'error', data: null };
      worker.on('message', message => {
        result.status = 'resolved';
        result.data = message;
        resolve(result);
      });
      worker.on('error', () => resolve(result));
      worker.on('exit', (code) => {
        if (code !== 0) resolve(result);
      });
    });
  };

  const emptyArr = new Array(cpus().length).fill(null);
  const promises = emptyArr.map((item, pos) => createWorkerPromise(pos + 10));

  console.log(await Promise.all(promises));
};

await performCalculations();