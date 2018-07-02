const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  console.log("hello tag6");
  ctx.body = 'Hello World tag6';
});

app.listen(3000);
