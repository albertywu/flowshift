module.exports = {
  extends: [require.resolve('eslint-config-uber-base')],
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018
  }
};