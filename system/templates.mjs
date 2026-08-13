/* ============================================================
   Slide templates — pure functions -> HTML string.
   One function per layout in the KYMBO FEED OS design language.
   ============================================================ */

const esc = (s = '') => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* organic inline markup for scene copy (the hand-made "alive" layer):
   ==text== marker swipe · __text__ hand underline
   ~~text~~ hand strikethrough · ((text)) scribbled circle */
function rich(s = '') {
  let t = esc(s);
  t = t.replace(/==(.+?)==/g, '<span class="marker">$1</span>');
  t = t.replace(/\(\((.+?)\)\)/g, '<span class="circle">$1</span>');
  t = t.replace(/__(.+?)__/g, '<span class="uline">$1</span>');
  t = t.replace(/~~(.+?)~~/g, '<span class="strike">$1</span>');
  return t;
}

/* hand-drawn arrows — wobbly shaft + open two-stroke head, in brand lime */
const ARROWS = {
  right:    `<svg class="scribble-arrow" viewBox="0 0 210 96" style="right:82px;top:34%"><path d="M8 30 C64 12 138 20 182 52 M182 52 L150 44 M182 52 L160 78"/></svg>`,
  downLeft: `<svg class="scribble-arrow" viewBox="0 0 200 130" style="left:120px;top:24%"><path d="M150 12 C120 44 70 70 40 112 M40 112 L36 78 M40 112 L74 108"/></svg>`,
  down:     `<svg class="scribble-arrow" viewBox="0 0 110 150" style="left:50%;top:20%;width:120px"><path d="M54 8 C44 46 62 78 52 120 M52 120 L30 96 M52 120 L76 98"/></svg>`,
};
const arrowFor = (a) => ARROWS[a] || (a ? ARROWS.right : '');

// highlight one substring in verde
function hi(text, word) {
  if (!word) return esc(text);
  const i = text.indexOf(word);
  if (i < 0) return esc(text);
  return esc(text.slice(0, i)) + `<span class="hi">${esc(word)}</span>` + esc(text.slice(i + word.length));
}

const kicker = (t) => t
  ? `<div class="kicker"><span class="br">[</span> ${esc(t)} <span class="br">]</span></div>`
  : `<div></div>`;

const ticks = (total, idx) => {
  let out = '<div class="ticks">';
  for (let i = 0; i < total; i++) out += `<span class="tick${i === idx ? ' on' : ''}"></span>`;
  return out + '</div>';
};

// footer: progress squares only — no handle, no swipe text, no logo
const footer = (ctx) => `<footer class="ft">${ticks(ctx.total, ctx.index)}</footer>`;

function matrix(g) {
  // Accept the legacy shape (total, filled) OR the bespoke shape
  // (total, on:[...], hot:[...], labels:[...], cols?)
  const total = g.total ?? 16;
  const filled = g.filled;
  const onSet = new Set(g.on || []);
  const hotSet = new Set(g.hot || []);
  const labels = g.labels || [];
  const cols = g.cols ?? (total <= 2 ? 2 : total <= 4 ? 4 : total <= 16 ? 4 : total <= 36 ? 6 : 10);
  // Wider tiles when a low-count grid carries labels — reads as content, not
  // decoration. Widths sized so no tile is clipped inside the safe canvas
  // (slide is 1080px wide, with 92px padding each side = 896px usable).
  const isLabeled = labels.length > 0;
  const width = isLabeled
    ? (total === 2 ? 780 : total === 4 ? 880 : 720)
    : (cols <= 4 ? 560 : cols <= 6 ? 720 : 880);
  let cells = '';
  for (let i = 0; i < total; i++) {
    let c = 'cell';
    if (hotSet.has(i)) c += ' hot';
    else if (onSet.has(i)) c += ' on';
    else if (filled !== undefined && i < filled) c += (i % 7 === 3 ? ' hot' : ' on');
    const label = labels[i] ? `<span class="cell-label">${esc(labels[i])}</span>` : '';
    cells += `<div class="${c}">${label}</div>`;
  }
  const cls = 'matrix' + (isLabeled ? ' labeled' : '') + ` count-${total}`;
  return `<div class="${cls}" style="grid-template-columns:repeat(${cols},1fr);width:${width}px">${cells}</div>`;
}

function drainGrid(total, filled) {
  let cells = '';
  for (let i = 0; i < total; i++) {
    cells += `<div class="cell${i >= filled ? ' lost' : ''}"></div>`;
  }
  return `<div class="d-grid">${cells}</div>`;
}

/* ---------------- COVERS ---------------- */

