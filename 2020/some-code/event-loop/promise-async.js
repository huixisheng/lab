if (typeof process !== 'undefined') {
  console.log(process.version);
}
if (typeof window !== 'undefined') {
  console.log(navigator.userAgent);
}


async function async1(){
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2(){
  console.log('async2')
}
console.log('script start')
setTimeout(function(){
  console.log('setTimeout') 
},0)  
async1();
new Promise(function(resolve){
  console.log('promise1')
  resolve();
}).then(function(){
  console.log('promise2')
})
console.log('script end')


// Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.121 Safari/537.36
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// undefined // 异步前都会这个输出
// setTimeout

// v10.13.0
// script start
// async1 start
// async2
// promise1
// script end
// promise2
// async1 end
// setTimeout


// 首版本答案:
// script start
// async1 start
// -promise1
// -script end
// -async2
// -async1 end
// -promise2
// setTimeout
