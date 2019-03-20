babel 相关的使用说明
---

- babel-base es6 一些语法转换
- transform-runtime 测试

## 参考 ##
- [你真的会用 Babel 吗?](https://segmentfault.com/a/1190000011155061#articleHeader9) https://github.com/sunyongjian/blog/issues/30
- [babel-preset-env升级迁移完全指北](http://blog.5udou.cn/blog/babel-preset-envSheng-Ji-Qian-Yi-Wan-Quan-Zhi-Bei-70)
- [babel知多少](https://juejin.im/entry/597ca5df518825059d5d56cf)
- [babel、babel-polyfill与babel-runtime](http://luckyguygx.com/2018/01/18/babel1/)
- [Babel 全家桶 #20](https://github.com/brunoyang/blog/issues/20)
- https://github.com/babel/babel/tree/master/packages/babel-preset-env [中文文档](https://babel.docschina.org/docs/plugins/preset-env/)
- [Babel polyfill 知多少](https://zhuanlan.zhihu.com/p/29058936)
- [如何写好.babelrc？Babel的presets和plugins配置解析](https://excaliburhan.com/post/babel-preset-and-plugins.html)
- [babel-polyfill的几种使用方式](https://www.jianshu.com/p/3b27dfc6785c)
- [Runtime transform](https://babel.docschina.org/docs/plugins/transform-runtime)
- [babel 教程](https://blog.zfanw.com/babel-js/)
- https://babel.docschina.org/docs/usage/polyfill/
- [babel到底该如何配置？](https://juejin.im/post/59ec657ef265da431b6c5b03)
- [【JavaScript】深入理解Babel原理及其使用](https://www.jianshu.com/p/e9b94b2d52e2)

## 文档 ##
- https://github.com/browserslist/browserslist

## 例子 ##
- https://github.com/linxiaowu66/babel-preset-env-demo

babel的polyfill和runtime的区别
- https://segmentfault.com/q/1010000005596587
- http://guoyongfeng.github.io/my-gitbook/03/toc-babel-runtime.html
- https://www.jianshu.com/p/a16a34eb597e
- https://juejin.im/post/5a96859a6fb9a063523e2591

Array.find Array.findIndex 没有转换
- IE 9 Array (find&findIndex) not work https://github.com/babel/babel/issues/6603
- Array.find not being polyfilled https://github.com/babel/babel-preset-env/issues/210
- https://www.npmjs.com/package/babel-plugin-transform-array-find ?
- [transform-runtime 会自动应用 polyfill，即便没有使用 babel-polyfill #45](https://github.com/lmk123/blog/issues/45)
