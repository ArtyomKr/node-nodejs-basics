import path, { dirname } from 'path';
import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

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