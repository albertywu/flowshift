function transform(fileInfo, api, options) {
  const j = api.jscodeshift
  const ast = j(fileInfo.source) // returns fluent collection interface

  const transformers = [
    convertCovariantSigils,
    stripExactObjectTypes
  ]

  transformers.forEach(t => t())

  function convertCovariantSigils() {
    ast.find(j.Variance, { kind: 'plus' }).forEach(p => {
      p.value.kind = 'minus'
      console.log(Object.keys(p))
    })
  }

  function stripExactObjectTypes() {
    ast.find(j.ObjectTypeAnnotation, { exact: true }).forEach(p => {
      p.value.exact = false
      p.value.inexact = true
    });
  }

  return ast.toSource({
    flowObjectCommas: true,
    quote: 'single'
  })
}

module.exports = transform