function coverStat(s) {
  const raw = (s.stat || '').replace(/[^0-9%$]/g, '');
  const sz = raw.length <= 2 ? 'lg' : raw.length <= 4 ? 'md' : 'sm';
  return `
    <div class="figure ${sz}">${esc(s.stat)}</div>
    <h1>${esc(s.headline)}</h1>
    ${s.sub ? `<div class="sub">${esc(s.sub)}</div>` : ''}`;
}

function coverStatement(s) {
  return `
    <h1>${hi(s.headline, s.hi || s.hiWord)}</h1>
    ${s.sub ? `<div class="sub">${esc(s.sub)}</div>` : ''}`;
}

function coverIndex(s) {
  return `
    ${s.ghost ? `<div class="ghost">${esc(s.ghost)}</div>` : ''}
    <h1>${esc(s.headline)}</h1>
    ${s.sub ? `<div class="sub">${esc(s.sub)}</div>` : ''}`;
}

function coverMatrix(s) {
  const g = s.grid || { total: 16, filled: 16 };
  return `
    <div>
      <h1>${hi(s.headline, s.hi || s.hiWord)}</h1>
      ${s.sub ? `<div class="sub">${esc(s.sub)}</div>` : ''}
    </div>
    ${matrix(g)}`;
}

/* ---------------- INTERIOR ---------------- */

const point = (s) => `
  ${s.index ? `<div class="p-index"><span class="px"></span>${esc(s.index)}</div>` : ''}
  <div class="p-title">${hi(s.title, s.hi || s.hiWord)}</div>
  <div class="p-body">${esc(s.body)}</div>`;

const stat = (s) => `
  <div class="st-value${(s.value || '').length > 4 ? ' long' : ''}">${esc(s.value)}</div>
  <div class="st-label">${esc(s.label)}</div>
  ${s.note ? `<div class="st-note">${esc(s.note)}</div>` : ''}`;

const list = (s) => `
  <div class="list-title">${esc(s.title)}</div>
  <div class="list-items">
    ${s.items.map((it) => `<div class="li"><span class="px"></span><span>${esc(it)}</span></div>`).join('')}
  </div>`;

const drain = (s) => `
  <div class="d-title">${esc(s.title)}</div>
  ${drainGrid(s.total, s.filled)}
  <div class="d-cap">${esc(s.caption)}</div>`;

function mockup(s) {
  const ui = s.ui || {};
  const inner = `
    <div class="mk-hero"><span class="corner"></span></div>
    <div class="mk-brand">${esc(ui.brandline || '')}</div>
    <div class="mk-price"><b>${esc(ui.price || '')}</b><span>${esc(ui.unit || '')}</span></div>
    <div class="mk-cta">${esc(ui.cta || 'Book direct')}</div>`;
  const device = s.device === 'mobile'
    ? `<div class="phone"><div class="notch"></div><div class="win">${inner}</div></div>`
    : `<div class="browser"><div class="bar"><span class="px"></span><span class="px"></span><span class="px"></span><span class="url">yourhotel.com/book</span></div><div class="win">${inner}</div></div>`;
  return `
    <div class="mk-title">${esc(s.title)}</div>
    <div class="mk-stage">${device}</div>
    <div class="mk-cap">${esc(s.caption)}</div>`;
}

const quote = (s) => `
  <div class="q-mark">“</div>
  <div class="q-text">${esc(s.text)}</div>
  ${s.attribution ? `<div class="q-attr">— ${esc(s.attribution)}</div>` : ''}`;

const cta = (s, message) => `
  <div class="cta-h">${hi(s.headline, s.hiWord)}</div>
  ${s.sub ? `<div class="cta-sub">${esc(s.sub)}</div>` : ''}
  <div class="cta-action"><span class="px"></span>${esc(s.action)}</div>`;

/* ---------------- ASSEMBLY ---------------- */

const COVER_CLASS = {
  STAT: 'cover-stat', STATEMENT: 'cover-statement',
  INDEX: 'cover-index', MATRIX: 'cover-matrix',
};

function coverBody(s) {
  switch (s.variant) {
    case 'STAT': return coverStat(s);
    case 'STATEMENT': return coverStatement(s);
    case 'INDEX': return coverIndex(s);
    case 'MATRIX': return coverMatrix(s);
    default: return coverStatement(s);
  }
}

// SEAM cover is bespoke full-bleed (own furniture)
/* A seam panel is (1080-8)/2 minus 72px padding either side => 392px of type
   room. Fit the display size to the LONGEST WORD across both panels so the two
   halves always render at the same size — an asymmetric seam reads as a bug. */
