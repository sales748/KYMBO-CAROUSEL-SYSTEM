# KYMBO — Carousel Creation System

An in-code content studio for **Kymbo** and the *Fire Your Middleman* campaign
(direct-booking systems for hotels & short-term rentals).

It replaces what a senior social-media designer + copywriter does from zero:
brand foundation → feed strategy → finished, publication-ready carousels — with
consistency guaranteed because layout, type, spacing and color come from code,
not from redrawing every slide by hand.

> Scope note: this build is **single-client (Kymbo / "Kim")** on purpose. Once
> the workflow is proven, it can be generalized into a multi-client agency
> platform — that is a later phase, not this one.

---

## What's in the box right now

| | |
|---|---|
| **12 finished carousels** (Batch 01, HTML path) | `content/carousels.json` → `build/img/c01…c12` |
| **Original design system** (KYMBO FEED OS) | `brand/brand.json`, `system/styles.css` |
| **Instagram feed-grid preview** (checkerboard) | `build/feed.html`, `build/feed-preview.png` |
| **Review gallery** (every slide, per carousel) | `build/index.html` |
| **Scene engine + 1 worked scene carousel** (Path B) | `content/scene-01.json`, `build/prompts/scene-01.md` |

Run it:

```bash
npm install        # once (fonts + headless Chromium renderer)
npm run build      # render HTML + screenshot every slide to build/img/*.png
```

`npm run render` writes the HTML only; `npm run shoot` screenshots it.

---

## The three modules

### Module 1 — Brand Foundation  →  `brand/brand.json`
The machine-readable brand book. Everything downstream reads from it.
Only the **foundation** is inherited from Kymbo's guidelines — color, geometric
typography, the pixel motif, the campaign message. The *feed design language*
on top of it is original (built for this project, not a copy of any prior style).

- **Color** — Media Noche `#262B38`, Pantalla `#F7F8EA`, Verde Pixel `#9BEC00`
  (accent only, one hero element per slide).
- **Type** — Satoshi (display) + Space Grotesk (mono voice). The CSS references
  `Satoshi` first; drop the licensed woff2 into `/fonts` and it takes over with
  no code change. Current stand-in: **Onest Variable** (geometrically near-identical).
- **Motif** — the pixel square: data cells, bullets, progress ticks, corner mark.

### Module 2 — Feed Strategy & Copy  →  `content/*.json`
The strategy and the words. Each carousel declares its pillar, surface, cover
archetype, and full slide copy.

- **Content pillars:** Problem · Math · Alternative · Proof · Decision.
- **Feed rhythm:** surfaces alternate dark/light by order → a deliberate
  checkerboard in the 3-wide profile grid.
- **Anti-repetition:** five cover archetypes rotate so no two adjacent posts
  share one — the feed never looks samey while staying one brand.
- **Copy frameworks baked into the writing:** hook → tension → proof → payoff →
  CTA; loss-aversion and concrete-number persuasion; one idea per slide;
  scroll-retention via open loops and a swipe affordance.

**Cover archetypes**

| | |
|---|---|
| `STAT` | one colossal figure dominates |
| `INDEX` | editorial — bracket kicker + ghosted giant index numeral |
| `MATRIX` | the pixel grid as hero visual |
| `SEAM` | hard dark/light split, headline straddles a lime seam |
| `STATEMENT` | headline fills the canvas, one lime word |

### Module 3 — Production  →  `system/` + `build/`
Turns strategy into finished 1080×1350 assets. **Two production paths:**

**Path A — HTML-only.** Pure design; text, spacing, typography and color are
perfectly consistent because they're systemized. Fully automatic — this is
Batch 01. Runs and ships immediately.

**Path B — Scene / organic.** Carousels built *on top of AI-generated scene
images* (the "organic touch": photographic backgrounds, human subjects, and
hand-made accents — highlighter marker boxes, scribble underlines,
strikethroughs, hand-drawn arrows). The image layer is generated in ChatGPT by
Kim; the type + accent layer is designed here and composited on top.

Organic accents are written directly in the copy with lightweight markup.
Each one renders as a genuine **hand-drawn stroke** (irregular, wobbly, rough
ends) — not a clean rectangle — so the slide reads as marked-up by a person:

```
==text==   → torn-edge highlighter swipe
__text__   → wobbly hand underline
~~text~~   → wavy pen strikethrough
((text))   → scribbled circle around the word
"arrow": "right" | "down" | "downLeft"   → hand-drawn lime arrow
subject.png (masked) → cut-out subject with a rough cream halo
```

