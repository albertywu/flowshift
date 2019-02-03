const {execSync} = require('child_process');
const exec = (cmd, options) => execSync(cmd, options).toString();

function transform(fileInfo, api, options) {
  return exec(`sed 's|{[|]|{|g' | sed 's|[|]}|}|g'`, {input: fileInfo.source});
}

module.exports = transform;
