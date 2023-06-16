import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const wrongFilename = path.resolve(__dirname, 'files', 'wrongFilename.txt');
  const properFilename = path.resolve(__dirname, 'files', 'properFilename.md');

  const wrongFilenameAcess = fs.access(wrongFilename);
  const properFilenameAcess = fs.access(properFilename);

  const errorCheck = Promise.allSettled([
    wrongFilenameAcess,
    properFilenameAcess,
  ]).then((results) => {
    if (results[0].status !== 'fulfilled' || results[1].status !== 'rejected') {
      throw new Error('FS operation failed');
    }
  });
  errorCheck.then(() => fs.rename(wrongFilename, properFilename));
};

await rename();
