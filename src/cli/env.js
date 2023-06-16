const parseEnv = () => {
  let result = '\x1b[32m';

  for (const key in process.env) {
    if (key.startsWith('RSS_')) result += (`${key}=${process.env[key]}; `)
  }

  result ? console.log(result.substr(0, result.length - 2) + '\x1b[0m') :
    console.log('\x1b[31m No variables with RSS_ prefix \x1b[0m');
};

parseEnv();