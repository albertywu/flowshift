# Flowshifter
Flowshifter is a toolkit for for transforming [flow](https://flow.org/) to [typescript](http://www.typescriptlang.org/).

It utilizes a plugin-based architecture, so you can choose exactly what modifications you want. Each plugin will perform a transformation for a specific feature. The best way to understand what a [plugin](https://github.com/albertywu/flowshifter/blob/master/plugins/exact-types/exact-types.js) does is to check out its associated [test file](https://github.com/albertywu/flowshifter/blob/master/plugins/exact-types/__tests__/exact-types-test.js).

# Run a Plugin
```sh
# 1) install jscodeshift
yarn global add jscodeshift

# 2) run a plugin on a flow file
jscodeshift --parser=flow -t <path-to-plugin-file> <flow file>

# 3) flow file is now modified per plugin!
```

# Plugins
Plugins use [jscodeshift](https://github.com/facebook/jscodeshift) to transform flow source code into typescript source code. Plugins are stored in the [plugins](https://github.com/albertywu/flowshifter/tree/master/plugins) folder with their associated test fixtures.

A plugin is simply a transform function as defined below. If the function returns a string, then the file is written with the value of the returned string. If the return value is undefined, nothing happens to the original file.

Plugin functions are after calling the cli command `jscodeshift`.

```flow
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
  [key: string]: string // custom options passed via the CLI command `jscodeshift`
}
```

# Test
```
yarn test
```

## Install
```
yarn
```
