const fs = require('fs')
const path = require('path')
// get version
const args = process.argv.splice(2)
let version = args[0]

console.log(version)

if (!version) {
  throw 'not found version!'
}

const vue_reg = /\"vue\":\s*\"(\^?)[0-9]\.[0-9]\.[0-9].*\"/g

function upgrade (file) {
  let pkg = fs.readFileSync(file)
  let data = pkg.toString()
  data = data.replace(vue_reg, (_, up) => {
    return `"vue": "${up}${version}"`
  })

  fs.writeFileSync(file, data, function (err) {
    if (err) throw err
  })
}

// upgrade packages

let files = fs.readdirSync(path.join(__dirname, '../packages'));
for (let file of files) {
  upgrade(path.join(__dirname, '../packages', file, 'package.json'))
}

// upgrade dc.sh gen-comp.js
upgrade(path.join(__dirname, '../scripts/gc.sh'))
upgrade(path.join(__dirname, './gen-comp.js'))

// upgrade root package.json

upgrade(path.join(__dirname, '../package.json'))
