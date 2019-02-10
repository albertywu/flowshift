# Flowshift
Flowshift is a toolkit for for transforming [flow](https://flow.org/) to [typescript](http://www.typescriptlang.org/) using [jscodeshift](https://github.com/facebook/jscodeshift).

Each plugin is a jscodeshift-style [transform](https://github.com/facebook/jscodeshift#transform-module), which makes codemods easy to test in isolation. See here for a sample [plugin](https://github.com/albertywu/flowshift/blob/master/plugins/generic-bounds/generic-bounds.js) and its associated [test file](https://github.com/albertywu/flowshift/blob/master/plugins/generic-bounds/__tests__/basics.js).

# Todo
- [x] exact types removal
- [x] covariance notation `+ -> readonly`
- [x] generics 
  - [x] basics
  - [x] bounded polymorphism
- [x] maybe types
- [ ] type casting
- [ ] imports squashing
- [ ] typeof imports
- [ ] $Enum<X> -> keyof X
- [ ] $Record
- [ ] type-narrowing functions (%checks)
- [ ] flag unfix-able with a comment
- [ ] release
  - [ ] generate a manifest file that maps flow file -> replacements
  - [ ] docs

# Run a Plugin
```sh
# 1) install jscodeshift
yarn global add jscodeshift

# 2) run a plugin on a flow file
jscodeshift --parser=flow -t <path-to-plugin-file> <flow file>

# 3) flow file is now modified per plugin!
```

# Plugins
Plugins use [jscodeshift](https://github.com/facebook/jscodeshift) to transform flow source code into typescript source code. Plugins are stored in the [plugins](https://github.com/albertywu/flowshift/tree/master/plugins) folder with their associated test fixtures.

A plugin is simply a transform function as defined below. If the function returns a string, then the file is written with the value of the returned string. If the return value is undefined, nothing happens to the original file.

Plugin functions are invoked by the cli command `jscodeshift`.

```js
function transform(fileInfo: FileInfo, api: Api, options: Options): string | undefined {
  // transform code goes here
}

type FileInfo = {
  path: string;   // file path
  source: string; // source code
}

type Api = {
  jscodeshift: JsCodeShift; // the main library for flow AST stuff
  ... // other stuff we don't care about
}

type Options = {
  [key: string]: string // passed in via CLI command `jscodeshift`
}
```

# Test
```
yarn test
```

# Install
```
yarn
```

# Contribute
❤