# Carousel Creation System

An in-code content studio that replaces what a senior social-media designer +
copywriter does from zero: **brand foundation → feed strategy → finished,
publication-ready carousels** — with consistency guaranteed because layout,
type, spacing and color come from code, not from redrawing every slide by hand.

It's **one integral system** with a shared engine, serving **two independent
brand profiles**:

| Profile | Who | Niche | Folder |
|---|---|---|---|
| **Kymbo** | Kim · *Fire Your Middleman* | Direct-booking systems for hotels & short-term rentals | [`profiles/kymbo/`](profiles/kymbo/) |
| **Randy Ortega** | @randyortegar | US-stock-market investing education (TikTok) | [`profiles/randyortegar/`](profiles/randyortegar/) |

Each profile has its own brand foundation, voice, palette, type and finished
carousels. They never share visual identity — only the engine that renders them.

---

## Repository structure

```
system/                     ← SHARED ENGINE (profile-agnostic)
  render.mjs                   content JSON → static HTML
  render-app.mjs               booking-app prototype (Kymbo)
  shoot.mjs                    headless Chromium → 1 PNG per slide
  templates.mjs · styles.css   slide templates + Kymbo design tokens
  fonts.mjs                    embeds woff2 as base64 (self-contained HTML)
  trading-content-safety.md    platform rules for finance/trading posts (anti-shadowban)
fonts/                      ← SHARED type files (woff2)

profiles/
  kymbo/                    ← PROFILE: Kymbo (code-driven pipeline)
    brand.json                 brand foundation (KYMBO FEED OS)
    content/                   carousels.json, scene-*.json, booking-app.json
    content/ideas/             CONTENT REPOSITORY — the topic banks ideation pulls from
    assets/                    real scene/app images dropped in by the client
    build/                     rendered output → index.html, feed.html, img/, app/
  randyortegar/             ← PROFILE: Randy Ortega (THE SIGNAL SYSTEM)
    brand.json                 brand foundation + carousel records
    brandbook-feed.html        brandbook + 12-cover feed example
    carousel-01-goog.html      finished carousel (self-contained, photo embedded)
    assets/                    scene photo(s)
    export/                    ready-to-post slide images (JPG + 2x PNG)
```

---

## The two profiles

### `profiles/kymbo/` — code-driven pipeline
Kymbo carousels are defined as data in `content/carousels.json` and rendered by
the shared engine. To rebuild every slide:

```bash
npm install        # once (fonts + headless Chromium renderer)
npm run build      # render HTML + screenshot every slide → profiles/kymbo/build/img/*.png
```

The shared engine is **profile-agnostic** — it selects which profile to build
from the `PROFILE` env var (default `kymbo`), e.g. `PROFILE=kymbo npm run build`.
No client name is hard-coded in `system/`.

`npm run render` writes the HTML only; `npm run shoot` screenshots it.
Review everything in `profiles/kymbo/build/index.html` (gallery) and
`profiles/kymbo/build/feed.html` (Instagram grid mock).

Foundation highlights: Media Noche `#262B38`, Pantalla `#F7F8EA`, Verde Pixel
`#9BEC00` (accent only); Satoshi (display) + Space Grotesk (mono voice).

### `profiles/randyortegar/` — THE SIGNAL SYSTEM
Randy's carousels are hand-composed, self-contained HTML files (fonts and photos
embedded as base64 — open the file, it just works). Design language is a
financial-terminal aesthetic: signal-red `#F42B16` accent, neo-grotesk display +
Space Mono, technical furniture. Finished slide images live in `export/`, ready
to post to TikTok/IG. See
[`profiles/randyortegar/README.md`](profiles/randyortegar/README.md).

---

## The three modules (per profile)

1. **Brand Foundation** → `profiles/<name>/brand.json` — color, type, voice,
   motifs, feed strategy. The single source of truth for the look.
2. **Feed Strategy** → the batch of covers/carousels planned as a coherent grid
   (checkerboard rhythm, one accent per slide, archetypes that rotate).
3. **Finished Carousels** → publication-ready slides (Kymbo: rendered PNGs;
   Randy: exported JPG/PNG).

> Adding a third profile = add `profiles/<name>/` with its own `brand.json`.
> The shared `system/` engine stays untouched.

---

## Content repository (ideation input)

Ideation does not start from a blank page. `profiles/kymbo/content/ideas/` holds
the topic banks; you filter and pull from them, then write the chosen topics into
`content/<id>.json`.

```
content/ideas/README.md                   how the repository works + the ideation workflow
content/ideas/stack.json                  the tech stack the technical topics rest on
content/ideas/fire-your-middleman.json    campaign bank — the OTA/direct argument
content/ideas/educational-technical.json  educational bank — WordPress, the stack, how to build
```

**Two content categories, one design system, one feed.** *Fire Your Middleman*
sells the argument for going direct. *Educational / Technical* teaches the craft
(WordPress, the five-layer stack, schema, Core Web Vitals, payments). The
educational category is **not** a second style — same canvas, palette, type,
motif and furniture. It differs by always shipping a **light cover** and by
building diagram-forward interiors where a campaign carousel would put a
colossal number. Full direction in `brand.json → contentCategories.educational`.

The light cover is also load-bearing for the grid: a 12-tile month needs **four**
light covers to avoid an all-dark column and a 3-dark row — three is provably
insufficient. See `system/render.mjs` (the `FEED` block) for the arithmetic and
the enforced order.

---

## System design rules (shared — apply to every profile)

These live in the engine so both clients inherit them automatically:

- **Scene text legibility.** On any scene slide, text is protected by a
  *text-legibility scrim* (`.layer-textscrim`) that sits **above** the photo and
  any composited device screen. White type never clashes with a bright
  background — including the white screen of a phone/laptop we composite onto.
  When adding scenes for a profile that hand-composes HTML, reproduce the same
  gradient behind the text.
- **Device screens = real UI, composited.** Generate the scene with a blank
  white device screen; the designed UI is mapped onto it in perspective
  (`screen.quad`). Never bake a fake UI into the photo. Measure the quad with
  `python3 system/detect-screen.py <photo>` (finds the white screen, prints the
  quad in slide coords). The engine matches the overlay to the screen aspect
  (`object-fit:cover`, no distortion), adds overscan (no rim) and a corner radius.
  - **Minimal screens (e.g. a phone confirmation) = TRANSPARENT overlay.** Put
    only the letters/design elements on a transparent background so the photo's
    own white screen (and its perfect rounded corners + Dynamic Island) shows
    through — never a pasted white rectangle. Set `screen.overscan: 0` for these.
    Requires the app page body to be transparent so `omitBackground` yields true
    alpha. **Full pages (a website/dashboard) = opaque**, they fill the screen.
- **Device photo composition.** The device must occupy only the **upper ~55–60%**
  of the frame, leaving a **clean, uncluttered, darker lower ~40%** for text.
  A device that fills the frame forces text onto it and gets muddied by the
  legibility scrim. (This is baked into every DEVICE-COMPOSITE image prompt.)
- **One accent per slide; hand-made accents stay restrained** (1–2 max).

---

## Working agreements (client delivery)

- **Post every finished image into the chat.** Whenever a slide/carousel image
  is rendered, deliver the PNG in the conversation so it's easy to download —
  don't just commit it to the repo.
- **Always hand over COMPLETE image prompts.** When asking the client to generate
  an image, give a self-contained, copy-paste-ready prompt with the full style
  line spelled out inline — never shorthand or "apply the style line separately."
  The prompt sheets already expand the style line into every prompt.
