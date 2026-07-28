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
