jest.autoMockOff();
const defineInlineTest = require('../../testUtils.js').defineInlineTest;
const transform = require('../fix-imports.js');
transform.parser = 'flow';

describe('exact-types', () => {
  defineInlineTest(
    transform,
    {},
    `
  import type Foo, { Bar, type Baz } from 'foo';
  `,
    `
  import Foo, { Bar, Baz } from 'foo';
  `
  );
});
