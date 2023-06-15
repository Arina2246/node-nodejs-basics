import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');

  const checkFolder = fs.access(filePath);
  checkFolder
    .then(() => {
      fs.readFile(filePath).then((result) => {
        console.log('' + result);
      });
    })
    .catch(() => {
      throw new Error('FS operation failed');
    });
};

await read();
