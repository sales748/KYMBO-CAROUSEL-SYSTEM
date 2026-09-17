# HANDOVER — KYMBO CAROUSEL SYSTEM

Read this end-to-end before touching the repo. It is the working memory the previous chat lost. Everything below is either verified against the current tree, quoted from the client, or explicitly labelled as an open question.

Open a new chat with: **"read HANDOVER-KYMBO.md and let's build Batch 01v2"**.

---

## 1. What Kymbo actually is

Kymbo's own site puts it plainly in the page title: **"Kymbo Devs · E-Commerce, ERP, CRM & AI Systems Engineering"**. Seven years, full-stack, custom WordPress and Shopify plus web and mobile apps. FYM (Fire Your Middleman) is **one campaign** inside that shop — not the company. Batch 01 leaned on FYM because it was the entry brief; every batch from here forward must read as a systems-engineering studio, not a hotel-marketing newsletter.

**What the company does — in reality (four practice areas, plus FYM the campaign):**

- **E-Commerce Platforms** — WooCommerce, Shopify (custom + theme work), migrations, checkout/UX repair. Highly convertible stores.
- **ERP & Operational Systems** — the back-of-house that runs the business: inventory, ops, finance stitching. Named on kymbo.co.
- **CRM & Sales Automation** — the pipeline layer. Named on kymbo.co.
- **AI & Custom Integrations** — bespoke integrations, model-backed features, systems that don't want to talk to each other. Named on kymbo.co.
- **WordPress builds & rescues** — Care Plan is a real productized SKU ($99/mo). WP Engine is the hosting partner. Bread-and-butter under the e-com and marketing-site work.
- **Mobile & web apps** — custom app work, not just marketing sites. Batch 01 never showed this category; must appear from Batch 01v2 forward.
- **Fire Your Middleman (FYM) — the campaign** — direct-booking for hotels & short-term rentals. Kalido is the portfolio proof point (runs **Mews**, not Guesty — do not conflate).
- **Team-as-topic** — Isa asked explicitly for content that shows the people, the process, the craft.

