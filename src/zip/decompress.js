import path, { dirname } from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH = path.join(__dirname, './files', 'archive.gz');
const OUTPUT_PATH = path.join(__dirname, './files', 'fileToCompress.txt');

export const decompress = async () => {
  const unzip = zlib.createGunzip();
  const source = fs.createReadStream(PATH);
  const destination = fs.createWriteStream(OUTPUT_PATH);
  source.pipe(unzip).pipe(destination);
};