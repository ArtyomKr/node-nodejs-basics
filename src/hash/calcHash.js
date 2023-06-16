import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PATH = path.join(__dirname, './files');
const FILE_NAME = 'fileToCalculateHashFor.txt';

const calculateHash = async () => {
  const content = await readFile(path.join(PATH, FILE_NAME), { encoding: 'utf-8' });
  const hash = createHash('sha256').update(content).digest('hex');
  console.log(hash);
};

await calculateHash();
