jest.autoMockOff();
const defineInlineTest = require('../../testUtils.js').defineInlineTest;
const transform = require('../generic-bounds.js');
transform.parser = 'flow';

describe('generic bounds in functions', () => {
  defineInlineTest(
    transform,
    {},
    `
  function foo<X: string>(x: X): X {
    return x
  }
  `,
    `
  function foo<X extends string>(x: X): X {
    return x
  }
  `
  );

  defineInlineTest(
    transform,
    {},
    `
  function foo<X: string | number | Foo>(x: X): X {
    return x
  }
  `,
    `
  function foo<X extends string | number | Foo>(x: X): X {
    return x
  }
  `
  );

  defineInlineTest(
    transform,
    {},
    `
  function foo<X: number, Y: string | Bar>(x: X): X {
    return x
  }
  `,
    `
  function foo<X extends number, Y extends string | Bar>(x: X): X {
    return x
  }
  `
  );
});

describe('generic bounds in interface definitions', () => {
  defineInlineTest(
    transform,
    {},
    `
  interface Item<X: string, Y: number | Foo>(x: X): X {
    return x
  }
  `,
    `
  interface Item<X extends string, Y extends number | Foo>(x: X): X {
    return x
  }
  `
  );
});

describe('generic bounds in class definitions', () => {
  defineInlineTest(
    transform,
    {},
    `
  class Item<X: string, Y: number | Foo | Bar>(x: X) {
    // ...
  }
  `,
    `
  class Item<X extends string, Y extends number | Foo | Bar>(x: X) {
    // ...
  }
  `
  );
});

// TODO: investigate object-literal upper-bound type
// https://flow.org/en/docs/types/generics/#toc-adding-types-to-generics
/*
  // @flow
  function logFoo<T: { foo: string }>(obj: T): T {
    // ...
  }
*/

// TODO: investigate inference of generic arguments
// https://flow.org/en/docs/types/generics/#toc-supplying-type-arguments-to-callables
/*
  // @flow
  class GenericClass<T, U, V>{}
  const c = new GenericClass<_, number, _>()
*/

// TODO: investigate defaults in parameterized generics
// https://flow.org/en/docs/types/generics/#toc-adding-defaults-to-parameterized-generics
/*
  // @flow
  type Item<T: number = 1> = {
    prop: T,
  };

  let foo: Item<> = { prop: 1 };
  let bar: Item<2> = { prop: 2 };
*/

// TODO: investigate variance sigils in generics
// https://flow.org/en/docs/types/generics/#toc-variance-sigils
/*
  // @flow
  type GenericBox<+T> = T;

  var x: GenericBox<number> = 3;
  (x: GenericBox<number| string>);
*/
