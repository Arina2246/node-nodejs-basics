import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'fresh.txt');
  fs.access(filePath, (error) => {
    if (error) {
      fs.appendFile(filePath, 'I am fresh and young', (error) => {
        if (error) throw error;
      });
      return;
    }
    throw new Error('FS operation failed');
  });
};

await create();
