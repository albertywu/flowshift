function transform(fileInfo, api, options) {
  const j = api.jscodeshift;
  const ast = j(fileInfo.source); // returns fluent collection interface
  const fileToImportCount = {};
  const fileToSpecifiers = {};

  ast.find(j.ImportDeclaration, { importKind: 'type' }).forEach(p => {
    p.node.importKind = null
  })

  ast.find(j.ImportSpecifier, { importKind: 'type' }).forEach(p => {
    p.node.importKind = null
  })

  return ast.toSource()
}

module.exports = transform;
