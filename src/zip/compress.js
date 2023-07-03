import { createGzip } from 'zlib';
import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const OUTPUT_PATH = path.join(__dirname, './files', 'archive.gz');
const PATH = path.join(__dirname, './files', 'fileToCompress.txt');

const compress = async () => {
  const gzip = createGzip();
  const source = fs.createReadStream(PATH);
  const destination = fs.createWriteStream(OUTPUT_PATH);
  source.pipe(gzip).pipe(destination);

  console.log('\x1b[32mFile successfully compressed\x1b[0m');
};

await compress();