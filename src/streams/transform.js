import * as readline from 'readline';

export const transform = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  process.stdout.write('Type text and press Enter to reverse it: \n');

  rl.on('line', (input) => {
    process.stdout.write(input.split('').reverse().join('') + '\n');
  });
};