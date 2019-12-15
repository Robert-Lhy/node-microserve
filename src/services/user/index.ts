import BaseService from '@utils/BaseService'
import UserMapper from '@mappers/user'
import User from '@/@types/user'
/**
 * @date 2019-11-13
 * @export
 * @class TestService
 * @extends {BaseService}
 */
export default class TestService extends BaseService {
  constructor() {
    super()
  }
  /**
   *
   *
   * @date 2019-12-04
   * @returns {Promise<User[]>}
   * @memberof TestService
   */
  public async getUsers(): Promise<User[]> {
    const list = await UserMapper.findAll({
      where: {},
      order: [['created', 'DESC']],
      offset: 0,
      limit: 10
    })
    return list
  }
  /**
   *
   *
   * @date 2019-12-04
   * @param {User} user
   * @returns {Promise<number>}
   * @memberof TestService
   */
  public async saveUser(user: User): Promise<number> {
    const data = await UserMapper.create(user)
    return data.id
  }
  /**
   * @date 2019-12-05
   * @param {*} { id } 删除的ID
   * @returns {Promise<number>}
   * @memberof TestService
   */
  async delete({ id }: any): Promise<number> {
    return await UserMapper.destroy({
      where: {
        id
      }
    })
  }
  /**
   * @date 2019-12-05
   * @returns {Promise<number>}
   * @memberof TestService
   */
  async count(): Promise<number> {
    return UserMapper.count()
  }
}
