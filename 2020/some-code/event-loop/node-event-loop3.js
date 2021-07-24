const fs = require('fs');

const timeoutScheduled = Date.now();

console.log('start');
// <= 2 会优先输出
setTimeout(() => {
  console.log('setTimeout <=2ms');
}, 2);

setTimeout(() => {
  console.log('setTimeout 10ms');
}, 10);

setTimeout(() => {
  console.log('setTimeout 50ms');
}, 50);

// 异步任务一：100ms 后执行的定时器
setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;
  console.log(`${delay}ms`);
}, 100);

setImmediate(() => {
  console.log('setImmediate1');
});

// 异步任务二：文件读取后，有一个 200ms 的回调函数
fs.readFile('demo.js', () => {
  console.log('fs.readFile demo.js');
  const startCallback = Date.now();
  while (Date.now() - startCallback < 200) {
    // 什么也不做
  }
  fs.readFile('README.md', () => {
    console.log('fs.readFile README.md');
  });
});

setImmediate(() => {
  console.log('setImmediate2');
});

process.nextTick(() => {
  console.log('process.nextTick');
});

Promise.resolve().then(() => {
  console.log('Promise.resolove');
});

console.log('end');
// start
// end
// process.nextTick
// Promise.resolove
// setTimeout <=2ms
// fs.readFile demo.js
// setImmediate1
// setImmediate2
// setTimeout 10ms
// setTimeout 50ms
// 206ms
// fs.readFile README.md