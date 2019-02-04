function multiSplice(str, replacements) {
  const numReplacements = replacements.length;
  const sortedReplacements = replacements.sort((a, b) => a.from - b.from)
  let result = str;
  let currIndex = numReplacements - 1;
  for (let i = 0; i < numReplacements; i++) {
    const { from, to, snippet } = sortedReplacements[currIndex]
    result = result.slice(0, from) + result.slice(to) // delete
    result =
      result.slice(0, from) + snippet + result.slice(from); // insert
    currIndex--;
  }
  return result;
}

module.exports = {
  multiSplice
}