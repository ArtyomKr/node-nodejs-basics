import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PATH = path.join(__dirname, './files/script.js');

const spawnChildProcess = async (args) => {
  const child = spawn('node', [ PATH, ...args]);
  child.stdout.on('data', (data) => process.stdout.write(data));
  process.stdin.pipe(child.stdin);
};

await spawnChildProcess();