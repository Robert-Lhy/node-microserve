import router from '@/config/routes'
/**
 * @param {*} { prefix }
 * @returns
 */
function Controller(prefix: string): any {
  return (target: any) => {
    const descriptors = Object.getOwnPropertyDescriptors(target.prototype)
    const instance = new target()
    Object.keys(descriptors).forEach(key => {
      // 排除类的构造方法 constructor
      if (key !== 'constructor') {
        const interfaceFun = descriptors[key].value
        interfaceFun(router, prefix, instance)
      }
    })
  }
}
export default Controller
