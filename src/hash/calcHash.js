import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH = path.join(__dirname, './files');
const FILE_NAME = 'fileToCalculateHashFor.txt';

export const calculateHash = async () => {
  const content = await readFile(path.join(PATH, FILE_NAME), { encoding: 'utf-8' });
  return createHash('sha256').update(content).digest('hex');
};
