const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const router = require('./controller/index')
// 使用ctx.body解析中间件
app.use(bodyParser())


app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is starting at port 3000')
})
