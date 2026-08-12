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

## The 12

Feed order is slot-by-slot. Batch 01v2 IDs continue existing numbering:
systemized flat carousels are `c19-c24`, scenes are `scene-13-scene-18`.

| # | ID | Cat | Topic | Surf. | Cover | Working title | Trigger |
|---|---|-----|-------|-------|-------|---------------|---------|
| 1 | `scene-13` | FYM (scene) | `fym-27` | dark | STAT | 65% of direct bookings start on an OTA | Curiosity |
| 2 | `c19` | Educational | `edu-08` | **light** | SEAM | LCP 2.5s. CLS 0.1. INP 200ms. The gate we ship against. | Authority |
| 3 | `scene-14` | Craft/Team (scene) | `craft-01` | dark | STATEMENT | The five people on every Kymbo project | Affinity |
| 4 | `c20` | Educational | `edu-10` | **light** | INDEX | Max 15 plugins. 25 on Elementor. That's the rule. | Reasons |
| 5 | `scene-15` | FYM (scene) | `fym-16` | dark | MATRIX | They didn't take 18%. They took the guest. | Loss aversion |
| 6 | `c21` | Craft/Team | `craft-02` | **light** | INDEX | The onboarding week — day by day | Reciprocity |
| 7 | `scene-16` | FYM (scene) | `fym-20` | dark | STAT | Parking. Pets. Early check-in. The OTA sells none. | Novelty |
| 8 | `c22` | Educational | `edu-15` | **light** | STATEMENT | We reject GoDaddy and Bluehost. Here's the math. | Authority |
| 9 | `scene-17` | Craft/Team (scene) | `craft-04` | dark | STAT | The whole guest lifecycle, not just the booking | Commitment |
| 10 | `c23` | Craft/Team | `craft-03` | dark | MATRIX | Custom or template — how Kymbo picks | Commitment |
| 11 | `scene-18` | FYM (scene) | `fym-13` | dark | SEAM | Half the guests who find you on an OTA google you next | Curiosity |
| 12 | `c24` | Educational | `edu-16` | **light** | MATRIX | Four caches. Most sites configure one. | Reciprocity |

> **Category-scope rule.** Educational carousels teach Kymbo services (WordPress
> performance, hosting positions, caching, SEO gates, launch discipline) to
> the wider client audience — commerce, marketing sites, service businesses.
> They do **not** carry hotel- or booking-specific examples. Anything
> booking-flavored belongs in the FYM (campaign) lane. This is why slot 8 and
> slot 12 moved from `edu-24` / `edu-03` (both booking-flow topics) to
> `edu-15` / `edu-16` (both service-general positions), and why the perf
> budget carousel at slot 2 is written without the hotel-page comparison the
> topic bank uses as its example.

> **Kicker rule.** The kicker on the cover slide (the small label at the top
> of the first frame) is a **short mini-hook that executes the primary
> trigger**, not a category label. Batch 01 shipped covers with kickers like
> `[ THE MATH ]` / `[ THE FIX ]` / `[ EDUCATION ]` — those are pillar tags,
> not persuasion. Replace with 1–3 words that begin the trigger's work
> before the headline even lands. Batch 01v2 mapping below. Point-slide
> kickers (the `index` field inside a slide) follow the same rule — either
> a mini-hook or a number, never a pillar tag.

### Batch 01v2 cover kickers

| slot | ID | trigger | kicker |
|---|---|---|---|
| 1 | scene-13 | Curiosity | THE HANDOFF, NOT THE SEARCH |
| 2 | c19 | Authority | WHAT WE SHIP AGAINST |
| 3 | scene-14 | Affinity | NOT A FREELANCER |
| 4 | c20 | Reasons | EVERY PLUGIN HAS A COST |
| 5 | scene-15 | Loss aversion | IT WASN'T THE MONEY |
| 6 | c21 | Reciprocity | FROM YES TO KICKOFF |
| 7 | scene-16 | Novelty | THE UPSELLS ONLY YOU SELL |
| 8 | c22 | Authority | TWO HOSTS WE WON'T BUILD ON |
| 9 | scene-17 | Commitment | THE BOOKING ISN'T THE PRODUCT |
| 10 | c23 | Commitment | THE HONEST ANSWER |
| 11 | scene-18 | Curiosity | THE SEARCH AFTER THE SEARCH |
| 12 | c24 | Reciprocity | THERE ARE FOUR |

