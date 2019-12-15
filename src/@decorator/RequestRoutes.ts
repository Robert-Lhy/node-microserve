import { Context } from 'koa'
import RequestTypes from './RequestTypes'
/**
 * 服务启动时会自动扫描controllers层，会自动加载对应的每个方法注解的decorator
 * 会通过koa.use(router) 注册进路由
 * @param {string} path 路由请求地址
 * @param {*} enumType http协议请求method
 * @returns
 */
function RequestRoutes(path: string, enumType: any) {
  return (target: any, propertyKey: string, descriptor: any) => {
    const instance = descriptor.value
    /**
     * @param route controllers层代理分配全局的router
     * @param prefix 整个controllers 的路由前缀
     */
    descriptor.value = (route: any, prefix: string, ob: any) => {
      // 获取枚举类型
      const method: string = RequestTypes[enumType].toLowerCase()
      const url = `${prefix || ''}/${path}`.replace('//', '/')
      if (url.includes('//')) {
        throw new Error(`controllers path not allow "${url}"`)
      }
      // 注册路由
      route[method](url, async (ctx: Context, next: Function) => {
        let data = {}
        if (method === 'GET') {
          data = ctx.query
        } else {
          data = (ctx.request as any).body
        }
        const { clientId } = ctx.headers
        ctx.body = await instance.bind(ob)({ ...data, clientId }, ctx)
        next()
      })
    }
  }
}

export default RequestRoutes
