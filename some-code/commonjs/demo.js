let a = 1;
setTimeout(() => {
  a = 3;
  console.log('demo.js setTimeout', a);
}, 3000);

module.exports = a;