function seamSize(...values) {
  const longest = Math.max(...values.map((v) => Math.max(...String(v).split(/\s+/).map((w) => w.length))));
  if (longest <= 4) return 150;   // $312 / $516
  if (longest <= 5) return 122;   // BUILD
  if (longest <= 6) return 102;   // WIDGET
  if (longest <= 8) return 80;
  return 64;
}

function seamSlide(s, ctx) {
  const px = seamSize(s.left, s.right);
  const kickerHTML = s.kicker
    ? `<div class="kicker kicker-abs"><span class="br">[</span> ${esc(s.kicker)} <span class="br">]</span></div>`
    : '';
  return `<div class="slide cover-seam" data-idx="${ctx.index}">
    <div class="seam-l">
      ${kickerHTML}
      <div class="seam-label">${esc(s.leftLabel || 'VIA OTA')}</div>
      <div class="seam-big" style="font-size:${px}px">${esc(s.left)}</div>
    </div>
    <div class="divider"></div>
    <div class="seam-r">
      <div class="seam-label">${esc(s.rightLabel || 'DIRECT')}</div>
      <div class="seam-big" style="font-size:${px}px">${esc(s.right)}</div>
    </div>
    ${s.sub ? `<div class="seam-sub">${esc(s.sub)}</div>` : ''}
  </div>`;
}

const BODY = { point, stat, list, drain, mockup, quote };

/* ---------------- SCENE (Path B: on top of AI images) ---------------- */
function sceneBody(s) {
  switch (s.layout) {
    case 'cover':
      return `${s.kicker ? `<div class="kicker" style="margin-bottom:24px"><span class="br">[</span> ${esc(s.kicker)} <span class="br">]</span></div>` : ''}
        <h1>${rich(s.headline)}</h1>
        ${s.sub ? `<div class="sub" style="margin-top:28px">${rich(s.sub)}</div>` : ''}`;
    case 'point':
      return `${s.index ? `<div class="p-index"><span class="px"></span>${esc(s.index)}</div>` : ''}
        <div class="p-title">${rich(s.title)}</div>
        ${s.body ? `<div class="p-body" style="opacity:1">${rich(s.body)}</div>` : ''}`;
    case 'list':
      return list ? `<div class="list-title">${rich(s.title)}</div>
        <div class="list-items">${s.items.map((it) => `<div class="li"><span class="px"></span><span>${rich(it)}</span></div>`).join('')}</div>` : '';
    case 'cta':
      return `<div class="cta-h">${rich(s.headline)}</div>
        ${s.sub ? `<div class="cta-sub" style="opacity:1">${rich(s.sub)}</div>` : ''}
        <div class="cta-action"><span class="px"></span>${esc(s.action)}</div>`;
    default:
      return `<h1>${rich(s.headline || s.title || '')}</h1>`;
  }
}

/* ---- SCREEN COMPOSITING ----
   Map a bare booking-app render onto the blank white screen of a device
   inside a scene photo, via a projective (perspective) transform. The
   slide declares the screen's four corners in slide px (1080x1350):
     screen: { app:'laptop-hero', quad:[[x,y]TL,[x,y]TR,[x,y]BR,[x,y]BL] }
   Corners are read off the generated photo once Kim sends it. */
const SCREEN_DIMS = {
  'laptop-hero': [1440, 900], 'laptop-categories': [1440, 900], 'laptop-rates': [1440, 1080],
  'laptop-modal': [1440, 900], 'laptop-dashboard': [1440, 900], 'laptop-board': [1440, 900], 'laptop-book': [1440, 900],
  'phone-hero': [460, 996], 'phone-rates': [460, 996], 'phone-confirm': [460, 996], 'phone-book': [460, 996],
};
const _adj = (m) => [
  m[4] * m[8] - m[5] * m[7], m[2] * m[7] - m[1] * m[8], m[1] * m[5] - m[2] * m[4],
  m[5] * m[6] - m[3] * m[8], m[0] * m[8] - m[2] * m[6], m[2] * m[3] - m[0] * m[5],
  m[3] * m[7] - m[4] * m[6], m[1] * m[6] - m[0] * m[7], m[0] * m[4] - m[1] * m[3]];
