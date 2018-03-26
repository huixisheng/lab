## 相关命令 ##
```
$ babel class.js  -o dist/class-0.12.18.js
$ babel class.js  -o dist/class.js
```

## 文档 ##
- https://kangax.github.io/compat-table/es6/
- https://node.green/


```
TC39 将提案分为以下几个阶段:

Stage 0 - 稻草人: 只是一个想法，可能是 babel 插件。
Stage 1 - 提案: 初步尝试。
Stage 2 - 初稿: 完成初步规范。
Stage 3 - 候选: 完成规范和浏览器初步实现。
Stage 4 - 完成: 将被添加到下一年度发布。
```

```
一定要记得 preset 的顺序是反向的。举个例子:

{
  "presets": [
    "es2015",
    "react",
    "stage-2"
  ]
}
按以下顺序运行: stage-2， react， 最后 es2015 。
```

> 引用 https://babeljs.cn/docs/plugins/


## 工具 ##

```
$ sudo npm install -g es-checker
```

ES6支持情况
```
Function
  × Tail-call optimization for function calls and recursion

Array
  × Methods added to Array.prototype ([].fill(), [].find(), [].findIndex(), [].entries(), [].keys(), [].values() )

Module
  × Module export command
  × Module import command
```

## 其他阅读 ##
- https://cnodejs.org/topic/593f469c325c502917ef08fe
- https://aotu.io/notes/2016/09/22/es6-import-with-babel/index.html
- http://web.jobbole.com/92560/
- [你真的会用 babel 吗？](https://github.com/sunyongjian/blog/issues/30)
- [babel-preset-env升级迁移完全指北](https://juejin.im/entry/5a099de0f265da4321538c72)
- [ES6环境搭建(Node & babel)](https://www.jianshu.com/p/74b0e2014735)