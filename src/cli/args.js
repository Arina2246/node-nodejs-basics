const parseArgs = () => {
  const args = process.argv;
  let resultArr = [];
  for (let i = 2; i < args.length; i += 2) {
    resultArr.push(`${args[i].slice(2, args[i].length)} is ${args[i + 1]}`);
  }

  console.log(resultArr.join(', '));
};

parseArgs();
