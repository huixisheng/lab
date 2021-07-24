if (typeof process !== 'undefined') {
  console.log(process.version);
}
if (typeof window !== 'undefined') {
  console.log(navigator.userAgent);
}

console.log('nodejs start');

async function asyncFun1() {
  console.log('asyncFun1 start');
  await asyncFun2();
  console.log('asyncFun1 end');
}

async function asyncFun2() {
  console.log('asyncFun2 start');
  return new Promise((resolve, reject) => {
    console.log('asyncFun2 new Promise');
    resolve();
  });
}

asyncFun1();

Promise.resolve().then(function() {
  console.log('script Promise.resolve');
});

setImmediate(() => {
  console.log('setImmediate start');
}, 100);

setTimeout(() => {
  console.log('script-setTimeout0s');
  new Promise((resolve, reject) => {
    console.log('script-setTimeout0s-Promise');
    resolve();
  }).then(() => {
    console.log('script-setTimeout0s-Promise-resolve');
  });
}, 0);

setTimeout(() => {
  console.log('script-setTimeout2000s');
}, 2000);

console.log('nodejs end');

// timer 
// I/O callbacks
// idle prepare
// poll  
// check 
// close callbacks