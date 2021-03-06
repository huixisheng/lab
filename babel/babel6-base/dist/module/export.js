(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global._export = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getBirthDay = getBirthDay;
  var myName = exports.myName = 'huixisheng';
  var myObj = exports.myObj = { 'name': 'huixisheng' };

  var name = 'huixisheng';
  var age = 29;

  exports.name = name;
  exports.age = age;
  function getBirthDay() {
    return '0510';
  }

  function getHeight() {
    return 161;
  }

  exports.v1 = getHeight;
  exports.age1 = age;
});