const a = require('./demo');
console.log('main.js 初始化', a);

setTimeout(() => {
  console.log('main.js 初始化 setTimeout', a);
  console.log(a);
}, 5000);