Restraint is the rule: **one or two accents per slide, max** — the accent
points at the single idea; over-marking kills it.

---

## The booking app (composited onto devices in scenes)

When a scene shows a phone or laptop, we generate it with a **blank white
screen** and composite **our own designed booking product** onto it — never a
fake or AI-drawn UI. The design language matches the **Kalido / Smithe House**
booking engine (warm off-white + butter-yellow accent, elegant serif + grotesk,
the 5-step Dates·Categories·Rates·Summary·Details flow).

- **Data:** `content/booking-app.json` (demo hotel — *Marlowe House*, fictional).
- **Design:** `system/app.mjs` → `build/app/img/<device>-<screen>.png`.
- **Bare screens** (no device frame): laptop `1440×900` (rates `1440×1080`),
  phone `460×996`.
- **Screens:** laptop → hero · categories (rate compare) · rates · modal
  (email capture) · dashboard (owner); phone → hero · rates · confirmation.
- **Interior photos:** Kim generates into `assets/app/<slot>.png`
  (hero, studio, twobed, lifestyle); prompts in `build/app/photo-prompts.md`.

Composite onto a device in a scene slide:

```json
{ "scene": true, "bg": "assets/scene-01/s6.png",
  "screen": { "app": "laptop-hero", "quad": [[x,y],[x,y],[x,y],[x,y]] } }
```

`quad` = the screen's four corners (TL, TR, BR, BL) in slide pixels
(1080×1350), read off the generated photo. A perspective transform maps the
UI onto the screen — even at an angle.

---

## The batch workflow (how we actually run a batch of ~12)

1. **Build all Path-A (HTML-only) carousels first.** They complete immediately
   and go out for approval. ← *Batch 01 is here.*
2. On approval, move to the **Path-B (scene) carousels**, one at a time.
3. For each scene carousel, this system delivers the **complete vision up front**:
   full structure, copy for every slide, the HTML layout, and — critically —
   **the exact ChatGPT image prompt for each slide** (`build/prompts/<id>.md`).
   Every prompt locks the palette (navy shadows + warm cream, muted so lime
   pops), the 4:5 frame, and a text **safe zone**, so the render composites
   cleanly the first time.
4. Kim generates the images in ChatGPT and drops them into the carousel's
   `assets/<id>/` folder as `s1.png … sN.png`.
5. `npm run build` — the real renders replace the placeholders automatically;
   the type + organic accents are already positioned.
6. Repeat per carousel until the batch is done.

Honesty rule (inherited): AI imagery is for **generic** scenes only — never a
fabricated real Kymbo person or a specific client.

---

## Recommended architecture to grow this into the full platform

The current build is deliberately file-based and dependency-light so it's easy
to run and review. The production-grade version the brief imagines maps onto it
cleanly:

- **Persistent memory (brand + decisions).** `brand/*.json` + `content/*.json`
  are the memory today. Scale to **Postgres** for structured records
  (approved/rejected assets, style decisions) + a **vector DB** (pgvector or
  Qdrant) for *semantic* recall of copy, briefs and references.
- **Visual memory & "eyes."** Embed reference images and past covers with a
  **multimodal model** (CLIP-class or a vision LLM) so the system can retrieve
  "covers like this," detect drift from brand, and learn approved vs rejected
  looks. Store embeddings alongside the vector text store.
- **Research / inspiration intake.** A scheduled job that pulls references
  (Behance / Dribbble / Pinterest / IG), tags them with the vision model, and
  files them into visual memory for moodboards.
- **Rendering.** Already solid: HTML/CSS templates → headless Chromium → PNG.
  Add an SVG/PDF export and a Figma round-trip for hand-tweaks.
- **Orchestration.** Keep modules as pure functions with typed schemas
  (JSON Schema today) so each stage — onboarding, strategy, production, QC —
  is independently testable and swappable.

---

## Repo map

```
brand/brand.json          Module 1 — brand foundation (machine-readable)
content/carousels.json    Module 2 — Batch 01, 12 HTML carousels (copy + strategy)
content/scene-01.json     Module 2 — a Path-B scene carousel (copy + image prompts)
system/styles.css         the KYMBO FEED OS design language
system/templates.mjs      slide layouts (covers, interiors, scene, organic accents)
system/render.mjs         content + templates → HTML + feed + prompt sheets
system/shoot.mjs          headless-Chromium screenshots → build/img/*.png
system/fonts.mjs          self-embeds fonts so every file renders offline
build/                    generated: feed.html, index.html, img/*.png, prompts/*.md
```
