/* ============================================================
   render.mjs — content + templates -> static HTML.
   Produces:
     build/carousels/cNN.html   (all slides stacked; screenshot source)
     build/index.html           (review gallery: filmstrip per carousel)
     build/feed.html            (Instagram profile-grid mock of the covers)
   ============================================================ */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { fontFaceCss } from './fonts.mjs';
import { renderSlide } from './templates.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
// The shared engine (system/, fonts/) lives at root; per-profile inputs/outputs
// live under profiles/<name>. Pick the profile with PROFILE=<name> (default kymbo).
const PROFILE = process.env.PROFILE || 'kymbo';
const profile = join(root, 'profiles', PROFILE);
const build = join(profile, 'build');
mkdirSync(join(build, 'carousels'), { recursive: true });
mkdirSync(join(build, 'img'), { recursive: true });
mkdirSync(join(build, 'prompts'), { recursive: true });

const data = JSON.parse(readFileSync(join(profile, 'content/carousels.json'), 'utf8'));
// RETIRED carousels stay in content as a record but never render or export.
const retired = data.carousels.filter((c) => c.retired);
data.carousels = data.carousels.filter((c) => !c.retired);
if (retired.length) console.log(`Skipping ${retired.length} retired: ${retired.map((c) => 'c' + String(c.id).padStart(2,'0')).join(', ')}`);
const styles = readFileSync(join(root, 'system/styles.css'), 'utf8');
const head = `<style>${fontFaceCss()}\n${styles}</style>`;

const pad2 = (n) => String(n).padStart(2, '0');

