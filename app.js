const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');

app.use(async ctx => {
  console.log("hello tag8");
  ctx.body = 'Hello World tag8';
});
app.use(serve('public'));

app.listen(3000);



