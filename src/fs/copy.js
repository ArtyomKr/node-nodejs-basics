import path, { dirname } from 'path';
import { cp, readdir } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH = path.join(__dirname, './files');
const COPY_PATH = path.join(__dirname, './files_copy');

export const copy = async () => {
  const dirFiles = await readdir(__dirname);
  if (!dirFiles.includes('files') || dirFiles.includes('files_copy')) {
    throw new Error('FS operation failed');
  }

  cp(PATH, COPY_PATH, { recursive: true });
};