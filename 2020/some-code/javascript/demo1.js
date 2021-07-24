// 不是关键字 可以声明为变量
let undefined = 1;
// let null; SyntaxError: Unexpected token nul

console.log('undefined:', undefined);
// Uncaught SyntaxError: Identifier 'undefined' has already been declared
// 
let a = void 0;
console.log('typeof void 0:', a, typeof a); // undefined

console.log('NaN === NaN:', NaN === NaN); // false

// String 长度 2^53 - 1

// IEEE 754
console.log('0.1 + 0.2 === 0.3:', 0.1 + 0.2 === 0.3); // false

console.log('1 / + 0:', 1 / +0); // Infinity
console.log('1 / - 0:', 1 / -0); // -Infinity
console.log('1 / 0:', 1 / 0); // Infinity

// Number.EPSILON 2.220446049250313e-16
console.log('Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON:', Math.abs(0.1 + 0.2 - 0.3) <= Number.EPSILON); // true

const symbol = Symbol()
console.log('symbol.__proto__.__proto__ === Object.prototype:', symbol.__proto__.__proto__ === Object.prototype); // true

let a1 = 3;
let a2 = new Number(3)
console.log('3 === new Number(3):', a1 === a2, typeof a1, typeof a2); // false number object


var o = new Object;
var n = new Number;
var s = new String;
var b = new Boolean;
var d = new Date;
var arg = function(){ return arguments }();
var r = new RegExp;
var f = new Function;
var arr = new Array;
var e = new Error;
var sy = Symbol();
var map = new Map();
var set = new Set();
console.log([null, void 0, o, n, s, b, d, arg, r, f, arr, e, sy, map, set].map(v => Object.prototype.toString.call(v)));
// [ '[object Null]',
//   '[object Undefined]',
//   '[object Object]',
//   '[object Number]',
//   '[object String]',
//   '[object Boolean]',
//   '[object Date]',
//   '[object Arguments]',
//   '[object RegExp]',
//   '[object Function]',
//   '[object Array]',
//   '[object Error]',
//   '[object Symbol]',
//   '[object Map]',
//   '[object Set]' ]