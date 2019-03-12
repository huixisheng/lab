TypeScript 一些例子
---

## 安装 ##
```
$ npm install -g typescript
```

## 笔记 ##
1. 报错会生成
2. tsc --pretty
3. Duplicate function implementation  https://github.com/Microsoft/TypeScript/issues/24925
4. tyconfig.json outDir 无效

```
Using tsconfig.json
By invoking tsc with no input files, in which case the compiler searches for the tsconfig.json file starting in the current directory and continuing up the parent directory chain.
By invoking tsc with no input files and a --project (or just -p) command line option that specifies the path of a directory containing a tsconfig.json file, or a path to a valid .json file containing the configurations.
When input files are specified on the command line, tsconfig.json files are ignored.

https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
- https://stackoverflow.com/questions/45661027/typescript-outdir-setting-in-tsconfig-json-not-working
```
