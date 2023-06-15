import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const file = path.resolve(__dirname, 'files', 'fileToRemove.txt');
  const checkFile = fs.access(file);
  checkFile
    .then(() => fs.unlink(file))
    .catch(() => {
      throw new Error('FS operation failed');
    });
};

await remove();
