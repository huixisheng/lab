(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['core-js/fn/array/find'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('core-js/fn/array/find'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.find);
    global.arrayAutoImport = mod.exports;
  }
})(this, function () {
  'use strict';

  const array2 = [5, 12, 8, 130, 44]; // import 'core-js/modules/es6.array.find';

  const found = array2.find(function (element) {
    return element > 10;
  });
});