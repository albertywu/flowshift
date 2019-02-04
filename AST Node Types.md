# Flow AST Node Types

```js
<X: number, +Y: { foo: string }>

TypeParameterDeclaration
  params: TypeParameter[]

TypeParameter
  name: string
  bound: TypeAnnotation
  variance: null | Variance

Variance
  kind: "plus" | "minus"

TypeAnnotation
  typeAnnotation: ObjectTypeAnnotation | ... | ...
```
