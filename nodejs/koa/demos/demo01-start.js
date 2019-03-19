const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const path = require('path');

app.listen(3000);
// for(let i in app) {
//   console.log(i);
// }
// console.log(Object.keys(app));
// console.log(Object.keys(app.__proto__));

const content = `app: ${JSON.stringify(app, null, 2)},
app: ${JSON.stringify(Object.getOwnPropertyNames(app), null, 2)}
`
fs.writeFileSync(path.join(__dirname, 'koa/app.md'), content);
