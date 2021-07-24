(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['fs'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('fs'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.fs);
    global.es6NodeFs = mod.exports;
  }
})(this, function (_fs) {
  'use strict';

  (0, _fs.readFile)('./commonjs-node-fs.js', 'utf-8', function (err, data) {
    if (err) throw err;
    console.log('file content: %s', data);
  });
});