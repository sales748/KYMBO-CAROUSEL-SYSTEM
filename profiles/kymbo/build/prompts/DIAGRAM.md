# DIAGRAM.md — Kymbo's diagram design.md

Kymbo authors editorial diagrams as HTML+SVG in the repo, rendered to PNG via the existing Playwright pipeline. No image-gen for diagrams — they are pixel-perfect, reproducible, and cheap to iterate.

Adapted from `cathrynlavery/diagram-design` (installed as a Claude Code skill at `.claude/skills/diagram-design`). All the diagram-design rules apply — this file only records the Kymbo substitutions and the operational rules for our slide pipeline.

## Color roles — map to Kymbo tokens

| diagram-design role | Kymbo CSS var | Value |
|---|---|---|
| `paper` | `--pantalla` | `#FFFFFF` |
| `paper-2` | `--pantalla-2` | `#F1F3F6` |
| `ink` | `--noche` | `#262B38` |
| `muted` / `soft` | derived from `--muted` | `rgba(38,43,56,.60)` |
| `rule` | `--line` | `rgba(38,43,56,.13)` |
| `accent` | `--verde` | `#9BEC00` |
| `accent-tint` | verde @ low alpha | `rgba(155,236,0,.15)` |
| `link` | verde | `#9BEC00` |

Dark surface diagrams: swap `paper`↔`ink`, `--muted` becomes `rgba(255,255,255,.60)`, `--line` becomes `rgba(255,255,255,.16)`. Verde is unchanged.

## Typography — Kymbo substitutions

`diagram-design` prescribes Instrument Serif + Geist sans + Geist Mono. Kymbo substitutes into the same **roles**, keeping brand identity:

| diagram-design role | Kymbo substitution |
|---|---|
| Title (Instrument Serif 1.75rem 400) | **Satoshi 1.75rem 500** (not 800 — matches the SPEC archetype restraint rule) |
| Node name (Geist sans 12px 600) | **Satoshi 12px 600** |
| Sublabel (Geist Mono 9px) | **JetBrains Mono 9px** |
| Eyebrow / tag (Geist Mono 7-8px uppercase tracked) | **JetBrains Mono 7-8px uppercase, letter-spacing 0.18em** |
| Arrow label (Geist Mono 8px) | **JetBrains Mono 8px** |
| Editorial aside (Instrument Serif italic 14px) | **Satoshi italic 14px** |

## Rules inherited verbatim (do NOT bypass)

From `diagram-design/skills/diagram-design/SKILL.md`:

1. **No diagonal connectors.** Rounded right-angle elbows only (`r=8` minimum).
2. **No overlapping strokes.** Two connectors never share a stroke path.
3. **Label-connector separation ≥ 6px.** A mask rect gap or the label doesn't touch the wire.
4. **Shared-edge attach points fan** with ≥ 12px spacing between them.
5. **No transit behind non-endpoints.** A connector doesn't pass under a box that isn't its source/destination. If unavoidable, dash it.
6. **One accent color per diagram.** Verde on 1–2 focal nodes max — never on "every important thing."
7. **Complexity budgets.** Per diagram type — see `references/diagrams-*.md` in the skill. General: 9 nodes / 12 arrows / ≤2 verde.
8. **Anti-patterns are automatic failures:**
   - Dark-mode cyan or purple glow
   - JetBrains Mono as a blanket "dev" font (mono for technical content only)
   - `rounded-2xl` boxes (max 6-10px radius or none)
   - Shadows on any element (borders preferred)
   - Vertical `writing-mode` text
   - Legend floating inside diagram area
   - Arrow labels with no masking rect
9. **Deletion test.** "The schematic isn't done when everything is added. It's done when nothing can be removed." Target density: 4/10.

## Slide pipeline integration

**Where diagrams live:**
`profiles/kymbo/build/diagrams/<scene>-<slide>-<type>.html`

Each diagram is a standalone HTML page, self-contained (styles inline). Playwright screenshots it at slide-native dimensions (currently: the full 1080×1350 slide canvas, with the diagram positioned per the slide layout below).

**How a slide references a diagram:**

In the scene JSON, a diagram slide has:

```json
{
  "layout": "diagram",
  "diagram": "scene-22-s2-bar",
  "kicker": "THE COST",
  "headline": "Weight, not intelligence.",
  "sub": "Every 'AI feature' ships in kilobytes."
}
```

The `diagram` field names the HTML file in `build/diagrams/`. The template renderer embeds it as an `<img>` (from its rendered PNG at `build/img/diagrams/<name>.png`) with the slide chrome (headline, sub-copy, footer squares) composed around it.

**Slide-canvas layout for diagrams:**

- Diagram lives in the upper 55-60% of the slide, centered
- Copy (kicker + headline + sub) lives in the lower 40-45%
- Follows the same safe-zone rules (Instagram grid crop, TikTok caption bar) as scene slides
- Footer progress squares stay at the bottom — the diagram never covers them

## Diagram families Kymbo uses (subset of the 40)

We do NOT need all 40. Batch 01v2 uses this subset, matched to specific slides:

| Family | Best for | Batch 01v2 slots |
|---|---|---|
| **Bar chart** | quantitative comparison across categories | scene-22 s2 (AI weight vs alternatives) |
| **Sankey** | flow splitting/dropping through stages | scene-21 s1 (visitor → checkout leak per field) |
| **Kanban** | items grouped by state | scene-21 s3 (kept fields vs cut fields) |
| **Waterfall** | cumulative build-up or drain | scene-21 s5 (page-by-page abandonment cumulative) |
| **Fishbone** | multiple causes → one observed effect | scene-22 s3 (causes of slow site) |
| **Radar / spider** | multi-axis scoring across items | scene-22 s5 (AI utility: search, moderation, translation) |
| **Loop / flywheel** | reinforcing cycle | scene-15 s4 (OTA re-acquisition loop) |
| **Nested** | containment / scope hierarchy | scene-15 s6 (data you have vs don't) |
| **Layer stack** | stacked abstraction levels | scene-20 s2 (code / server / domain — all yours) |
| **Quadrant** | two-axis positioning | scene-20 s3 (open source vs proprietary × switching cost) |

10 diagrams total across the 4 scenes. Every other slide stays photographic.

## Authoring workflow

1. **Read** the diagram-design skill's `references/diagrams-<type>.md` for that family's rules and complexity budget.
2. **Read** the closest `assets/example-<type>.html` for the base structure.
3. **Copy** to `profiles/kymbo/build/diagrams/<scene>-<slide>-<type>.html`.
4. **Substitute** color and typography tokens to Kymbo values (table above).
5. **Author the specific content** — real data (with sources or reader-arithmetic per HANDOVER §2 rules), verde on ≤2 focal elements, deletion pass before shipping.
6. **Render** via Playwright (part of `npm run build`).
7. **Slot** into the scene JSON as a `layout: "diagram"` slide.

## The stop-list, Kymbo-specific

Everything in `diagram-design/SKILL.md` prohibitions PLUS these Kymbo rules:

- **No verde on more than 2 nodes per diagram.** One accent, one time.
- **No JetBrains Mono for the diagram title.** Titles use Satoshi weight 500 (SPEC archetype rule).
- **No stat that isn't sourced or reader-arithmetic.** If a bar's height claims "AI Chat widget = 400 KB," that number needs a public source or must be labeled "typical range." When in doubt: label as relative, remove the y-axis numbers, and let the shape carry the argument.
- **No decorative diagrams.** If a diagram doesn't carry a specific idea the reader will act on, cut the slide and use a photo instead.
