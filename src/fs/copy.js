import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const folderPath = path.resolve(__dirname, 'files');
  const copyFolderPath = path.resolve(__dirname, 'files_copy');

  const folderAcess = fs.promises.access(folderPath);
  const copyFolderAcess = fs.promises.access(copyFolderPath);

  const errorCheck = Promise.allSettled([folderAcess, copyFolderAcess]).then(
    (results) => {
      if (
        results[0].status !== 'fulfilled' ||
        results[1].status !== 'rejected'
      ) {
        throw new Error('FS operation failed');
      }
    }
  );
  errorCheck
    .then(() => fs.promises.mkdir(copyFolderPath))
    .then(() => {
      fs.promises.readdir(folderPath).then((filenames) => {
        for (let filename of filenames) {
          fs.promises.copyFile(
            path.resolve(folderPath, filename),
            path.resolve(copyFolderPath, filename)
          );
        }
      });
    });
};

await copy();
