import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createGunzip} from 'zlib';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PATH = path.join(__dirname, './files', 'archive.gz');
const OUTPUT_PATH = path.join(__dirname, './files', 'fileToCompress.txt');

const decompress = async () => {
  const unzip = createGunzip();
  const source = fs.createReadStream(PATH);
  const destination = fs.createWriteStream(OUTPUT_PATH);
  source.pipe(unzip).pipe(destination);

  console.log('\x1b[32mFile successfully decompressed\x1b[0m');
};

await decompress();