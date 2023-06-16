import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'fileToWrite.txt');

  const writeStream = fs.createWriteStream(filePath);

  process.stdin.on('data', (txt) => {
    writeStream.write(txt);
  });
};

await write();
