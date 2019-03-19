if (typeof process !== 'undefined') {
  console.log(process.version);
}
if (typeof window !== 'undefined') {
  console.log(navigator.userAgent);
}
console.log('start');

setTimeout(() => {
  console.log('timer1');
  Promise.resolve().then(function() {
    console.log('promise1')
  });
}, 0);
setTimeout(() => {
  console.log('timer2');
  Promise.resolve().then(function() {
    console.log('promise2');
  });
}, 0);
Promise.resolve().then(function() {
  console.log('promise3')
});
console.log('end');
// v10.13.0
// start
// end
// promise3
// timer1
// timer2
// promise1
// promise2

// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36
// start
// end
// promise3
// undefined
// timer1
// promise1
// timer2
// promise2