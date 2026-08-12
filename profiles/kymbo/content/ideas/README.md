# Kymbo — Content Repository

The single topic bank. When we start the next carousels, we do **not**
brainstorm from zero — we open [`topics.json`](topics.json), filter by feed
need, and pull.

```
ideas/
  README.md         ← this file
  topics.json       ← the topic bank (25 topics across 3 pillars)
  stack.json        ← technical + campaign facts + verified stats (source of truth)
```

> **First read for any new session:** `../../../docs/CONTINUE-HERE.md`. It
> links to `docs/design-filter.md` (Impeccable-first rules) and
> `docs/copy-discipline.md` (retired-claim families + tone).

---

## The three pillars

| Pillar | Job | Reader leaves with |
|---|---|---|
| **The Money** | Name what's leaking, and where. | A reason to act — commission, cancellation, guest data, upsells. |
| **The Craft** | Publish Kymbo's discipline as a number. | Trust — perf budgets, plugin caps, hosting positions, launch discipline. |
| **The Team** | Show the human shape of the shop. | A sense of who they'd be working with. |

The three pillars replace the earlier five-pillar-per-bank taxonomy that
Impeccable's `distill` pass on 2026-08-11 found was ~3× the concepts needed
to ship a batch of 12. Same content territory, one third the vocabulary.

None of these is a new design system. Same canvas, palette, type, verde
accent. What varies per pillar is the reading register (Money = operator's
language; Craft = published-standard voice; Team = process-transparency
voice) and the archetype defaults.

---

## How ideation works

1. **Filter by what the feed needs**, not by what's interesting. The feed
   rules below tell you which archetypes and surfaces are free.
2. **Assign the primary trigger at pull time.** One of: `authority`,
   `reciprocity`, `loss-aversion`, `curiosity`, `commitment`. See
   [`docs/mental-triggers.md`](../../../docs/mental-triggers.md).
3. **Pull to the batch mix.** For a 12-slot batch, a balanced mix runs
   roughly 5 Money + 5 Craft + 2 Team. Adjust to the surface — a campaign
   moment leans Money, a slow-week revival leans Team.
4. **Check `usedIn` on the topic.** If already shipped, skip unless the
   angle has meaningfully shifted.
5. **Verify against `stack.json → verifiedStats`.** Numbers used on a slide
   must appear verbatim with source in stack.json — no rounding, no
   restating.
6. **Write the carousel** into `content/<id>.json`. Declare
   `primaryTrigger` at the top of the JSON.
7. **Mark `usedIn`** on the topic so it leaves the pool.
8. **Refresh** when unused topics drop below 15. Pull from the archive
   banks (retired in the 2026-08-11 distill) or from new Notion research.

---

## Feed rules a batch has to satisfy

The live feed order lives in `system/render.mjs` under `FEED_01V2`. Three
rules govern it:

1. **Organic/flat checkerboard.** Scene carousels sit at grid positions
   1, 3, 5, 7, 9, 11. Systemized flat ones sit at 2, 4, 6, 8, 10, 12.
2. **No archetype adjacency**, including diagonal (Moore neighborhood).
   Two MATRIX covers or two SEAM covers must sit at opposite corners.
3. **At least four light covers per twelve** — and specifically at slots 2
   and 8, plus one of {4, 10} and one of {6, 12}. Rows 1 and 3 each carry
   two organic tiles, so their single flat slot must be light or the row
   goes three-dark. Below four lights, an all-dark column becomes
   arithmetically unavoidable.

---

## Design direction — Craft carousels

Craft carousels always ship a **light cover** so the feed's tonal math
clears the floor. Same canvas, palette, type, motif and one-accent rule.
What changes:

- **Diagram-forward interiors.** Where a Money carousel puts a colossal
  number, a Craft one puts a *structure*: a flow, a stack, a before/after,
  a labelled anatomy.
- **Mono voice carries more weight.** JetBrains Mono (variable) for
  labels, field names, values, file paths — the technical register.
- **Path A by default.** Craft carousels are drawn, not photographed.

---

## What was retired on 2026-08-11

The three earlier banks were collapsed into `topics.json` after
Impeccable's distill pass. Their topic IDs and source citations are
preserved on every kept topic via the `originalId` field. The verified
numerical stats stay in `stack.json.verifiedStats`, unchanged.

Retired files: `fire-your-middleman.json`, `educational-technical.json`,
`craft-and-team.json` (deleted). Retired topics that didn't survive the
distill pass are traceable via the source citations in each `originalId`
that made it through.
