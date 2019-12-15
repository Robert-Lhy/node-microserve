export default class BaseController {
  constructor() {}
  success(data: any) {
    return {
      data,
      code: 0
    }
  }
  error(msg: string) {}
}
