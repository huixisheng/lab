if (typeof process !== 'undefined') {
  console.log(process.version);
}
if (typeof window !== 'undefined') {
  console.log(navigator.userAgent);
}

console.log('script start');

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

new Promise((resolve, reject) => {
  console.log('script-promise');
  Promise.resolve().then(() => {
    console.log('script-promise-inner Promise.resolve');
  });
  resolve()
}).then(() => {
  Promise.resolve().then(() => {
    console.log('script-promise-resolve-inner Promise.resolve');
  });
  console.log('script-promise-resolve');
});

Promise.resolve().then(function() {
  console.log('script Promise.resolve');
});

// 注意: 该方法最近刚刚被微软提出, 可能不会被w3c批准成为标准, 目前只有 Internet Explorer 10实现了该方法.
// setImmediate(() => {
//   console.log('setImmediate start');
// }, 100);

var udid = 0;
function requestAnimationFrameCallback() {
  if (udid > 2) return;
  udid++;
  console.log('requestAnimationFrameCallback', udid);
  requestAnimationFrame(requestAnimationFrameCallback);
}

requestAnimationFrame(() => {
  console.log('requestAnimationFrame start');
  requestAnimationFrameCallback();
});

setTimeout(() => {
  console.log('script-setTimeout0s');
  new Promise((resolve, reject) => {
    console.log('script-setTimeout0s-Promise');
    resolve();
  }).then(() => {
    console.log('script-setTimeout0s-Promise-resolve');
  })
}, 0);

setTimeout(() => {
  console.log('script-setTimeout16s');
}, 16);

setTimeout(() => {
  console.log('script-setTimeout2000s');
}, 2000);


window.onload = function() {
  var callback = function (records) {
    records.map(function (record) {
      console.log('MutationObserver trigger');
      console.log(`The ${record.attributeName} attribute was modified.`);
      console.log('Previous attribute value: ' + record.oldValue);
    });
  };
  var mo = new MutationObserver(callback);
  var element = document.getElementById('my_element');
  var options = {
    'attributes': true,
    'attributeOldValue': true
  }
  mo.observe(element, options);
  console.log('window.onload');
  document.getElementById('my_element').setAttribute('data-custom', 'a=1');
}

console.log('script end');

// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36
// script start
// asyncFun1 start
// asyncFun2 start
// asyncFun2 new Promise
// script-promise
// script end
// script-promise-inner Promise.resolve
// script-promise-resolve
// script Promise.resolve
// script-promise-resolve-inner Promise.resolve
// asyncFun1 end
// window.onload
// MutationObserver trigger
// The data-custom attribute was modified.
// Previous attribute value: null
// script-setTimeout0s
// script-setTimeout0s-Promise
// script-setTimeout0s-Promise-resolve
// requestAnimationFrame start
// requestAnimationFrameCallback 1
// requestAnimationFrameCallback 2
// script-setTimeout16s
// requestAnimationFrameCallback 3
// script-setTimeout2000s