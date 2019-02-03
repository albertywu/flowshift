jest.autoMockOff();
const defineInlineTest = require('../../testUtils.js').defineInlineTest;
const transform = require('../read-only.js');

describe('read-only', () => {
  defineInlineTest(transform, {}, `
  type Foo = { +bar: string, baz: number, +boo: string }
  `, `
  type Foo = { readonly bar: string, baz: number, readonly boo: string }
  `)
})

