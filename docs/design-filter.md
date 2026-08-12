# Design Filter — Impeccable-First

Every slide passes this filter before it renders. It sits alongside
[`copy-discipline.md`](copy-discipline.md) — that one governs what a slide
**says**; this one governs what it **looks like and reads as**.

> **Primary authority: Impeccable Style** — `.claude/skills/impeccable/`.
> The Impeccable skill's craft-floor is the base checklist. Its `critique`,
> `distill`, and `clarify` commands are the review pass. The Kymbo overlays
> in Section 3 below are supplementary — they never override Impeccable.
>
> When a rule below conflicts with Impeccable's craft-floor, Impeccable wins.
> When Impeccable is silent, this file governs.

---

## 1 · Mode: Persuade

All Kymbo carousels are **Persuade** surfaces (per Impeccable's `SKILL.md`
mode taxonomy). The visitor decides and acts; the design **is** the product.

> "Landing pages, marketing, campaigns, pricing. Earn attention and action.
> Ship real imagery when the brief needs it; follow the committed world, not
> category habit."
> — `.claude/skills/impeccable/SKILL.md`

**What Persuade implies for the filter:**

- Trade brand-first for message-first: brand shows up in the details, not in
  the label above the message.
- Category habits (kicker-eyebrow, hero-metric templates, uniform card grids)
  are automatic anti-patterns unless the brief specifically earns them back.
- Nielsen heuristics 7 (Flexibility/Efficiency) and 10 (Help/Documentation)
  score `n/a` for this mode. See `impeccable/reference/critique.md`.
- Emotional journey and design specificity matter more than feature parity.

---

## 2 · Craft-floor (Impeccable's absolute rules)

Full canonical file: `.claude/skills/impeccable/reference/craft-floor.md`.
Load it directly before editing a UI file. The rules below are the ones that
apply to Kymbo carousels specifically.

### 2.1 Verify (checks on the built result, not on intent)

- **Contrast:** body and placeholder text ≥ 4.5 : 1, large text ≥ 3 : 1.
- **Type scale:** display max 6 rem (96 px), tracking floor −0.04 em,
  headings balanced (`text-wrap: balance`). Body measure 65–75 ch.
- **Spacing:** tight groups, generous separation, more space above a heading
  than below.
- **Motion:** one authored moment per slide, not scattered effects.
- **Copy:** the product's own language. Controls name their action; errors
  name the problem and the recovery.

### 2.2 Refuse (category defaults; the brief has to earn them)

- ✗ **Kicker or eyebrow above a heading** — *"This one is a ban, not a
  default: no brief earns it back."* Applies to Kymbo's `[ … ]` bracket
  labels above `h1` and to numbered `p-index` above interior `.p-title`.
- ✗ **Hero-metric template** — big number + small label + supporting stats +
  accent. Applies to any cover leaning entirely on a single stat.
- ✗ **Section numbers (01/02/03)** unless the sequence itself carries
  information the reader needs. Ordinal counters are decoration; day names
  (MONDAY, TUESDAY) or lifecycle steps (ARRIVAL, IN-STAY) are content.
- ✗ **Same-size cards of icon + heading + text as the page structure.**
  Applies to matrix covers when the cells are decorative rather than
  semantic.
- ✗ **Gradient text, glass and blur as decoration, hard offset shadows,
  colored border-left/right above 1 px, sparklines standing in for content.**
- ✗ **Monospace as a costume for "technical"** rather than for code, data,
  or measurement. Applies to Kymbo's `Space Grotesk` on kickers and labels.
- ✗ **A system display face** as the display voice. Requires a licensed
  face; the closest installed font is a failure, not a fallback.

### 2.3 Slop detections (automated via `detect.mjs`)

Run: `node .claude/skills/impeccable/scripts/detect.mjs profiles/kymbo/build/carousels`

Impeccable's 58 slop detections are automated. Current standing findings on
Kymbo carousels:

