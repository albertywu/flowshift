jest.autoMockOff();
const defineInlineTest = require('../../testUtils.js').defineInlineTest;
const transform = require('../read-only.js');
transform.parser = 'flow';

describe('read-only', () => {
  defineInlineTest(
    transform,
    {},
    `
  type Foo = { +bar: string }
  const x: Foo = { bar: 'baz' }
  `,
    `
  type Foo = { readonly bar: string }
  const x: Foo = { bar: 'baz' }
  `
  );
});
