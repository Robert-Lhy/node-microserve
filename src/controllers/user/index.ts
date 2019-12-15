import { RequestRoutes, RequestTypes, Controller } from '@decorator'
import Services from '@/services/user'
import User from '@/@types/user'
import BaseControllers from '@utils/BaseControllers'
import { Context } from 'koa'

const service = new Services()
/**
 * @date 2019-12-03
 * @export
 * @class Login
 * @extends {BaseControllers}
 */
@Controller('/user')
export default class Users extends BaseControllers {
  // constructor() {
  //   super()
  // }
  /**
   *
   *
   * @date 2019-11-18
   * @returns
   * @memberof Login
   */
  @RequestRoutes('/list', RequestTypes.GET)
  async getUsers(data: any, ctx: Context) {
    const records = await service.getUsers()
    const count = await service.count()
    const users = this.success({ records, count })
    const html = await ctx.render('index.ejs', {
      users
    })
    return html
  }
  @RequestRoutes('/save', RequestTypes.POST)
  async save(user: User, ctx: Context) {
    return this.success(await service.saveUser(user))
  }
  /**
   * @description 删除成员
   * @date 2019-12-04
   * @param {*} data
   * @memberof Users
   */
  @RequestRoutes('/delete', RequestTypes.DELETE)
  async delete(data: any) {
    return service.delete(data)
  }
}