- **Space Grotesk** flagged on 41 files as "overused font." Also flagged by
  Anthropic's `frontend-design` skill. Candidate replacements (not on the
  overused list): iA Writer Mono, JetBrains Mono, Berkeley Mono, Söhne Mono,
  Commit Mono, Neue Haas Grotesk (display), Onest Variable (already used as
  display stand-in — could carry both roles).
- **Em-dash saturation** on c22 (9 em-dashes in body). Advisory only.

Rerun the detector after any content or system change. Findings are the
input to the next `polish` pass.

---

## 3 · Kymbo overlays (subordinate to Impeccable)

The five points below are specific to how Kymbo publishes into the
Instagram + TikTok surfaces. They complement Impeccable; they do not
override it.

### 3.1 Safe zones — Instagram feed + TikTok photo mode

The 4 : 5 canvas (1080 × 1350) has to survive two crops:

- **Instagram profile grid** crops to center 1 : 1. Top ~ 135 px and bottom
  ~ 135 px are cropped in grid preview. Hero subject stays center-frame.
- **TikTok photo mode** overlays caption/UI across the bottom ~ 340 px on
  the visible feed. Critical text stays above that band.

Slide padding-top is 148 px so the top edge clears IG's grid crop.

### 3.2 Feed grid math

A batch is 12 tiles arranged 3 × 4. Feed rules:

- **4 light covers minimum**, guaranteed at slots 2 and 8, plus one of
  {4, 10} and one of {6, 12}. Below 4 light produces an all-dark column and
  a three-dark row (see `content/ideas/README.md` for the derivation).
- **No archetype adjacency**, including diagonal. Verified by walking every
  Moore-neighbor pair.
- **Scene/flat checkerboard** — scene carousels at 1, 3, 5, 7, 9, 11;
  systemized flats at 2, 4, 6, 8, 10, 12.

### 3.3 Trigger discipline

See `mental-triggers.md`. One primary trigger per carousel — declared before
copy is written, in the JSON's top-level `primaryTrigger` field. **No two
adjacent tiles share the same primary trigger.** Urgency capped at 1 per 4
tiles.

Impeccable's `clarify` overrides this when they conflict: if declaring a
trigger produces copy with more than one persuasion move per slide, cut
until one remains.

### 3.4 Copy discipline

See `copy-discipline.md`. The retired-claim families and the 5-year-old test
apply per that file. Impeccable's `clarify` command is the review pass on
every headline / sub / body / CTA line.

### 3.5 Brand as behavior, not label

- Kymbo does not name itself in headlines. The brand is carried by the
  design system + the handle on the tile. Repeat self-reference reads as
  advertising.
- Signature elements (bracket kickers, pixel-square motif, verde accent) are
  structural — either load-bearing to the composition or absent.

---

## 4 · How to run this filter

### 4.1 When writing a new cover

1. Copy first (governed by `copy-discipline.md`).
2. Walk the craft-floor Refuse list. Anything matched = rewrite.
3. Assign primary trigger, verify Kymbo-overlay compliance.
4. Render.

### 4.2 When reviewing a rendered cover

1. Open at 200 × 250 px (Finder preview icon). Legible at that size?
2. Walk the craft-floor Verify list.
3. Run `node .claude/skills/impeccable/scripts/detect.mjs` on the file.
4. Apply `impeccable clarify` to the copy strings.
5. If ≥ 2 checks fail, kick back before it hits `export/`.

### 4.3 Commands available (via Impeccable)

For any target file: `polish`, `critique`, `distill`, `clarify`, `bolder`,
`quieter`, `layout`, `typeset`, `audit`. Full reference:
`.claude/skills/impeccable/reference/`.

---

## 5 · Sources

- **Impeccable Style** — https://impeccable.style — the primary authority.
  Installed at `.claude/skills/impeccable/`.
- **Top design skills for AI-driven code** — https://composio.dev/content/top-design-skills
  — the article that led to Impeccable adoption.
- **Vercel Geist / shadcn / Radix Colors** — supplementary references
  called out in Kymbo overlays.
- **Refactoring UI**, **The Vignelli Canon**, **Grid Systems**
  (Müller-Brockmann), **Thinking with Type** (Lupton) — the deeper
  bibliography behind Impeccable's craft-floor.
