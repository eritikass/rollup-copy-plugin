const fs = require('fs');

module.exports = function rollupCopyPlugin(options) {
  return {
    ongenerate() {
      Object.keys(options).forEach(function copy(src) {
        // eslint-disable-next-line no-console
        console.log(`copy: ${options[src]} > ${src}`);
        fs.writeFileSync(options[src], fs.readFileSync(src));
      });
    }
  };
};
