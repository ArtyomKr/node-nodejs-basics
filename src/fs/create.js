import path, { dirname } from 'path';
import { writeFile, readdir } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PATH = path.join(__dirname, './files');
const NAME = 'fresh.txt';

export const create = async () => {
  const dirFiles = await readdir(PATH);
  if (dirFiles.includes(NAME)) {
    throw new Error('FS operation failed');
  }

  await writeFile(path.join(PATH, NAME), 'I am fresh and young');
  console.log('\x1b[32m File created! \x1b[0m')
};

await create();