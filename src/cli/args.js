export const parseArgs = () => {
  const result = process.argv.reduce((prev, item, i, arr) => {
    if (item.startsWith('--')) return prev + `${item.slice(2)} is ${arr[i + 1]}, `;
    return prev;
  }, '')

  result ? console.log(result.substr(0, result.length - 2)) :
    console.log('No arguments found');
};

await parseArgs();