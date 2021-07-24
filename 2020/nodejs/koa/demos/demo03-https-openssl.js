const http = require('http');
const https = require('https');
const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const path = require('path')

const main = ctx => {
  ctx.response.body = 'Hello World';
};

app.use(main);

var certOptions = {
  key: fs.readFileSync(path.join(__dirname, 'local-cert-generator/server.key')),
  cert: fs.readFileSync(path.join(__dirname, 'local-cert-generator/server.crt'))
}

// http.createServer(app.callback()).listen(3000);
https.createServer(certOptions, app.callback()).listen(443);
// https://github.com/dakshshah96/local-cert-generator/