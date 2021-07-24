let { stat, exists, readFile} = require('fs');

readFile('./commonjs-node-fs.js', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});