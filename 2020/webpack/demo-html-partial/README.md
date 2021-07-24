### 碰到问题 ###
```
ERROR in ./main.css
Module build failed: ModuleParseError: Module parse failed: Unexpected token (1:5)
You may need an appropriate loader to handle this file type.
| body {
|   background: snow;
| }
    at doBuild.e (/Users/huixisheng/x/lab/webpack/demo-html-partial/node_modules/webpack/lib/NormalModule.js:303:19)
    at runLoaders (/Users/huixisheng/x/lab/webpack/demo-html-partial/node_modules/webpack/lib/NormalModule.js:209:11)
    at /Users/huixisheng/x/lab/webpack/demo-html-partial/node_modules/loader-runner/lib/LoaderRunner.js:370:3
    at iterateNormalLoaders (/Users/huixisheng/x/lab/webpack/demo-html-partial/node_modules/loader-runner/lib/LoaderRunner.js:211:10)
    at /Users/huixisheng/x/lab/webpack/demo-html-partial/node_modules/loader-runner/lib/LoaderRunner.js:202:4
    at /Users/huixisheng/x/lab/webpack/demo-html-partial/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:70:14
    at _combinedTickCallback (internal/process/next_tick.js:73:7)
    at process._tickCallback (internal/process/next_tick.js:104:9)
 @ ./main.css
 @ ./index.js

ERROR in ./main.css
Module parse failed: Unexpected token (1:5)
You may need an appropriate loader to handle this file type.
| body {
|   background: snow;
| }
 @ ./main.css 4:14-37
 @ ./index.js
```

```
    use: ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: "css-loader"
    })
    // loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
```