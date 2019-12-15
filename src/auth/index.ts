import { Context } from 'koa'
import axios from 'axios'
import * as yaml from 'yamljs'
import * as fs from 'fs'
import * as path from 'path'

const filePath = path.join(__dirname, './config.yaml')
const authConfig = yaml.parse(fs.readFileSync(filePath).toString())

/**
 * @description 对每一条请求进行鉴权
 * @date 2019-12-03
 */
export default function() {
  return async (ctx: Context, next: any) => {
    const allowPaths = ['/heart.jsp', '/favicon.ico']
    console.log(`request path: ${ctx.path}`)
    if (allowPaths.includes(ctx.path)) {
      next()
      return
    }
    try {
      const { data } = await axios.get(authConfig[process.env.NODE_ENV], {
        headers: {
          Authorization: `${ctx.headers['authorization'] ||
            ctx.cookies.get('authorization')}`
        }
      })
      console.log(`身份认证成功！clientid: ${data.principal}`)
      ctx.headers.clientId = data.principal
      await next()
    } catch (err) {
      const errMsg = (err as Error).message
      if (errMsg.includes('401')) {
        ctx.throw(401, errMsg)
      } else {
        ctx.throw(500, errMsg)
      }
    }
  }
}
