/* ============================================================
   app.mjs — the DIRECT-BOOKING PRODUCT (design language matched
   to the Kalido / Smithe House booking engine).

   These render as BARE SCREENS (no device frame) so they can be
   composited onto the blank white screen of a laptop/phone inside
   an AI scene image when building carousels.

     laptop screens → 1440×900  (browser window)
     phone screens  → 460×996   (mobile app)

   Data: content/booking-app.json.  Photos: assets/app/<slot>.png
   (passed in via `photos`; warm gradient fallback if absent).
   ============================================================ */

const esc = (s = '') => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const APP_CSS = `
:root{
  --paper:#FFFFFF; --wash:#F1F0EA; --ink:#17171A; --muted:#7C7C77;
  --line:#E6E4DA; --butter:#E7E4A6; --btn:#141414;
  --serif:'Canela','GT Super Display','Freight Display Pro',Georgia,'Times New Roman',serif;
  --sans:'Onest Variable','Onest',system-ui,-apple-system,sans-serif;
}
.app,.app *{ box-sizing:border-box; margin:0; padding:0; }
.app{ font-family:var(--sans); color:var(--ink); }
.cap{ position:relative; overflow:hidden; background:var(--wash); }
.serif{ font-family:var(--serif); font-weight:500; }
.caps{ text-transform:uppercase; letter-spacing:.18em; }

/* photo fill */
.pfill{ position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
.pgrad{ position:absolute; inset:0; }
.g-hero{ background:linear-gradient(150deg,#c8c3b4,#a99f8b 55%,#7d715c); }
.g-studio{ background:linear-gradient(150deg,#eae6db,#c9c1ad); }
.g-twobed{ background:linear-gradient(150deg,#e4e0d4,#bcae95); }
.g-life{ background:linear-gradient(150deg,#c9c3b6,#8f836c); }
.phcap{ position:absolute; inset:0; z-index:1; display:grid; place-items:center; color:rgba(255,255,255,.7); font-family:var(--sans); letter-spacing:.2em; font-size:15px; text-transform:uppercase; }

/* buttons */
.btn-yellow{ background:var(--butter); color:var(--ink); border:none; font-family:var(--sans); font-weight:600; border-radius:12px; padding:14px 22px; font-size:16px; display:inline-flex; align-items:center; justify-content:center; }
.btn-black{ background:var(--btn); color:#fff; border-radius:14px; padding:16px 30px; font-weight:600; font-size:16px; letter-spacing:.02em; }
.btn-outline{ background:transparent; border:1px solid var(--butter); color:#8a8636; border-radius:12px; padding:13px; font-weight:600; font-size:15px; width:100%; text-align:center; }

/* ---------- booking-flow chrome ---------- */
.topbar{ height:78px; background:var(--paper); border-bottom:1px solid var(--line); display:flex; align-items:center; padding:0 34px; gap:16px; }
.mono{ font-family:var(--serif); font-weight:600; font-size:34px; line-height:1; }
.topbar .name{ font-size:20px; font-weight:500; }
.topbar .sp{ flex:1; }
.sel{ height:44px; border:1px solid var(--line); border-radius:10px; display:flex; align-items:center; gap:12px; padding:0 14px; font-size:15px; color:var(--ink); }
.sel .cv{ color:var(--muted); font-size:12px; }
.xbtn{ width:38px; height:38px; display:grid; place-items:center; font-size:24px; color:var(--ink); }

.stepper{ background:var(--paper); padding:26px 60px 30px; display:flex; align-items:flex-start; }
.step{ flex:1; display:flex; flex-direction:column; align-items:center; position:relative; }
.step .dot{ width:30px; height:30px; border-radius:50%; display:grid; place-items:center; font-size:14px; font-weight:700; background:var(--paper); border:2px solid var(--line); color:var(--muted); z-index:2; }
.step.done .dot{ background:var(--ink); border-color:var(--ink); color:#fff; }
.step.active .dot{ background:var(--butter); border-color:var(--butter); color:var(--ink); }
.step .lbl{ margin-top:12px; font-size:16px; color:var(--muted); }
.step.done .lbl,.step.active .lbl{ color:var(--ink); }
.step::before{ content:''; position:absolute; top:15px; left:-50%; width:100%; height:2px; background:var(--line); z-index:1; }
.step:first-child::before{ display:none; }
.step.done::before,.step.active::before{ background:var(--butter); }

.page{ background:var(--wash); padding:34px 60px 60px; }
.sumcard{ background:var(--paper); border:1px solid var(--line); border-radius:16px; padding:24px 28px; display:flex; align-items:center; gap:40px; margin-bottom:26px; }
.sumcard .col .k{ font-weight:600; font-size:17px; }
.sumcard .col .v{ color:var(--muted); font-size:16px; margin-top:4px; }
.sumcard .edit{ margin-left:auto; border:1px solid var(--line); border-radius:10px; padding:10px 20px; font-size:15px; }

.rooms{ display:grid; grid-template-columns:1fr 1fr; gap:26px; }
.rcard{ background:var(--paper); border:1px solid var(--line); border-radius:18px; overflow:hidden; }
.rcard .img{ position:relative; height:280px; }
.rcard .dots{ position:absolute; bottom:14px; left:50%; transform:translateX(-50%); display:flex; gap:7px; z-index:2; }
.rcard .dots i{ width:7px; height:7px; border-radius:50%; background:rgba(255,255,255,.55); }
.rcard .dots i.on{ background:#fff; }
.rcard .body{ padding:26px 28px 28px; }
.rcard h3{ font-size:26px; font-weight:600; }
.rcard .max{ display:flex; align-items:center; gap:10px; color:var(--muted); font-size:16px; margin:16px 0; }
.rcard .more{ color:var(--muted); font-size:16px; display:flex; align-items:center; gap:8px; }
.rcard .from{ color:var(--muted); font-size:15px; margin-top:22px; }
.rcard .price{ font-size:34px; font-weight:700; letter-spacing:-.02em; margin-top:2px; }
.rcard .price s{ color:var(--muted); font-weight:400; font-size:22px; margin-left:10px; }
.rcard .tax{ color:var(--muted); font-size:13px; }
.rcard .foot{ display:flex; align-items:flex-end; justify-content:space-between; margin-top:8px; }
.ico{ width:20px; height:20px; display:inline-block; opacity:.7; }

/* rates */
.h-center{ text-align:center; font-size:34px; font-weight:700; margin:6px 0 26px; }
.ratecard{ background:var(--paper); border:1px solid var(--line); border-radius:16px; padding:26px 28px; margin-bottom:18px; }
.ratecard h4{ font-size:22px; font-weight:700; }
.ratecard p{ color:var(--muted); font-size:16px; line-height:1.5; margin:12px 0 18px; max-width:560px; }
.ratecard .rrow{ display:flex; align-items:flex-end; justify-content:space-between; }
.ratecard .rp{ font-size:34px; font-weight:700; letter-spacing:-.02em; }
.ratecard .rp small{ font-size:17px; font-weight:500; color:var(--muted); }
.ratecard .rp s{ display:block; font-size:19px; color:var(--muted); font-weight:400; }
.twocol{ display:grid; grid-template-columns:1fr 1fr; gap:40px; }
.h-sub{ text-align:center; font-size:26px; font-weight:700; margin:8px 0 22px; }
.addon{ background:var(--paper); border:1px solid var(--line); border-radius:14px; padding:22px 24px; margin-bottom:16px; }
.addon h5{ font-size:19px; font-weight:700; }
.addon p{ color:var(--muted); font-size:15px; line-height:1.45; margin:8px 0 14px; }
.addon .pr{ font-weight:700; font-size:18px; }
.addon .per{ color:var(--muted); font-size:14px; margin-bottom:14px; }
.occ{ background:var(--paper); border:1px solid var(--line); border-radius:14px; padding:22px 24px; }
.stepnum{ display:flex; align-items:center; border:1px solid var(--line); border-radius:12px; overflow:hidden; }
.stepnum b{ flex:1; text-align:center; font-size:20px; font-weight:600; }
.stepnum span{ width:56px; height:52px; display:grid; place-items:center; font-size:24px; color:var(--muted); }

/* hero (website) */
.hero{ position:relative; }
.hero .nav{ position:absolute; top:0; left:0; right:0; z-index:5; display:flex; align-items:center; padding:30px 40px; color:#fff; }
.hero .burger{ display:flex; flex-direction:column; gap:5px; }
.hero .burger i{ width:26px; height:2px; background:#fff; }
.hero .wm{ position:absolute; left:50%; transform:translateX(-50%); font-family:var(--serif); letter-spacing:.28em; font-size:24px; }
.hero .booknow{ position:absolute; right:0; top:44%; background:var(--butter); color:var(--ink); writing-mode:vertical-rl; padding:26px 12px; font-weight:600; letter-spacing:.16em; font-size:15px; border-radius:8px 0 0 8px; }
.hero .scrim{ position:absolute; inset:0; z-index:2; background:linear-gradient(90deg,rgba(20,18,14,.5),rgba(20,18,14,.12) 55%),linear-gradient(0deg,rgba(20,18,14,.4),transparent 55%); }
.hero .copy{ position:absolute; z-index:3; left:56px; bottom:170px; color:#fff; }
.hero .copy h1{ font-family:var(--serif); font-weight:500; font-size:82px; line-height:1.02; max-width:820px; }
.hero .copy .sub{ margin-top:22px; letter-spacing:.2em; font-size:18px; }
.searchbar{ position:absolute; z-index:4; left:56px; right:56px; bottom:48px; background:var(--paper); border-radius:16px; padding:14px; display:flex; align-items:center; gap:10px; box-shadow:0 30px 60px -30px rgba(0,0,0,.4); }
.sfield{ flex:1; display:flex; align-items:center; gap:12px; padding:14px 16px; border-radius:12px; }
.sfield .lb{ color:var(--muted); letter-spacing:.12em; font-size:14px; }
.sfield .chev{ margin-left:auto; color:var(--muted); }
.sfield.div{ border-right:1px solid var(--line); }
.guestpm{ display:flex; align-items:center; gap:14px; margin-left:auto; }
.guestpm b{ font-size:18px; }
.guestpm span{ width:30px; height:30px; border:1px solid var(--line); border-radius:50%; display:grid; place-items:center; color:var(--muted); }

/* modal */
.modalwrap{ position:absolute; inset:0; background:rgba(20,20,20,.4); display:grid; place-items:center; z-index:8; }
.modal{ width:900px; height:560px; display:flex; border-radius:6px; overflow:hidden; box-shadow:0 40px 90px -30px rgba(0,0,0,.5); }
.modal .ml{ width:46%; position:relative; }
.modal .mr{ flex:1; background:#0c0c0c; color:#fff; padding:64px 56px; position:relative; display:flex; flex-direction:column; justify-content:center; }
.modal .mr h2{ font-family:var(--serif); font-weight:500; font-size:46px; }
.modal .mr p{ color:rgba(255,255,255,.8); font-size:18px; line-height:1.5; margin:22px 0 34px; }
.modal .mr .em{ background:#fff; border-radius:8px; padding:18px 20px; color:var(--muted); font-size:16px; letter-spacing:.06em; }
.modal .mr .go{ background:#fff; color:#111; border-radius:8px; padding:18px; text-align:center; font-weight:600; letter-spacing:.06em; margin-top:14px; text-transform:uppercase; font-size:15px; }
.modal .mr .x{ position:absolute; top:20px; right:20px; width:40px; height:40px; background:#e9e9e9; border-radius:8px; display:grid; place-items:center; color:#111; font-size:22px; }

/* confirmation */
.confirm{ height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:0 42px; background:var(--wash); }
.confirm .tick{ width:104px; height:104px; border-radius:50%; background:var(--butter); display:grid; place-items:center; margin-bottom:30px; }
.confirm h1{ font-family:var(--serif); font-weight:500; font-size:46px; }
.confirm .meta{ color:var(--muted); font-size:19px; margin-top:14px; line-height:1.5; }
.confirm .meta b{ color:var(--ink); }
.confirm .save{ margin-top:30px; background:var(--butter); border-radius:14px; padding:18px 26px; font-weight:700; font-size:19px; }

/* owner dashboard (our addition, same design language) */
.dash{ padding:40px 54px; background:var(--wash); }
.dash .top{ display:flex; align-items:center; justify-content:space-between; margin-bottom:26px; }
.dash .top .k{ color:var(--muted); letter-spacing:.14em; font-size:15px; margin-top:6px; }
.dbig{ background:var(--paper); border:1px solid var(--line); border-radius:18px; padding:30px 32px; }
.dbig .k{ color:var(--muted); font-size:17px; }
.dbig .v{ font-size:60px; font-weight:700; letter-spacing:-.03em; margin-top:4px; }
.dbig .s{ color:var(--muted); font-size:16px; }
.dcard{ background:var(--paper); border:1px solid var(--line); border-radius:18px; padding:26px 30px; }
.dcard h4{ font-size:20px; font-weight:700; margin-bottom:20px; }
.bar{ margin-bottom:16px; }
.bar .r{ display:flex; justify-content:space-between; font-size:16px; margin-bottom:8px; }
.bar .track{ height:14px; border-radius:8px; background:var(--line); overflow:hidden; }
.bar .fill{ height:100%; border-radius:8px; }
.ring{ width:190px; height:190px; border-radius:50%; display:grid; place-items:center; }
.ring .in{ width:74%; height:74%; border-radius:50%; background:var(--paper); display:grid; place-items:center; }

.gallery{ padding:60px 40px; display:flex; flex-wrap:wrap; gap:40px; align-items:flex-start; }
`;

