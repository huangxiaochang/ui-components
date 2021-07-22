/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const tagVer = process.env.TAG_VERSION
// 获取目标的版本，来源命令行参数或根目录的package中的version
if (tagVer) {
  version = tagVer.startsWith('v') ? tagVer.slice(1) : tagVer
} else {
  version = require('../package.json').version
}
// 更新组件入口的版本
fs.writeFileSync(
  path.resolve(__dirname, '../packages/hkust-ui/version.ts'),
  `export const version = '${version}'
`,
)
