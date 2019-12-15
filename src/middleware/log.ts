import { Context } from 'koa'
/**
 * @description 日志打印log
 * @date 2019-11-13
 * @export
 * @returns
 */
export default function filter() {
  return async (ctx: Context, next: Function) => {
    const reqParams = (ctx.request as any).body || ctx.query
    console.log('请求参数', JSON.stringify(reqParams))
    console.log('返回参数', JSON.stringify(ctx.body))
    await next()
  }
}
