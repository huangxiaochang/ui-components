// gen a component template
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

const baseDir = path.resolve(__dirname, '../packages/')

function dirExists(filePath) {
  try {
    return fs.statSync(filePath).isDirectory()
  } catch (err) {
    return false
  }
}

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile()
  } catch (err) {
    return false
  }
}

// get component name
const args = process.argv.splice(2)
let compName = args[0]

// normalize component name to kebab-case
var validName = /^[a-zA-Z]+([-_][A-Za-z]+)*/
var reg = /[_A-Z]/g

if (!validName.test(compName)) {
  throw 'component name invalid'
}

compName = compName.replace(reg, function(m) {
  if (/[A-Z]/.test(m)) {
    return `-${m.toLowerCase()}`
  } else {
    return '-'
  }
})

const dirName = path.join(baseDir, compName)
if (dirExists(dirName)) {
  throw 'component already exists'
}

let NAME = compName.replace(/(^[a-z])|(-[a-z])/g, function(ch) {
  return ch.length > 1 ? ch[1].toUpperCase() : ch.toUpperCase()
})

const testDir = path.join(dirName, '__test__')
const srcDir = path.join(dirName, 'src')
// create dir
fs.mkdirSync(dirName)
fs.mkdirSync(testDir)
fs.mkdirSync(srcDir)

// entry of component
const entryPath = path.join(dirName, 'index.ts')
const entryContent = `import { App } from 'vue'
import type { SFCWithInstall } from '@hkust-ui/utils/types'
import ${NAME} from './src/index.vue'

${NAME}.install = (app: App): void => {
  app.component(${NAME}.name, ${NAME})
}

const _${NAME}: SFCWithInstall<typeof ${NAME}> = ${NAME}

export default _${NAME}`

if (fileExists(entryPath)) {
  throw 'file index.ts already exists'
}

fs.writeFile(entryPath, entryContent, function (err) {
  if (err) throw err
})

// package.json for component
const pkgPath = path.join(dirName, 'package.json')
const pkgContent = `{
  "name": "@hkust-ui/${compName}",
  "version": "0.0.0",
  "main": "dist/index.js",
  "license": "MIT",
  "peerDependencies": {
    "vue": "3.1.4"
  },
  "devDependencies": {
    "@vue/test-utils": "^2.0.0-beta.3"
  }
}`

if (fileExists(pkgPath)) {
  throw 'file package.json already exists'
}

fs.writeFile(pkgPath, pkgContent, function (err) {
  if (err) throw err
})

// component
const compPath = path.join(srcDir, 'index.vue')
const compContent = `<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
  name: 'Hkust${NAME}',
  props: { },
  setup(props) {
    
  },
})
</script>`

if (fileExists(compPath)) {
  throw 'file package.json already exists'
}

fs.writeFile(compPath, compContent, function (err) {
  if (err) throw err
})

// test case for component
const testPath = path.join(testDir, `${compName}.spec.ts`)
const testContent = `import { mount } from '@vue/test-utils'
import ${NAME} from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('${NAME}.vue', () => {
  test('render test', () => {
    const wrapper = mount(${NAME}, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})`
if (fileExists(testPath)) {
  throw 'file package.json already exists'
}

fs.writeFile(testPath, testContent, function (err) {
  if (err) throw err
})

console.log(`component had created in ${dirName}`)