/* ---------- svg icons ---------- */
const IC = {
  cal: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M3 9h18M8 2v4M16 2v4"/></svg>`,
  user: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="8" r="3.4"/><path d="M5 20c0-3.6 3.1-5.5 7-5.5s7 1.9 7 5.5"/></svg>`,
  tag: `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 7l6-4h12v12l-4 6-3-3M3 7v6l8 8"/></svg>`,
};

/* ---------- shared components ---------- */
const photo = (photos, slot, grad, cls = 'pfill') =>
  (photos && photos[slot])
    ? `<img class="${cls}" src="${photos[slot]}" alt="">`
    : `<div class="pgrad g-${grad}"></div><div class="phcap">${slot} photo</div>`;

const topbar = (h) => `<div class="topbar">
  <span class="mono">${esc(h.monogram)}</span><span class="name">${esc(h.name)}</span><span class="sp"></span>
  <span class="sel">${esc(h.lang)} <span class="cv">▾</span></span>
  <span class="sel">${esc(h.currency)} <span class="cv">▾</span></span>
  <span class="xbtn">×</span></div>`;

const stepper = (steps, active) => `<div class="stepper">${steps.map((s, i) => {
  const cls = i < active ? 'done' : i === active ? 'active' : '';
  const inner = i < active ? '✓' : (i + 1);
  return `<div class="step ${cls}"><span class="dot">${inner}</span><span class="lbl">${esc(s)}</span></div>`;
}).join('')}</div>`;

