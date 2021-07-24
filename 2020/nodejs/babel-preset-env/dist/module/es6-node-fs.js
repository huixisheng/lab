'use strict';

var _fs = require('fs');

(0, _fs.readFile)('./commonjs-node-fs.js', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log('file content: %s', data);
});