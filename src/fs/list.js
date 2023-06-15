import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const folderPath = path.resolve(__dirname, 'files');

  const checkFolder = fs.access(folderPath);
  checkFolder
    .then(() => {
      fs.readdir(folderPath).then((filenames) => {
        for (let filename of filenames) {
          console.log(filename);
        }
      });
    })
    .catch(() => {
      throw new Error('FS operation failed');
    });
};

await list();