const sumcard = (st) => `<div class="sumcard">
  <div class="col"><div class="k">Nights selected ${st.nights}</div><div class="v">${esc(st.checkin)} → ${esc(st.checkout)}</div></div>
  <div class="col"><div class="k">Guests selected ${st.guestCount}</div><div class="v">${esc(st.guests)}</div></div>
  <span class="edit">Edit</span></div>`;

/* ---------- LAPTOP SCREENS (1440×900) ---------- */
function lHero(d, photos) {
  const h = d.hotel;
  return `<div class="cap app" style="width:1440px;height:900px"><div class="hero" style="height:100%">
    ${photo(photos, 'hero', 'hero')}
    <div class="scrim"></div>
    <div class="nav"><span class="burger"><i></i><i></i><i></i></span>
      <span class="wm">${esc(h.name).toUpperCase()}</span></div>
    <div class="booknow">BOOK NOW</div>
    <div class="copy"><h1>${esc(h.headline)}</h1><div class="sub caps">${esc(h.tagline)}</div></div>
    <div class="searchbar">
      <div class="sfield div">${IC.cal}<span class="lb caps">CHECK IN</span><span class="chev">▾</span></div>
      <div class="sfield div">${IC.cal}<span class="lb caps">CHECK OUT</span><span class="chev">▾</span></div>
      <div class="sfield div">${IC.user}<span class="lb caps">GUEST</span><span class="guestpm"><span>−</span><b>1</b><span>+</span></span></div>
      <div class="sfield">${IC.tag}<span class="lb caps">PROMO CODE</span></div>
      <span class="btn-black">SEARCH</span>
    </div></div></div>`;
}

