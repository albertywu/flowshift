function transform(fileInfo, api, options) {
  const j = api.jscodeshift;
  const ast = j(fileInfo.source); // returns fluent collection interface
  const fileToImportCount = {};
  const fileToSpecifiers = {};

  ast.find(j.ImportDeclaration).forEach(p => {
    const file = p.value.source.value;
    if (!(file in fileToSpecifiers)) {
      fileToSpecifiers[file] = [];
    }
    fileToSpecifiers[file] = [...fileToSpecifiers[file], ...p.value.specifiers];

    if (!(file in fileToImportCount)) {
      fileToImportCount[file] = 0;
    } else {
      p.prune();
    }
    fileToImportCount[file] += 1;
  });

  Object.keys(fileToImportCount).map(file => {
    if (fileToImportCount[file] > 1) {
      ast.find(j.ImportDeclaration, {source: {value: file}}).forEach(p => {
        p.value.specifiers = fileToSpecifiers[file];
      });
    }
  });

  return ast.toSource();
}

module.exports = transform;
