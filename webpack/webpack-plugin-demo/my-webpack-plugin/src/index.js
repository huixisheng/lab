/**
 * See the webpack docs for more information about plugins:
 * https://github.com/webpack/docs/wiki/how-to-write-a-plugin
 */

const fs = require('fs');
const path = require('path');
const CircularJSON = require('circular-json');

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

const pluginName = 'MyWebpackPlugin';

function MyWebpackPlugin(options) {
	// Setup the plugin instance with options...
}

MyWebpackPlugin.prototype.apply = function(compiler) {
  // compiler 钩子 https://webpack.docschina.org/api/compiler-hooks/
  // compilation 钩子 https://webpack.docschina.org/api/compilation-hooks/
  // Plugin API https://webpack.docschina.org/api/plugins/#tapable
  fs.writeFileSync(path.join(__dirname, '../../compiler.md'), JSON.stringify(compiler, null, 2));
  fs.writeFileSync(path.join(__dirname, '../../compilation.md'), JSON.stringify(compiler.hooks.compilation, null, 2));

  console.log('compiler生命周期');
  compiler.plugin('entryOption', (...args) => {
    // [ '/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/examples/simple', './src/index.js' ]
    console.dir(args);
    console.log('compiler.plugin entryOption. 在 webpack 选项中的 entry 配置项 处理过之后，执行插件。');
  });

  compiler.hooks.entryOption.tap(pluginName, () => {
    console.log('compiler.hooks.entryOption.tap entryOption. 在 webpack 选项中的 entry 配置项 处理过之后，执行插件。');
  });

  // Error: tapAsync is not supported on a SyncBailHook
  // compiler.hooks.entryOption.tapAsync('entryOption', (compilation, callback) => {
  //   console.log('compiler.hooks.entryOption.tapAsync entryOption. 在 webpack 选项中的 entry 配置项 处理过之后，执行插件。');
  //   callback();
  // });

  compiler.hooks.afterPlugins.tap(pluginName, (compiler) => {
    // console.dir(compiler);
    console.log('compiler.hooks.afterPlugins.tap afterPlugins. 设置完初始插件之后，执行插件。');
  });

  compiler.hooks.afterResolvers.tap(pluginName, (compiler) => {
    // console.dir(compiler);
    console.log('compiler.hooks.afterResolvers.tap afterResolvers. resolver 安装完成之后，执行插件。');
  });

  compiler.hooks.environment.tap(pluginName, (compilation) => {
    // console.dir(compilation);
    console.log('compiler.hooks.environment.tap environment. environment 准备好之后，执行插件。');
  });

  compiler.hooks.afterEnvironment.tap(pluginName, () => {
    console.log('compiler.hooks.afterEnvironment.tap afterEnvironment. environment 安装完成之后，执行插件。');
  });

  compiler.hooks.beforeRun.tap(pluginName, (compiler) => {
    // console.dir(compiler);
    console.log('compiler.hooks.beforeRun.tap beforeRun. compiler.run() 执行之前，添加一个钩子。');
  });

  // compiler.hooks.run.tapAsync('MyPlugin', (compiler, callback) => {
  //   console.log('以异步方式触及 run 钩子。');
  //   callback();
  // });

  // compiler.hooks.run.tapPromise('MyPlugin', compiler => {
  //   return new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
  //     console.log('以具有延迟的异步方式触及 run 钩子。');
  //   });
  // });

  // compiler.hooks.run.tapPromise('MyPlugin', async compiler => {
  //   await new Promise(resolve => setTimeout(resolve, 1000));
  //   console.log('以具有延迟的异步方式触及 run 钩子。');
  // });
  compiler.hooks.run.tap(pluginName, (compiler) => {
    console.log('compiler.hooks.run.tap run. 开始读取 records 之前，钩入(hook into) compiler。');
  });

  compiler.hooks.watchRun.tap('watchRun', (compiler) => {
    // console.dir(compiler);
    console.log('compiler.hooks.watchRun.tap watchRun. 监听模式下，一个新的编译(compilation)触发之后，执行一个插件，但是是在实际编译开始之前。');
  });

  // https://webpack.docschina.org/api/parser/
  // compiler.hooks.normalModuleFactory.tap('MyPlugin', factory => {
  //   factory.hooks.parser.tap('MyPlugin', (parser, options) => {
  //     parser.hooks.someHook.tap(/* ... */);
  //   });
  // });
  compiler.hooks.normalModuleFactory.tap(pluginName, (normalModuleFactory) => {
    // console.dir(normalModuleFactory);
    console.log('compiler.hooks.normalModuleFactory.tap normalModuleFactory. NormalModuleFactory 创建之后，执行插件。');
  });

  compiler.hooks.contextModuleFactory.tap(pluginName, (contextModuleFactory) => {
    // console.dir(normalModuleFactory);
    console.log('compiler.hooks.contextModuleFactory.tap contextModuleFactory. ContextModuleFactory 创建之后，执行插件。');
  });

  compiler.hooks.beforeCompile.tap(pluginName, (compilationParams) => {
    // console.dir(compilationParams);
    console.log('compiler.hooks.beforeCompile.tap beforeCompile. 编译(compilation)参数创建之后，执行插件。');
  });

  compiler.hooks.compile.tap(pluginName, (compilationParams) => {
    // console.dir(compilationParams);
    console.log('compiler.hooks.compile.tap compile. 一个新的编译(compilation)创建之后，钩入(hook into) compiler。');
  });

  compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
    // console.dir(compilationParams);
    console.log('compiler.hooks.thisCompilation.tap thisCompilation. 触发 compilation 事件之前执行（查看下面的 compilation）。');
  });

  compiler.hooks.compilation.tap(pluginName, (compilation) => {
    fs.writeFileSync(path.join(__dirname, '../../compiler.hooks.compilation.tap.compilation.md'), JSON.stringify(compilation, null, 2));
    // console.dir(compilationParams);
    console.log('compiler.hooks.compilation.tap compilation. 编译(compilation)创建之后，执行插件。');
  });

  compiler.hooks.make.tap(pluginName, (compilation) => {
    // console.dir(compilationParams);
    console.log('compiler.hooks.make.tap make. ...');
  });

  compiler.hooks.afterCompile.tap(pluginName, (compilation) => {
    // console.dir(compilationParams);
    console.log('compiler.hooks.afterCompile.tap afterCompile. ...');
  });

  compiler.hooks.shouldEmit.tap(pluginName, (compilation) => {
    // console.dir(compilationParams);
    console.log('compiler.hooks.shouldEmit.tap shouldEmit. ...');
    // return fase emit不触发
    return true; // TODO ?
  });

  // TypeError: Cannot read property 'tap' of undefined
  //   at MyWebpackPlugin.apply (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/src/index.js:127:37)
  // compiler.hooks.needAdditionalPass.tap('needAdditionalPass', (compilation) => {
  //   // console.dir(compilationParams);
  //   console.log('compiler.hooks.needAdditionalPass.tap needAdditionalPass. ...');
  // });

  compiler.hooks.emit.tap(pluginName, (compilation) => {
    // console.dir(compilationParams);
    console.log('compiler.hooks.emit.tap emit. 生成资源到 output 目录之前。');
  });

  compiler.hooks.afterEmit.tap(pluginName, (compilation) => {
    // console.dir(compilationParams);
    console.log('compiler.hooks.afterEmit.tap afterEmit. 生成资源到 output 目录之后。');
  });

  compiler.hooks.done.tap(pluginName, (stats) => {
    // console.dir(stats);
    console.log('compiler.hooks.done.tap done. 编译(compilation)完成。');
  });

  compiler.hooks.failed.tap(pluginName, (error) => {
    // console.dir(error);
    console.log('compiler.hooks.failed.tap failed. 编译(compilation)失败。');
  });

  // 报错
  // compiler.hooks.xxxx.tap('xxxx', (error) => {
  //   // console.dir(error);
  //   console.log('compiler.hooks.xxxx.tap xxxx. 编译(compilation)失败。');
  // });

  compiler.hooks.emit.tap(pluginName, (error) => {
    // console.dir(error);
    console.log('compiler.hooks.emit.tap xxxx. 自定义compiler.hooks.emit.tap xxxx。');
  });

  compiler.hooks.invalid.tap(pluginName, (error) => {
    // console.dir(error);
    console.log('compiler.hooks.invalid.tap invalid. 监听模式下，编译无效时。');
  });

  compiler.hooks.watchClose.tap(pluginName, () => {
    console.log('compiler.hooks.watchClose.tap watchClose. 监听模式停止。');
  });

  // console.dir(compiler);
  // console.dir(compiler.hooks.compilation);
	// compiler.plugin('done', function() {
	// 	console.log('Hello World!');
	// });

  compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
    // console.dir(compilation); 见console.dir.compilation.md
    // fs.writeFileSync(path.join(__dirname, '../../compilation.assets.md'), JSON.stringify(compilation, getCircularReplacer, 2));
    fs.writeFileSync(path.join(__dirname, '../../compiler.hooks.emit.tapAsync.compilation.md'), CircularJSON.stringify(compilation, null, 2));

    /**
     TypeError: Converting circular structure to JSON
    at JSON.stringify (<anonymous>)
    at compiler.hooks.emit.tapAsync (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/my-webpack-plugin/src/index.js:24:80)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:7:1)
    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/tapable/lib/Hook.js:35:21)
    at Compiler.emitAssets (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/webpack/lib/Compiler.js:364:19)
    at onCompiled (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/webpack/lib/Compiler.js:231:9)
    at hooks.afterCompile.callAsync.err (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/webpack/lib/Compiler.js:553:14)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:15:1)
    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/tapable/lib/Hook.js:35:21)
    at compilation.seal.err (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/webpack/lib/Compiler.js:550:30)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/tapable/lib/Hook.js:35:21)
    at hooks.optimizeAssets.callAsync.err (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/webpack/lib/Compilation.js:1294:35)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/tapable/lib/Hook.js:35:21)
    at hooks.optimizeChunkAssets.callAsync.err (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/webpack/lib/Compilation.js:1285:32)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/tapable/lib/Hook.js:35:21)
    at hooks.additionalAssets.callAsync.err (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/webpack/lib/Compilation.js:1280:36)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/tapable/lib/Hook.js:35:21)
    at hooks.optimizeTree.callAsync.err (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/webpack/lib/Compilation.js:1276:32)
    at AsyncSeriesHook.eval [as callAsync] (eval at create (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:6:1)
    at AsyncSeriesHook.lazyCompileHook [as _callAsync] (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/tapable/lib/Hook.js:35:21)
    at Compilation.seal (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/webpack/lib/Compilation.js:1213:27)
    at hooks.make.callAsync.err (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/webpack/lib/Compiler.js:547:17)
    at _err0 (eval at create (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/tapable/lib/HookCodeFactory.js:24:12), <anonymous>:11:1)
    at _addModuleChain (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/webpack/lib/Compilation.js:1064:12)
    at processModuleDependencies.err (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/webpack/lib/Compilation.js:980:9)
    at _combinedTickCallback (internal/process/next_tick.js:131:7)
     */
    // ref
    // 1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value
    // 2. https://stackoverflow.com/questions/11616630/json-stringify-avoid-typeerror-converting-circular-structure-to-json
    callback();
  });
};

module.exports = MyWebpackPlugin;
