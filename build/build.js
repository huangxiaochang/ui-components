/* eslint-disable */
const pkg = require('../package.json')
const path = require('path')
const css = require('rollup-plugin-css-only')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const vue = require('rollup-plugin-vue')
const rollup = require('rollup')
const typescript = require('rollup-plugin-typescript2')
const { noHkustPrefixFile } = require('./common');

const deps = Object.keys(pkg.dependencies)

const root = path.resolve(__dirname, '..');

const defaultOpts = {
  plugins: [
    nodeResolve(),
    css(),
    vue({
      target: 'browser',
      css: false,
    }),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: false,
        },
        'exclude': [
          'node_modules',
          '__tests__',
        ],
      },
      abortOnError: false,
    }),
  ],
  external(id) { // 检测是否是一个外部的依赖
    return /^vue/.test(id)
      || /^@hkust-ui/.test(id)
      || deps.some(k => new RegExp('^' + k).test(id))
  },
}

// 是否是element-plus的包
const isPkg = (id) => {
  return id.startsWith('@hkust-ui')
}
// /(utils|directives|hooks|locale)/
// 是否是排除的工具类，指令，hooks,语言包
const isExcluded = (id) => {
  return noHkustPrefixFile.test(id)
}

// 把@element-plus/ 前缀替换成 ./ 或者../, ./el-, ../el-
const replacePrefix = (prefix, target) => {
  return prefix + target.slice(14) // @element-plus/.length = 14
}

/* 运行一个build任务
@params name 构建输出的文件名
@params input 入口
*/
const run = async (name, input, isRoot = false) => {
  const inputPath = `${path.resolve(root, input)}/index.ts`
  defaultOpts.input = inputPath

  const getPaths = (id) => {
    if (isPkg(id)) {
      if (isExcluded(id)) return replacePrefix(isRoot ? './' : '../', id)
      return replacePrefix(isRoot ? './hkust-' : '../hkust-', id)
    }
  }
  const esm = {
    format: 'es',
    file: `es/${name}`,
    paths: getPaths,
  };
  const cjs = {
    format: 'cjs', //输出的格式
    file: `lib/${name}`, // 输出的文件名
    paths: getPaths, // 输出的路径
    exports: 'named',
  };
  // 使用rollup进行打包
  const bundle = await rollup.rollup(defaultOpts);
  await Promise.all([bundle.write(esm), bundle.write(cjs)])
  console.log(name, 'build finished');
}

module.exports = run;
