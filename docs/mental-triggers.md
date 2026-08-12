# Mental Triggers — 5 canonical

Every Kymbo carousel declares one primary trigger before copy is written.
Impeccable's `clarify` pass then enforces: **say each idea once.** More than
one persuasion move per slide dilutes both.

Reduced from 11 triggers to 5 on 2026-08-11 (Impeccable distill pass).
Sources unchanged — Cialdini's *Influence*, the Hotmart guide, the Zendesk
guide — but the working set is now tight enough to run without a table.

---

## The 5

Each trigger has: what it does, how it lands on a Kymbo carousel, and the
failure mode that means we're not actually using it.

### 1 · Authority
The reader defers to demonstrated competence.

- **On Kymbo:** publish a number Kymbo actually holds itself to. The
  performance budget (LCP < 2.5s). The plugin cap (15 on custom). The
  five-item SEO QA gate. "Here is the standard we ship against."
- **Failure mode:** vague expertise language. Authority requires a
  citable number, a stated position, or a decision rule.

### 2 · Reciprocity
Give value first; attention follows.

- **On Kymbo:** publish the internal standard for free. The perf budget.
  The onboarding week, day by day. The five launch killers. The four
  caches. Every Craft carousel is a reciprocity move.
- **Failure mode:** teaching thin material to bait a lead. The gift has to
  be genuinely useful on its own — the reader can act on it without
  hiring us.

### 3 · Loss aversion
People react ~2x more strongly to a loss than an equivalent gain. Frame
the same math as a leak, not an opportunity.

- **On Kymbo:** "$50 gone on every $200 booking." "The tax nobody put on
  your P&L." "They didn't take 18%. They took the guest." "OTA bookings
  cancel at twice the rate — revenue you thought you had."
- **Failure mode:** fear-mongering. The loss has to be a real cost the
  reader can verify against their own P&L.

### 4 · Curiosity
A partial reveal creates a completion drive.

- **On Kymbo:** cover hooks that state a claim you have to swipe to
  understand. "There are four caches. Most sites configure one." "You
  don't have to win the search. Just the handoff." "Break-even is smaller
  than you think."
- **Failure mode:** clickbait. The curiosity gap that doesn't close on
  swipe. Always deliver the payoff.

### 5 · Commitment (and consistency)
People act consistent with prior small commitments — including internal
ones ("I already agreed the direct rate matters, so I should…").

- **On Kymbo:** framing questions that earn an internal "yes" before the
  ask. "Would you rather own the guest or rent them?" A CTA that asks the
  reader to run their own numbers.
- **Failure mode:** overusing rhetorical questions until they read as
  pandering. One question per carousel, max.

---

## What was retired and why

The 11-trigger list that shipped in the first design filter version was
Impeccable-flagged as overtaxonomy. Six triggers folded into the 5 above,
or into voice choices governed by `copy-discipline.md`.

- **Reasons / especificidad** — folded into Authority. A stated reason
  ("15 plugins because each adds 50-200ms") is Authority when the number
  is Kymbo's, and Reciprocity when the reader can act on it. The
  "reasons" cognitive shortcut always attaches to another primary.
- **Novelty** — folded into voice. A dated fact ("Airbnb's Oct 27 2025
  fee change") is fine and lands as Loss aversion. "Novelty" as a
  standalone trigger produced covers that felt breathless.
- **Affinity / simpatía** — folded into voice. Speaking the operator's
  language is `copy-discipline.md § voice`, not a persuasion trigger.
- **Urgencia** — retired. Isa's original note on c09 flagged urgency as a
  good use but a capped one. A 5-trigger set with no urgency is safer
  than a 6-trigger set with an urgency cap that's easy to miscount. If a
  carousel truly needs a clock, it's a Loss aversion frame (cost of
  delay) with a specific dated fact.
- **Escasez / exclusividad** — retired. Kymbo has genuine capacity
  limits, but "we take N builds a quarter" reads on social as marketing
  scarcity. Skip it here; it belongs in DMs and sales calls.
- **Social proof** — retired as a *cover-driving* trigger. Named
  portfolio (Kalido Hospitality's live homepage) is a proof element
  inside a Loss aversion or Authority carousel, not a carousel's engine.

---

## Per-carousel checklist

Before the first slide of copy is written:

- [ ] **One primary trigger declared** in the carousel JSON as
      `primaryTrigger: "authority"` (or one of the four others).
- [ ] **Different from adjacent tiles** in the feed order. Two Authority
      posts in a row train the reader to look away.
- [ ] **The trigger is earned, not stated.** Authority doesn't come from
      "we're experts"; it comes from a published number. Loss aversion
      doesn't come from the word "lose"; it comes from a real cost the
      reader can verify.
- [ ] **The payoff closes** on the CTA slide — a specific number to
      comment, a specific action to take.

---

## Sources

- Robert Cialdini, *Influence: The Psychology of Persuasion* (2007
  revised) — the canonical seven, of which four survived Kymbo's
  distill (Reciprocity, Authority, Social proof/folded, Commitment).
- Zendesk MX — [¿Qué son los gatillos mentales?](https://www.zendesk.com.mx/blog/sales/gatillos-mentales-que-es/)
- Hotmart — [Disparadores mentales](https://hotmart.com/es/blog/disparadores-mentales)
- Hotmart's rule of use, adopted here: *"Persuasion is not the same as
  manipulation."* Never overstate a claim; never over-use a single
  trigger; avoid unrelated controversy.
