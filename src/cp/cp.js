import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PATH = path.join(__dirname, './files/script.js');

export const spawnChildProcess = async (args) => {
  const child = spawn('node', [ PATH, ...args]);
  child.stdout.on('data', (data) => process.stdout.write(data));
  process.stdin.pipe(child.stdin);
};

await spawnChildProcess([ 'a', 'b', 'test']);