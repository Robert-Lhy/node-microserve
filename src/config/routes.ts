import * as Router from 'koa-router'
import * as glob from 'glob'
import * as path from 'path'
// 获取项目controllers绝对路径
const controPath = path.join(__dirname, '../controllers')
// 通过glob同步获取路由文件
const files = glob.sync(`${controPath}/**/**s`)
// 加载扫描controllers
files.forEach(key => {
  import(key)
})
const router = new Router()
router.get('/heart.jsp', ctx => {
  ctx.body = 200
})
export default router
