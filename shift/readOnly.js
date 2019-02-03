function transform(fileInfo, api, options) {
  const j = api.jscodeshift
  const ast = j(fileInfo.source) // returns fluent collection interface
  const locations = []
  ast.find(j.Variance, { kind: 'plus' }).forEach(p => {
    locations.push(p.value.range)
  })
  return multiSplice(fileInfo.source, locations, 'readonly ')
}

function multiSplice(str, replacementIndices, replacementString) {
  const numReplacements = replacementIndices.length
  let result = str
  let currIndex = numReplacements - 1
  for (let i = 0; i < numReplacements; i++) {
    const [start, end] = replacementIndices[currIndex]
    result = result.slice(0, start) + replacementString + result.slice(start + 1)
    currIndex--
  }
  return result
}

module.exports = transform