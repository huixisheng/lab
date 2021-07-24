(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./class', './array', './object', './alone-import'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./class'), require('./array'), require('./object'), require('./alone-import'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global._class, global.array, global.object, global.aloneImport);
    global.index = mod.exports;
  }
})(this, function () {});