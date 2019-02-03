
const { execSync } = require('child_process')
const exec = (cmd, options) => execSync(cmd, options).toString()

function transform(fileInfo, api, options) {
  return fileInfo.source.replace(/<(.*):(.*)>/g, "<$1 extends $2>")
}

module.exports = transform