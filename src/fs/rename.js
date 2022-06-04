import path, { dirname } from 'path';
import fs, { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH = path.join(__dirname, './files');
const NAME = 'properFilename.md';
const OLD_NAME = 'wrongFilename.txt';
const OLD_FILE = path.join(PATH, OLD_NAME);
const NEW_FILE = path.join(PATH, NAME);

export const rename = async () => {
  const files = await readdir(PATH);
  if (files.includes(NAME) || !files.includes(OLD_NAME)) {
    throw new Error('FS operation failed');
  }

  await fs.rename(OLD_FILE, NEW_FILE);
  console.log('File renamed!')
};

await rename();
