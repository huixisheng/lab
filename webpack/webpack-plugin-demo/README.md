## webpack插件 ##

```
npm i webpack-cli -g
npm i @webpack-cli/init -g
```

- https://www.npmjs.com/package/webpack-scaffold-pwa
- https://github.com/webpack/webpack-cli/issues/572

## 生命周期
```
compiler生命周期
compiler.hooks.environment.tap environment. environment 准备好之后，执行插件。
compiler.hooks.afterEnvironment.tap afterEnvironment. environment 安装完成之后，执行插件。
[ '/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple',
  './src/index.js' ]
compiler.plugin entryOption. 在 webpack 选项中的 entry 配置项 处理过之后，执行插件。
compiler.hooks.entryOption.tap entryOption. 在 webpack 选项中的 entry 配置项 处理过之后，执行插件。
compiler.hooks.afterPlugins.tap afterPlugins. 设置完初始插件之后，执行插件。
compiler.hooks.afterResolvers.tap afterResolvers. resolver 安装完成之后，执行插件。
compiler.hooks.beforeRun.tap beforeRun. compiler.run() 执行之前，添加一个钩子。
compiler.hooks.run.tap run. 开始读取 records 之前，钩入(hook into) compiler。
compiler.hooks.normalModuleFactory.tap normalModuleFactory. NormalModuleFactory 创建之后，执行插件。
compiler.hooks.contextModuleFactory.tap contextModuleFactory. ContextModuleFactory 创建之后，执行插件。
compiler.hooks.beforeCompile.tap beforeCompile. 编译(compilation)参数创建之后，执行插件。
compiler.hooks.compile.tap compile. 一个新的编译(compilation)创建之后，钩入(hook into) compiler。
compiler.hooks.thisCompilation.tap thisCompilation. 触发 compilation 事件之前执行（查看下面的 compilation）。
compiler.hooks.compilation.tap compilation. 编译(compilation)创建之后，执行插件。
compiler.hooks.make.tap make. ...
(node:5582) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
compiler.hooks.afterCompile.tap afterCompile. ...
compiler.hooks.shouldEmit.tap shouldEmit. ...
compiler.hooks.emit.tap emit. 生成资源到 output 目录之前。
compiler.hooks.emit.tap xxxx. 自定义compiler.hooks.emit.tap xxxx。
compiler.hooks.afterEmit.tap afterEmit. 生成资源到 output 目录之后。
compiler.hooks.done.tap done. 编译(compilation)完成。
```