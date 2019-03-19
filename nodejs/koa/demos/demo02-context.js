const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const path = require('path');
const { writeFile } = require('./common');

const main = ctx => {
  writeFile('ctx.md', ctx);
  ctx.response.body = 'Hello World';
};

app.use(main);

app.listen(3000);