function roomCard(r, photos) {
  const off = Math.round((1 - r.direct / r.ota) * 100);
  return `<div class="rcard"><div class="img">${photo(photos, r.photo, r.photo)}
      <span class="dots"><i class="on"></i><i></i><i></i><i></i><i></i></span></div>
    <div class="body"><h3>${esc(r.name)}</h3>
      <div class="max">${IC.user} Maximum persons: ${r.max}</div>
      <div class="more">More ▾</div>
      <div class="foot"><div><div class="from">From</div>
        <div class="price">$${r.direct}.00 <s>$${r.ota}</s></div>
        <div class="tax">per suite/nightly · Taxes excluded · direct saves ${off}%</div></div>
        <span class="btn-yellow">Show rates</span></div></div></div>`;
}
const lCategories = (d, photos) => `<div class="cap app" style="width:1440px;height:900px">
  ${topbar(d.hotel)}${stepper(d.steps, 1)}
  <div class="page">${sumcard(d.stay)}<div class="rooms">${d.rooms.map((r) => roomCard(r, photos)).join('')}</div></div></div>`;

function lRates(d, photos) {
  const sel = d.rooms.find((r) => r.id === d.selected) || d.rooms[0];
  const rate = (rt) => `<div class="ratecard"><h4>${esc(rt.name)}</h4><p>${esc(rt.desc)}</p>
    <div class="rrow"><div class="rp">${rt.was ? `<s>${esc(rt.was)}</s>` : ''}${esc(rt.price)} <small>${esc(rt.per)}</small></div>
    <span class="btn-yellow">${esc(rt.cta)}</span></div></div>`;
  const addon = (a) => `<div class="addon"><h5>${esc(a.name)}</h5><p>${esc(a.desc)}</p>
    <div class="pr">${esc(a.price)}</div><div class="per">Taxes excluded · ${esc(a.per)}</div>
    <div class="btn-outline">Add</div></div>`;
  return `<div class="cap app" style="width:1440px;height:1080px">
    ${topbar(d.hotel)}${stepper(d.steps, 2)}
    <div class="page"><div class="h-center">Select rate</div>${sumcard(d.stay)}
      <div class="ratecard" style="display:flex;gap:24px;align-items:center">
        <div style="width:300px;height:180px;border-radius:12px;overflow:hidden;position:relative;flex:0 0 auto">${photo(photos, sel.photo, sel.photo)}</div>
        <div><h4 style="font-size:24px">${esc(sel.name)}</h4>
          <div class="max">${IC.user} Maximum persons: ${sel.max}</div>
          <div style="color:var(--muted);font-size:16px">[${esc(sel.sqft)}] · ${esc(sel.bed)}</div></div></div>
      <div class="twocol"><div><div class="h-sub">Enhance your stay</div>${d.addons.map(addon).join('')}</div>
        <div><div class="h-sub">Rates</div>${d.rates.map(rate).join('')}</div></div></div></div>`;
}

