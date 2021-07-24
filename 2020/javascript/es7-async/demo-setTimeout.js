// 比较经典的笔试题目，输出0，1...
// for (var i = 0; i < 5; i++) {
//   (function(j) {
//     setTimeout(function() {
//       console.log(new Date().getTime(), j);
//     }, 1000);
//   })(i);
// }

// console.log(new Date().getTime(), i);
// 1521909750945 5
// 1521909751945 0
// 1521909751946 1
// 1521909751946 2
// 1521909751946 3
// 1521909751946 4


// 例外还有Promise.all封装的方法

console.log('-------------');

const sleep = (times) => {
  return new Promise((resolve) => {
    setTimeout(resolve, times);
  })
};

(async () => {
  for (var k = 0; k < 5; k++) {
    await sleep(1000);
    console.log(new Date().getTime(), k);
  }

  await sleep(1000);
  console.log(new Date().getTime(), k);
})();

// 1521910121114 0
// 1521910122117 1
// 1521910123123 2
// 1521910124123 3
// 1521910125126 4
// 1521910126128 5
