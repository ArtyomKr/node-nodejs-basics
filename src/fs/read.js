import path, { dirname } from 'path';
import { readdir, readFile } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH = path.join(__dirname, './files');
const NAME = 'fileToRead.txt';

export const read = async () => {
  const files = await readdir(PATH);
  if (!files.includes(NAME)) {
    throw new Error('FS operation failed');
  }

  const content = await readFile(path.join(PATH, NAME), { encoding: 'utf-8' });
  console.log(content);
};