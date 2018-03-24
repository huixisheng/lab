## babel  ##
- https://babeljs.cn/docs/usage/cli/
- https://babeljs.io/docs/usage/cli/

es6 -> es5

```
npx babel branded-qr-code.js --out-file es5-branded-qr-code.js --presets=es2015

babel-node branded-qr-code.js --presets es2015
```

转出es5多余default  _brandedQrCode2.default


## async
es7 es2016

支持情况 >=Node7.6

- [Nodejs async兼容性](https://node.green/#ES2017-features-async-functions)
- [浏览器兼容性](http://kangax.github.io/compat-table/es2016plus/#test-async_functions)
- https://devhints.io/es6
- https://nodejs.org/en/docs/es6/
- https://tc39.github.io/ecmascript-asyncawait/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
- https://github.com/tc39/ecmascript-asyncawait

```
try {
    await promiseFunc();
} catch() {
    // reject
}
```

多个请求并行
```
await Promise.all(promises);
```

### 相关扩展阅读文章 ###
- https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9  https://segmentfault.com/a/1190000009070711  https://blog.fundebug.com/2017/04/04/nodejs-async-await/
- [体验异步的终极解决方案-ES7的Async/Await](https://cnodejs.org/topic/5640b80d3a6aa72c5e0030b6)

## TODO ##
- [ ] `sudo npm i vue-qrious -S` 报错