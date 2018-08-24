# lab
> 用于开发新技术的代码实验室


## subtree ##
> 集成部分开源项目，方便源码阅读

```
$ git remote add weex-vue-render https://github.com/weexteam/weex-vue-render.git
$ git subtree add --prefix=weex/weex-vue-render [https://github.com/weexteam/weex-vue-render.git|weex-vue-render] master --squash
$ git subtree pull --prefix=weex/weex-vue-render weex-vue-render master --squash
```