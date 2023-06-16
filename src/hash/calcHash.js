import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(
    __dirname,
    'files',
    'fileToCalculateHashFor.txt'
  );
  fs.readFile(filePath).then((res) => {
    const result = createHash('sha256')
      .update('' + res)
      .digest('hex');
    console.log(result);
  });
};

await calculateHash();
