import { spawn } from 'child_process';

export const spawnChildProcess = async (args) => {
  const child = spawn('node', [ './files/script.js', ...args]);
  child.stdout.on('data', (data) => process.stdout.write(data));
  process.stdin.pipe(child.stdin);
};

spawnChildProcess([ 'a', 'b']);