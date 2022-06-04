import path, { dirname } from 'path';
import { writeFile, readdir } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH = path.join(__dirname, './files');
const NAME = 'fresh.txt';

export const create = async () => {
  const files = await readdir(PATH);
  if (files.includes(NAME)) {
    throw new Error('FS operation failed');
  }

  await writeFile(path.join(PATH, NAME), 'I am fresh and young');
};

await create();