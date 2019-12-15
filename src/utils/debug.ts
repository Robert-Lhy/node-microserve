const debug = require('debug')
import * as _ from 'lodash'
import * as moment from 'moment'
moment.locale('zh-cn')
/**
 * @description 日志打印
 * @date 2019-05-27
 * @param {*} logInfo 打印信息
 * @param {string} [namespace] 模块名称
 */
function Debug(namespace: string, logInfo: any) {
  const msg = {
    pid: process.pid,
    date: moment().format('LLLL'),
    msg: logInfo
  }
  debug(`serve:${namespace}`)(msg)
}

export default Debug
