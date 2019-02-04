const { multiSplice } = require('../utils')

function transform(fileInfo, api, options) {
  const j = api.jscodeshift;
  const ast = j(fileInfo.source); // returns fluent collection interface
  const replacements = [];
  ast.find(j.Variance, { kind: 'plus' }).forEach(p => {
    const [from, to] = p.value.range
    const replacement = {
      from,
      to,
      snippet: `readonly `
    }
    replacements.push(replacement);
  });
  return multiSplice(fileInfo.source, replacements);
}

module.exports = transform;
