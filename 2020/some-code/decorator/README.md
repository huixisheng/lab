## 执行命令
```
$ npx babel demo01.js
$ npx babel-node demo01.js
$ ./node_modules/.bin/babel-node demo01.js 
```

babel 7.x 全部升级为 `@babel`

## 记录
1. Mixin
2. 修饰器不能用于函数 因为函数提升

```
@decorator
class A {}

// 等同于

class A {}
A = decorator(A) || A;
```

## 文档 
- [修饰器 - ECMAScript 6入门](http://es6.ruanyifeng.com/#docs/decorator)
- [What is Babel? · Babel](https://babeljs.io/docs/en/)

## 其他
- [修饰器 - ECMAScript 6入门](http://es6.ruanyifeng.com/#docs/decorator#Babel-%E8%BD%AC%E7%A0%81%E5%99%A8%E7%9A%84%E6%94%AF%E6%8C%81)
- [(1) JS 装饰器，一篇就够 - 不挑食的程序员 - SegmentFault 思否](https://segmentfault.com/a/1190000014495089)
- [Javascript 中的装饰器 | Aotu.io「凹凸实验室」](https://aotu.io/notes/2016/10/24/decorator/index.html)
- [ES6 系列之我们来聊聊装饰器 - 知乎](https://zhuanlan.zhihu.com/p/50493409)
- [JavaScript的装饰器：它们是什么及如何使用 - 知乎](https://zhuanlan.zhihu.com/p/27343271)
- [ES7 Decorator 装饰者模式 | Taobao FED | 淘宝前端团队](http://taobaofed.org/blog/2015/11/16/es7-decorator/)
- [类的装饰器：ES6 中优雅的 mixin 式继承 - 奇舞团博客](https://75team.com/post/mixin-in-es6.html)
- [ES Decorators简介 | EFE Tech](https://efe.baidu.com/blog/introduction-to-es-decorator/)
- [@babel/preset-env · Babel](https://babeljs.io/docs/en/babel-preset-env)
