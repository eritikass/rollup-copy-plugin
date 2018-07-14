import fs from 'fs';

export default function alias(options = {}) {
  const copyFiles = () => {
    Object.keys(options).forEach((src) => {
      // eslint-disable-next-line no-console
      console.log(`copy: ${options[src]} > ${src}`);
      fs.writeFileSync(options[src], fs.readFileSync(src));
    });
  };

  return {
    ongenerate() {
      return copyFiles();
    },
  };
}
