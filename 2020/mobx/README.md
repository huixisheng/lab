## 碰到的问题记录
1. 什么是装饰器 decorate

> 装饰器让你可以在设计时对类和类的属性进行注解和修改。
> Decorators make it possible to annotate and modify classes and properties at design time.

2. 响应式编程和命令式编程

> 响应式编程或反应式编程（英语：Reactive programming）是一种面向数据流和变化传播的编程范式。这意味着可以在编程语言中很方便地表达静态或动态的数据流，而相关的计算模型会自动将变化的值通过数据流进行传播。

> 例如，在命令式编程环境中， a:=b+c a:=b+c表示将表达式的结果赋给 a a，而之后改变 b b或 c c的值不会影响 a a。但在响应式编程中， a a的值会随着 b b或 c c的更新而更新。
- [响应式编程 - 维基百科，自由的百科全书](https://zh.wikipedia.org/wiki/%E5%93%8D%E5%BA%94%E5%BC%8F%E7%BC%96%E7%A8%8B)

> 命令式编程：命令“机器”如何去做事情(how)，这样不管你想要的是什么(what)，它都会按照你的命令实现。
> 声明式编程：告诉“机器”你想要的是什么(what)，让机器想出如何去做(how)。

[声明式编程和命令式编程有什么区别？ - 知乎](https://www.zhihu.com/question/22285830)
[函数式编程初探 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2012/04/functional_programming.html)


```
@action classMethod() {}
@action boundClassMethod = (args) => { body }
```
箭头函数绑定参数？


```
Experimental support for decorators is a feature that is subject to change in a future release. Set the 'experimentalDecorators' option to remove this warning.ts(1219)
(property) TodoModel.finished: boolean
```
配置 tsconfig.json

```
{
    "compilerOptions": {
        "experimentalDecorators": true,
        "allowJs": true
    }
}
```

- [Error warning message: "Experimental support for decorators is a feature that is subject to change in a future release" · Issue #45071 · Microsoft/vscode](https://git.io/fjf6a)


`mobx-react-devtools` 作用

> 用来追踪应用的渲染行为和数据依赖关系
- [mobxjs/mobx-react-devtools: Tools to perform runtime analyses of React applications powered by MobX and React](https://github.com/mobxjs/mobx-react-devtools)



npx 命令作用
> 也就是说 npx 会自动查找当前依赖包中的可执行文件，如果找不到，就会去 PATH 里找。如果依然找不到，就会帮你安装！ [npx 是什么 - 知乎](https://zhuanlan.zhihu.com/p/27840803)

- [npx 使用教程 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2019/02/npx.html)
- [awesome npx - 掘金](https://juejin.im/post/5a9f5c43f265da238155293e)

## TODO
[我眼中的 JavaScript 函数式编程 | Taobao FED | 淘宝前端团队](http://taobaofed.org/blog/2017/03/16/javascript-functional-programing/)
[征服 JavaScript 面试: 什么是函数式编程？| Eric Elliott - 众成翻译](https://www.zcfy.cc/article/master-the-javascript-interview-what-is-functional-programming-2221.html)

## 一点理解

mbox observable 
store 的变化驱动响应 UI 
有点像 Vue

## 文档
- [Hello World - React](https://react.docschina.org/docs/hello-world.html)
- [2. API概览 · MobX 中文文档](https://cn.mobx.js.org/refguide/api.html)
- [MobX: Ten minute introduction to MobX and React](https://mobx.js.org/getting-started.html)

## 教程
- [mobxjs/mobx-react-boilerplate: Small project to quickly start with React, MobX, JSX, ES6, Babel](https://github.com/mobxjs/mobx-react-boilerplate)
- [JavaScript 全栈工程师培训教程 - 阮一峰的网络日志](http://www.ruanyifeng.com/blog/2016/11/javascript.html)
- https://github.com/mobxjs/mobx-react-typescript-boilerplate

## 其他
- [mobxjs/awesome-mobx: A collection of awesome things regarding MobX.](https://github.com/mobxjs/awesome-mobx/)
- [Mobx + React simple todolist - JSFiddle](https://jsfiddle.net/mweststrate/wv3yopo0/)
- [new - CodeSandbox](https://codesandbox.io/s/new)
- [mobx 总结 - Google 搜索](https://www.google.com/search?q=mobx+%E6%80%BB%E7%BB%93&newwindow=1&safe=strict&ei=vNmRXLL2GYm6wAPSvI8I&start=30&sa=N&ved=0ahUKEwiyxI2FiJDhAhUJHXAKHVLeAwE4FBDw0wMIggE&biw=1920&bih=1121)
- [leighhalliday/mobx-demo](https://github.com/leighhalliday/mobx-demo)
- [基于react+Mobx(使用decorators)的demo - 知乎](https://zhuanlan.zhihu.com/p/25667976)
- [Mobx，webpack2，react-router4，antd搭建的后台管理系统demo，欢迎讨论 - 作品 - React 中文](http://react-china.org/t/mobx-webpack2-react-router4-antd-demo/11794)
- [survivejs-demos/mobx-demo: MobX port of SurviveJS - Webpack and React apps](https://github.com/survivejs-demos/mobx-demo)
- [MobX 入门教程 · Issue #2 · sorrycc/blog](https://github.com/sorrycc/blog/issues/2)
- [Mobx 核心概念简单入门：以股票为例 - 腾讯Web前端 IMWeb 团队社区 | blog | 团队博客](https://imweb.io/topic/5a453691a192c3b460fce36e)
- [MobX：MobX 和 React 十分钟快速入门 - 前端 - 掘金](https://juejin.im/entry/59df484651882578ba15640d)
- [MobX快速入门教程（重要概念讲解） - Nutty - 博客园](https://www.cnblogs.com/ygj0930/p/7372119.html)
- [1. MobX 介绍 · MobX 中文文档](https://cn.mobx.js.org/)
- [MobX：MobX 和 React 十分钟快速入门 - 众成翻译](https://www.zcfy.cc/article/mobx-ten-minute-introduction-to-mobx-and-react-4306.html?t=new)
- [MobX —— 10分钟极速入门 MobX 与 React – 目光博客](https://eyehere.net/2016/mobx-getting-started/)
- [[转]MobX 入门教程 · Issue #226 · iuap-design/blog](https://github.com/iuap-design/blog/issues/226)
- [Hancoson/react-mobx-demo: React, Mobx, and React-Router to achieve a Zhihu Daily App.](https://github.com/Hancoson/react-mobx-demo)
- [6.3. 案例项目 · MobX 中文文档](https://cn.mobx.js.org/faq/examples.html)
- [MobX绑定过程和其中的一些坑的总结 | 那片树海](http://yangzq007.com/2017/10/19/MobX%E7%BB%91%E5%AE%9A%E8%BF%87%E7%A8%8B%E5%92%8C%E5%85%B6%E4%B8%AD%E7%9A%84%E4%B8%80%E4%BA%9B%E5%9D%91%E7%9A%84%E6%80%BB%E7%BB%93/)
- [Redux、MobX 数据流的总结 - 前端 - 掘金](https://juejin.im/entry/59fffd23f265da431876230b)
- [如何评价数据流管理框架 MobX ? - 知乎](https://www.zhihu.com/question/52219898)
- [解读Mobx及与redux的对比 - 知乎](https://zhuanlan.zhihu.com/p/36294638)
- [我为什么从Redux迁移到了Mobx](https://tech.youzan.com/mobx_vs_redux/)
- [Becoming fully reactive: an in-depth explanation of MobX](https://hackernoon.com/becoming-fully-reactive-an-in-depth-explanation-of-mobservable-55995262a254)
- [Redux、MobX 数据流的总结 · Issue #32 · riskers/blog](https://git.io/fjf6P)
