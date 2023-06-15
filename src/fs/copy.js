import path, { dirname } from 'path';
import { cp, readdir } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PATH = path.join(__dirname, './files');
const COPY_PATH = path.join(__dirname, './files_copy');

export const copy = async () => {
  const dirFiles = await readdir(__dirname);
  if (!dirFiles.includes('files') || dirFiles.includes('files_copy')) {
    throw new Error('FS operation failed');
  }

  await cp(PATH, COPY_PATH, { recursive: true });
  console.log('\x1b[32m Files copied! \x1b[0m');
};

await copy();