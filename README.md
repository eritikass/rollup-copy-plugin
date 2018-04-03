# rollup-copy-plugin

Simple rollup plugin to copy files.

```js
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
