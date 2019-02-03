// @flow
import { type Yo } from './foo'
import { Yooo } from './foo'

type Foo = {
  readonly foo: string,
  readonly bar: "hello",
  baz: { readonly name: "bob", age: 42 },
};

interface A {
  readonly b: B,
  -c: C
}

function foo<A extends string>(x: A): A {
  return x
}

function foo<A extends Foo>(x: A): A {
  return x2
}

function foo<A extends Foo | Bar>(x: A): A {
  return x
}

// function foo<A extends  string>(x: A): A {
//   return x
// }

// function foo<A extends  Foo>(x: A): A {
//   return x
// }

// function foo<A extends  Foo | Bar>(x: A): A {
//   return x
// }

/*
  CompiledTs: type Bar = { readonly foo: string, baz: number }
*/
