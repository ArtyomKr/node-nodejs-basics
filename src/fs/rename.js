import path, { dirname } from 'path';
import fs, { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PATH = path.join(__dirname, './files');
const NAME = 'properFilename.md';
const OLD_NAME = 'wrongFilename.txt';
const OLD_FILE = path.join(PATH, OLD_NAME);
const NEW_FILE = path.join(PATH, NAME);

const rename = async () => {
  const dirFiles = await readdir(PATH);
  if (dirFiles.includes(NAME) || !dirFiles.includes(OLD_NAME)) {
    throw new Error('FS operation failed');
  }

  await fs.rename(OLD_FILE, NEW_FILE);
  console.log('\x1b[32m File renamed! \x1b[0m');
};

await rename();
