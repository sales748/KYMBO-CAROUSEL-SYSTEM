/* ============================================================
   app.mjs — the DIRECT-BOOKING PRODUCT shown inside slides.
   One demo hotel (content/booking-app.json), two prototypes:
     .pa  Prototype A — warm editorial (light, boutique, serif accents)
     .pb  Prototype B — dark premium (navy, sleek, geometric)
   Rendered on an iPhone-17 frame and a laptop/browser frame.
   Every screen is a distinct booking-flow STATE so the render
   shown in a slide always matches the slide's message.
   ============================================================ */

const esc = (s = '') => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ---------------- design system ---------------- */
export const APP_CSS = `
:root{ --verde:#9BEC00; }
.app,.app *{ box-sizing:border-box; margin:0; padding:0; }
.app{ font-family:'Onest Variable','Onest',system-ui,sans-serif; }

/* themes */
.pa{ --bg:#F5F6E8; --card:#FFFFFF; --ink:#262B38; --muted:#727788; --line:#E7E8D8; --accent:#9BEC00; --aink:#232838; --shadow:rgba(38,43,56,.14); --serif:'Playfair Display',Georgia,'Times New Roman',serif; }
.pb{ --bg:#171A22; --card:#262B38; --ink:#F7F8EA; --muted:rgba(247,248,234,.6); --line:rgba(247,248,234,.13); --accent:#9BEC00; --aink:#1b1f29; --shadow:rgba(0,0,0,.45); --serif:'Onest Variable','Onest',sans-serif; }

/* device: iPhone 17 */
.shot{ padding:64px; background:transparent; display:inline-block; }
.iphone{ width:402px; height:872px; border-radius:56px; background:#05060a;
  padding:13px; box-shadow:0 40px 90px -30px var(--shadow), 0 0 0 2px rgba(255,255,255,.06) inset;
  position:relative; }
.iphone .screen{ width:100%; height:100%; border-radius:44px; overflow:hidden; background:var(--bg); color:var(--ink); position:relative; }
.island{ position:absolute; top:15px; left:50%; transform:translateX(-50%); width:112px; height:33px; background:#05060a; border-radius:20px; z-index:40; }
.sbar{ height:54px; display:flex; align-items:center; justify-content:space-between; padding:16px 30px 0; font-size:15px; font-weight:700; color:var(--ink); position:relative; z-index:30; }
.sbar .r{ display:flex; align-items:center; gap:7px; }
.sbar .bat{ width:26px; height:13px; border:1.5px solid var(--ink); border-radius:4px; position:relative; opacity:.9; }
.sbar .bat::after{ content:''; position:absolute; inset:2px; right:8px; background:var(--ink); border-radius:1px; }
.sbar .bat::before{ content:''; position:absolute; right:-4px; top:4px; width:2px; height:5px; background:var(--ink); border-radius:2px; }
.sbar .wifi,.sbar .cell{ font-size:13px; letter-spacing:1px; }
.home{ position:absolute; bottom:9px; left:50%; transform:translateX(-50%); width:134px; height:5px; border-radius:3px; background:var(--ink); opacity:.35; z-index:40; }

/* device: laptop / browser */
.laptop{ width:1180px; border-radius:18px; overflow:hidden; background:var(--card);
  box-shadow:0 50px 120px -40px var(--shadow), 0 0 0 1px var(--line); }
.wtop{ height:52px; background:var(--card); border-bottom:1px solid var(--line); display:flex; align-items:center; gap:9px; padding:0 22px; }
.wtop .dot{ width:13px; height:13px; border-radius:50%; background:var(--line); }
.wtop .url{ margin-left:16px; flex:1; max-width:520px; height:32px; border-radius:9px; background:var(--bg); border:1px solid var(--line);
  display:flex; align-items:center; gap:9px; padding:0 15px; font-size:15px; color:var(--muted); }
.wtop .url .lock{ width:11px; height:11px; border:2px solid var(--muted); border-radius:3px; }
.wview{ background:var(--bg); color:var(--ink); }

/* photo blocks (elegant warm duotone stand-ins) */
.photo{ position:relative; background:#3a2f28; overflow:hidden; }
.photo::after{ content:''; position:absolute; inset:0; background:radial-gradient(120% 90% at 70% 15%, rgba(255,240,214,.42), transparent 55%), linear-gradient(0deg, rgba(15,12,10,.5), transparent 60%); }
.ph-hero{ background:linear-gradient(155deg,#2e2620,#7a5638 45%,#c79a68 105%); }
.ph-garden{ background:linear-gradient(155deg,#243024,#4f6a44 55%,#9fb47e 110%); }
.ph-loft{ background:linear-gradient(155deg,#332620,#8a5a38 55%,#d7a06a 110%); }
.ph-suite{ background:linear-gradient(155deg,#241f2b,#5a4360 55%,#a98fb0 110%); }

/* shared bits */
.wordmark{ font-family:var(--serif); font-weight:600; letter-spacing:.01em; }
.pill{ display:inline-flex; align-items:center; gap:7px; padding:7px 13px; border-radius:100px; font-size:14px; font-weight:600; }
.pill.rate{ background:var(--accent); color:var(--aink); }
.pill.glass{ background:rgba(255,255,255,.16); color:#fff; backdrop-filter:blur(6px); }
.star{ color:var(--accent); }
.btn{ display:flex; align-items:center; justify-content:center; gap:10px; width:100%; height:58px; border-radius:15px;
  background:var(--accent); color:var(--aink); font-size:19px; font-weight:700; }
.btn.sec{ background:transparent; color:var(--ink); border:1.5px solid var(--line); }
.chip{ display:inline-flex; align-items:center; gap:8px; padding:9px 14px; border-radius:11px; background:var(--card); border:1px solid var(--line); font-size:14.5px; color:var(--ink); }
.kx{ font-family:'Space Grotesk Variable','Space Grotesk',monospace; letter-spacing:.04em; }
.strike{ text-decoration:line-through; color:var(--muted); text-decoration-color:var(--accent); }

/* app gallery page */
.gallery{ background:#0e1016; min-height:100vh; padding:70px 40px; }
.gallery h1{ color:#F7F8EA; font-family:'Onest Variable',sans-serif; font-size:46px; letter-spacing:-.02em; margin-bottom:6px; }
.gallery h1 b{ color:var(--verde); }
.gallery .sub{ color:rgba(247,248,234,.55); font-family:'Space Grotesk Variable',monospace; font-size:17px; margin-bottom:40px; }
.gallery .row{ display:flex; flex-wrap:wrap; gap:20px; align-items:flex-start; }
`;

