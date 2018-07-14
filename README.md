# rollup-copy-plugin

Simple rollup plugin to copy files.

## Usage

**NB:** This plugin only copies files once when rollup start, any later changes will not be copied (before you start rollup again).

```js
import copyPlugin from 'rollup-copy-plugin';

export default {
  // ...
  plugins: [
    // ...
    copyPlugin({
      './src/test1.txt': './dist/test1.txt',
      './src/test2.txt': './dist/test2.txt',
    }),
    // ...
  ],
  // ...
};
```
