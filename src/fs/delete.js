import path, { dirname } from 'path';
import { readdir, unlink } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PATH = path.join(__dirname, './files');
const FILE_TO_REMOVE = 'fileToRemove.txt';

export const remove = async () => {
  const files = await readdir(PATH);
  if (!files.includes(FILE_TO_REMOVE)) {
    throw new Error('FS operation failed');
  }

  await unlink(path.join(PATH, FILE_TO_REMOVE));
  console.log('\x1b[32m File deleted! \x1b[0m');
};

await remove();