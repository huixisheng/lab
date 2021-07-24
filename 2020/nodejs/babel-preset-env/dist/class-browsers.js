'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Demo = function () {
  function Demo() {
    _classCallCheck(this, Demo);
  }

  _createClass(Demo, [{
    key: 'init',
    value: function init() {
      console.log('hello huixisheng');
    }
  }]);

  return Demo;
}();
// "node": "0.12.18"
// "node": "current" 8.9.4 不做转换
