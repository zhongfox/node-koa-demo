const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');

app.use(async ctx => {
  console.log("hello tag11");
  ctx.body = 'Hello World tag11';
});
app.use(serve('public'));

app.listen(3000);



