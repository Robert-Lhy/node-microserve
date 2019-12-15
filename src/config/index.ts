import Router from './routes'
import middlewares from './middleware'
if (process.env.npm_config_config) {
  const current = require(process.env.npm_config_config)
  if (current && current.server) {
    console.log('配置信息：', JSON.stringify(current.server))
    const { env, port } = current.server
    process.env.NODE_ENV = (env as string).split('-')[1]
    process.env.NODE_PORT = port
  }
}
export { Router, middlewares }
