const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  console.log("hello nerd");
  console.log("who is nerd?");
  ctx.body = 'Hello World tag6';
});

app.listen(3000);
