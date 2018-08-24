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