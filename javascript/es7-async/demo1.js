const { readFile } = require('fs');

const readPkg = (filename) => {
  return new Promise((resolve, reject) => {
    readFile(filename, (error, data) => {
      if (error) {
        reject(error);
      }
      resolve(data);
    })
  });
}

const asyncReadPkg = async () => {
  const pkgContent = await readPkg('package.json');
  console.log('package.json:\n', pkgContent.toString());
}

asyncReadPkg();