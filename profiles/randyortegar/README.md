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

**Post copy (TikTok / IG) — de-risked, educational framing (see
`system/trading-content-safety.md`):**

- **Título (on-screen / primer comentario):**
  `Cómo analizo un gráfico: 4 señales técnicas en Google 📊`

- **Descripción / caption:**
  > Te muestro 4 señales técnicas que estudié en el gráfico de Google 👇
  > (esto es análisis educativo, NO una recomendación de compra)
  > 1️⃣ Reacción en su media de 200
  > 2️⃣ Retroceso al 60% del último impulso (Fibonacci)
  > 3️⃣ Cotiza con descuento frente a su máximo histórico (contexto)
  > 4️⃣ Resultados trimestrales por encima de lo estimado
  >
  > Guárdalo para estudiarlo y sígueme para aprender a leer gráficos 📈
  >
  > ⚠️ Contenido 100% educativo. No es asesoría financiera ni recomendación de
  > inversión. Consulta a un asesor certificado; cada quien es responsable de
  > sus decisiones.
  >
  > #educacionfinanciera #analisistecnico #aprenderainvertir #graficas #bolsa

### X / Twitter deck (English, uncensored)

`carousel-01-goog-x-en.html` — **4 slides = the 4 confirmations only** (X allows
max 4 images). Hook, context and CTA go in the tweet body. X permits finance
content TikTok suppresses, so this version keeps the real figures.
Exports in `export/x-en/`.

**Tweet copy:**
> Google ($GOOG) has a near-perfect setup. I lined up 4 quality confirmations 👇
>
> 1) Tapped the 200 EMA (historically +20% each time)
> 2) 60% retracement of the last bullish leg (weekly, 0.6 fib)
> 3) ~+24% projection to its all-time high (~$326 → ~$405)
> 4) Beat earnings — revenue ~$110B → ~$120B
>
> Safe 10% in a CD, or this? Your call.
> Not financial advice — educational. Figures illustrative.
>
> #GOOG #Alphabet #stocks #investing #technicalanalysis

## Delivery standard (every carousel, going forward)

Each carousel ships in **two versions**:

| Version | Platform | Language | Slides | Framing |
|---|---|---|---|---|
| **TikTok** | TikTok / IG | Spanish | full (7) | de-risked / educational (see `system/trading-content-safety.md`) |
| **X** | X / Twitter | English | ≤4 (confirmations) | uncensored, rest in the tweet body |

## Regenerating the export images

The carousel HTML is the source of truth. To re-shoot the slides after editing
copy or design, render each `.frame` at 1080×1440 with headless Chromium and
save to `export/` (JPG for posting, 2x PNG as master).
