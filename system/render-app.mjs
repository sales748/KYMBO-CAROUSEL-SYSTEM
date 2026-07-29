/* ============================================================
   render-app.mjs — build the direct-booking app (Kalido-style)
   to HTML (build/app/app.html). Screens render as BARE SCREENS
   captured by shoot.mjs into build/app/img/<device>-<screen>.png
   for compositing onto white-screened devices in scene images.

   Room/hero PHOTOS: drop into assets/app/<slot>.png (hero, studio,
   twobed, lifestyle). Absent → a warm gradient placeholder.
   ============================================================ */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { fontFaceCss } from './fonts.mjs';
import { appPage } from './app.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const profile = join(root, 'profiles', process.env.PROFILE || 'kymbo');
const appDir = join(profile, 'build', 'app');
mkdirSync(join(appDir, 'img'), { recursive: true });

const data = JSON.parse(readFileSync(join(profile, 'content/booking-app.json'), 'utf8'));

// resolve photo slots from assets/app (relative to build/app/app.html)
const photos = {};
for (const slot of Object.keys(data.photoSlots || {})) {
  const p = join(profile, 'assets', 'app', `${slot}.png`);
  if (existsSync(p)) photos[slot] = `../../assets/app/${slot}.png`;
}

writeFileSync(join(appDir, 'app.html'), appPage(data, fontFaceCss(), photos));

// image-prompt sheet for the app's interior photos (Kim generates → assets/app/)
if (data.photoPrompts) {
  const lines = [
    '# Booking-app interior photos', '',
    'Generate each, drop into `assets/app/<slot>.png`, then re-run `npm run build`.', '',
    '## STYLE LINE (paste once, keep on every image)', '', `> ${data.photoStyleLine || ''}`, '', '---',
  ];
  for (const [slot, prompt] of Object.entries(data.photoPrompts)) {
    lines.push('', `## ${slot}  ·  \`assets/app/${slot}.png\``, '', '```text', prompt, '```');
  }
  writeFileSync(join(appDir, 'photo-prompts.md'), lines.join('\n'));
}

const have = Object.keys(photos);
console.log(`Rendered booking-app (Kalido-style): build/app/app.html · photos: ${have.length ? have.join(', ') : 'none yet (gradient placeholders)'}`);
