import * as glob from 'glob'
import * as path from 'path'
const paths = path.join(__dirname, '../middleware')
// 通过glob同步获取路由文件
const files = glob.sync(`${paths}/**s`)
const middlewares = []
files.forEach(key => {
  const { default: fn } = require(key)
  middlewares.push(fn)
})
export default middlewares
