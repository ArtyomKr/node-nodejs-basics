const parseArgs = () => {
  const result = process.argv.reduce((prev, item, i, arr) => {
    if (item.startsWith('--')) return prev + `\x1b[1m${item.slice(2)}\x1b[0m is ${arr[i + 1]}, `;
    return prev;
  }, '')

  result ? console.log(result.substr(0, result.length - 2)) :
    console.log('\x1b[31m No arguments found \x1b[0m');
};

parseArgs();