function lModal(d, photos) {
  const m = d.modal;
  return `<div class="cap app" style="width:1440px;height:900px">
    ${topbar(d.hotel)}${stepper(d.steps, 2)}
    <div class="page" style="filter:blur(1px);opacity:.6">${sumcard(d.stay)}</div>
    <div class="modalwrap"><div class="modal"><div class="ml">${photo(photos, 'lifestyle', 'life')}</div>
      <div class="mr"><span class="x">×</span><h2>${esc(m.title)}</h2><p>${esc(m.body)}</p>
        <div class="em">EMAIL</div><div class="go">${esc(m.cta)}</div></div></div></div></div>`;
}

function lDashboard(d) {
  const b = d.dashboard;
  const bar = (c) => `<div class="bar"><div class="r"><span>${esc(c.label)}</span><b>${c.pct}%</b></div>
    <div class="track"><div class="fill" style="width:${c.pct}%;background:${c.hot ? 'var(--butter)' : '#c9c7bd'}"></div></div></div>`;
  return `<div class="cap app" style="width:1440px;height:900px">${topbar(d.hotel)}
    <div class="dash"><div class="top"><div><div class="mono" style="font-size:30px">${esc(d.hotel.name)}</div>
      <div class="k caps">OWNER · ${esc(b.month)}</div></div><span class="btn-yellow">Direct is winning</span></div>
    <div style="display:grid;grid-template-columns:1.5fr 1fr;gap:24px">
      <div style="display:flex;flex-direction:column;gap:22px">
        <div class="dbig"><div class="k">Direct revenue this month</div><div class="v">${esc(b.directRevenue)}</div>
          <div class="s">${b.directShare}% of all bookings came direct</div></div>
        <div class="dcard"><h4>Where your bookings came from</h4>${b.channels.map(bar).join('')}</div></div>
      <div style="display:flex;flex-direction:column;gap:22px">
        <div class="dcard" style="display:flex;justify-content:center">
          <div class="ring" style="background:conic-gradient(var(--butter) ${b.occupancy}%, var(--line) 0)"><div class="in">
            <div style="text-align:center"><div style="font-size:44px;font-weight:700">${b.occupancy}%</div><div class="s">occupancy</div></div></div></div></div>
        <div class="dbig"><div class="k">Commission saved</div><div class="v" style="font-size:48px">${esc(b.commissionSaved)}</div></div>
      </div></div></div></div>`;
}

