/* eslint-disable */
const pkg = require('../package.json')
const path = require('path')
const { getPackages } =  require('@lerna/project')
const css = require('rollup-plugin-css-only')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const vue = require('rollup-plugin-vue')
const rollup = require('rollup')
const typescript = require('rollup-plugin-typescript2')
const { noHkustPrefixFile } = require('./common')

const deps = Object.keys(pkg.dependencies)

// 单独构建每一个组件（按需引入的基础）

const runBuild = async () => {
  let index = 0
  const pkgs = await getPackages()
  const inputs = pkgs
    .map(pkg => pkg.name)
    .filter(name =>
      name.includes('@hkust-ui') &&
      !name.includes('utils'),
    ).slice(process.argv[2], process.argv[3])

  build(inputs[index])

  async function build(name) {
    if (!name) return
    // 输入配置
    const inputOptions = {
      input: path.resolve(__dirname, `../packages/${name.split('@hkust-ui/')[1]}/index.ts`),
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
              declaration: false, // 是否输出.d.ts声明文件， 默认为true
            },
            'exclude': [
              'node_modules',
              '__tests__',
            ],
          },
          abortOnError: false,
        }),
      ],
      external(id) {
        return /^vue/.test(id)
          || /^@hkust-ui/.test(id)
          || deps.some(k => new RegExp('^' + k).test(id))
      },
    }
    // 生成输出的文件名
    const getOutFile = () => {
      const compName = name.split('@hkust-ui/')[1]
      if(noHkustPrefixFile.test(name)) {
        return `lib/${compName}/index.js`
      }
      return `lib/hkust-${compName}/index.js`
    }
    // 输出配置
    const outOptions = {
      format: 'es',
      file: getOutFile(),
      paths(id) {
        if (/^@hkust-ui/.test(id)) {
          if (noHkustPrefixFile.test(id)) return id.replace('@hkust-ui', '..')
          return id.replace('@hkust-ui/', '../hkust-')
        }
      },
    }

    const bundle = await rollup.rollup(inputOptions)
    console.log(name, 'done')
    await bundle.write(outOptions)
    index++
    if (index < inputs.length) {
      await build(inputs[index])
    }
  }
}

runBuild()
