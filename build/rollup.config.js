import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import path from 'path'
import { getPackagesSync } from '@lerna/project'
import pkg from '../package.json'

const noHkPrefixFile = /(utils|directives|hooks|locale)/

// 获取输出的文件名，因为各个组件的报名都是以@hkust-ui/开头，所以需要去掉
const getOutFile = (name, dir='lib') => {
  const compName = name.split('@hkust-ui/')[1]
  if(noHkPrefixFile.test(name)) {
    return `${dir}/${compName}/index.js`
  }
  return `${dir}/hkust-${compName}/index.js`
}


const deps = Object.keys(pkg.dependencies)
const inputs = getPackagesSync()
  .map(pkg => pkg.name)
  .filter(name =>
    name.includes('@hkust-ui') &&
    !name.includes('utils'),
  )

// 构建packages文件夹下的组件
export default inputs.map(name => ({
  input: path.resolve(__dirname, `../packages/${name.split('@hkust-ui/')[1]}/index.ts`),
  output: [{
    format: 'es',
    file: getOutFile(name, 'es'),
    paths(id) {
      if (/^@hkust-ui/.test(id)) {
        if (noHkPrefixFile.test(id)) return id.replace('@hkust-ui', '..')
        return id.replace('@hkust-ui/', '../hkust-')
      }
    },
  },{
    format: 'cjs',
    file: getOutFile(name, 'lib'),
    exports: 'named',
    paths(id) {
      if (/^@hkust-ui/.test(id)) {
        if (noHkPrefixFile.test(id)) return id.replace('@hkust-ui', '..')
        return id.replace('@hkust-ui/', '../hkust-')
      }
    },
  }],
  plugins: [
    css(),
    vue({
      target: 'browser',
      css: false,
    }),
    nodeResolve(),
    esbuild(),
  ],
  external(id) {
    return /^vue/.test(id)
      || /^@hkust-ui/.test(id)
      || deps.some(k => new RegExp('^' + k).test(id))
  },
}))
