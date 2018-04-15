(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.object = mod.exports;
  }
})(this, function () {
  'use strict';

  var obj1 = { name: 'huixisheng' };
  var obj2 = { email: 'huixisheng@gmail.com' };

  var objAboutMe = Object.assign(obj1, obj2);
  console.log('objAboutMe: ', objAboutMe);
});