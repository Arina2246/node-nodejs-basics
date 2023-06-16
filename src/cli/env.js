const parseEnv = () => {
  const envVariables = process.env;
  const resultArr = [];
  for (let key in envVariables) {
    if (key.includes('RSS_')) {
      resultArr.push(`${key}=${envVariables[key]}`);
    }
  }
  console.log(resultArr.join('; '));
};

parseEnv();
