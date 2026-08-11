# Batch 01v2 — Plan

This is the proposed 12-carousel mix for Batch 01v2, drawing from all three
topic banks. It is a **plan, not a shipped batch** — every entry needs copy,
design decisions and feed lock before it renders.

> Isa's direction (2026-08-11): **mix everything from the start**. Not
> revive-then-campaign. FYM and educational and craft/team all in the same
> batch, interwoven by feed rhythm.

---

## Batch shape

12 slots. Grid geometry runs in 4 rows of 3 (Instagram profile grid).
Feed rules from `content/ideas/README.md`:

1. **Organic/flat checkerboard.** Scene carousels at 1, 3, 5, 7, 9, 11; flat
   (HTML-only) at 2, 4, 6, 8, 10, 12.
2. **No archetype adjacency**, including diagonal.
3. **At least 4 light covers per 12**, with light guaranteed at slots 2 and 8
   plus one of {4, 10} and one of {6, 12}.

For Batch 01v2 specifically:
- **Category mix**: 4 FYM + 4 Educational + 4 Craft/Team.
- Educational carousels are **always** light covers, so they cover the 4-light
  minimum by definition.
- Craft/Team carousels can be light or dark — decided per topic.
- FYM carousels lean dark by default, one light allowed.

---

## The 12 (proposed)

Feed order is slot-by-slot. For each: slot, category, topic id from the bank,
cover surface, cover archetype, working title, primary trigger.

| # | Cat | Topic | Surf. | Cover | Working title | Trigger |
|---|-----|-------|-------|-------|---------------|---------|
| 1 | FYM (scene) | `fym-27` | dark | STAT | 65% of direct bookings start on an OTA | Curiosity |
| 2 | Educational | `edu-08` | **light** | STAT | LCP 2.5s. CLS 0.1. INP 200ms. The gate. | Authority |
| 3 | Craft/Team (scene) | `craft-01` (new) | dark | STATEMENT | The five people on every Kymbo project | Affinity |
| 4 | FYM | `fym-26` | **light** | SEAM | 21.8% vs 10.6% — same guest, different door | Loss aversion |
| 5 | Educational (scene) | `edu-03` | dark | INDEX | Nine things happen in 3 seconds after "Book" | Curiosity |
| 6 | Craft/Team | `craft-02` (new) | **light** | INDEX | The onboarding week — day by day | Reciprocity |
| 7 | FYM (scene) | `fym-16` | dark | STATEMENT | They didn't take 18%. They took the guest. | Loss aversion |
| 8 | Educational | `edu-10` | **light** | STAT | Max 15 plugins. 25 on Elementor. That's the rule. | Authority |
| 9 | Craft/Team (scene) | `craft-03` (new) | dark | STATEMENT | Custom or template — how Kymbo picks | Commitment |
| 10 | Educational | `edu-24` | **light** | INDEX | The 5-step booking flow that converts | Reciprocity |
| 11 | FYM (scene) | `fym-20` | dark | MATRIX | Parking. Pets. Early check-in. The OTA sells none. | Reasons |
| 12 | Craft/Team | `craft-04` (new) | dark | STATEMENT | The whole guest lifecycle, not just the booking | Commitment |

**Light-cover count:** 6 (edu-08, fym-26, craft-02, edu-10, edu-24; craft-04
dark). Comfortably above the floor of 4, at required slots 2 and 8, plus 4, 6,
10.

**Archetype spread:** STAT ×3, INDEX ×3, STATEMENT ×4, SEAM ×1, MATRIX ×1 —
no adjacent repeats horizontally or diagonally.

**Trigger spread:** Curiosity ×2, Authority ×2, Affinity ×1, Loss aversion ×2,
Reciprocity ×2, Commitment ×2, Reasons ×1. **No urgency in this batch** — Isa
flagged c09's urgency as good but capped, so we ration.

