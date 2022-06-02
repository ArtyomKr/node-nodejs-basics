export const parseEnv = () => {
  let result = '';

  for (const key in process.env) {
    if (key.startsWith('RSS_')) result += (`${key}=${process.env[key]}; `)
  }

  result ? console.log(result.substr(0, result.length - 2)) :
    console.log('No variables with RSS_ prefix found');
};