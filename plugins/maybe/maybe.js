const {execSync} = require('child_process');
const exec = (cmd, options) => execSync(cmd, options).toString();

function transform(fileInfo, api, options) {
  return exec(`
  
  sed -E 's| \\?([a-zA-Z0-9]+)([\\)\\| \\|\\}])| \\1 \\| null \\| undefined\\2|g'
  
  `, {input: fileInfo.source});
}

module.exports = transform;