> es6 {
　　export : '可以输出多个，输出方式为 {}' ，
　　export default : ' 只能输出一个 ，可以与export 同时输出，但是不建议这么做'，
　　解析阶段确定对外输出的接口，解析阶段生成接口，
　　模块不是对象，加载的不是对象，
　　可以单独加载其中的某个接口（方法），
　　静态分析，动态引用，输出的是值的引用，值改变，引用也改变，即原来模块中的值改变则该加载的值也改变，
　　this 指向undefined
}

```
$ babel-node main.js

main.js 初始化 1
demo.js setTimeout 3
main.js 初始化 setTimeout 3
3
```

- [commonJS模块规范 和 es6模块规范 区别 - cag2050 - 博客园](https://www.cnblogs.com/cag2050/p/7419258.html)