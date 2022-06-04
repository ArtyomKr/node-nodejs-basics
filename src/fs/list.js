import path, { dirname } from 'path';
import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH = path.join(__dirname, './files');

export const list = async () => {
  const dirFiles = await readdir(__dirname);
  if (!dirFiles.includes('files')) {
    throw new Error('FS operation failed');
  }

  const files = await readdir(PATH);
  console.log(files);
};

await list();