### Feed grid — how it lands in the profile view

```
row 1:   scene-13   c19        scene-14
         STAT       SEAM       STATEMENT
         dark       light      dark

row 2:   c20        scene-15   c21
         INDEX      MATRIX     INDEX
         light      dark       light

row 3:   scene-16   c22        scene-17
         STAT       STATEMENT  STAT
         dark       light      dark

row 4:   c23        scene-18   c24
         MATRIX     SEAM       MATRIX
         dark       dark       light
```

**Light-cover count:** 5 — slots 2, 4, 6, 8, 12. Above the floor of 4, at both
required anchor slots (2 and 8), with 4 covering the {4,10} pair and 12
covering the {6,12} pair. Slot 6 is a bonus light from craft-02.

**Archetype spread:** STAT ×3 (1, 7, 9), SEAM ×2 (2, 11), STATEMENT ×3 (3, 8;
plus the natural spread), INDEX ×2 (4, 6), MATRIX ×3 (5, 10, 12). **No two
touching cells (horizontally, vertically or diagonally) share an archetype.**
Verified by hand and the grid above.

**Trigger spread:** Curiosity ×3 (1, 11 — plus 12 not adjacent), Authority ×2
(2, 8 — not adjacent), Reasons ×1 (4), Loss aversion ×1 (5), Reciprocity ×2
(6, 12 — not adjacent), Novelty ×1 (7), Commitment ×2 (9, 10 — not adjacent),
Affinity ×1 (3). **No two touching cells share a primary trigger.**

**Urgency count: zero this batch** — Isa flagged c09's urgency as a good use
but a capped one; we ration and open with different triggers.

**Category spread:** FYM 4 (slots 1, 5, 7, 11), Educational 4 (slots 2, 4, 8,
12), Craft/Team 4 (slots 3, 6, 9, 10).

> **Correction note.** The first version of this table (commit `1c9998d`) had
> two archetype-adjacency violations (slots 1–2 both STAT, slots 5–6 both
> INDEX), one same-column archetype repeat (slots 9 and 12 both STATEMENT),
> and one educational slot assigned as a dark scene (edu-03 at slot 5 —
> educational is always-light per the ideation rules). This revision fixes all
> four while keeping the same 4 + 4 + 4 category mix, the same eight topics
> from the banks, and the same intent per slot. Two swaps: `craft-03` moves
> from scene slot 9 to flat slot 10, and `craft-04` moves from flat slot 12
> to scene slot 9. Triggers on slots 4, 7 and 12 also shifted so no two
> adjacent cells share a trigger.

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

### Craft/Team interwoven, not phased
- Isa's clarifying note (2026-08-11, second message): **mix everything from the
  start**, not "revive first, campaign later." Craft/Team carousels sit at
  slots 3, 6, 9, 10 — spread across all four rows so no row is
  campaign-heavy or craft-heavy on its own.

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

1. **Approve this plan.** ✅ Approved 2026-08-11.
2. **Add the four Craft/Team topics.** ✅ Done — `craft-and-team.json`
   shipped in commit `527dc4d`.
3. **Draft copy** for all 12 carousels. ← *We are here.* Each carousel goes
   into `profiles/kymbo/content/<id>.json` (systemized: `c19-c24` added to
   `carousels.json`; scenes: `scene-13.json` … `scene-18.json`). Each declares
   `primaryTrigger` at the top. Every sentence passes `copy-discipline.md`.
4. **Feed lock.** Render the covers only. Iterate until the tonal math is
   clean and no archetype adjacencies. For the 6 scene carousels, image
   prompts are generated to `build/prompts/<id>.md`.
5. **Kim generates images.** She drops them into
   `assets/<id>/s1.png ... sN.png`.
6. **Full render.** `npm run build`. Review each in
   `build/index.html`. Fix in copy or in code (not by hand-editing PNGs).
7. **Export.** `profiles/kymbo/export/batch-01v2/` (or whatever the batch
   folder ends up being called).

**One batch at a time.** Batch 02v2 is not planned until Batch 01v2 ships.
