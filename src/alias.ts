import * as alias from 'module-alias'
import * as path from 'path'
const resolve = (file: string): string => path.resolve(__dirname, `./${file}`)
const aliases = {
  '@services': resolve('services'),
  '@decorator': resolve('@decorator'),
  '@config': resolve('config'),
  '@environment': resolve('environment'),
  '@db': resolve('db'),
  '@utils': resolve('utils'),
  '@mappers': resolve('db/mappers'),
  '@types': resolve('@types'),
  '@': resolve('')
}
alias.addAliases(aliases)
