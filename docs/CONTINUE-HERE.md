# Continue Here — Kymbo Carousel System

**A fresh Claude session should read this file first.** It is the shortest path
from cold-start to knowing where things stand and what to do next.

> One rule, load-bearing: **the source of truth is this repo**, not any
> conversation. Anything binding — brand, topics, decisions, retired claims,
> feed rules — lives here as a file. If a conversation contradicts a file, the
> file wins until we change the file.

---

## 1. The 5-minute picture

- **What this is.** An in-code content studio for **Kymbo** (`@kymbo`,
  Instagram, 1080×1350 4:5). Two profiles share one rendering engine:
  `profiles/kymbo/` (this work) and `profiles/randyortegar/` (separate).
- **What we ship.** Carousels. Twelve at a time = one batch = one feed grid.
- **How we ship.** Copy lives as JSON. Layout, type, spacing, palette come
  from code. `npm run build` renders each slide to a 1080×1350 PNG.
- **Where the design system lives.** `system/styles.css`, `system/templates.mjs`,
  `profiles/kymbo/brand.json`.
- **Where the topic ideas live.** `profiles/kymbo/content/ideas/` — three
  topic banks. We do **not** brainstorm from scratch; we pull.

Full system overview: [`README.md`](../README.md).

---

## 2. What just happened (state as of 2026-08-11)

**Batch 01 shipped** — 17 carousels total (c01–c05, c07–c12 systemized;
scene-01…06 organic). Exported to `profiles/kymbo/export/batch-01/`.

**Batch 02 partially shipped** — c13–c18 (systemized, all educational or
campaign) exported to `profiles/kymbo/export/batch-02/`. Six organic scenes
(scene-07…12) have JSON + prompt sheets but are not exported yet.

**Isa (CEO) reviewed Batch 01 on 2026-08-11 and gave feedback.** The full
translated log is [`docs/feedback-log.md`](feedback-log.md). Summary:

- **Design is fine. Copy is the problem.** Everything from here runs through a
  stricter copy filter.
- **Not FYM-only.** Kymbo is a full-service dev shop — WordPress, e-commerce,
  mobile apps, integrations, custom builds, and a real team-of-humans behind
  every project. The feed should reflect that. **Mix it from the start**, not
  campaign-first-then-widen.
- **Mental triggers become a filter** for every carousel's copy, not an
  afterthought. See [`docs/mental-triggers.md`](mental-triggers.md).
- **Widget vs full-integration** framing (c11, c12) is out — clients don't care
  about the label. Kymbo will always do full integration or have it ready-made.
- **The 5-year-old test.** If a five-year-old can't follow the sentence, it's
  too complex (from Isa's C5 note).
- **Trigger use.** Urgency is fine but don't overuse it — Isa flagged c09 as
  a good use, but as a ceiling, not a template.

**Next work** — rebuild Batch 01v2 from scratch, mixing all three topic banks.
See [`docs/batch-01v2-plan.md`](batch-01v2-plan.md).

---

## 3. What to read, in order

Everything below is short, focused, and complete on its own.

1. [`docs/feedback-log.md`](feedback-log.md) — Isa's Aug 11 review, translated
   from Spanish, per carousel, with the fix direction each finding implies.
2. [`docs/positioning.md`](positioning.md) — what Kymbo actually is. Full-service
   dev shop, tech stack, offer tiers, team roles. The material the feed can
   draw from. (Pulled from `content/ideas/stack.json`, restated as narrative.)
3. [`docs/mental-triggers.md`](mental-triggers.md) — the copy filter. The seven
   Cialdini classics plus the four extras that hit for B2B service. Mapped to
   Kymbo's pillars. Including the checklist every carousel runs through.
4. [`docs/copy-discipline.md`](copy-discipline.md) — retired claims (with the
   exact retired phrases) + tone rules + the 5-year-old test.
5. [`docs/batch-01v2-plan.md`](batch-01v2-plan.md) — the proposed 12-topic mix
   for Batch 01v2, ordered for feed rhythm.
6. [`profiles/kymbo/content/ideas/README.md`](../profiles/kymbo/content/ideas/README.md)
   — the ideation workflow, feed rules, and category direction.
7. The three topic banks:
   [`fire-your-middleman.json`](../profiles/kymbo/content/ideas/fire-your-middleman.json),
   [`educational-technical.json`](../profiles/kymbo/content/ideas/educational-technical.json),
   [`craft-and-team.json`](../profiles/kymbo/content/ideas/craft-and-team.json).

---

## 4. Workflow — how a new batch actually gets built

The order matters. Do not skip a stage.

1. **Copy first.** Pull topics from the ideation banks (per feed rules), draft
   copy for each carousel, run each through the mental-triggers filter and the
   copy-discipline check. Copy lives in `profiles/kymbo/content/<id>.json`.
2. **Design decisions.** Cover archetype, surface (dark/light), path (HTML-only
   or scene), organic accents.
3. **Feed lock.** Once 12 covers are drafted, render the feed grid
   (`profiles/kymbo/build/feed.html`) and iterate until the tonal math is
   clean — 4 light covers minimum, no adjacent archetype repeats.
   For scene covers, the operator generates the images in ChatGPT's image tool
   from the prompts written to `build/prompts/<id>.md` and drops each result
   into `profiles/kymbo/assets/scene-XX/sN.png`.
4. **Produce.** `npm run build` renders every slide. Review each in
   `profiles/kymbo/build/index.html`. Export to
   `profiles/kymbo/export/batch-<n>/`.

One batch at a time. Do not draft Batch 02 while Batch 01v2 is in flight.

---

## 5. Guardrails, in one place

- **AI imagery only for generic scenes.** Never a fabricated Kymbo person or a
  specific real client.
- **No unverified claims.** All numerical proof must trace to
  `content/ideas/stack.json → verifiedStats` (with source). See
  [`docs/copy-discipline.md`](copy-discipline.md) for the retired claim list.
- **No competitor names.** Critique the practice, not the company.
- **Kalido caution.** Kalido runs Mews, not the Guesty offer — never imply the
  portfolio was built on the productized tier. Never use `blockhouse.com`
  (that domain belongs to a furniture company).
- **English only.** Kymbo publishes in English. Internal notes with the client
  are frequently in Spanish; translations land in the repo, in English.
