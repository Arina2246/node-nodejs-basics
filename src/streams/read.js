import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'fileToRead.txt');
  const readableStream = fs.createReadStream(filePath);

  readableStream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