/* ---------- PHONE SCREENS (460×996) ---------- */
const sbar = () => `<div style="height:46px;display:flex;align-items:center;justify-content:space-between;padding:14px 26px 0;font-size:15px;font-weight:700"><span>9:41</span><span style="letter-spacing:2px">▪▪▪ ≋ ▭</span></div>`;

function pConfirm(d) {
  const c = d.confirmation;
  return `<div class="cap app" style="width:460px;height:996px">${sbar()}
    <div class="confirm" style="height:calc(100% - 46px)">
      <div class="tick"><svg viewBox="0 0 48 48" width="52" height="52"><path d="M12 25 L21 34 L37 15" fill="none" stroke="#17171A" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
      <h1>You're booked!</h1>
      <div class="meta">${esc(c.room)} · ${esc(c.dates)}<br>Confirmation <b>${esc(c.ref)}</b></div>
      <div class="save">Booked direct — you saved ${esc(c.saved)} ${esc(c.vs)}</div>
      <div class="meta" style="margin-top:22px">A confirmation is on its way to your inbox.</div></div></div>`;
}

function pHero(d, photos) {
  const h = d.hotel;
  return `<div class="cap app" style="width:460px;height:996px"><div class="hero" style="height:100%">
    ${photo(photos, 'hero', 'hero')}<div class="scrim"></div>
    <div style="position:absolute;top:0;left:0;right:0;z-index:5;color:#fff">${sbar()}
      <div style="display:flex;align-items:center;justify-content:space-between;padding:6px 26px">
        <span class="burger" style="display:flex;flex-direction:column;gap:5px"><i style="width:24px;height:2px;background:#fff;display:block"></i><i style="width:24px;height:2px;background:#fff;display:block"></i><i style="width:24px;height:2px;background:#fff;display:block"></i></span>
        <span style="font-family:var(--serif);letter-spacing:.24em;font-size:18px">${esc(h.name).toUpperCase()}</span><span style="width:24px"></span></div></div>
    <div style="position:absolute;z-index:3;left:30px;right:30px;bottom:230px;color:#fff">
      <h1 style="font-family:var(--serif);font-weight:500;font-size:46px;line-height:1.03">${esc(h.headline)}</h1>
      <div class="caps" style="margin-top:16px;font-size:14px">${esc(h.tagline)}</div></div>
    <div style="position:absolute;z-index:4;left:24px;right:24px;bottom:34px;background:var(--paper);border-radius:16px;padding:10px;display:flex;flex-direction:column;gap:8px">
      <div class="sfield" style="border:1px solid var(--line)">${IC.cal}<span class="lb caps">CHECK IN</span><span class="chev">▾</span></div>
      <div class="sfield" style="border:1px solid var(--line)">${IC.cal}<span class="lb caps">CHECK OUT</span><span class="chev">▾</span></div>
      <div class="sfield" style="border:1px solid var(--line)">${IC.user}<span class="lb caps">GUEST</span><span class="guestpm"><span>−</span><b>1</b><span>+</span></span></div>
      <span class="btn-black" style="border-radius:12px">SEARCH</span></div></div></div>`;
}

