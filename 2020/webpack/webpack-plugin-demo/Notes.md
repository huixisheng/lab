➜  simple git:(master) ✗ webpack --mode=development
(node:21081) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
Hello World!
Hash: 98f9ba480da2363d037c
Version: webpack 4.17.1
Time: 164ms
Built at: 2018-08-25 00:54:37
        Asset       Size  Chunks             Chunk Names
main.chunk.js   9.18 KiB    main  [emitted]  main
   0.chunk.js  511 bytes       0  [emitted]
Entrypoint main = main.chunk.js
[./src/index.js] 227 bytes {main} [built]
[./src/lazy-module.js] 23 bytes {0} [built]
[./src/static-esm-module.js] 22 bytes {main} [built]


➜  webpack-plugin-demo git:(master) ✗ webpack-cli generate-plugin
/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/webpack-cli/bin/prompt-command.js:108
        require(pathForCmd).default(...args); // eslint-disable-line


- https://github.com/webpack/tapable/issues/56
- https://github.com/webpack/tapable/blob/master/lib/Tapable.js#L67
(node:24732) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
                                   ^

TypeError: require(...).default is not a function
    at promptForInstallation (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/webpack-cli/bin/prompt-command.js:108:30)
    at /Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/webpack-cli/bin/cli.js:45:37
    at Object.<anonymous> (/Users/huixisheng/x/lab/webpack/webpack-plugin-demo/node_modules/webpack-cli/bin/cli.js:530:3)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)

- https://webpack.docschina.org/contribute/writing-a-plugin/#%E5%88%9B%E5%BB%BA%E6%8F%92%E4%BB%B6

compiler 和 compilation
在插件开发中最重要的两个资源就是 compiler 和 compilation 对象。理解它们的角色是扩展 webpack 引擎重要的第一步。

compiler 对象代表了完整的 webpack 环境配置。这个对象在启动 webpack 时被一次性建立，并配置好所有可操作的设置，包括 options，loader 和 plugin。当在 webpack 环境中应用一个插件时，插件将收到此 compiler 对象的引用。可以使用 compiler 来访问 webpack 的主环境。

compilation 对象代表了一次资源版本构建。当运行 webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 compilation，从而生成一组新的编译资源。一个 compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。compilation 对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。

这两个组件是任何 webpack 插件不可或缺的部分（特别是 compilation），因此，开发者在阅读源码，并熟悉它们之后，会感到获益匪浅：
