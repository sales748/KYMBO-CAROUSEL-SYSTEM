# Randy Ortega — THE SIGNAL SYSTEM

Personal brand for **@randyortegar** — economist & US-stock-market investor.
Educational, sharp, contrarian content for TikTok (reusable as IG carousels).

A financial-terminal design language: **signal-red `#F42B16`** as the only
accent (one hero element per slide), neo-grotesk display (Archivo / licensable
to Neue Haas · Helvetica Now) + **Space Mono** as the terminal voice, over
Ink / Bone / Concrete surfaces. Footer carries only the handle — no pillar
kicker, no frame counter.

> Not financial advice — educational only. Every figure shown is illustrative.

## What's here

| File | What |
|---|---|
| `brand.json` | Machine-readable brand foundation + carousel records |
| `brandbook-feed.html` | Brandbook (color / type / symbols) + 12-cover feed example |
| `carousel-01-goog.html` | Finished Carousel 01 (self-contained: fonts + scene photo embedded) |
| `assets/scene-goog-34.jpg` | The recurring scene photo, 3:4 (1080×1440) — embedded in the carousel |
| `export/` | Ready-to-post slides — `goog-slide-01…07` as 1080×1440 JPG + 2x PNG masters |

## Carousels

### Carousel 01 — `$GOOG` · "Un setup casi perfecto"
7 slides, 3:4 (1080×1440), single recurring scene with typography composed on top.
Hook → 4 confirmations (EMA 200 · fib 0.6 weekly · +24% to ATH · earnings beat)
→ CTA (CDT vs +24%).

**Post copy (TikTok / IG):**

- **Título (on-screen / primer comentario):**
  `Google ($GOOG) tiene un setup casi perfecto 📉`

- **Descripción / caption:**
  > Junté 4 confirmaciones antes de mirar $GOOG con otros ojos 👀
  > 1️⃣ Tocó la EMA 200 (históricamente +20%)
  > 2️⃣ 60% del último fractal alcista (semanal)
  > 3️⃣ +24% de proyección hasta su ATH
  > 4️⃣ Venció los earnings (ingresos ~$110B → ~$120B)
  >
  > ¿Tú qué prefieres: 10% en un CDT o esto? 👇
  > Guárdalo y sígueme para el siguiente movimiento.
  >
  > ⚠️ Educación financiera, no asesoría de inversión. Cifras ilustrativas.
  >
  > #GOOG #Google #Alphabet #bolsadevalores #inversiones #trading
  > #educacionfinanciera #accionesUSA #mercadodevalores #randyortegar

## Regenerating the export images

The carousel HTML is the source of truth. To re-shoot the slides after editing
copy or design, render each `.frame` at 1080×1440 with headless Chromium and
save to `export/` (JPG for posting, 2x PNG as master).
