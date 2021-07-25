## 安装
```
npm init -y 
yarn add webpack webpack-cli --save-dev 
```

## 结论
1、 npx webpack-cli plugin 会自己创建目录

2、 npx webpack-cli info     

```
➜ npx webpack-cli info     
npx: installed 50 in 3.84s

  System:
    OS: macOS 11.0.1
    CPU: (12) x64 Intel(R) Core(TM) i7-9750H CPU @ 2.60GHz
    Memory: 375.95 MB / 16.00 GB
  Binaries:
    Node: 12.18.2 - ~/.nvm/versions/node/v12.18.2/bin/node
    Yarn: 1.22.5 - /usr/local/bin/yarn
    npm: 6.14.8 - ~/.nvm/versions/node/v12.18.2/bin/npm
  Browsers:
    Chrome: 92.0.4515.107
    Chrome Canary: 94.0.4585.0
    Safari: 14.0.1
  Packages:
    webpack-defaults: ^4.0.0 => 4.0.0
```

3、npx webpack-cli t webpack.config.js 测试语法是否通过

## FAQs
### 如何用 typescript 写 webpack插件

## TODOs
- npx webpack-cli init 是 webpack4 的版本 ?
- webpack-inject-plugin 生成插件的模板 git@github.com:adierkens/webpack-inject-plugin.git

## 参考
- Getting Started | webpack [https://webpack.js.org/guides/getting-started/](https://webpack.js.org/guides/getting-started/)