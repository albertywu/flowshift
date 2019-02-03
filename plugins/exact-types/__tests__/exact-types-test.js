jest.autoMockOff();
const defineInlineTest = require('../../testUtils.js').defineInlineTest;
const transform = require('../exact-types.js');
transform.parser = 'flow';

describe('exact-types', () => {
  defineInlineTest(
    transform,
    {},
    `
  const Foo = {|
    bar: string
  |}
  `,
    `
  const Foo = {
    bar: string
  }
  `
  );
});

describe('exact-types (with nesting)', () => {
  defineInlineTest(
    transform,
    {},
    `
  const Foo = {|
    bar: string,
    baz: {|
      boo: number
    |}
  |}
  `,
    `
  const Foo = {
    bar: string,
    baz: {
      boo: number
    }
  }
  `
  );
});
