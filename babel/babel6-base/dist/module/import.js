(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./export'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./export'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global._export);
    global._import = mod.exports;
  }
})(this, function (_export) {
  'use strict';

  console.log('myName:%s', _export.myName);
  console.log('myObj:%o', _export.myObj);
});