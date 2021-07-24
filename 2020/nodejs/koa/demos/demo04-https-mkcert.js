const http = require('http');
const https = require('https');
const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const path = require('path')

const main = ctx => {
  ctx.response.body = 'Hello https mkcert';
};

app.use(main);

// https://github.com/FiloSottile/mkcert
var certOptions = {
  key: fs.readFileSync(path.join(__dirname, 'mkcert/example.com+5-key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'mkcert/example.com+5.pem'))
}

https.createServer(certOptions, app.callback()).listen(443);