/* ---------------- phone screens ---------------- */
const statusbar = () => `<div class="sbar"><span>9:41</span><div class="r"><span class="cell">▪▪▪</span><span class="wifi">≋</span><span class="bat"></span></div></div>`;
const stars = '★★★★★';

function pHero(d) {
  const h = d.hotel, from = Math.min(...d.rooms.map(r => r.direct));
  return `<div class="screen">${statusbar()}
    <div class="photo ph-hero" style="height:430px">
      <div style="position:absolute;inset:0;z-index:2;padding:34px 30px;display:flex;flex-direction:column;justify-content:space-between">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <span class="pill glass">${stars} ${esc(h.rating)}</span>
          <span class="pill rate">Best rate · direct</span>
        </div>
        <div>
          <div class="wordmark" style="color:#fff;font-size:46px;line-height:1">${esc(h.name)}</div>
          <div style="color:rgba(255,255,255,.86);font-size:16px;margin-top:8px" class="kx">${esc(h.place).toUpperCase()}</div>
        </div>
      </div>
    </div>
    <div style="padding:26px 26px 0">
      <div style="font-family:var(--serif);font-size:25px;line-height:1.25;color:var(--ink)">${esc(h.tagline)}</div>
      <div style="display:flex;flex-wrap:wrap;gap:9px;margin:20px 0 22px">
        ${h.amenities.map(a => `<span class="chip">${esc(a)}</span>`).join('')}
      </div>
      <div style="display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:16px">
        <div><div style="color:var(--muted);font-size:14px">From</div>
        <div style="font-size:34px;font-weight:800;letter-spacing:-.02em">$${from}<span style="font-size:16px;color:var(--muted);font-weight:600"> / night</span></div></div>
        <div style="color:var(--muted);font-size:13.5px;text-align:right;max-width:150px">You always get the<br>lowest price here.</div>
      </div>
      <div class="btn">Check availability</div>
    </div>
    <div class="home"></div></div>`;
}

