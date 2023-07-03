import { Transform } from 'stream';

const transform = async () => {
  process.stdout.write('Type text and press Enter to reverse it: \n');

  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join('') + '\n\n');
    },
  });

  process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();