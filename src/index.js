/* eslint-disable no-console */
import { createReadStream, createWriteStream } from 'fs';

export default function copy(options = {}) {
  const copyFile = (source, target) => {
    const rd = createReadStream(source);
    const wr = createWriteStream(target);
    return new Promise(((resolve, reject) => {
      rd.on('error', reject);
      wr.on('error', reject);
      wr.on('finish', resolve);
      console.log(`copy: ${source} > ${target}`);
      rd.pipe(wr);
    })).catch((error) => {
      rd.destroy();
      wr.end();
      console.log(`copy-error: ${source} > ${target}`);
      throw error;
    });
  };

  let started = false;
  return {
    name: 'copy',
    ongenerate: () => {
      if (!started) {
        started = true;
        Object.keys(options).forEach(src => copyFile(src, options[src]));
      }
    },
  };
}
