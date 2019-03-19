// [Node 定时器详解 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html)

setTimeout(() => {
  console.log('setTimeout');
});

setImmediate(() => {
  console.log('setImmediate');
});

process.nextTick(() => {
  console.log('process.nextTick');
});

Promise.resolve().then(() => {
  console.log('Promise.resolove');
});

// setInterval(() => {
//   console.log('setInterval');
// }, 1);

(() => {
  console.log('iife');
})();


// 1. 同步任务
// 2. process.nextTick()
// 3. 微任务

// iife
// process.nextTick
// Promise.resolove
// setTimeout
// setImmediate