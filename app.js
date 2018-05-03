const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');

app.use(async (ctx, next) => {
  if (ctx.request.path === '/') {
    console.log("hello nerd");
    ctx.response.body = `<h1>Hello, world!</h1> <script src="/index.js"></script>`;
  } else {
    await next();
  }
});
app.use(serve('public'));

app.listen(3000);
