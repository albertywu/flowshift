const { multiSplice } = require('../utils')

function transform(fileInfo, api, options) {
  const j = api.jscodeshift;
  const ast = j(fileInfo.source); // returns fluent collection interface
  const replacements = []
  ast.find(j.TypeParameterDeclaration).forEach(p => {
    const boundedParams = p.value.params.filter(param => param.bound !== null)
    j(boundedParams).forEach(bp => {
      const [from, to] = bp.value.range
      const replacement = {
        from,
        to,
        snippet: `${bp.value.name} extends ${j(bp.value.bound.typeAnnotation).toSource()}`
      }
      replacements.push(replacement)
    })
  })

  return multiSplice(
    fileInfo.source,
    replacements
  )
}

module.exports = transform;
