'use strict';

var _brandedQrCode = require('branded-qr-code');

var _brandedQrCode2 = _interopRequireDefault(_brandedQrCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Or old good syntax
// require('babel-polyfill');
// var brandedQRCode = require('branded-qr-code');

// Return a buffer with the PNG of the code
_brandedQrCode2.default.generate({
  text: 'https://www.google.com',
  logoPath: 'image/logo.png'
}); // ESNext Modules
// import 'babel-polyfill';
