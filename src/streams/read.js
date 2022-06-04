import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH = path.join(__dirname, './files', 'fileToRead.txt');

export const read = async () => {
  const stream = fs.createReadStream(PATH);

  stream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();