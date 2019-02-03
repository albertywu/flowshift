// @flow
import { type Yo } from './foo'
import { Yooo } from './foo'

// type Foo = { readonly bar: string, baz: number, readonly boo: string }

// type Foo = {
//   readonly foo: string,
//   readonly bar: "hello",
//   baz: { readonly name: "bob", age: 42 },
// };

interface A {
  b: B,
  -c: C
}

function foo<A: string>(x: A): A {
  return x
}

function foo<A: Foo>(x: A): A {
  return x2
}

function foo<A: Foo | Bar > (x: A): A {
  return x
}



const x = 42