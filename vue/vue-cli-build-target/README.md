# vue-cli-build-target

## 相关issue ##

配置了`vue.config.js`.
```
module.exports = {
  // https://webpack.docschina.org/configuration/output/
  // 指定了public/index.html就用该模板
  // 相关配置可以阅读 https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-service/lib/commands/build
  // https://cli.vuejs.org/zh/config/#configurewebpack
  // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
  configureWebpack: {
    output: {
      libraryExport: 'default',
      // cli的优先级更高些
      // library: 'MyAppXX',
    },
    // dist/myLib.css：提取出来的 CSS 文件 (可以通过在 vue.config.js 中设置 css: { extract: false } 强制内联)
    // delete config.entry.app;
    // config.entry.index = './index.js';
  },
  css: {
    extract: false,
    loaderOptions: {
      postcss: {
        plugins: [require('autoprefixer')({})]
      },
    },
  },
};
```

执行
```
"build": "./node_modules/.bin/vue-cli-service build index.js --target=lib",
"build:vue": "./node_modules/.bin/vue-cli-service build src/App.vue --target=lib",
```
跟我想的预期不一致.

- [Can the build target set the library name and file name separately? #1973](https://github.com/vuejs/vue-cli/issues/1973)
- [fix: --target lib/wc should overwrite user entry/output](https://github.com/vuejs/vue-cli/commit/92e136a42125715b65dc89c3f0a1ae49d36a51f5)
- [Project-based Webpack config is overwritten by lib configuration under --target lib #1252](https://github.com/vuejs/vue-cli/issues/1252)

css.extract= false. build autoprefixer 无效
- https://github.com/vuejs/vue-cli/issues/1504 https://twitter.com/MartinPeverelli/status/1004535995595939842
- https://github.com/vuejs/vue-loader/issues/234
- https://github.com/vuejs-templates/webpack/issues/502
- https://github.com/vuejs/vue-cli/issues/2303
- https://github.com/vuejs/vue-cli/issues/852
- https://github.com/vuejs/vue-cli/issues/350
