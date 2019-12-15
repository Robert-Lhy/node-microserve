## 应用简介
edecker-microserve 是一款轻量级的nodejs应用，面向切面开发，可以以灵活的方式扩展你的业务。
项目结构
```

├── pm2.config.js     // 用于PM2启动服务
├── package.json
├── src
│   ├── middleware    // 配置项目中间件，以及拦截器
│   ├── controllers   // 接口API定义层
│   ├── db            // 业务模型定义
│   ├── auth          // 接口请求鉴权
│   ├── @decorator    // 配置接口路径以及隐射API
│   ├── @types        // ts类型接口定义
│   ├── app.ts        // 启动文件
│   └── services      // 业务处理层
├── tsconfig.json
└── tslint.json
```

启动项目

```
npm run serve
```

编译

```
npm run ci
```

配置项目模块别名

```
// 在项目src/alias.ts 文件中添加如下配置
const aliases = {
  '@services': resolve('services')
}
```

配置项目路由

```
// 在项目src/controllers目录下添加，对应的路由模块
@Controller('/xxx')
export default class Login {
  constructor() {}
  /**
   * @param {*} ctx
   * @param {Function} next
   * @memberOf Login
   */
  @RequestRoutes('/api/xxx', RequestTypes.GET)
  async out(data: any, ctx: Context) {
    return 'msg...'
  }
}
```
