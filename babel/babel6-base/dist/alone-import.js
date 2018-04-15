// import 'core-js/fn/array/find';
// import 'core-js/fn/object/assign';

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
    global.aloneImport = mod.exports;
  }
})(this, function () {});