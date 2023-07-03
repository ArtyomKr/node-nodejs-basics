import path, { dirname } from 'path';
import fs from 'fs';
import * as readline from 'readline';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PATH = path.join(__dirname, './files');
const NAME = 'fileToWrite.txt';

const write = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const writeStream = fs.createWriteStream(path.join(PATH, NAME));
  process.stdout.write('Type text and press Enter to write it in the file: \n');

  rl.on('line', (input) => {
    writeStream.write(input + '\n');
  });
};

await write();