/* ============================================================
   shoot.mjs — render every .slide to a 1080x1350 PNG with Chromium.
   Uses the pre-installed browser (no download).
   ============================================================ */
import { chromium } from 'playwright-core';
import { readdirSync, existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const profile = join(root, 'profiles', 'kymbo');
const build = join(profile, 'build');
const carouselsDir = join(build, 'carousels');
const appDir = join(build, 'app');
const EXE = process.env.PW_CHROMIUM || '/opt/pw-browsers/chromium';

const browser = await chromium.launch({
  executablePath: EXE,
  args: ['--no-sandbox', '--force-color-profile=srgb', '--hide-scrollbars'],
});
const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 2 });

// ---- scene placeholder tile (shown until real ChatGPT renders arrive) ----
await page.setContent(`<div style="width:1080px;height:1350px;
  background:
    radial-gradient(circle at 30% 30%, rgba(255,255,255,.04) 1px, transparent 1px) 0 0/40px 40px,
    linear-gradient(135deg,#2c3242,#1a1d26);
  display:flex;align-items:center;justify-content:center;
  font-family:ui-monospace,monospace;color:rgba(247,248,234,.28);
  font-size:30px;letter-spacing:.3em">SCENE&nbsp;IMAGE</div>`);
await page.locator('div').first().screenshot({ path: join(build, 'img', '_scene-ph.png') });
console.log('_scene-ph.png (placeholder)');

let count = 0;
for (const file of readdirSync(carouselsDir).filter((f) => f.endsWith('.html')).sort()) {
  const id = file.replace('.html', '');            // "c01" or "scene-01"
  await page.goto(pathToFileURL(join(carouselsDir, file)).href, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const slides = await page.$$('.slide');
  for (let i = 0; i < slides.length; i++) {
    const name = /^c\d+$/.test(id) ? `${id}-s${i + 1}` : `${id}-s${i + 1}`;
    await slides[i].screenshot({ path: join(build, 'img', `${name}.png`) });
    count++;
  }
  console.log(`${id}: ${slides.length} slides`);
}

// ---- booking-app prototypes: screenshot each [data-shot] with alpha ----
if (existsSync(appDir)) {
  const appPage = await browser.newPage({ viewport: { width: 1400, height: 1400 }, deviceScaleFactor: 2 });
  for (const file of readdirSync(appDir).filter((f) => f.endsWith('.html')).sort()) {
    await appPage.goto(pathToFileURL(join(appDir, file)).href, { waitUntil: 'networkidle' });
    await appPage.evaluate(() => document.fonts.ready);
    const shots = await appPage.$$('[data-shot]');
    for (const el of shots) {
      const name = await el.getAttribute('data-shot');
      await el.screenshot({ path: join(appDir, 'img', `${name}.png`), omitBackground: true });
      count++;
    }
    console.log(`app ${file}: ${shots.length} screens`);
  }
  await appPage.close();
}

// feed grid preview
const feed = await browser.newPage({ viewport: { width: 520, height: 1400 }, deviceScaleFactor: 2 });
await feed.goto(pathToFileURL(join(build, 'feed.html')).href, { waitUntil: 'networkidle' });
await feed.evaluate(() => document.fonts.ready);
await feed.locator('.phone').screenshot({ path: join(build, 'feed-preview.png') });
console.log('feed-preview.png');

await browser.close();
console.log(`\nDone — ${count} slide PNGs in build/img/`);
