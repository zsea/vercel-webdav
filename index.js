const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello Vercel, Hi Koa2';
});

const port = Number(options.port || process.env.PORT || '3000')
app.listen(port, () => {
    console.log('3008项目启动')
});