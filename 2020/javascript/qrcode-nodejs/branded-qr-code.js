// ESNext Modules
// import 'babel-polyfill';
import brandedQRCode from 'branded-qr-code';
// Or old good syntax
// require('babel-polyfill');
// var brandedQRCode = require('branded-qr-code');

// Return a buffer with the PNG of the code
// TODO
brandedQRCode.generate({
  text: 'https://www.google.com',
  logoPath: 'image/logo.png'
});