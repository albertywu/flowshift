jest.autoMockOff();
const defineInlineTest = require('../../testUtils.js').defineInlineTest;
const transform = require('../generic-bounds.js');
transform.parser = 'flow';

describe('generic bounds with object literal types', () => {
  defineInlineTest(
    transform,
    {},
    `function foo<X: string, Y: { foo: number }>(x: X): X {
      return x
    }
  `,
    `
    function foo<X extends string, Y extends { foo: number }>(x: X): X {
      return x
    }
  `
  )
})