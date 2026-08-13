# HANDOVER — KYMBO CAROUSEL SYSTEM

Read this end-to-end before touching the repo. It is the working memory the previous chat lost. Everything below is either verified against the current tree, quoted from the client, or explicitly labelled as an open question.

Open a new chat with: **"read HANDOVER-KYMBO.md and let's build Batch 01v2"**.

---

## 1. What Kymbo actually is

Kymbo is **not** a "Fire Your Middleman" newsletter. FYM is one campaign inside a full-service dev shop. The Batch 01 that shipped over-indexed on FYM because that was the entry brief; the CEO's feedback (Isa) is that the account has to reflect the whole company from Batch 01v2 forward.

**What the company does — in reality:**

- **WordPress builds & rescues** — Care Plan is a real productized SKU ($99/mo). WP Engine is the hosting partner. This is bread-and-butter and should not be treated as filler.
- **E-commerce** — WooCommerce, Shopify (custom + theme work), migrations, checkout/UX repair.
- **Mobile & web apps** — custom app work, not just marketing sites. This is a category the Batch 01 feed never touched.
- **Integrations** — payments, PMS/booking (Guesty for STR/hotels via the FYM angle), CRMs, ERPs, syncing systems that don't want to talk to each other.
- **Fire Your Middleman (FYM) campaign** — the direct-booking angle for hotels & short-term rentals. This is one campaign, not the company. Kalido is the portfolio proof point (Mews, not Guesty — do not confuse them).
- **Team-as-topic** — Isa asked explicitly for content that shows the people, the process, the craft. This has to appear in the feed.

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
- **Pantalla** `#F7F8EA` — primary light
- **Verde Pixel** `#9BEC00` — accent, use sparingly (dividers, one word per cover, CTA highlights)

### Type

- **Satoshi** — body & UI
- **Space Grotesk** — display headlines
- Fonts live in `/fonts/` and are wired in `system/styles.css`.

### Cover archetypes (in `system/templates.mjs`)

- **STAT** — a single number, dominant. Verified source required.
- **INDEX** — numbered list ("5 settings that quietly delete you from Google"). Ghost numeral is decorative; the headline must still name the count.
- **MATRIX** — comparison grid.
- **SEAM** — split cover, two panels with a lime divider. Panels use `flex:1 1 0; min-width:0` and `seamSize()` fits the longest word — do NOT bypass this or the divider gets crushed.
- **STATEMENT** — one bold sentence.

### Interior layouts

POINT · STAT · LIST · DRAIN · MOCKUP · QUOTE · CTA.

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

12 tiles per feed row-window. Rules learned the hard way in Batch 01:

- **Organic / flat checkerboard** — no two adjacent tiles share the same archetype or same tonal weight.
- **≥ 4 light covers per 12 tiles.** Without this floor, the grid always produces at least one all-dark column or a 3-dark row.
- **Category mix** — the Educational/Technical category (`profiles/kymbo/content/ideas/educational-technical.json`, 32 topics) ships light covers by rule. This is the mechanism for hitting the light-cover floor.
- **6 organic + 6 systemized** per 12-tile batch. Organic = photo/scene backed (Path B). Systemized = HTML-only cover (Path A).
- **Feeds defined in `system/render.mjs`** as `FEED_01`, `FEED_02`. Add `FEED_03` for Batch 01v2 — do not overwrite prior ones.

---

## 6. Batch 01v2 — proposed content strategy

This is the plan the previous chat converged on before running out of context. It is a proposal, not a locked spec — confirm with Isa before producing.

### Topic mix (12 carousels, 4:5)

Target the mix below so the feed shows the whole company, not just FYM.

| Slot | Category | Angle | Trigger |
|---|---|---|---|
| 1 | Reach / generic | A pain every operator recognises (site slow, bookings leaking) | Reciprocity |
| 2 | FYM | Airbnb logistics angle — check-in/out, payments, insurance (Isa: c7 needs this) | Authority |
| 3 | WordPress | Care Plan explained as arithmetic, not as a SKU pitch | Reciprocity |
| 4 | E-commerce | Checkout leaks — one diagnostic the reader runs themselves | Reciprocity |
| 5 | Team / process | How a build actually moves (copy → design → feed → produce) | Unity |
| 6 | FYM | Grid drain math — **audit the c05 assumption** (30 rooms × $180 × 70% × 365 × 11%) before shipping | Authority |
| 7 | Mobile / apps | The category Batch 01 never showed. One shipped example, no promises. | Social proof |
| 8 | Integrations | Two systems that don't talk → what breaks when they don't | Authority |
| 9 | Reach / generic | Broad-appeal statement post; light cover to lift the grid | Liking |
| 10 | FYM | Automation clarified — door codes, check-in instructions, reception notifs, FAQs (Isa: c10 needs this) | Authority |
| 11 | Stay-experience | Beyond "pretty page/UX" → the whole stay as a system (Isa: c11 expansion) | Consistency |
| 12 | Team / process | The people behind the work. No fabricated headcount. | Unity |

### Specific fixes required from CEO feedback

- **c4 / c12 (widget vs full integration)** — reframe. Kymbo does full integration, always. The old framing implied a widget tier we don't sell. Kill the comparison; talk about what "full" actually means.
- **c5 (scene-03 sync explanation)** — simplify to five-year-old language. "Your calendar in one place. When someone books on your site, Airbnb sees it in seconds. No double-bookings." No jargon.
- **c05 grid drain math** — verify the 30 × $180 × 70% × 365 × 11% = ~$151k assumption before publishing. If any input is off, redo. If any input is a claim about the reader's business, convert to arithmetic they run themselves.
- **c7 (scene-02)** — add the Airbnb logistics angle.
- **C2 (c08 $516 / $312 math)** — audit before publishing.
- **c10 automation** — enumerate what actually gets automated: door codes, check-in instructions, reception notifications, FAQs.
- **c11 (scene-04)** — expand beyond page/UX to stay-experience-as-system.

### What has to appear that Batch 01 missed

- At least one **WordPress** carousel (Care Plan, WP Engine partner, real work).
- At least one **e-commerce** carousel.
- At least one **mobile / app** carousel (this was fully absent).
- At least one **team / process** carousel (Isa asked for this by name).
- At least one **reach / generic** carousel (broad-appeal, not niche to FYM).

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