function pRooms(d) {
  const s = d.stay;
  const card = (r) => {
    const off = Math.round((1 - r.direct / r.ota) * 100);
    const sel = r.id === d.selected;
    return `<div style="border:1.5px solid ${sel ? 'var(--accent)' : 'var(--line)'};border-radius:18px;overflow:hidden;background:var(--card);${sel ? 'box-shadow:0 0 0 3px rgba(155,236,0,.25)' : ''}">
      <div class="photo ph-${r.id}" style="height:120px">
        <span class="pill rate" style="position:absolute;top:12px;left:12px;z-index:3;font-size:12.5px">Direct saves ${off}%</span>
      </div>
      <div style="padding:16px 17px 17px">
        <div style="display:flex;justify-content:space-between;align-items:baseline">
          <div style="font-size:20px;font-weight:700">${esc(r.name)}</div>
          <div style="text-align:right"><span class="strike" style="font-size:14px">$${r.ota}</span>
          <div style="font-size:23px;font-weight:800;letter-spacing:-.02em">$${r.direct}<span style="font-size:13px;color:var(--muted);font-weight:600">/night</span></div></div>
        </div>
        <div style="color:var(--muted);font-size:14px;margin-top:5px">${esc(r.sqm)} · ${esc(r.beds)} · ${esc(r.note)}</div>
      </div></div>`;
  };
  return `<div class="screen">${statusbar()}
    <div style="padding:8px 24px 18px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
        <div class="wordmark" style="font-size:24px">${esc(d.hotel.name)}</div>
        <span class="pill" style="background:var(--card);border:1px solid var(--line);color:var(--muted);font-size:13px">${esc(d.hotel.url)}</span>
      </div>
      <span class="chip kx" style="font-size:13.5px">${esc(s.checkin)} → ${esc(s.checkout)} · ${esc(s.nights)} nights · ${esc(s.guests)}</span>
    </div>
    <div style="padding:0 24px;display:flex;flex-direction:column;gap:15px">${d.rooms.map(card).join('')}</div>
    <div style="padding:18px 24px 0"><div style="background:var(--accent);color:var(--aink);border-radius:13px;padding:14px 16px;font-size:15px;font-weight:600;text-align:center">Booked here, every euro stays with the hotel.</div></div>
    <div class="home"></div></div>`;
}

function pCheckout(d) {
  const c = d.checkout;
  return `<div class="screen">${statusbar()}
    <div style="padding:8px 26px 0">
      <div style="color:var(--muted);font-size:14px" class="kx">CONFIRM & PAY</div>
      <div style="font-size:27px;font-weight:800;letter-spacing:-.02em;margin-top:6px">${esc(c.room)}</div>
      <div style="color:var(--muted);font-size:15px;margin-top:3px">${esc(d.stay.checkin)} → ${esc(d.stay.checkout)} · ${esc(d.stay.guests)}</div>
    </div>
    <div style="padding:22px 26px 0">
      <div style="background:var(--card);border:1px solid var(--line);border-radius:16px;padding:18px 18px 6px">
        ${c.lineItems.map(li => `<div style="display:flex;justify-content:space-between;font-size:16px;margin-bottom:13px"><span style="color:var(--muted)">${esc(li.label)}</span><span style="font-weight:600">${esc(li.value)}</span></div>`).join('')}
        <div style="border-top:1px solid var(--line);padding-top:14px;margin-top:2px;display:flex;justify-content:space-between;align-items:baseline">
          <span style="font-size:18px;font-weight:700">Total</span>
          <span style="font-size:28px;font-weight:800;letter-spacing:-.02em">${esc(c.total)}</span>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:10px;margin:16px 2px;font-size:15px">
        <span style="color:var(--muted)">On Booking.com</span>
        <span class="strike">${esc(c.otaTotal)}</span>
        <span class="pill rate" style="font-size:13px;margin-left:auto">You save ${esc(c.saved)}</span>
      </div>
      <div style="display:flex;flex-direction:column;gap:11px;margin-top:6px">
        <div class="chip" style="justify-content:flex-start;height:52px;border-radius:13px;color:var(--muted)">Full name</div>
        <div class="chip" style="justify-content:flex-start;height:52px;border-radius:13px;color:var(--muted)">Card number &nbsp;·&nbsp; No booking fees</div>
      </div>
      <div class="btn" style="margin-top:16px">Confirm & pay ${esc(c.total)}</div>
    </div>
    <div class="home"></div></div>`;
}

function pConfirm(d) {
  const c = d.confirmation;
  return `<div class="screen"><div style="height:100%;display:flex;flex-direction:column">${statusbar()}
    <div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 34px;text-align:center">
      <div style="width:104px;height:104px;border-radius:50%;background:var(--accent);display:grid;place-items:center;margin-bottom:28px">
        <svg viewBox="0 0 48 48" width="52" height="52"><path d="M12 25 L21 34 L37 15" fill="none" stroke="#1b1f29" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div style="font-size:34px;font-weight:800;letter-spacing:-.02em">You're booked!</div>
      <div style="color:var(--muted);font-size:16px;margin-top:10px">${esc(c.room)} · ${esc(c.dates)}<br>Confirmation <b class="kx" style="color:var(--ink)">${esc(c.ref)}</b></div>
      <div style="margin-top:26px;background:var(--accent);color:var(--aink);border-radius:14px;padding:16px 22px;font-size:17px;font-weight:700">Booked direct — you saved ${esc(c.saved)} ${esc(c.vs)}</div>
      <div style="color:var(--muted);font-size:14px;margin-top:22px">A confirmation is on its way to your inbox.</div>
    </div>
    <div style="padding:0 26px 30px"><div class="btn sec">Add to calendar</div></div>
    <div class="home"></div></div></div>`;
}

