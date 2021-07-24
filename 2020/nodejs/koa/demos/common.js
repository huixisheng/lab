const fs = require('fs');
const path = require('path');

function writeFile(filename, data) {
  const filepath = path.join(__dirname, 'koa', filename);
  let content = data;
  if (typeof data === 'object') {
    content = JSON.stringify(data, null, 2);
    Object.keys(data).forEach((key) => {
      content = content + '\n\n' + key + ': ' + JSON.stringify(Object.getOwnPropertyNames(data[key]), null, 2)
    });
  }
  fs.writeFileSync(filepath, content);
}

module.exports = {
  writeFile,
}