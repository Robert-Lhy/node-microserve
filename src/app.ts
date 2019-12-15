import './alias'
import { Router, middlewares } from './config'
console.log(process.env.NODE_ENV, '当前环境')
import * as koa from 'koa'
import * as bodyparser from 'koa-bodyparser'
import * as path from 'path'
import authentication from './auth'
import * as Views from 'koa-views'
import '@db'
const app = new koa()

// 初始化mysql链接信息
app.use(bodyparser())
app.use(authentication())
app.use(
  Views(path.join(__dirname, './template'), {
    extension: 'ejs',
    autoRender: false
  })
)
// 加载路由
app.use(Router.routes())
app.use(Router.allowedMethods())
// 加载中间件
middlewares.forEach(fn => {
  app.use(fn())
})
const PORT: string | number = process.env.NODE_PORT || 3300
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
