/* ============================================================
   render-app.mjs — build the two direct-booking prototypes to
   HTML (build/app/pa.html, pb.html). Screens are captured by
   shoot.mjs into build/app/img/<theme>-<device>-<screen>.png.
   ============================================================ */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { fontFaceCss } from './fonts.mjs';
import { appPage } from './app.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const appDir = join(root, 'build', 'app');
mkdirSync(join(appDir, 'img'), { recursive: true });

const data = JSON.parse(readFileSync(join(root, 'content/booking-app.json'), 'utf8'));
const fonts = fontFaceCss();

for (const theme of ['pa', 'pb']) {
  writeFileSync(join(appDir, `${theme}.html`), appPage(theme, data, fonts));
}
console.log('Rendered booking-app prototypes: build/app/pa.html, pb.html');
