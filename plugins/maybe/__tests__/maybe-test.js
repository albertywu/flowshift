jest.autoMockOff();
const defineInlineTest = require('../../testUtils.js').defineInlineTest;
const transform = require('../maybe.js');
transform.parser = 'flow';

describe('maybe types', () => {
  defineInlineTest(
    transform,
    {},
    `
  function foo(x: ?string): void {}
  `,
    `
  function foo(x: string | null | undefined): void {}
  `
  );

  defineInlineTest(
    transform,
    {},
    `
  type Foo { x: ?string }
  `,
    `
  type Foo { x: string | null | undefined }
  `
  );

  defineInlineTest(
    transform,
    {},
    `
  type Foo {x: ?string}
  `,
    `
  type Foo {x: string | null | undefined}
  `
  );
})