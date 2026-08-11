# Kymbo — Content Repository

The idea bank the ideation step pulls from. When we start the next carousels,
we do **not** brainstorm from zero — we open these files, filter, and pick.
Everything here is a *topic*, not a finished carousel: a topic becomes a
carousel when it gets copy, a layout and (for Path B) image prompts.

```
ideas/
  README.md                   ← this file: how the repository works
  stack.json                  the tech stack the technical topics rest on
  fire-your-middleman.json    campaign topic bank (the OTA/direct argument)
  educational-technical.json  hotel-tech / how-it-works topic bank
  craft-and-team.json         team, process, range, culture — the wider Kymbo
```

> **Read `../../../docs/` first.** `docs/CONTINUE-HERE.md` is the entry point
> for any new session picking this up. It links to the Aug 11 feedback log,
> the mental-triggers filter every carousel now runs through, the retired
> claim families, and the Batch 01v2 plan.

---

## The three categories

| | **Fire Your Middleman** | **Educational / Technical** | **Craft & Team** |
|---|---|---|---|
| Job | Sell the argument for going direct | Teach the craft; earn authority | Show what Kymbo is beyond the campaign |
| Reader leaves with | A reason to act | A thing they understand | A sense of who they'd be working with |
| Pillars | Problem · Math · Alternative · Proof · Decision | Stack · Build · Standard · Fix · Tradeoff | Team · Process · Craft · Range · Culture |
| Default cover surface | dark (mostly) | **light — always** | mixed (decided per topic) |
| Default path | A (HTML) or B (scene) | A (HTML), diagram-forward | mixed (people-oriented topics lean B) |

None of these is a new design system. Same canvas, palette, type, footer
ticks, one-lime-accent rule. What changes is stated under *Design direction*
below.

**Batch mix — Isa's direction 2026-08-11.** Do not ship a batch that draws
only from Fire Your Middleman. Mix the three categories from the start, not
"revive the account first, then run the campaign." Recommended Batch 01v2
split: 4 FYM + 4 Educational + 4 Craft/Team, interwoven across the 12 feed
slots. See `docs/batch-01v2-plan.md` for the specific 12 and the slot
assignments.

---

## How to use this during ideation

1. **Filter by what the feed needs**, not by what's interesting. The feed rules
   below tell you how many light covers and which archetypes are free.
2. **Pull to the batch mix.** For Batch 01v2 that means 4 from each of the
   three banks. Check `usedIn` on each — anything with a value is already
   shipped; don't repeat a topic that has a scene twin (see the no-twins rule).
3. **Check the retired-topics flag on each bank.** Retired topics carry
   `retired: true` or a `flag`. Do not repull them.
4. **Check `needsStack`.** A topic flagged `true` asserts something about
   Kymbo's own tooling. Verify against `stack.json` before writing copy — do not
   guess a tool name into a published slide.
5. **Assign the primary trigger** at pull time, not after copy is drafted.
   The trigger is a structural decision. See `docs/mental-triggers.md` for the
   filter and the checklist.
6. **Write the carousel** into `content/<id>.json`, then set `usedIn` on the
   topic so it leaves the pool.
7. **Top the pool back up** when a bank drops below ~10 unused topics.

Each topic carries: `id`, `title`, `pillar`, `hook` (the cover line),
`angle` (what makes it non-obvious), `slides` (suggested count), `cover`
(archetype), `surface`, `path`, `proof` (the concrete numbers to use), and
`needsStack`. Topics in `craft-and-team.json` additionally carry
`primaryTrigger` because the trigger is the structural anchor for those
carousels.

---

## Feed rules these topics have to satisfy

The live feed order lives in `system/render.mjs`. Three rules govern it:

1. **Organic/flat checkerboard.** Scene carousels sit at grid positions
   1, 3, 5, 7, 9, 11; systemized ones at 2, 4, 6, 8, 10, 12.
2. **No archetype adjacency**, including diagonal. Two MATRIX covers or two SEAM
   covers must sit at opposite corners.
3. **At least four light covers per twelve** — and specifically at slots 2 and
   8, plus one of {4, 10} and one of {6, 12}.

Rule 3 is arithmetic, not taste. Rows 1 and 3 each carry two organic tiles, so
their single flat slot must be light or the row goes three-dark. That spends two
lights in column 2, leaving one light to cover both column 1 and column 3 —
impossible. **Three light covers can never clear the grid; four can.** Batch 01
shipped with three, which is why the current feed still has one all-dark column
and one three-dark row.

Educational carousels ship a light cover by definition. Four of them per twelve
resolves the tonal ceiling exactly — which is why the next four are the fix.

---

## Design direction — educational carousels

**Stays the same:** 1080×1350, Media Noche / Pantalla / Verde Pixel, Satoshi +
Space Grotesk, pixel motif, progress ticks, one accent per slide, no logo/handle
/swipe furniture.

**Changes, so it reads as a different kind of post without leaving the brand:**

- **Cover is always light** (Pantalla field, Media Noche type). This is the tile
  that lands in the feed's light slot.
- **Diagram-forward interiors.** Where a campaign carousel puts a colossal
  number, an educational one puts a *structure*: a flow, a stack, a before/after,
  a labelled anatomy. The pixel motif is the diagram primitive — cells become
  nodes, layers, steps.
- **Mono voice carries more weight.** Space Grotesk for labels, field names,
  values, file paths — the technical register. Display type gets smaller because
  the diagram is the hero.
- **Path A by default.** These are drawn, not photographed. A scene photo is
  optional for the cover only, and only if it's a workspace, never a stock
  "developer at a laptop."
- **The accent points at the answer**, not the headline — the one cell, step or
  line that is the lesson.

Interior layouts available to compose from (existing kit): POINT, STAT, LIST,
DRAIN, MOCKUP, QUOTE, MATRIX — plus the device composite for anything showing a
real interface.

---

## Kicker taxonomy

Kickers must come from a registered pillar. Batch 01 drifted — `[ EDUCATION ]`,
`[ MYTH-BUSTING ]` and `[ THE OFFER ]` were rendered without being in the list.
The full registered set now lives in `brand.json` under
`myDesignLanguage.pillars`; add to it deliberately rather than inventing a
kicker at write time.