**Category spread:** FYM 4 (slots 1, 4, 7, 11), Educational 4 (slots 2, 5, 8,
10), Craft/Team 4 (slots 3, 6, 9, 12).

---

## Why this mix, tied to Isa's feedback

### Widened positioning
- Craft/Team gets 4 slots (`craft-01` through `craft-04`), covering the team
  model (`fix for team-question`), onboarding week (`fix for how Kymbo
  works`), custom-vs-template decision (`fix for widget/full-integration
  retirement — replace with the real decision Kymbo makes`), and the whole
  guest lifecycle framing (`fix for C10 + C11 + C7`).

### Retired framings out
- No `fym-11` (widget vs full integration).
- No `fym-12` (the two-tier offer post as widget/full-integration).
- No `edu-05` (widget or full integration — how to choose).
- No `fym-06` (45-day guarantee — already retired).

### Loss-aversion done well
- `fym-26` (cancellation rate 21.8% vs 10.6%) is the strongest loss-aversion
  angle in the FYM bank that isn't overused. `fym-16` (they took the guest,
  not just the commission) reframes the loss as asset, not money.

### Authority moves as reciprocity
- `edu-08` (perf budget) and `edu-10` (plugin cap) publish a Kymbo internal
  standard — that combination lands as both authority and reciprocity.

### Craft/Team as the "revive the account" content
- Isa's original concern was that we've been quiet on the account and going
  campaign-only from a cold start is risky. Craft/Team carousels are the
  reach-broadening posts — they read as brand-and-craft, not sales.

---

## The four new Craft/Team topics referenced above

Full definitions live in
[`craft-and-team.json`](../profiles/kymbo/content/ideas/craft-and-team.json)
once that bank is created. Working titles / angles here:

- **`craft-01` — The five people on every Kymbo project.** PM, tech lead,
  developer(s), designer (custom builds), client. What each does, when they
  show up, why that shape.
- **`craft-02` — The onboarding week, day by day.** From "yes" to kickoff:
  discovery call, SOW, staging environment, first design pass, first review.
  Reciprocity — the reader learns exactly what happens without needing to
  sign anything.
- **`craft-03` — Custom or template — how Kymbo picks.** Replaces the retired
  widget/full-integration decision tree with the real one. The decision rule
  Kymbo actually uses: what triggers custom, what template can handle.
- **`craft-04` — The whole guest lifecycle, not just the booking.** Direct
  isn't just a checkout — it's confirmation email, pre-arrival flow, door
  code and check-in instructions, staff notifications, in-stay FAQs,
  post-stay follow-up. **This is the C7/C10/C11 fix combined.**

---

## Workflow to get from here to a shipped Batch 01v2

Stage-by-stage. Each stage is a stopping point where we can review before
proceeding.

1. **Approve this plan.** Adjust slot assignments, working titles, triggers.
   ← *We are here.*
2. **Add the four Craft/Team topics.** Draft `craft-and-team.json` per the
   established schema (id, title, pillar, hook, angle, slides, cover,
   surface, path, proof, source, `usedIn: null`). Extend
   `content/ideas/README.md` to acknowledge the third category.
3. **Draft copy** for all 12 carousels. Each carousel goes into
   `content/<id>.json`. Each declares `primaryTrigger` at the top. Every
   sentence passes `copy-discipline.md`.
4. **Feed lock.** Render the covers only. Iterate until the tonal math is
   clean and no archetype adjacencies. For the 5 scene carousels, we write
   image prompts to `build/prompts/<id>.md`.
5. **Kim generates images.** She drops them into
   `assets/<id>/s1.png ... sN.png`.
6. **Full render.** `npm run build`. Review each in
   `build/index.html`. Fix in copy or in code (not by hand-editing PNGs).
7. **Export.** `profiles/kymbo/export/batch-01v2/` (or whatever the batch
   folder ends up being called).

**One batch at a time.** Batch 02v2 is not planned until Batch 01v2 ships.