const _mm = (a, b) => { const c = []; for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) { let s = 0; for (let k = 0; k < 3; k++) s += a[3 * i + k] * b[3 * k + j]; c[3 * i + j] = s; } return c; };
const _mv = (m, v) => [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[3] * v[0] + m[4] * v[1] + m[5] * v[2], m[6] * v[0] + m[7] * v[1] + m[8] * v[2]];
function _basis(p) {
  const m = [p[0][0], p[1][0], p[2][0], p[0][1], p[1][1], p[2][1], 1, 1, 1];
  const v = _mv(_adj(m), [p[3][0], p[3][1], 1]);
  return _mm(m, [v[0], 0, 0, 0, v[1], 0, 0, 0, v[2]]);
}
function quadMatrix(w, h, quad) {
  const src = [[0, 0], [w, 0], [w, h], [0, h]];
  const H = _mm(_basis(quad), _adj(_basis(src)));
  for (let i = 0; i < 9; i++) H[i] /= H[8];
  const t = [H[0], H[3], 0, H[6], H[1], H[4], 0, H[7], 0, 0, 1, 0, H[2], H[5], 0, H[8]];
  return `matrix3d(${t.join(',')})`;
}
function screenOverlay(s) {
  if (!s.screen || !s.screen.app || !s.screen.quad) return '';
  const [w] = SCREEN_DIMS[s.screen.app] || [1440, 900];
  let q = s.screen.quad;
  // overscan: expand the quad slightly from its centroid so the UI fully covers
  // the screen with no exposed rim (bezel/white edge)
  const over = s.screen.overscan ?? 0.018;
  if (over) {
    const cx = (q[0][0] + q[1][0] + q[2][0] + q[3][0]) / 4;
    const cy = (q[0][1] + q[1][1] + q[2][1] + q[3][1]) / 4;
    q = q.map(([x, y]) => [cx + (x - cx) * (1 + over), cy + (y - cy) * (1 + over)]);
  }
  // Match the element to the SCREEN's aspect and use object-fit:cover so the UI
  // is never stretched — it fills by cropping, like a real screenshot on a device.
  const d = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  const aspect = ((d(q[0], q[1]) + d(q[3], q[2])) / 2) / ((d(q[0], q[3]) + d(q[1], q[2])) / 2);
  const elW = w, elH = Math.max(1, Math.round(w / aspect));
  const isPhone = s.screen.app.startsWith('phone');
  const radius = s.screen.radius ?? (isPhone ? 44 : 14);
  return `<img class="screen-ovl" style="width:${elW}px;height:${elH}px;object-fit:cover;border-radius:${radius}px;transform:${quadMatrix(elW, elH, q)};transform-origin:0 0" src="../app/img/${esc(s.screen.app)}.png" alt="">`;
}

function sceneSlide(s, ctx) {
  const coverCls = s.layout === 'cover' ? 'cover-statement' : (s.layout || 'point');
  const anchor = s.anchor || (s.layout === 'cover' ? 'top' : 'bottom');
  const scrim = s.scrim || (anchor === 'top' ? 'top' : 'bottom');
  const bg = s.bg
    ? `<img src="${esc(s.bg)}" alt="">`
    : `<div class="await">Scene image pending<br>${esc(s.imageId || '')}${s.screen ? `<br><br>+ composite: ${esc(s.screen.app)}` : ''}</div>`;
  return `<div class="slide scene ${ctx.surface || ''} ${coverCls}" data-idx="${ctx.index}">
    <div class="layer-bg">${bg}</div>
    <div class="layer-scrim ${scrim}"></div>
    ${screenOverlay(s)}
    <div class="layer-textscrim ${scrim}"></div>
    <header class="hd">${kicker(s.layout === 'cover' ? '' : (s.kicker || ctx.pillar))}</header>
    <main class="bd anchor-${anchor}">${sceneBody(s)}${arrowFor(s.arrow)}</main>
    ${footer(ctx)}
  </div>`;
}

export function renderSlide(slide, ctx) {
  // Path B — scene slide built on an AI image (with optional screen composite)
  if (slide.scene) return sceneSlide(slide, ctx);
  // bespoke SEAM cover
  if (slide.type === 'cover' && slide.variant === 'SEAM') return seamSlide(slide, ctx);

  let bodyHTML, coverCls = '', headKicker;

  if (slide.type === 'cover') {
    coverCls = COVER_CLASS[slide.variant] || 'cover-statement';
    bodyHTML = coverBody(slide);
    headKicker = slide.kicker;
  } else if (slide.type === 'cta') {
    bodyHTML = cta(slide, ctx.message);
    coverCls = 'cta';
    headKicker = ctx.pillar;
  } else {
    bodyHTML = (BODY[slide.type] || point)(slide);
    coverCls = slide.type;
    headKicker = ctx.pillar;
  }

  return `<div class="slide ${ctx.surface} ${coverCls}" data-idx="${ctx.index}">
    <header class="hd">${kicker(headKicker)}</header>
    <main class="bd">${bodyHTML}</main>
    ${footer(ctx)}
  </div>`;
}
