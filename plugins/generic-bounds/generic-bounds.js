function transform(fileInfo, api, options) {
  return fileInfo.source.replace(/<(.*)>/g, (match, body) => {
    return [
      '<',
      body
        .split(',')
        .map(atom =>
          atom.replace(/(.*):(.*)/g, (match, left, right) => {
            return [left.trim(), ' extends ', right.trim()].join('');
          })
        )
        .join(', '),
      '>',
    ].join('');
  });
}

module.exports = transform;
