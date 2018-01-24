# lab
代码实验室

## subtree ##

```
$ git remote add weex-vue-render https://github.com/weexteam/weex-vue-render.git
$ git subtree add --prefix=weex/weex-vue-render [https://github.com/weexteam/weex-vue-render.git|weex-vue-render] master --squash
$ git subtree pull --prefix=weex/weex-vue-render weex-vue-render master --squash
```