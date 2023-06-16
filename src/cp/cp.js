import path from 'path';
import { fileURLToPath } from 'url';
import child_process from 'child_process';

const spawnChildProcess = async (args) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'script.js');
  child_process.fork(filePath, args);
};

spawnChildProcess(['someArgument1', 'someArgument2', 1, 2, 2, 5]);