function carouselDoc(c) {
  const total = c.slides.length;
  const slides = c.slides.map((s, i) => renderSlide(s, {
    surface: c.surface, index: i, total, isLast: i === total - 1,
    pillar: c.pillar, message: data.message,
  })).join('\n');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>Kymbo · ${c.title}</title>${head}
<style>body{margin:0;background:#9a9c93;display:flex;flex-direction:column;align-items:center;gap:40px;padding:40px 0}</style>
</head><body>${slides}</body></html>`;
}

// per-carousel screenshot sources
for (const c of data.carousels) {
  writeFileSync(join(build, 'carousels', `c${pad2(c.id)}.html`), carouselDoc(c));
}

// index name for each slide image
const imgName = (id, i) => `img/c${pad2(id)}-s${i + 1}.png`;

/* ---------- review gallery (index.html) ---------- */
function galleryDoc() {
  const cards = data.carousels.map((c) => {
    const strip = c.slides.map((_, i) =>
      `<img loading="lazy" src="${imgName(c.id, i)}" alt="slide ${i + 1}">`).join('');
    return `<section class="card">
      <div class="meta">
        <span class="num">${pad2(c.order)}</span>
        <div>
          <h2>${c.title}</h2>
          <p><b>${c.pillar}</b> · surface: ${c.surface} · cover: ${c.cover} · ${c.slides.length} slides</p>
        </div>
      </div>
      <div class="strip">${strip}</div>
    </section>`;
  }).join('');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>KYMBO FEED OS — 12 Carousels</title>${head}
<style>
  body{margin:0;background:var(--noche);color:var(--pantalla);font-family:var(--font-display)}
  .top{padding:80px 64px 40px;border-bottom:1px solid rgba(247,248,234,.14)}
  .top h1{font-size:64px;letter-spacing:-.03em;font-weight:800}
  .top h1 span{color:var(--verde)}
  .top p{font-family:var(--font-mono);color:rgba(247,248,234,.6);margin-top:16px;font-size:20px;letter-spacing:.04em;max-width:900px;line-height:1.5}
  .card{padding:56px 64px;border-bottom:1px solid rgba(247,248,234,.12)}
  .meta{display:flex;gap:28px;align-items:flex-start;margin-bottom:28px}
  .num{font-family:var(--font-mono);color:var(--verde);font-size:34px;font-weight:600}
  .meta h2{font-size:36px;letter-spacing:-.02em}
  .meta p{font-family:var(--font-mono);color:rgba(247,248,234,.55);font-size:18px;margin-top:8px;letter-spacing:.03em}
  .strip{display:flex;gap:18px;overflow-x:auto;padding-bottom:14px}
  .strip img{height:520px;width:auto;flex:0 0 auto;background:#000;border:1px solid rgba(247,248,234,.1)}
</style></head><body>
  <div class="top">
    <h1>KYMBO FEED OS <span>— 12 carousels</span></h1>
    <p>${data.campaign} · ${data.message}<br>${data.rotationNote}</p>
  </div>
  ${cards}
</body></html>`;
}
writeFileSync(join(build, 'index.html'), galleryDoc());

/* ---------- Instagram profile grid (feed.html) ---------- */
// 12-carousel feed — 6 scene (photo) + 6 flat (pure design), checkerboarded.
// Distribution: 4 FYM (30%) · 6 educational (50%) · 2 craft (20%)
// FYM = hotel/OTA/bookings content. Educational + craft = dev services, NOT hotel.
//   Odd positions = scene (organic photo), even = flat (pure design).
//   Row 1: scene-craft · flat-edu · scene-FYM
//   Row 2: flat-edu · scene-FYM · flat-edu
//   Row 3: scene-FYM · flat-craft · scene-edu
//   Row 4: flat-edu · scene-FYM · flat-edu
const FEED = [
  'scene-14', 'c16', 'scene-04',
  'c22', 'scene-01', 'c15',
  'scene-13', 'c21', 'scene-20',
  'c23', 'scene-15', 'c24',
];
const SCENE_SET = new Set(['scene-01', 'scene-04', 'scene-13', 'scene-14', 'scene-15', 'scene-20']);
function grid(feed) {
  return feed.map((base) =>
    `<a class="tile${SCENE_SET.has(base) ? ' organic' : ''}" href="index.html">
       <img src="img/${base}-s1.png" alt="${base}">
       <span class="car">▤</span>
     </a>`).join('');
}
function feedDoc() {
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>@kymbo — feed preview</title>${head}
<style>
  body{margin:0;background:#0e1016;color:var(--pantalla);font-family:var(--font-display);display:flex;justify-content:center}
  .phone{width:520px;max-width:100%;background:var(--noche);min-height:100vh}
  .hero{padding:44px 34px 26px}
  .row{display:flex;align-items:center;gap:30px}
  .avatar{width:118px;height:118px;border-radius:50%;background:var(--pantalla);color:var(--noche);display:grid;place-items:center;font-weight:800;font-size:64px;border:3px solid var(--verde)}
  .stats{display:flex;gap:34px;font-family:var(--font-mono)}
  .stats b{display:block;font-size:28px;font-weight:700}
  .stats span{font-size:16px;color:rgba(247,248,234,.6)}
  .bio{margin-top:22px}
  .bio h1{font-size:26px}
  .bio p{color:rgba(247,248,234,.7);font-size:19px;margin-top:6px;line-height:1.4}
  .bio .lime{color:var(--verde);font-family:var(--font-mono);font-size:16px;letter-spacing:.04em;margin-top:10px}
  .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:5px;margin-top:20px}
  .tile{position:relative;aspect-ratio:4/5;overflow:hidden;background:#000}
  .tile img{width:100%;height:100%;object-fit:cover;display:block}
  .tile .car{position:absolute;top:8px;right:9px;color:#fff;font-size:20px;text-shadow:0 1px 3px rgba(0,0,0,.5)}
  .mlabel{font-family:var(--font-mono);font-size:15px;letter-spacing:.22em;text-transform:uppercase;
    color:var(--verde);padding:30px 34px 12px;border-top:1px solid rgba(247,248,234,.12);margin-top:26px}
  .mlabel span{color:rgba(247,248,234,.55);letter-spacing:.04em;text-transform:none;display:block;
    font-size:15px;margin-top:6px}
  .mlabel.first{border-top:0;margin-top:6px;padding-top:8px}
</style></head><body>
  <div class="phone">
    <div class="hero">
      <div class="row">
        <div class="avatar">K</div>
        <div class="stats">
          <div><b>128</b><span>posts</span></div>
          <div><b>24.6k</b><span>followers</span></div>
          <div><b>312</b><span>following</span></div>
        </div>
      </div>
      <div class="bio">
        <h1>Kymbo</h1>
        <p>Direct-booking systems for hotels &amp; short-term rentals.<br>OTAs take 15–30%. Your website takes 0%.</p>
        <div class="lime">▸ fire your middleman</div>
      </div>
    </div>
    <div class="mlabel first">▸ Feed — 12 carousels (6 scene + 6 flat)
      <span>4 fym (30%) · 6 educational (50%) · 2 craft (20%)</span></div>
    <div class="grid">${grid(FEED)}</div>
  </div>
</body></html>`;
}
writeFileSync(join(build, 'feed.html'), feedDoc());


/* ---------- SCENE carousels (Path B) ---------- */
// Resolve each scene bg: use the real ChatGPT render if it's been dropped
// into /assets, otherwise fall back to the placeholder tile.
function resolveScene(c) {
  for (const s of c.slides) {
    if (!s.scene) continue;
    if (s.bg && existsSync(join(profile, s.bg))) {
      s.bg = `../../${s.bg}`;          // real image, relative to build/carousels/
    } else {
      s._pending = true;
      s.bg = '../img/_scene-ph.png';   // placeholder until Kim provides it
    }
  }
  return c;
}

function sceneDoc(c) {
  const total = c.slides.length;
  const slides = c.slides.map((s, i) => renderSlide(s, {
    surface: '', index: i, total, isLast: i === total - 1,
    pillar: c.pillar, message: data.message, appTheme: c.appTheme || 'pa',
  })).join('\n');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>Kymbo · ${c.title}</title>${head}
<style>body{margin:0;background:#9a9c93;display:flex;flex-direction:column;align-items:center;gap:40px;padding:40px 0}</style>
</head><body>${slides}</body></html>`;
}

// Each prompt is expanded into a COMPLETE, copy-paste-ready prompt: the marker
// `[Apply the STYLE LINE.]` is replaced with the full style line so every prompt
// is self-contained (never a shorthand or a "apply it separately" reference).
function fullPrompt(imagePrompt, styleLine) {
  const sl = styleLine || '';
  return imagePrompt.includes('[Apply the STYLE LINE.]')
    ? imagePrompt.replace('[Apply the STYLE LINE.]', sl)
    : `${imagePrompt} ${sl}`.trim();
}
function promptSheet(c) {
  const photoSlides = c.slides.filter((s) => s.imagePrompt);
  const lines = [
    `# ${c.title}`,
    ``,
    `**Carousel:** ${c.id} · **Pillar:** ${c.pillar} · **Path B (scene / organic)**`,
    ``,
    `> ${c.note}`,
    ``,
    `You need to generate the ${photoSlides.length} PHOTO slides below. Each fenced prompt is COMPLETE and copy-paste-ready — the full style line is already baked in, so consistency holds across every image. Slides marked "no image" build from our booking-app design automatically.`,
    ``,
    `---`,
  ];
  c.slides.forEach((s, i) => {
    const isPhoto = !!s.imagePrompt;
    lines.push(
      ``,
      `## Slide ${i + 1} — ${(s.imageId || s.layout || '').toString()}`,
      ``,
      `**On-slide copy:** ${s.headline || s.title || ''}${s.body ? `  —  ${s.body}` : ''}${s.action ? `  —  CTA: ${s.action}` : ''}`,
      ``,
    );
    if (isPhoto) {
      if (s.screen) lines.push(`> **Composite slide.** Generate this photo with a BLANK WHITE device screen; we then composite the \`${s.screen.app}\` booking-app UI onto it.`, ``);
      lines.push(`Save as \`s${i + 1}.png\` in \`${c.assetDir}/\`.`, ``, '```text', fullPrompt(s.imagePrompt, c.styleLine), '```');
    } else {
      lines.push(`> **No image needed.**`);
    }
  });
  return lines.join('\n');
}

const sceneFiles = readdirSync(join(profile, 'content'))
  .filter((f) => /^scene-.*\.json$/.test(f)).sort();
const scenes = [];
for (const f of sceneFiles) {
  const c = resolveScene(JSON.parse(readFileSync(join(profile, 'content', f), 'utf8')));
  writeFileSync(join(build, 'carousels', `${c.id}.html`), sceneDoc(c));
  writeFileSync(join(build, 'prompts', `${c.id}.md`), promptSheet(c));
  scenes.push(c);
}

console.log(`Rendered ${data.carousels.length} HTML carousels + ${scenes.length} scene carousel(s) + index.html + feed.html`);
if (scenes.length) console.log(`Image-prompt sheets: build/prompts/${scenes.map((c) => c.id).join(', ')}`);
