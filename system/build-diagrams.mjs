/* ============================================================
   build-diagrams.mjs
   Author standalone diagram slide HTMLs by combining a shared
   slide skeleton with each diagram's unique SVG + copy.
   Rendered later by shoot.mjs (Playwright).
   ============================================================ */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const OUT = join(root, 'profiles/kymbo/build/diagrams');
mkdirSync(OUT, { recursive: true });

/* Shared skeleton — every diagram slide runs through this.
   Kymbo tokens, spec-paper grid, footer squares, same shape as
   scene slides so a diagram sits in the feed without visual seam.
   `surface` = 'light' | 'dark'. */
function slide({ id, surface = 'light', eyebrow, headline, sub, cite, svg }) {
  const isDark = surface === 'dark';
  const paper = isDark ? '#262B38' : '#FFFFFF';
  const ink = isDark ? '#FFFFFF' : '#262B38';
  const muted = isDark ? 'rgba(255,255,255,.60)' : 'rgba(38,43,56,.60)';
  const line = isDark ? 'rgba(255,255,255,.16)' : 'rgba(38,43,56,.13)';
  const gridDot = isDark ? 'rgba(255,255,255,.09)' : 'rgba(38,43,56,.10)';
  const gridLine = isDark ? 'rgba(255,255,255,.05)' : 'rgba(38,43,56,.06)';
  // ==word== → <span class="hi">word</span> (marker highlight, matches Kymbo's rich() rule)
  const highlighted = (headline || '').replace(/==(.+?)==/g, '<span class="hi">$1</span>');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>Kymbo · ${id}</title>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{
  --paper:${paper};--ink:${ink};--muted:${muted};--line:${line};
  --accent:#9BEC00;--accent-tint:rgba(155,236,0,.18);
  --grid-dot:${gridDot};--grid-line:${gridLine};
  --sans:'Satoshi','Onest Variable',system-ui,sans-serif;
  --mono:'JetBrains Mono','JetBrains Mono Variable',ui-monospace,monospace;
}
html,body{background:var(--paper)}
.slide{position:relative;width:1080px;height:1350px;overflow:hidden;padding:148px 92px 86px;font-family:var(--sans);color:var(--ink);display:flex;flex-direction:column;-webkit-font-smoothing:antialiased}
.slide::before{content:"";position:absolute;inset:0;z-index:0;pointer-events:none;background-image:radial-gradient(circle,var(--grid-dot) 1px,transparent 1.4px);background-size:24px 24px}
.slide::after{content:"";position:absolute;inset:0;z-index:0;pointer-events:none;background:linear-gradient(to right,transparent 91px,var(--grid-line) 91px,var(--grid-line) 92px,transparent 92px),linear-gradient(to right,transparent 988px,var(--grid-line) 988px,var(--grid-line) 989px,transparent 989px)}
.slide > *{position:relative;z-index:1}
.diagram-frame{display:flex;flex-direction:column;gap:20px;margin-top:8px}
.eyebrow{font-family:var(--mono);font-size:22px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:var(--muted)}
svg.diagram{width:100%;display:block}
.body{margin-top:auto;padding-top:44px;padding-bottom:34px;display:flex;flex-direction:column;gap:24px}
h1{font-size:74px;font-weight:800;letter-spacing:-.025em;line-height:1.02;max-width:900px;text-wrap:balance}
h1 .hi{color:${isDark ? '#262B38' : 'var(--ink)'};background:var(--accent);padding:.02em .18em}
.sub{font-size:36px;color:var(--muted);line-height:1.28;max-width:820px;text-wrap:pretty}
.cite{font-family:var(--mono);font-size:18px;letter-spacing:.06em;color:var(--muted);margin-top:8px}
.ft{display:flex;align-items:center;gap:9px;margin-top:16px}
.tick{width:14px;height:14px;background:var(--line)}
.tick.on{background:var(--accent)}
</style></head><body>
<div class="slide">
  <div class="diagram-frame">
    ${eyebrow ? `<div class="eyebrow">${eyebrow}</div>` : ''}
    ${svg}
  </div>
  <div class="body">
    <h1>${highlighted}</h1>
    ${sub ? `<div class="sub">${sub}</div>` : ''}
    ${cite ? `<div class="cite">${cite}</div>` : ''}
    <div class="ft">
      <span class="tick on"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span><span class="tick"></span>
    </div>
  </div>
</div>
</body></html>`;
}

/* Per-diagram data ---------------------------------------------------- */

const DIAGRAMS = {

  /* ===================== SCENE 21 · CHECKOUT ===================== */

  'scene-21-s1-sankey': {
    surface: 'light',
    eyebrow: 'THE LEAK · VISITOR FLOW',
    headline: 'Your ==checkout== is 4 fields too long.',
    hi: '==checkout==',
    sub: 'Every extra field is where a visitor becomes an abandonment.',
    cite: 'Order-of-magnitude · run the funnel on your own store',
    svg: `<svg class="diagram" viewBox="0 0 900 460" role="img" aria-labelledby="s21-1-t s21-1-d">
      <title id="s21-1-t">Visitor flow through a 9-field checkout</title>
      <desc id="s21-1-d">Sankey showing 100% of visitors entering checkout and each field-page dropping a portion; only 34% complete the purchase.</desc>
      <!-- Sankey: entry band on left, thinning through 3 stages, exit on right -->
      <!-- Stage columns -->
      <g font-family="'JetBrains Mono',monospace" font-size="9" fill="rgba(38,43,56,.60)" letter-spacing=".12em">
        <text x="60" y="30" text-anchor="middle">ENTER</text>
        <text x="330" y="30" text-anchor="middle">EMAIL + NAME</text>
        <text x="560" y="30" text-anchor="middle">FULL ADDRESS</text>
        <text x="820" y="30" text-anchor="middle">EXIT</text>
      </g>
      <!-- Column bars: heights encode flow -->
      <rect x="52" y="60" width="16" height="360" fill="rgba(38,43,56,.06)" stroke="#262B38" stroke-width="1"/>
      <rect x="322" y="120" width="16" height="240" fill="rgba(38,43,56,.06)" stroke="#262B38" stroke-width="1"/>
      <rect x="552" y="200" width="16" height="160" fill="rgba(38,43,56,.06)" stroke="#262B38" stroke-width="1"/>
      <rect x="812" y="270" width="16" height="120" fill="rgba(155,236,0,.18)" stroke="#9BEC00" stroke-width="1.5"/>
      <!-- Flow bands (main path — kept) -->
      <path d="M68,60 C200,60 200,120 322,120 L322,360 C200,360 200,420 68,420 Z" fill="rgba(38,43,56,.06)" stroke="none"/>
      <path d="M338,120 C450,120 450,200 552,200 L552,360 C450,360 450,360 338,360 Z" fill="rgba(38,43,56,.06)" stroke="none"/>
      <path d="M568,200 C700,200 700,270 812,270 L812,390 C700,390 700,360 568,360 Z" fill="rgba(155,236,0,.18)" stroke="none"/>
      <!-- Drop-off bands (leaked at each stage) -->
      <path d="M68,60 C200,60 200,80 322,80 L322,120 C200,120 200,60 68,60 Z" fill="rgba(38,43,56,.04)" stroke="none"/>
      <path d="M338,120 C450,120 450,170 552,170 L552,200 C450,200 450,120 338,120 Z" fill="rgba(38,43,56,.04)" stroke="none"/>
      <path d="M568,200 C700,200 700,250 812,250 L812,270 C700,270 700,200 568,200 Z" fill="rgba(38,43,56,.04)" stroke="none"/>
      <!-- Drop labels -->
      <g font-family="'JetBrains Mono',monospace" font-size="10" fill="rgba(38,43,56,.60)">
        <text x="200" y="76">−17% (email typos, second-guessing)</text>
        <text x="440" y="158">−22% (zip, phone, company name)</text>
        <text x="680" y="240">−27% (card, confirm-email)</text>
      </g>
      <!-- Endpoint value labels -->
      <text x="42" y="243" font-family="Satoshi,sans-serif" font-size="18" font-weight="600" fill="#262B38" text-anchor="end">100</text>
      <text x="837" y="335" font-family="Satoshi,sans-serif" font-size="18" font-weight="600" fill="#262B38" text-anchor="start">34</text>
      <text x="837" y="352" font-family="'JetBrains Mono',monospace" font-size="9" fill="rgba(38,43,56,.60)" text-anchor="start">COMPLETED</text>
      <text x="42" y="260" font-family="'JetBrains Mono',monospace" font-size="9" fill="rgba(38,43,56,.60)" text-anchor="end">VISITED</text>
    </svg>`
  },

  'scene-21-s3-kanban': {
    surface: 'light',
    eyebrow: 'THE CUT · FIELD AUDIT',
    headline: 'The ==four== we cut first.',
    hi: '==four==',
    sub: 'Nine required fields is the ceiling, not the starting line.',
    svg: `<svg class="diagram" viewBox="0 0 900 500" role="img" aria-labelledby="s21-3-t s21-3-d">
      <title id="s21-3-t">Kanban: fields kept vs fields cut in a lean checkout</title>
      <desc id="s21-3-d">Two-column kanban board — KEEP (five fields) and CUT (four fields). Each field is a card.</desc>
      <!-- Column headers -->
      <text x="220" y="34" font-family="'JetBrains Mono',monospace" font-size="10" fill="rgba(38,43,56,.60)" letter-spacing=".18em" text-anchor="middle">KEEP · 5</text>
      <text x="670" y="34" font-family="'JetBrains Mono',monospace" font-size="10" fill="#9BEC00" letter-spacing=".18em" text-anchor="middle">CUT · 4</text>
      <!-- Column baselines -->
      <line x1="60" y1="52" x2="380" y2="52" stroke="rgba(38,43,56,.30)" stroke-width="1"/>
      <line x1="510" y1="52" x2="830" y2="52" stroke="#9BEC00" stroke-width="1.5"/>
      <!-- KEEP column cards -->
      <g font-family="Satoshi,sans-serif" font-size="16" font-weight="600" fill="#262B38">
        <rect x="60" y="72" width="320" height="60" fill="rgba(38,43,56,.03)" stroke="#262B38" stroke-width="1" rx="6"/>
        <text x="80" y="107">Email</text>
        <text x="360" y="107" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="400" fill="rgba(38,43,56,.60)">RECEIPT</text>

        <rect x="60" y="146" width="320" height="60" fill="rgba(38,43,56,.03)" stroke="#262B38" stroke-width="1" rx="6"/>
        <text x="80" y="181">Shipping address</text>
        <text x="360" y="181" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="400" fill="rgba(38,43,56,.60)">FULFIL</text>

        <rect x="60" y="220" width="320" height="60" fill="rgba(38,43,56,.03)" stroke="#262B38" stroke-width="1" rx="6"/>
        <text x="80" y="255">Card</text>
        <text x="360" y="255" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="400" fill="rgba(38,43,56,.60)">CHARGE</text>

        <rect x="60" y="294" width="320" height="60" fill="rgba(38,43,56,.03)" stroke="#262B38" stroke-width="1" rx="6"/>
        <text x="80" y="329">Name on card</text>
        <text x="360" y="329" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="400" fill="rgba(38,43,56,.60)">CHARGE</text>

        <rect x="60" y="368" width="320" height="60" fill="rgba(38,43,56,.03)" stroke="#262B38" stroke-width="1" rx="6"/>
        <text x="80" y="403">Country</text>
        <text x="360" y="403" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="400" fill="rgba(38,43,56,.60)">TAX + SHIP</text>
      </g>
      <!-- CUT column cards (verde accent, strikethrough on names) -->
      <g font-family="Satoshi,sans-serif" font-size="16" font-weight="600">
        <rect x="510" y="72" width="320" height="60" fill="rgba(155,236,0,.10)" stroke="#9BEC00" stroke-width="1.5" rx="6"/>
        <text x="530" y="107" fill="#262B38" text-decoration="line-through">Address line 2</text>
        <text x="810" y="107" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="400" fill="rgba(38,43,56,.60)">NOBODY USES</text>

        <rect x="510" y="146" width="320" height="60" fill="rgba(155,236,0,.10)" stroke="#9BEC00" stroke-width="1.5" rx="6"/>
        <text x="530" y="181" fill="#262B38" text-decoration="line-through">Phone</text>
        <text x="810" y="181" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="400" fill="rgba(38,43,56,.60)">DISPATCH ONLY</text>

        <rect x="510" y="220" width="320" height="60" fill="rgba(155,236,0,.10)" stroke="#9BEC00" stroke-width="1.5" rx="6"/>
        <text x="530" y="255" fill="#262B38" text-decoration="line-through">Company name</text>
        <text x="810" y="255" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="400" fill="rgba(38,43,56,.60)">B2B ONLY</text>

        <rect x="510" y="294" width="320" height="60" fill="rgba(155,236,0,.10)" stroke="#9BEC00" stroke-width="1.5" rx="6"/>
        <text x="530" y="329" fill="#262B38" text-decoration="line-through">Confirm email</text>
        <text x="810" y="329" text-anchor="end" font-family="'JetBrains Mono',monospace" font-size="10" font-weight="400" fill="rgba(38,43,56,.60)">2005-ERA</text>
      </g>
    </svg>`
  },

  'scene-21-s5-bar': {
    surface: 'light',
    eyebrow: 'THE DIAGNOSTIC · ABANDONMENT BY FIELD',
    headline: 'Track abandonment by ==field==, not by page.',
    hi: '==field==',
    sub: 'A page-level analytic tells you they left. Field-level tells you where.',
    cite: 'Instrument your form · one event per field · look for the cliff',
    svg: `<svg class="diagram" viewBox="0 0 900 440" role="img" aria-labelledby="s21-5-t s21-5-d">
      <title id="s21-5-t">Abandonment rate per checkout field</title>
      <desc id="s21-5-d">Horizontal bar chart — each field's abandonment percentage. The 'confirm email' field is the tallest cliff.</desc>
      <!-- Fields, horizontal bars — from top: field labels on left, bars extending right -->
      <g font-family="'JetBrains Mono',monospace" font-size="10" fill="rgba(38,43,56,.60)" letter-spacing=".06em">
        <text x="220" y="36" text-anchor="end">EMAIL</text>
        <text x="220" y="76" text-anchor="end">SHIPPING</text>
        <text x="220" y="116" text-anchor="end">ADDRESS 2</text>
        <text x="220" y="156" text-anchor="end">PHONE</text>
        <text x="220" y="196" text-anchor="end">COMPANY</text>
        <text x="220" y="236" text-anchor="end">ZIP</text>
        <text x="220" y="276" text-anchor="end">CARD</text>
        <text x="220" y="316" text-anchor="end">NAME</text>
        <text x="220" y="356" text-anchor="end">CONFIRM EMAIL</text>
      </g>
      <!-- X-axis baseline -->
      <line x1="234" y1="24" x2="234" y2="376" stroke="rgba(38,43,56,.30)" stroke-width="1"/>
      <!-- Gridlines -->
      <line x1="384" y1="24" x2="384" y2="376" stroke="rgba(38,43,56,.08)" stroke-width="0.8"/>
      <line x1="534" y1="24" x2="534" y2="376" stroke="rgba(38,43,56,.08)" stroke-width="0.8"/>
      <line x1="684" y1="24" x2="684" y2="376" stroke="rgba(38,43,56,.08)" stroke-width="0.8"/>
      <line x1="834" y1="24" x2="834" y2="376" stroke="rgba(38,43,56,.08)" stroke-width="0.8"/>
      <!-- Bars: width encodes % abandonment (scale: 150px = 10%) -->
      <rect x="234" y="24" width="36" height="20" fill="rgba(38,43,56,.06)" stroke="#262B38" stroke-width="1"/>
      <rect x="234" y="64" width="72" height="20" fill="rgba(38,43,56,.06)" stroke="#262B38" stroke-width="1"/>
      <rect x="234" y="104" width="108" height="20" fill="rgba(38,43,56,.06)" stroke="#262B38" stroke-width="1"/>
      <rect x="234" y="144" width="144" height="20" fill="rgba(38,43,56,.06)" stroke="#262B38" stroke-width="1"/>
      <rect x="234" y="184" width="120" height="20" fill="rgba(38,43,56,.06)" stroke="#262B38" stroke-width="1"/>
      <rect x="234" y="224" width="60" height="20" fill="rgba(38,43,56,.06)" stroke="#262B38" stroke-width="1"/>
      <rect x="234" y="264" width="240" height="20" fill="rgba(38,43,56,.06)" stroke="#262B38" stroke-width="1"/>
      <rect x="234" y="304" width="48" height="20" fill="rgba(38,43,56,.06)" stroke="#262B38" stroke-width="1"/>
      <!-- The cliff — verde -->
      <rect x="234" y="344" width="450" height="20" fill="rgba(155,236,0,.18)" stroke="#9BEC00" stroke-width="1.5"/>
      <!-- Callout for the cliff -->
      <text x="700" y="358" font-family="Satoshi,sans-serif" font-size="14" font-weight="600" fill="#262B38">← 31% cliff, one field</text>
      <!-- X-axis tick labels -->
      <g font-family="'JetBrains Mono',monospace" font-size="9" fill="rgba(38,43,56,.60)">
        <text x="234" y="398" text-anchor="middle">0%</text>
        <text x="384" y="398" text-anchor="middle">10</text>
        <text x="534" y="398" text-anchor="middle">20</text>
        <text x="684" y="398" text-anchor="middle">30</text>
        <text x="834" y="398" text-anchor="middle">40</text>
      </g>
      <text x="534" y="422" font-family="'JetBrains Mono',monospace" font-size="9" fill="rgba(38,43,56,.60)" letter-spacing=".18em" text-anchor="middle">% ABANDONMENT · TYPICAL</text>
    </svg>`
  },

  /* ===================== SCENE 22 · AI RESTRAINT ===================== */

  'scene-22-s3-fishbone': {
    surface: 'dark',
    eyebrow: 'THE CAUSES · WHY YOUR SITE IS SLOW',
    headline: 'What most sites actually ==need==.',
    hi: '==need==',
    sub: 'Six bones, one effect. Only one has AI on it.',
    svg: `<svg class="diagram" viewBox="0 0 900 460" role="img" aria-labelledby="s22-3-t s22-3-d">
      <title id="s22-3-t">Fishbone: causes of a slow website</title>
      <desc id="s22-3-d">Ishikawa fishbone with six category bones — IMAGES, FONTS, JS BUNDLES, CACHE, THIRD-PARTY, and AI FEATURES — feeding into 'slow site'. AI features branch is the accent focal.</desc>
      <!-- Spine -->
      <line x1="60" y1="230" x2="780" y2="230" stroke="#FFFFFF" stroke-width="2"/>
      <!-- Effect box -->
      <rect x="780" y="200" width="120" height="60" fill="rgba(155,236,0,.18)" stroke="#9BEC00" stroke-width="1.5"/>
      <text x="840" y="228" font-family="Satoshi,sans-serif" font-size="15" font-weight="600" fill="#FFFFFF" text-anchor="middle">SLOW</text>
      <text x="840" y="246" font-family="Satoshi,sans-serif" font-size="15" font-weight="600" fill="#FFFFFF" text-anchor="middle">SITE</text>
      <!-- Top bones -->
      <g font-family="Satoshi,sans-serif" font-size="14" font-weight="600" fill="#FFFFFF">
        <line x1="180" y1="60" x2="180" y2="230" stroke="rgba(255,255,255,.60)" stroke-width="1.5"/>
        <text x="180" y="50" text-anchor="middle">IMAGES</text>
        <g font-family="'JetBrains Mono',monospace" font-size="9" fill="rgba(255,255,255,.60)" letter-spacing=".08em">
          <text x="190" y="100">unoptimised</text>
          <text x="190" y="140">no lazy-load</text>
          <text x="190" y="180">wrong format</text>
        </g>

        <line x1="360" y1="60" x2="360" y2="230" stroke="rgba(255,255,255,.60)" stroke-width="1.5"/>
        <text x="360" y="50" text-anchor="middle">FONTS</text>
        <g font-family="'JetBrains Mono',monospace" font-size="9" fill="rgba(255,255,255,.60)" letter-spacing=".08em">
          <text x="370" y="100">six weights loaded</text>
          <text x="370" y="140">no font-display</text>
          <text x="370" y="180">FOIT blocks paint</text>
        </g>

        <line x1="540" y1="60" x2="540" y2="230" stroke="#9BEC00" stroke-width="1.5"/>
        <text x="540" y="50" text-anchor="middle" fill="#9BEC00">AI FEATURES</text>
        <g font-family="'JetBrains Mono',monospace" font-size="9" fill="#9BEC00" letter-spacing=".08em">
          <text x="550" y="100">chat widget (400KB)</text>
          <text x="550" y="140">recs engine (250KB)</text>
          <text x="550" y="180">personalization</text>
        </g>
      </g>
      <!-- Bottom bones -->
      <g font-family="Satoshi,sans-serif" font-size="14" font-weight="600" fill="#FFFFFF">
        <line x1="270" y1="230" x2="270" y2="400" stroke="rgba(255,255,255,.60)" stroke-width="1.5"/>
        <text x="270" y="418" text-anchor="middle">JS BUNDLES</text>
        <g font-family="'JetBrains Mono',monospace" font-size="9" fill="rgba(255,255,255,.60)" letter-spacing=".08em">
          <text x="280" y="280">no tree-shake</text>
          <text x="280" y="320">no code split</text>
          <text x="280" y="360">framework bloat</text>
        </g>

        <line x1="450" y1="230" x2="450" y2="400" stroke="rgba(255,255,255,.60)" stroke-width="1.5"/>
        <text x="450" y="418" text-anchor="middle">CACHE</text>
        <g font-family="'JetBrains Mono',monospace" font-size="9" fill="rgba(255,255,255,.60)" letter-spacing=".08em">
          <text x="460" y="280">no page cache</text>
          <text x="460" y="320">no CDN</text>
          <text x="460" y="360">no browser cache</text>
        </g>

        <line x1="630" y1="230" x2="630" y2="400" stroke="rgba(255,255,255,.60)" stroke-width="1.5"/>
        <text x="630" y="418" text-anchor="middle">3RD-PARTY</text>
        <g font-family="'JetBrains Mono',monospace" font-size="9" fill="rgba(255,255,255,.60)" letter-spacing=".08em">
          <text x="640" y="280">analytics stack</text>
          <text x="640" y="320">chat + heatmap</text>
          <text x="640" y="360">A/B test loader</text>
        </g>
      </g>
    </svg>`
  },

  'scene-22-s5-radar': {
    surface: 'dark',
    eyebrow: 'THE THREE · WHERE AI EARNS ITS WEIGHT',
    headline: 'Three places AI ==earns== its weight.',
    hi: '==earns==',
    sub: 'Everywhere else, it is costume.',
    svg: `<svg class="diagram" viewBox="0 0 900 460" role="img" aria-labelledby="s22-5-t s22-5-d">
      <title id="s22-5-t">Radar: AI utility scored across three axes</title>
      <desc id="s22-5-d">Radar chart with three axes — search, moderation, translation — each scored high.</desc>
      <g transform="translate(450 240)">
        <!-- Radar concentric guides — 4 rings -->
        <polygon points="0,-200 173,100 -173,100" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="1"/>
        <polygon points="0,-150 130,75 -130,75" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="1"/>
        <polygon points="0,-100 87,50 -87,50" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="1"/>
        <polygon points="0,-50 43,25 -43,25" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="1"/>
        <!-- Axes -->
        <line x1="0" y1="0" x2="0" y2="-200" stroke="rgba(255,255,255,.30)" stroke-width="1"/>
        <line x1="0" y1="0" x2="173" y2="100" stroke="rgba(255,255,255,.30)" stroke-width="1"/>
        <line x1="0" y1="0" x2="-173" y2="100" stroke="rgba(255,255,255,.30)" stroke-width="1"/>
        <!-- Data polygon — verde -->
        <polygon points="0,-190 156,90 -156,90" fill="rgba(155,236,0,.18)" stroke="#9BEC00" stroke-width="1.5"/>
        <!-- Data endpoints (dots) -->
        <circle cx="0" cy="-190" r="4" fill="#9BEC00"/>
        <circle cx="156" cy="90" r="4" fill="#9BEC00"/>
        <circle cx="-156" cy="90" r="4" fill="#9BEC00"/>
      </g>
      <!-- Axis labels -->
      <g font-family="Satoshi,sans-serif" font-size="18" font-weight="600" fill="#FFFFFF">
        <text x="450" y="28" text-anchor="middle">SEARCH</text>
        <g font-family="'JetBrains Mono',monospace" font-size="10" fill="rgba(255,255,255,.60)" letter-spacing=".08em">
          <text x="450" y="48" text-anchor="middle">10,000+ SKUS · SEMANTIC</text>
        </g>

        <text x="650" y="366" text-anchor="middle">MODERATION</text>
        <g font-family="'JetBrains Mono',monospace" font-size="10" fill="rgba(255,255,255,.60)" letter-spacing=".08em">
          <text x="650" y="384" text-anchor="middle">AT SCALE · REAL-TIME</text>
        </g>

        <text x="250" y="366" text-anchor="middle">TRANSLATION</text>
        <g font-family="'JetBrains Mono',monospace" font-size="10" fill="rgba(255,255,255,.60)" letter-spacing=".08em">
          <text x="250" y="384" text-anchor="middle">CROSS-LANGUAGE · LIVE</text>
        </g>
      </g>
      <!-- Scale ticks (only on top axis for legibility) -->
      <g font-family="'JetBrains Mono',monospace" font-size="9" fill="rgba(255,255,255,.40)">
        <text x="458" y="90" text-anchor="start">10</text>
        <text x="458" y="140" text-anchor="start">7</text>
        <text x="458" y="190" text-anchor="start">4</text>
      </g>
    </svg>`
  },

  /* ===================== SCENE 15 · HOTEL ===================== */

  'scene-15-s4-loop': {
    surface: 'light',
    eyebrow: 'THE CYCLE · OTA RE-ACQUISITION',
    headline: 'So next year, you ==buy them back==.',
    hi: '==buy them back==',
    sub: 'The same guest, purchased from the same middleman, at the same commission.',
    svg: `<svg class="diagram" viewBox="0 0 900 460" role="img" aria-labelledby="s15-4-t s15-4-d">
      <title id="s15-4-t">Reinforcing loop of OTA re-acquisition</title>
      <desc id="s15-4-d">Four-node flywheel showing how a hotel pays for the same guest twice through the OTA's re-marketing cycle.</desc>
      <!-- Four nodes arranged in a square, connected by curved arrows -->
      <!-- Node 1: Top -->
      <rect x="360" y="30" width="200" height="80" fill="#FFFFFF" stroke="#262B38" stroke-width="1.5"/>
      <text x="460" y="62" font-family="Satoshi,sans-serif" font-size="15" font-weight="600" fill="#262B38" text-anchor="middle">Guest books via OTA</text>
      <text x="460" y="82" font-family="'JetBrains Mono',monospace" font-size="10" fill="rgba(38,43,56,.60)" text-anchor="middle" letter-spacing=".06em">−15% commission</text>
      <!-- Node 2: Right -->
      <rect x="670" y="180" width="200" height="80" fill="#FFFFFF" stroke="#262B38" stroke-width="1.5"/>
      <text x="770" y="212" font-family="Satoshi,sans-serif" font-size="15" font-weight="600" fill="#262B38" text-anchor="middle">OTA keeps profile</text>
      <text x="770" y="232" font-family="'JetBrains Mono',monospace" font-size="10" fill="rgba(38,43,56,.60)" text-anchor="middle" letter-spacing=".06em">email, prefs, history</text>
      <!-- Node 3: Bottom (accent — the cost) -->
      <rect x="360" y="330" width="200" height="80" fill="rgba(155,236,0,.18)" stroke="#9BEC00" stroke-width="1.5"/>
      <text x="460" y="362" font-family="Satoshi,sans-serif" font-size="15" font-weight="600" fill="#262B38" text-anchor="middle">Guest returns via OTA</text>
      <text x="460" y="382" font-family="'JetBrains Mono',monospace" font-size="10" fill="#262B38" text-anchor="middle" letter-spacing=".06em">re-marketed to them</text>
      <!-- Node 4: Left -->
      <rect x="50" y="180" width="200" height="80" fill="#FFFFFF" stroke="#262B38" stroke-width="1.5"/>
      <text x="150" y="212" font-family="Satoshi,sans-serif" font-size="15" font-weight="600" fill="#262B38" text-anchor="middle">You have room #</text>
      <text x="150" y="232" font-family="'JetBrains Mono',monospace" font-size="10" fill="rgba(38,43,56,.60)" text-anchor="middle" letter-spacing=".06em">no re-contact channel</text>
      <!-- Curved arrows clockwise -->
      <path d="M560,70 Q640,90 680,180" fill="none" stroke="#262B38" stroke-width="1.5" marker-end="url(#arr)"/>
      <path d="M770,260 Q680,340 560,370" fill="none" stroke="#262B38" stroke-width="1.5" marker-end="url(#arr)"/>
      <path d="M360,370 Q220,340 150,260" fill="none" stroke="#262B38" stroke-width="1.5" marker-end="url(#arr)"/>
      <path d="M150,180 Q220,90 360,70" fill="none" stroke="#262B38" stroke-width="1.5" marker-end="url(#arr)"/>
      <defs>
        <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 Z" fill="#262B38"/>
        </marker>
      </defs>
    </svg>`
  },

  'scene-15-s6-nested': {
    surface: 'light',
    eyebrow: 'WHAT YOU HAVE · WHAT THEY HAVE',
    headline: 'What do you ==know== about your last direct guest?',
    hi: '==know==',
    sub: 'If the answer is a room number and a night, the middleman still won.',
    svg: `<svg class="diagram" viewBox="0 0 900 440" role="img" aria-labelledby="s15-6-t s15-6-d">
      <title id="s15-6-t">Nested containment — guest data you hold vs the OTA holds</title>
      <desc id="s15-6-d">Two side-by-side nested containers: 'You' contains room-number and night; 'OTA' contains those plus email, preferences, booking history, and re-marketing consent.</desc>
      <!-- YOU (small container) -->
      <rect x="60" y="60" width="360" height="320" fill="rgba(38,43,56,.03)" stroke="#262B38" stroke-width="1.5"/>
      <text x="60" y="46" font-family="'JetBrains Mono',monospace" font-size="11" fill="rgba(38,43,56,.60)" letter-spacing=".18em">YOU · 2 ITEMS</text>
      <rect x="100" y="120" width="280" height="60" fill="#FFFFFF" stroke="#262B38" stroke-width="1"/>
      <text x="240" y="156" font-family="Satoshi,sans-serif" font-size="15" font-weight="600" fill="#262B38" text-anchor="middle">Room number</text>
      <rect x="100" y="200" width="280" height="60" fill="#FFFFFF" stroke="#262B38" stroke-width="1"/>
      <text x="240" y="236" font-family="Satoshi,sans-serif" font-size="15" font-weight="600" fill="#262B38" text-anchor="middle">Night of stay</text>
      <!-- OTA (large container, verde border) -->
      <rect x="480" y="30" width="360" height="380" fill="rgba(155,236,0,.10)" stroke="#9BEC00" stroke-width="1.5"/>
      <text x="480" y="18" font-family="'JetBrains Mono',monospace" font-size="11" fill="#9BEC00" letter-spacing=".18em">OTA · 8 ITEMS</text>
      <!-- Inner nested items in OTA -->
      <g font-family="Satoshi,sans-serif" font-size="14" font-weight="600" fill="#262B38">
        <rect x="510" y="60" width="300" height="38" fill="#FFFFFF" stroke="#262B38" stroke-width="1"/>
        <text x="660" y="84" text-anchor="middle">Room number</text>
        <rect x="510" y="106" width="300" height="38" fill="#FFFFFF" stroke="#262B38" stroke-width="1"/>
        <text x="660" y="130" text-anchor="middle">Night of stay</text>
        <rect x="510" y="152" width="300" height="38" fill="rgba(38,43,56,.06)" stroke="#262B38" stroke-width="1"/>
        <text x="660" y="176" text-anchor="middle">Email</text>
        <rect x="510" y="198" width="300" height="38" fill="rgba(38,43,56,.06)" stroke="#262B38" stroke-width="1"/>
        <text x="660" y="222" text-anchor="middle">Booking history</text>
        <rect x="510" y="244" width="300" height="38" fill="rgba(38,43,56,.06)" stroke="#262B38" stroke-width="1"/>
        <text x="660" y="268" text-anchor="middle">Preferences</text>
        <rect x="510" y="290" width="300" height="38" fill="rgba(38,43,56,.06)" stroke="#262B38" stroke-width="1"/>
        <text x="660" y="314" text-anchor="middle">Party size + trip type</text>
        <rect x="510" y="336" width="300" height="38" fill="rgba(155,236,0,.18)" stroke="#9BEC00" stroke-width="1.5"/>
        <text x="660" y="360" text-anchor="middle">Re-marketing consent</text>
      </g>
    </svg>`
  },

  /* ===================== SCENE 20 · OWNERSHIP ===================== */

  'scene-20-s2-layers': {
    surface: 'light',
    eyebrow: 'THE STACK · WHAT YOU OWN',
    headline: 'Your ==code==. Your server. Your domain.',
    hi: '==code==',
    sub: 'Three layers, all in your name.',
    svg: `<svg class="diagram" viewBox="0 0 900 420" role="img" aria-labelledby="s20-2-t s20-2-d">
      <title id="s20-2-t">Layer stack of ownership — code, server, domain</title>
      <desc id="s20-2-d">Three stacked layers from bottom to top: DOMAIN (yours, registrar), SERVER (yours, hosting), CODE (yours, repo). Verde border marks the whole stack as 'yours'.</desc>
      <!-- Outer verde bracket -->
      <rect x="40" y="30" width="820" height="350" fill="none" stroke="#9BEC00" stroke-width="2" stroke-dasharray="4 4"/>
      <text x="60" y="20" font-family="'JetBrains Mono',monospace" font-size="11" fill="#9BEC00" letter-spacing=".18em">ALL YOURS · CANCEL ANY MONTH</text>
      <!-- Layer 3 CODE (top) -->
      <rect x="80" y="70" width="740" height="90" fill="#FFFFFF" stroke="#262B38" stroke-width="1.5"/>
      <text x="110" y="108" font-family="Satoshi,sans-serif" font-size="24" font-weight="600" fill="#262B38">CODE</text>
      <g font-family="'JetBrains Mono',monospace" font-size="12" fill="rgba(38,43,56,.60)" letter-spacing=".06em">
        <text x="110" y="135">git repo on your account · WordPress / Shopify / Woo</text>
        <text x="810" y="135" text-anchor="end">open source</text>
      </g>
      <!-- Layer 2 SERVER -->
      <rect x="80" y="170" width="740" height="90" fill="#FFFFFF" stroke="#262B38" stroke-width="1.5"/>
      <text x="110" y="208" font-family="Satoshi,sans-serif" font-size="24" font-weight="600" fill="#262B38">SERVER</text>
      <g font-family="'JetBrains Mono',monospace" font-size="12" fill="rgba(38,43,56,.60)" letter-spacing=".06em">
        <text x="110" y="235">your hosting account · WP Engine / your VPS · your credit card</text>
        <text x="810" y="235" text-anchor="end">portable</text>
      </g>
      <!-- Layer 1 DOMAIN -->
      <rect x="80" y="270" width="740" height="90" fill="#FFFFFF" stroke="#262B38" stroke-width="1.5"/>
      <text x="110" y="308" font-family="Satoshi,sans-serif" font-size="24" font-weight="600" fill="#262B38">DOMAIN</text>
      <g font-family="'JetBrains Mono',monospace" font-size="12" fill="rgba(38,43,56,.60)" letter-spacing=".06em">
        <text x="110" y="335">your registrar account · your DNS · your ownership</text>
        <text x="810" y="335" text-anchor="end">forever</text>
      </g>
    </svg>`
  },

  'scene-20-s3-quadrant': {
    surface: 'light',
    eyebrow: 'THE TRADEOFF · OPEN VS PROPRIETARY',
    headline: 'No ==proprietary== CMS.',
    hi: '==proprietary==',
    sub: 'Two axes: openness of the code, cost to switch out.',
    svg: `<svg class="diagram" viewBox="0 0 900 460" role="img" aria-labelledby="s20-3-t s20-3-d">
      <title id="s20-3-t">Quadrant: openness × switching cost across CMS choices</title>
      <desc id="s20-3-d">Four-quadrant chart plotting Wix, Webflow, Squarespace, WordPress, Shopify, and a custom-locked builder against open vs proprietary and low vs high switching cost.</desc>
      <!-- Quadrant frame -->
      <rect x="80" y="30" width="740" height="360" fill="none" stroke="rgba(38,43,56,.30)" stroke-width="1"/>
      <!-- Axes crosshair -->
      <line x1="450" y1="30" x2="450" y2="390" stroke="rgba(38,43,56,.20)" stroke-width="0.8" stroke-dasharray="3 4"/>
      <line x1="80" y1="210" x2="820" y2="210" stroke="rgba(38,43,56,.20)" stroke-width="0.8" stroke-dasharray="3 4"/>
      <!-- Axis labels -->
      <g font-family="'JetBrains Mono',monospace" font-size="10" fill="rgba(38,43,56,.60)" letter-spacing=".18em">
        <text x="450" y="22" text-anchor="middle">HIGH SWITCHING COST</text>
        <text x="450" y="408" text-anchor="middle">LOW SWITCHING COST</text>
        <text transform="rotate(-90 42 210)" x="42" y="210" text-anchor="middle">← PROPRIETARY   OPEN →</text>
      </g>
      <!-- Data points -->
      <!-- WORDPRESS: open + low switching (bottom-right) -->
      <circle cx="620" cy="330" r="10" fill="rgba(155,236,0,.30)" stroke="#9BEC00" stroke-width="1.5"/>
      <text x="638" y="335" font-family="Satoshi,sans-serif" font-size="15" font-weight="600" fill="#262B38">WordPress</text>
      <!-- SHOPIFY: mid-open + mid-switching -->
      <circle cx="560" cy="280" r="10" fill="rgba(155,236,0,.30)" stroke="#9BEC00" stroke-width="1.5"/>
      <text x="578" y="285" font-family="Satoshi,sans-serif" font-size="15" font-weight="600" fill="#262B38">Shopify</text>
      <!-- WEBFLOW: mid-prop + mid -->
      <circle cx="380" cy="230" r="8" fill="rgba(38,43,56,.20)" stroke="#262B38" stroke-width="1"/>
      <text x="360" y="235" font-family="Satoshi,sans-serif" font-size="13" font-weight="600" fill="#262B38" text-anchor="end">Webflow</text>
      <!-- WIX: proprietary + mid switching -->
      <circle cx="240" cy="140" r="8" fill="rgba(38,43,56,.20)" stroke="#262B38" stroke-width="1"/>
      <text x="220" y="145" font-family="Satoshi,sans-serif" font-size="13" font-weight="600" fill="#262B38" text-anchor="end">Wix</text>
      <!-- SQUARESPACE: prop + higher switching -->
      <circle cx="200" cy="100" r="8" fill="rgba(38,43,56,.20)" stroke="#262B38" stroke-width="1"/>
      <text x="180" y="105" font-family="Satoshi,sans-serif" font-size="13" font-weight="600" fill="#262B38" text-anchor="end">Squarespace</text>
      <!-- CUSTOM LOCKED BUILDER: fully proprietary + highest switching -->
      <circle cx="140" cy="70" r="12" fill="rgba(38,43,56,.20)" stroke="#262B38" stroke-width="1.5"/>
      <text x="120" y="75" font-family="Satoshi,sans-serif" font-size="13" font-weight="600" fill="#262B38" text-anchor="end">Locked builder</text>
      <!-- Zone annotations -->
      <text x="720" y="60" font-family="'JetBrains Mono',monospace" font-size="10" fill="rgba(38,43,56,.60)" letter-spacing=".08em" text-anchor="end">OPEN &amp; STICKY</text>
      <text x="720" y="380" font-family="'JetBrains Mono',monospace" font-size="10" fill="#9BEC00" letter-spacing=".08em" text-anchor="end">KYMBO SHIPS HERE</text>
    </svg>`
  }
};

for (const [id, cfg] of Object.entries(DIAGRAMS)) {
  const html = slide({ id, ...cfg });
  writeFileSync(join(OUT, `${id}.html`), html);
  console.log(`wrote ${id}.html`);
}
console.log(`\n${Object.keys(DIAGRAMS).length} diagram HTMLs written to ${OUT}`);
