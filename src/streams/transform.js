import { Transform } from 'stream';

const transform = async () => {
  const reverseString = (str) => {
    let resStr = str.toString().split('');
    if (
      resStr[resStr.length - 1] === '\n' &&
      resStr[resStr.length - 2] === '\r'
    ) {
      resStr =
        resStr
          .slice(0, resStr.length - 2)
          .reverse()
          .join('') + '\r\n';
    } else if (resStr[resStr.length - 1] === '\n') {
      resStr =
        resStr
          .slice(0, resStr.length - 1)
          .reverse()
          .join('') + '\n';
    }
    return resStr;
  };

  const reversed = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, reverseString(chunk));
    },
  });

  process.stdin.pipe(reversed).pipe(process.stdout);
};

await transform();
