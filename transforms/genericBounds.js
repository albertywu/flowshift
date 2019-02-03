function transform(fileInfo, api, options) {
  return fileInfo.source.replace(/<(.*):(.*)>/g, '<$1 extends $2>');
}

module.exports = transform;