function dashInner(d, wide) {
  const b = d.dashboard;
  const bar = (c) => `<div style="margin-bottom:15px">
      <div style="display:flex;justify-content:space-between;font-size:15px;margin-bottom:7px"><span>${esc(c.label)}</span><span style="font-weight:700" class="kx">${c.pct}%</span></div>
      <div style="height:14px;border-radius:8px;background:var(--line);overflow:hidden"><div style="height:100%;width:${c.pct}%;background:${c.hot ? 'var(--accent)' : 'var(--muted)'};border-radius:8px"></div></div>
    </div>`;
  const ring = `<div style="width:${wide ? 180 : 150}px;height:${wide ? 180 : 150}px;border-radius:50%;background:conic-gradient(var(--accent) ${b.occupancy}%, var(--line) 0);display:grid;place-items:center">
      <div style="width:74%;height:74%;border-radius:50%;background:var(--bg);display:grid;place-items:center;text-align:center">
        <div><div style="font-size:${wide ? 40 : 34}px;font-weight:800;letter-spacing:-.02em">${b.occupancy}%</div><div style="color:var(--muted);font-size:13px">occupancy</div></div></div></div>`;
  const stat = (label, val, hot) => `<div style="flex:1;background:var(--card);border:1px solid var(--line);border-radius:16px;padding:18px 18px">
      <div style="color:var(--muted);font-size:14px">${label}</div>
      <div style="font-size:${wide ? 34 : 27}px;font-weight:800;letter-spacing:-.02em;margin-top:6px;color:${hot ? 'var(--accent)' : 'var(--ink)'}">${val}</div></div>`;
  if (wide) return `<div style="padding:40px 46px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:26px">
        <div><div class="wordmark" style="font-size:26px">${esc(d.hotel.name)}</div><div style="color:var(--muted);font-size:15px" class="kx">OWNER · ${esc(b.month).toUpperCase()}</div></div>
        <span class="pill rate">Direct is winning</span>
      </div>
      <div style="display:flex;gap:22px">
        <div style="flex:1.4">
          <div style="background:var(--card);border:1px solid var(--line);border-radius:18px;padding:26px 28px;margin-bottom:20px">
            <div style="color:var(--muted);font-size:15px">Direct revenue this month</div>
            <div style="font-size:56px;font-weight:800;letter-spacing:-.03em;color:var(--accent)">${esc(b.directRevenue)}</div>
            <div style="color:var(--muted);font-size:15px;margin-top:2px">${b.directShare}% of all bookings came direct</div>
          </div>
          <div style="background:var(--card);border:1px solid var(--line);border-radius:18px;padding:24px 28px">
            <div style="font-size:17px;font-weight:700;margin-bottom:18px">Where your bookings came from</div>
            ${b.channels.map(bar).join('')}
          </div>
        </div>
        <div style="flex:1;display:flex;flex-direction:column;gap:20px;align-items:center">
          <div style="background:var(--card);border:1px solid var(--line);border-radius:18px;padding:26px;width:100%;display:flex;justify-content:center">${ring}</div>
          <div style="display:flex;gap:16px;width:100%">${stat('Commission saved', esc(b.commissionSaved), true)}</div>
        </div>
      </div>
    </div>`;
  return `<div class="screen">${statusbar()}
    <div style="padding:6px 26px 0">
      <div class="wordmark" style="font-size:23px">${esc(d.hotel.name)}</div>
      <div style="color:var(--muted);font-size:14px" class="kx">OWNER · ${esc(b.month).toUpperCase()}</div>
    </div>
    <div style="padding:20px 26px 0">
      <div style="background:var(--card);border:1px solid var(--line);border-radius:18px;padding:22px 24px">
        <div style="color:var(--muted);font-size:15px">Direct revenue this month</div>
        <div style="font-size:46px;font-weight:800;letter-spacing:-.03em;color:var(--accent)">${esc(b.directRevenue)}</div>
        <div style="color:var(--muted);font-size:14px">${b.directShare}% of bookings came direct</div>
      </div>
      <div style="display:flex;gap:14px;margin:16px 0">${stat('Commission saved', esc(b.commissionSaved), true)}${stat('Occupancy', b.occupancy + '%')}</div>
      <div style="background:var(--card);border:1px solid var(--line);border-radius:18px;padding:20px 22px">
        <div style="font-size:16px;font-weight:700;margin-bottom:16px">Where bookings came from</div>
        ${b.channels.map(bar).join('')}
      </div>
    </div>
    <div class="home"></div></div>`;
}
const pDashboard = (d) => dashInner(d, false);

