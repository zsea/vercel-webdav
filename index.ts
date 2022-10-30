import Koa from "koa"
const app:Koa = new Koa();

app.use(async ctx => {
    ctx.body = `Hello,${Date.now()},${ctx.request.path}`;
});

app.listen(3008, () => {
    console.log('3008项目启动')
});