function pRates(d, photos) {
  const sel = d.rooms.find((r) => r.id === d.selected) || d.rooms[0];
  const off = Math.round((1 - sel.direct / sel.ota) * 100);
  return `<div class="cap app" style="width:460px;height:996px;background:var(--wash)">${sbar()}
    <div style="padding:6px 22px 0"><div style="display:flex;align-items:center;gap:10px"><span class="mono" style="font-size:26px">${esc(d.hotel.monogram)}</span><span style="font-weight:500;font-size:18px">${esc(d.hotel.name)}</span></div></div>
    <div style="padding:16px 22px">
      <div class="sumcard" style="gap:20px;padding:16px 18px;margin-bottom:18px"><div class="col"><div class="k" style="font-size:15px">${sel.nights || d.stay.nights} nights</div><div class="v" style="font-size:14px">${esc(d.stay.checkin)}→${esc(d.stay.checkout)}</div></div><span class="edit" style="padding:8px 14px;font-size:14px">Edit</span></div>
      <div class="rcard"><div class="img" style="height:200px">${photo(photos, sel.photo, sel.photo)}<span class="dots"><i class="on"></i><i></i><i></i></span></div>
        <div class="body" style="padding:20px"><h3 style="font-size:23px">${esc(sel.name)}</h3>
          <div class="max" style="margin:12px 0">${IC.user} Maximum persons: ${sel.max}</div>
          <div class="from">From</div><div class="price" style="font-size:30px">$${sel.direct}.00 <s>$${sel.ota}</s></div>
          <div class="tax">per suite/nightly · direct saves ${off}%</div>
          <div class="btn-yellow" style="width:100%;margin-top:16px">Book now</div></div></div></div></div>`;
}

/* ---------- registry + page ---------- */
export const SCREENS = {
  laptop: { hero: lHero, categories: lCategories, rates: lRates, modal: lModal, dashboard: lDashboard },
  phone: { hero: pHero, rates: pRates, confirm: pConfirm },
};

export function appPage(data, fontsCss, photos) {
  const shots = [];
  for (const [device, screens] of Object.entries(SCREENS)) {
    for (const [name, fn] of Object.entries(screens)) {
      shots.push(`<div data-shot="${device}-${name}">${fn(data, photos)}</div>`);
    }
  }
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Marlowe House · booking app (Kalido-style)</title>
<style>${fontsCss}\n${APP_CSS}</style></head>
<body class="app" style="background:#2a2a2a"><div class="gallery">${shots.join('')}</div></body></html>`;
}
