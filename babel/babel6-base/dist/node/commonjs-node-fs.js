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
    global.commonjsNodeFs = mod.exports;
  }
})(this, function (_require) {
  'use strict';

  var stat = _require.stat,
      exists = _require.exists,
      readFile = _require.readFile;


  readFile('./commonjs-node-fs.js', 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data);
  });
});