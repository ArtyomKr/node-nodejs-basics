import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PATH = path.join(__dirname, './files');
const NAME = 'fileToRead.txt';

const read = async () => {
  const stream = fs.createReadStream(path.join(PATH, NAME));

  stream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });

  stream.on('end', () => {
    process.stdout.write('\n');
  });
};

await read();