/* ---------------- laptop screens ---------------- */
function lHero(d) {
  const h = d.hotel, from = Math.min(...d.rooms.map(r => r.direct));
  return `<div class="laptop"><div class="wtop"><span class="dot"></span><span class="dot"></span><span class="dot"></span>
      <span class="url"><span class="lock"></span>${esc(h.url)}/book</span></div>
    <div class="wview"><div class="photo ph-hero" style="height:700px">
      <div style="position:absolute;inset:0;z-index:2;padding:54px 60px 170px;display:flex;flex-direction:column;justify-content:space-between">
        <div style="display:flex;justify-content:space-between;align-items:flex-start">
          <div class="wordmark" style="color:#fff;font-size:34px">${esc(h.name)}</div>
          <span class="pill rate">Best rate, always — book direct</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:flex-end">
          <div>
            <div style="color:#fff;font-family:var(--serif);font-size:62px;line-height:1.02;max-width:620px">${esc(h.tagline)}</div>
            <div class="pill glass" style="margin-top:20px">${stars} ${esc(h.rating)} · ${esc(h.reviews)} reviews · ${esc(h.place)}</div>
          </div>
        </div>
        <div style="position:absolute;left:60px;right:60px;bottom:40px;background:var(--card);border:1px solid var(--line);border-radius:18px;box-shadow:0 30px 60px -30px var(--shadow);padding:18px 20px;display:flex;gap:16px;align-items:center;z-index:5">
          <div style="flex:1"><div style="color:var(--muted);font-size:13px">Dates</div><div style="font-size:18px;font-weight:700">${esc(d.stay.checkin)} → ${esc(d.stay.checkout)}</div></div>
          <div style="width:1px;height:38px;background:var(--line)"></div>
          <div style="flex:1"><div style="color:var(--muted);font-size:13px">Guests</div><div style="font-size:18px;font-weight:700">${esc(d.stay.guests)}</div></div>
          <div style="width:1px;height:38px;background:var(--line)"></div>
          <div style="flex:1"><div style="color:var(--muted);font-size:13px">From</div><div style="font-size:18px;font-weight:700">$${from}/night</div></div>
          <div class="btn" style="width:220px">Check availability</div>
        </div>
      </div>
    </div></div></div></div>`;
}
const lDashboard = (d) => `<div class="laptop"><div class="wtop"><span class="dot"></span><span class="dot"></span><span class="dot"></span>
    <span class="url"><span class="lock"></span>${esc(d.hotel.url)}/owner</span></div><div class="wview">${dashInner(d, true)}</div></div>`;

/* ---------------- registry + page ---------------- */
export const SCREENS = {
  phone: { hero: pHero, rooms: pRooms, checkout: pCheckout, confirm: pConfirm, dashboard: pDashboard },
  laptop: { hero: lHero, dashboard: lDashboard },
};

export function appPage(theme, data, fontsCss) {
  const label = theme === 'pa' ? 'Prototype A — warm editorial' : 'Prototype B — dark premium';
  const shots = [];
  for (const [device, screens] of Object.entries(SCREENS)) {
    for (const [name, fn] of Object.entries(screens)) {
      const attr = `data-shot="${theme}-${device}-${name}"`;
      const frame = device === 'phone'
        ? `<div class="iphone" ${attr}><div class="island"></div>${fn(data)}</div>`
        : fn(data).replace('<div class="laptop">', `<div class="laptop" ${attr}>`);
      shots.push(`<div class="shot">${frame}</div>`);
    }
  }
  // NOTE: page + gallery backgrounds are transparent so element screenshots
  // (omitBackground) yield true alpha — the device drops cleanly onto any slide.
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Marlowe House · ${label}</title>
<style>${fontsCss}\n${APP_CSS}</style></head>
<body class="app ${theme}" style="background:transparent">
  <div class="gallery" style="background:transparent">
    <div class="row">${shots.join('')}</div>
  </div>
</body></html>`;
}
