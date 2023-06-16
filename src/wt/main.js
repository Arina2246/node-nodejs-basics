import path from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';
import os from 'os';

const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const workerPath = path.resolve(__dirname, 'worker.js');
  const CpuCores = os.cpus().length;
  const promisesArr = [];

  for (let i = 0; i < CpuCores; i++) {
    const workerPromise = new Promise((resolve, reject) => {
      const worker = new Worker(workerPath, { workerData: i + 10 });
      worker.on('message', resolve);
      worker.on('error', reject);
    })
      .then((val) => {
        return { status: 'resolved', data: val };
      })
      .catch(() => {
        return { status: 'error', data: null };
      });
    promisesArr.push(workerPromise);
  }

  Promise.allSettled(promisesArr).then((data) => {
    const result = data.map((el) => {
      return el.value;
    });
    console.log(result);
  });
};

await performCalculations();
