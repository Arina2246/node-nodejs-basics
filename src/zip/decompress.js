import { createUnzip } from 'zlib';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const filePath = path.resolve(__dirname, 'files', 'archive.gz');
  const unzipPath = path.resolve(__dirname, 'files', ' fileToCompress.txt');

  const readStream = fs.createReadStream(filePath);
  const writeStream = fs.createWriteStream(unzipPath);

  readStream.pipe(createUnzip()).pipe(writeStream);

  const removeFile = () => fs.promises.unlink(filePath);
  readStream.on('close', removeFile);
};

await decompress();
