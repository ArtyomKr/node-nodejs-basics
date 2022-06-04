import path, { dirname } from 'path';
import fs from 'fs';
import * as readline from 'readline';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH = path.join(__dirname, './files', 'fileToWrite.txt');

export const write = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const writeStream = fs.createWriteStream(PATH);
  process.stdout.write('Type text and press Enter to write it in the file: \n');

  rl.on('line', (input) => {
    writeStream.write(input + '\n');
  });
};

await write();