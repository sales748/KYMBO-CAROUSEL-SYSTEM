import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

function b64(rel) {
  return readFileSync(join(root, rel)).toString('base64');
}

/* @font-face declarations with embedded woff2 so every HTML file is fully
   self-contained and renders identically offline. The CSS references
   'Satoshi' FIRST — drop a licensed Satoshi woff2 in /fonts and add a
   face here to have it take over with no other change. */
export function fontFaceCss() {
  const onest = b64('fonts/onest.woff2');
  const grotesk = b64('fonts/space-grotesk.woff2');
  return `
@font-face{
  font-family:'Onest Variable';
  font-style:normal; font-weight:100 900; font-display:block;
  src:url(data:font/woff2;base64,${onest}) format('woff2');
}
@font-face{
  font-family:'Space Grotesk Variable';
  font-style:normal; font-weight:300 700; font-display:block;
  src:url(data:font/woff2;base64,${grotesk}) format('woff2');
}`;
}