**How the feed should split.** Any 12-tile batch should read as a systems-engineering studio doing all of the above. A rough weight to aim at: 30% FYM (the campaign we're already known for), 50% educational (ERP/CRM/AI/e-com/WP — the actual practice areas), 20% craft (team, process, ownership). The current Batch 01v2 hits 4/6/2 ≈ 33/50/17. Keep that shape; don't slide back to FYM-heavy.

**Offer tiers (from `profiles/kymbo/content/ideas/stack.json`):**

- **$999 Launch** — a productized build SKU. **NOT yet live in Shopify.** No buy path. Do not link a checkout, do not promise a delivery timeline.
- **$99/mo Care Plan** — recurring WP maintenance. Also **not yet live** as a buy path. Same rule.
- **Custom projects** — bespoke scope. This is where most revenue lives.

**Team (as of the last conversation with the client):**

- **Isa** — CEO. Final say on brand, copy, direction. Feedback in Spanish and English.
- **Kymbo (sales@kymbo.co)** — the account this system serves; operator of the IG account and this repo.

Anything the copy says about "we", "our team", "our process" refers to this real shop. Do not fabricate roles, headcount, tenure, or awards.

---

## 2. Copy discipline — non-negotiable rules

These are the rules that got broken in Batch 01 and had to be fixed in flight. Bake them in from the first draft of Batch 01v2.

### Verified stats only, sourced verbatim

- Use the numbers in `stack.json → verifiedStats` **VERBATIM with their source**. Do not restate, round, or paraphrase them.
- Every statistic in a carousel must carry a source. If the source isn't Notion or an approved research doc, **replace the stat with arithmetic the reader performs on their own numbers.**
- Example: instead of "Hotels lose 80% to OTAs" (unsourced, wrong, and about the reader's business), say "Take your rooms × ADR × occupancy × 15% commission — that's the number you're giving to a tab." The reader supplies the inputs.

### Do NOT engage with these topics

- **Guarantees of any kind** — the "45-day guarantee" topic was retired on client instruction. `fym-06` is marked `retired:true` in `fire-your-middleman.json` and carousel `c06` is marked `retired:true` in `carousels.json`. The render pipeline filters retired entries. **Do not resurrect this angle in any form** (money-back, results-in-X-days, uptime guarantees, "or your money back", etc.).
- **Payback promises** — "you'll break even in N months", "pays for itself in X bookings". Caught and removed in c04. Never write these.
- **Delivery timelines on the productized SKUs** — the $999 Launch and $99/mo Care Plan are not live as buy paths, so "your site in 7 days" is a claim we cannot back today.
- **Unsourced figures about the reader's business** — "hotels lose X%", "STRs pay Y in fees". If you can't cite it, convert it to arithmetic the reader runs on their own numbers.

### Retired examples (what NOT to ship)

Kept here so the pattern is visible:

- ❌ "Get bookings in 45 days or we work free" — guarantee, retired.
- ❌ "This pays back in 3 months for a 30-room hotel" — payback promise on the reader's business.
- ❌ "Hotels lose 80% of margin to OTAs" — unsourced figure.
- ❌ "Your site live in 7 days" — undeliverable timeline on a SKU that isn't buyable yet.
- ❌ "Kalido runs on Guesty" — Kalido runs **Mews**. Do not conflate. Guesty is Kymbo's PMS partner in general, not Kalido's specific stack.

### Domain hygiene

- **Never use `blockhouse.com`** — that domain belongs to a furniture company. It slipped in once as filler and got caught. Any mockup that needs a placeholder domain must use one Kymbo controls or a clearly generic one (`yourhotel.com`, `example-hotel.com`).

### Attribution & impersonation

- Never publish content that impersonates a real person, hotel, brand, or fabricates a review, testimonial, or record. Mockups are mockups; they must look like mockups (Kymbo's UI shell, generic property names).

---

## 3. Mental triggers — the copy filter

Isa sent two references and asked that we filter every headline/CTA through them:

- **Zendesk (Spanish CX blog) — 7 psychological triggers**: reciprocidad, escasez, autoridad, coherencia, prueba social, simpatía, unidad.
- **Hotmart (Spanish infoproduct blog) — mental triggers for conversion**: similar taxonomy, sales-oriented framings.
- Cialdini's 7 (English) covers the same ground: reciprocity, scarcity, authority, consistency, social proof, liking, unity.

**How to use them:**

1. When drafting a carousel headline or CTA, name which trigger it's leaning on. If you can't name one, the copy is generic — rewrite.
2. Do not stack triggers. One per carousel. A cover that shouts scarcity **and** authority **and** social proof reads as a used-car ad.
3. **Social proof** for Kymbo = Kalido (Mews, real portfolio piece), not fabricated testimonials.
4. **Authority** = the specific stack (Guesty partner, WP Engine partner, named tools), not "we're experts".
5. **Scarcity** — use sparingly and only when true. "Care Plan slots per month" is fine only when the SKU is actually live and limited. Right now it isn't, so don't lean on it.
6. **Reciprocity** = free arithmetic, free audits, free checklists. This is a strong lane for Kymbo because the work naturally produces reusable diagnostics.

The full Zendesk/Hotmart URLs Isa sent are in the previous chat transcript; the seven-trigger framing above is enough to operate. If you need the exact links, ask the client to resend — do not guess URLs.

---

## 4. Design system — as-is

All of this is already implemented. Do not re-invent; extend.

### Canvas

- **1080 × 1350 (4:5)** for every slide. Works for IG feed, LinkedIn, TikTok. No 1:1 exports.

### Palette

- **Media Noche** `#262B38` — primary dark
- **Pantalla** `#FFFFFF` — primary light. **Pure white, never warm beige.** Retired on client direction: the previous `#F7F8EA` read as agency/wellness, not tech. Kymbo is a systems-engineering shop — the light surface must read as clean tech, not a mood board.
- **Pantalla-2** `#F1F3F6` — cool near-white for panels/tint. Never a warm off-white.
- **Verde Pixel** `#9BEC00` — accent, use sparingly (dividers, one word per cover, CTA highlights).
- **Scene photography grade** — natural white-balance (5200-5500K), deep near-black shadows, clean daylight highlights. **No warm cream cast.** Reads as the studio's own photography, not agency stock.

### Type

- **Satoshi** — display, body, UI. Tight, geometric, oversized for headlines.
- **JetBrains Mono** — mono voice: kickers, indices, unit labels, matrix cell labels, technical asides. (Space Grotesk was retired from the mono role during the R1–R7 pass — do not reintroduce it as mono.)
- Fonts live in `/fonts/` and are wired in `system/styles.css` via `--font-display` and `--font-mono`.

### Cover archetypes (in `system/templates.mjs`)

Every archetype carries **two** tech-signal marks — no more (discipline over ornament) — so the covers read as measured, engineered artifacts rather than shouty hero slides.

- **STAT** — colossal lime figure treated as a MEASURED value. Two marks: (1) **dimension ticks** bracket the figure (engineer's callout) and (2) an optional **mono unit tag** sits at the figure's right (`s.unit = "USD / ROOM · YEAR"`). Verified source required for the number.
- **STATEMENT** — bold sans headline framed by two **corner registration marks** (top-right + bottom-left). The composition reads as one printed spread, not a floating hero. One lime highlighted word max via `hi`/`hiWord`.
- **INDEX** — retired the vague ghost-only cover for a functional one. Two marks: (1) the **ghost numeral** (editorial atmosphere) and (2) a **mono count kicker** above the headline (`N=5 · WORDPRESS` when `s.domain` is set). Count auto-derived from a leading number in the headline; overridable with `s.count`.
- **MATRIX** — data-grid signals. Two marks: (1) **X/Y axis labels** (`s.grid.axes = { x, y }`) and (2) a **mono scale note** beneath (`s.grid.note` or auto: `N=16 · 4×4`). Backward compatible: without axes/note the grid renders plain.
- **SEAM** — bespoke full-bleed split cover with a lime divider. Panels use `flex:1 1 0; min-width:0` and `seamSize()` fits the longest word — do NOT bypass this or the divider gets crushed.
- **SPEC** — the technical/engineered voice. Mono headline (JetBrains Mono, weight 500 — never bold at display, per Anthropic DESIGN.md rule); mono sub-copy; a short horizontal rule as the closing mark. Deliberately no lime accent — the quiet register earns its distinction by restraint. Pair with the `spec` interior layout. Use for ERP, CRM, AI-integration, e-commerce, WordPress — any topic that needs the quieter register.

**No top-left kicker.** Retired on client direction — the `[ THE FIX ]` / `[ THE STANDARD ]` / `[ THE POSITION ]` bracket labels are gone from every archetype and every layout. The `kicker()` helper in `templates.mjs` renders empty; `.hd` stays as an empty flex wrapper so absolutely-positioned decoration (ghost numerals, corner registration marks) keep their reference frame.
- **STATEMENT** — one bold sentence.

### Interior layouts

POINT · STAT · LIST · DRAIN · MOCKUP · QUOTE · CTA · **SPEC**.

- **SPEC** — a key/value spec-sheet in mono type. Row shape: `{ k, v, hi? }`. `hi:true` paints one row's value in lime — use at most once per slide (single-accent rule). Cap ≈ 4 rows for breathing room; 5 will fit but is tight. Optional `tag` (lime section label with pixel), optional `headline` (mono weight 500), optional `caption` (mono, muted).

### Path A vs Path B

- **Path A** — fully HTML-rendered slides. Faster, controllable, no image gen.
- **Path B** — scene/organic photo-backed slides. Uses composite screens (see below).

### Composite screens (`system/app.mjs`)

- Transparent overlays that project a Kymbo booking-app UI onto a real device screen photographed in a scene.
- Registry: `phone-book`, `laptop-book`, `laptop-board` (all `background:transparent`), plus the older opaque `phone-confirm`.
- Compositing math: quad detection via largest-connected-component + rotated-corner extremes → homography → `matrix3d` perspective transform in CSS. Helper: `/tmp/quad2.py`.
- **Straight-on device rule** — image prompts must specify "PERFECTLY STRAIGHT AND FRONT-ON, ZERO rotation, ZERO tilt". Tilted devices produce unusable composites (scene-02 s3 first attempt was rejected as "awful").
- **Anti-band clause** — every image prompt must include "no dark gradient, no vignette, no overlay, only natural light falloff; one single continuous photograph natively 4:5, do NOT letterbox, pad, extend or outpaint". This eliminates the outpaint-seam class of failures.

### Export pipeline

- Playwright + Chromium.
- JPGs are rendered by writing HTML to disk and navigating with a `file://` origin (not `about:blank`, which blocks local images). Wait for `img.complete && img.naturalWidth>0` before screenshotting.
- Export bundle lives at `profiles/kymbo/export/`; zips are gitignored via `**/export/*.zip`.

---

## 5. Feed rules

12 tiles per feed row-window.

- **Organic / flat checkerboard** — no two adjacent tiles share the same archetype or same tonal weight.
- **≥ 4 light covers per 12 tiles.** Without this floor, the grid always produces at least one all-dark column or a 3-dark row.
- **Category mix** — the Educational/Technical category (`profiles/kymbo/content/ideas/educational-technical.json`, 32 topics) ships light covers by rule. This is the mechanism for hitting the light-cover floor.
- **6 organic + 6 systemized** per 12-tile batch. Organic = photo/scene backed (Path B). Systemized = HTML-only cover (Path A).
- **Practice-area weight per 12 tiles**: 30% FYM · 50% educational (ERP/CRM/AI/e-com/WP dev) · 20% craft (team/process/ownership). Batch 01v2 lands at 4/6/2. Don't slide back to FYM-heavy.
- **Feed defined in `system/render.mjs`** as `const FEED`. Odd positions are scene tiles, even positions are flat tiles.

## 5b. Anti-slop — what makes a Kymbo post NOT look AI-made

Per the tododeia "Stop AI Slop" thesis: AI without direction produces the same visual clichés — identical purple-to-blue gradients, the same three sans-serif choices, formulaic paragraph structures, hero-then-three-columns-then-CTA. Kymbo's system is engineered to refuse all of it.

- **No gradients as decoration.** The only gradients in the system are the legibility scrims under text on scene photos, and they are black-to-transparent, never colored. No purple-to-blue, no orange-to-pink, no glassmorphism.
- **One accent, one time.** Verde Pixel `#9BEC00` appears once per slide, at the point of emphasis. Never two lime elements competing.
- **Type in extremes, never medium.** Headlines colossal (74–150px), body big (36–44px), mono kickers tiny (22–32px). No 24px generic-blog body copy anywhere.
- **Structure varies by archetype.** Five cover archetypes (STAT/INDEX/MATRIX/SEAM/STATEMENT) and seven interior layouts (POINT/STAT/LIST/DRAIN/MOCKUP/QUOTE/CTA). Do not send the same archetype twice in a row. Do not default to STATEMENT every time.
- **Handmade accents on scene slides.** The marker swipe, underline, strikethrough, and circle in `system/styles.css` are hand-drawn SVGs (irregular paths, wobble, rough ends), not CSS `text-decoration`. This is the "alive layer" — use it sparingly on scene slides where copy needs to feel annotated by a person.
- **No stock photos, no icon fonts.** Every scene photo is generated by Kim (image gen) against the STYLE LINE in the scene's content JSON. Every mockup is drawn in HTML/CSS via `system/app.mjs` — no royalty-free imagery.
- **No AI-mannerism copy.** No "unlock", no "elevate", no "in today's fast-paced world", no em-dash-joined tricolons. Kymbo copy is either arithmetic the reader runs or a plain statement of what breaks.
- **No purple, no cyan glow, no gradient text.** The palette is dark-blue/white/lime. That's it.
- **No hero-3col-CTA slide template.** Slides carry one idea. If a slide has a headline plus three feature boxes plus a CTA, split it.
- **One slide counter, one time.** The pixel-square footer ticks are the ONLY slide counter. Never add a second counter anywhere on the slide — no `01/02` gutter, no `[01]—[02]—[03]—[04]—[05]` strip, no numbered pill row. If a design proposal introduces something that reads as a slide index in addition to the footer, drop it before shipping. Item counts (e.g. "N=5 items in this list") are fine because they count items, not slides, and only appear once as a small meta kicker.

### 5b.1 Rules adopted from Impeccable, Anthropic DESIGN.md, and UI/UX Pro Max

Enforced going forward on every new archetype and every audit pass:

1. **No weight-800 on technical content.** Anthropic's own DESIGN.md is explicit: *"Display sizes use weight 400 (regular), never bold. Copernicus at 700 reads as bombastic."* Kymbo's version — the shouty FYM archetypes (STATEMENT, STAT, SEAM, INDEX) keep weight 800 because that's the campaign voice; the technical archetype (**SPEC**, and any future engineering-topic archetype) uses **JetBrains Mono weight 500**. This creates the counter-position between "campaign shout" and "systems statement" inside a single feed.
2. **Adjacency extends to interior layouts, not just covers.** The existing rule forbids two consecutive covers sharing an archetype. Extend it: **no two consecutive interior slides may share the same layout** (no back-to-back POINT slides, no back-to-back SPEC slides). Force variety inside the carousel.
3. **Contrast contract on every muted-text usage.** `--muted` opacity plus the surface must clear **WCAG AA 4.5:1** at the size it's set at. Our current values (`.60` on both surfaces at 32–43px) pass by size, but any new usage under 24px must be re-checked. Test with any AA contrast tool before shipping.

Optional but recommended (from Impeccable's detector list):

- **No cards nested in cards.** MOCKUP is one card; do not nest another card inside it.
- **No rounded-square icon tile above every heading.** We already don't ship these — never introduce them.
- **No colored gradient behind text.** Legibility scrims on scene photos are black-to-transparent only.
- **No emoji as icons anywhere.** Pixel squares and hand-drawn SVGs only.

---

## 6. Batch 01v2 — current state

Batch 01v2 shipped in a parallel session while the previous chat was compacting. The plan below is **current state**, not a forward proposal — inspect exports before adjusting.

### The 12-tile feed (defined in `system/render.mjs`)

```
Row 1: scene-14 · c16 · scene-04
Row 2: c22 · scene-01 · c15
Row 3: scene-13 · c21 · scene-20
Row 4: c23 · scene-15 · c24
```

**Six scene carousels:**

| Slot | Scene | Title | Photo status |
|---|---|---|---|
| 1 | scene-14 | "Five people. Every project." | ✅ 6 photos in `assets/scene-14/` |
| 3 | scene-04 | (Batch 01 legacy) | ✅ carries over from Batch 01 |
| 5 | scene-01 | (Batch 01 legacy) | ✅ carries over from Batch 01 |
| 7 | scene-13 | "65% of direct bookings start on an OTA" | ✅ 6 photos in `assets/scene-13/` |
| 9 | scene-20 | "We build it. You own it." | ❌ **needs 6 photos** — prompt sheet at `build/prompts/scene-20.md` |
| 11 | scene-15 | "They didn't take 18%. They took the guest." | ❌ **needs 6 photos** — prompt sheet at `build/prompts/scene-15.md` |

**Six flat carousels:** c15, c16 (Batch 01 legacy, reused in this grid), c21–c24 (new for Batch 01v2). All rendered.

### Outstanding work before Batch 01v2 posts

1. **Generate scene-15 photos** (6 images) against `build/prompts/scene-15.md`. Drop into `profiles/kymbo/assets/scene-15/` as `s1.png` … `s6.png`.
2. **Generate scene-20 photos** (6 images) against `build/prompts/scene-20.md`. Drop into `profiles/kymbo/assets/scene-20/` as `s1.png` … `s6.png`. (Asset dir not present yet — create it.)
3. **Re-render all slide PNGs** after the palette swap to pure white (this HANDOVER's own commit). Run `npm run build`.
4. **Audit against CEO feedback** (below) — many items may already be addressed in the shipped copy; verify slide-by-slide before posting.

### CEO feedback still worth verifying on the shipped Batch 01v2

- **Widget vs full integration** — old framing. Kymbo does full integration, always. Confirm no shipped slide implies a widget tier.
- **Sync explanation in five-year-old language** — "your calendar in one place; someone books on your site, Airbnb sees it in seconds; no double-bookings." Verify wherever sync is explained.
- **Grid drain math (c05 legacy)** — 30 rooms × $180 × 70% × 365 × 11% ≈ $151k. Verify inputs; if any is a claim about the reader's business, convert to reader-arithmetic.
- **Airbnb logistics angle** — check-in/out, payments, insurance. Confirm it lands somewhere in the feed.
- **Automation specifics** — door codes, check-in instructions, reception notifications, FAQs. Enumerate what actually gets automated where automation is claimed.
- **Stay-experience-as-system** — expansion beyond "pretty page/UX" to the whole stay. Verify.
- **Math on C2 (c08 $516/$312)** — verify before posting.

---

## 7. Workflow — one batch at a time

Order is non-negotiable. Do not skip ahead.

1. **Copy first.** Draft all 12 carousels' copy — headlines, body, CTAs — before any design work. Every claim sourced or converted to arithmetic. Every headline names its mental trigger. Show the whole set to Isa for approval.
2. **Design second.** Only after copy is signed off, apply cover archetypes and interior layouts. Do not redesign existing archetypes; use what's in `templates.mjs`.
3. **Feed third.** Lay out the 12 tiles as a grid. Verify: ≥ 4 light covers, no archetype adjacency, no tonal adjacency, category mix per §6. Screenshot the grid and send it for approval before rendering slides.
4. **Produce fourth.** Render all slides via the Playwright pipeline. Path B (scene) images go through the image-gen prompt with the anti-band + straight-on-device clauses. Composite screens via the transparent overlay registry.
5. **One batch at a time.** Do not start Batch 02 planning until Batch 01v2 is shipped and reviewed.

### At every gate, before you ship a slide

- [ ] Is every stat sourced verbatim, or converted to reader-arithmetic?
- [ ] Does any copy make a claim about the reader's business we can't back?
- [ ] Does any copy imply a guarantee, payback, or timeline we don't sell?
- [ ] Is Kalido attributed to Mews (not Guesty)?
- [ ] Any `blockhouse.com` or other unverified domain? Kill it.
- [ ] Is the mental trigger named and singular?
- [ ] For SEAM covers, does `seamSize()` fit the longest word without crushing the divider?
- [ ] For composites, is the device straight-on and the overlay transparent?
- [ ] For scene images, is the anti-band clause in the prompt?

---

## Files worth opening on day one of the new chat

- `profiles/kymbo/content/ideas/stack.json` — verified facts, offer tiers, verified stats.
- `profiles/kymbo/content/ideas/fire-your-middleman.json` — FYM topic bank (fym-06 retired).
- `profiles/kymbo/content/ideas/educational-technical.json` — Educational/Technical topic bank (32 topics).
- `profiles/kymbo/content/carousels.json` — Batch 01 record (c01–c18, c06 retired).
- `profiles/kymbo/brand.json` — pillar taxonomy, content categories, grid rules.
- `system/templates.mjs` — cover archetypes, SEAM `seamSize()`, `screenOverlay()`.
- `system/render.mjs` — feed definitions, retired filter.
- `system/app.mjs` — booking-app screens for composites.
- `system/styles.css` — archetype CSS, SEAM `min-width:0` fix.

Ask the client — do not guess — whenever a claim, stat, timeline, or SKU-live status is unclear.
