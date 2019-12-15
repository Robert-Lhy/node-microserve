import { Sequelize, QueryTypes } from 'sequelize'
import debug from '@utils/debug'
import * as path from 'path'
import * as fs from 'fs'
import * as yaml from 'yamljs'
const env = process.env.NODE_ENV
const filePath = path.join(__dirname, './config.yaml')
const yamlConfig = yaml.parse(fs.readFileSync(filePath).toString())
debug('db', yamlConfig[env])
const { pool, timezone, host, ...envConfig } = yamlConfig[env]
const sequelize = new Sequelize(
  envConfig.database,
  envConfig.username,
  envConfig.password,
  {
    dialect: 'mysql',
    pool,
    timezone,
    host
  }
)
sequelize
  .authenticate()
  .then(() => {
    console.log(`数据库链接成功`)
  })
  .catch((err: Error) => {
    throw err
  })

/**
 * @description 执行sql语句
 * @date 2019-01-29
 * @param {string} sql
 * @returns {Promise<any>}
 */
function querySql(sql: string): Promise<any> {
  debug('', sql)
  return new Promise((resolve, reject) => {
    sequelize.query(sql, { type: QueryTypes.SELECT }).then((res: any) => {
      resolve(res)
    })
  })
}

export { sequelize, querySql }
