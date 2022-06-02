import path, { dirname } from 'path';
import { readdir, unlink } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH = path.join(__dirname, './files');
const FILE_TO_REMOVE = 'fileToRemove.txt';

export const remove = async () => {
  const files = await readdir(PATH);
  if (!files.includes(FILE_TO_REMOVE)) {
    throw new Error('FS operation failed');
  }

  unlink(path.join(PATH, FILE_TO_REMOVE));
};