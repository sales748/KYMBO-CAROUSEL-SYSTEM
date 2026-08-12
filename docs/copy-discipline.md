# Copy Discipline

The rules copy has to pass before it ships. Union of every "no" from Batch
01 review + Impeccable's `clarify` pass added on 2026-08-11.

> If a sentence would fail this file, do not ship it. Rewrite it. If the
> rewrite is difficult, the *concept* is probably wrong, not the sentence.

> **Primary authority for copy review: Impeccable `clarify`** —
> `.claude/skills/impeccable/reference/clarify.md`. Load and run it against
> every headline, sub, body, and CTA line before render. The rules below
> are the Kymbo-specific overlays; where they conflict with Impeccable
> clarify, Impeccable wins.

---

## Rules from Impeccable clarify (adopted verbatim as Kymbo policy)

**One trigger per slide.** Impeccable clarify: "Say each idea once. If the
heading already explains the state, the introduction should add new
information or disappear." Applied to Kymbo: a slide carries one primary
persuasion move (see `docs/mental-triggers.md`), and every subsequent
sentence extends that trigger's argument rather than layering a second
persuasion move on top.

**Set the message hierarchy explicitly.** For each slide, decide before
writing:
1. the one fact the reader needs now;
2. the action available next (swipe, comment, click);
3. supporting context that changes the decision;
4. tone appropriate to this moment.

**Use a specific verb + object.** Actions/CTAs describe what happens, not
the gesture that triggers them. Same noun + verb for the same concept
across a carousel.

**Say the label with the number.** Every stat carries its source in the
same slide. Every claim carries its "because." Kymbo internal standards
attribute to `KYMBO INTERNAL`; industry data attributes to the vendor
(`SITEMINDER`, `CLOUDBEDS`).

**No hedges.** Delete "consider exploring," "you might want to," "it's
possible that." Kymbo publishes numbers it holds itself to; hedges
contradict that stance.

---

## Kymbo-specific overlays

---

## Brand-behavior rules (added 2026-08-11 per Impeccable distill)

### No "Kymbo" in headlines
The brand shows up in the design system + the account handle on the tile.
Repeating the brand name in a headline reads as advertising. Applied:
- ✗ "The plugin ceiling on every custom Kymbo build"
- ✓ "The plugin ceiling on every custom build"

Exceptions: identifier labels on comparison covers (e.g. `KYMBO` on the
left panel of a SEAM value-comparison) are structural, not self-reference.

### Em-dash cap: under 8 per carousel body
Impeccable detector fires an advisory at ≥ 8 em-dashes in body text (AI
cadence tell). Kymbo cap: never more than 7 across all interior bodies of
a single carousel. Prefer commas, colons, periods, parentheses. Em-dashes
on cover headlines are fine.

### Interior slides extend, don't restate
Impeccable clarify: "Say each idea once." Applied to carousel structure:
no interior body paragraph rephrases the cover headline. If a point
carousel's slide 2 body says the same thing the cover said, cut it.

---

## Retired claim families

Do not reintroduce any of these, in any wording, on any surface — carousels,
captions, prompt sheets, dashboards.

### 1 · The 45-day guarantee (retired by client direction)
Retired examples, verbatim, do not use:
- `"45 days, in writing."`
- `"If your direct site isn't live and taking bookings, you don't pay."`
- `"backed by the 45-day guarantee"`
- `"A team that ships in weeks, in writing"`

The 45-day guarantee is not in the campaign brief, the offer, the SOW or any
Notion document. It was invented in an earlier draft and retired.

### 2 · Payback / self-financing promises
Retired examples, do not use:
- `"A system that pays for itself"`
- `"The build pays for itself in a countable number of direct bookings"`
- `"$24k builds the system in year one and prints profit after"`
- `"Then it keeps going, at zero"`
- Any variant of `"pays for itself"`, `"prints profit"`, `"prints revenue"`,
  `"self-funding"`.

Break-even math **is** allowed when the assumptions are stated on the same
slide (see c05's grid-drain example: `30 rooms × $180 ADR × 70% occupancy ×
~11% blended commission = $151k/yr`). The forbidden move is quoting an outcome
without the inputs.

### 3 · Delivery-time promises
Retired examples, do not use:
- `"Live in days"`
- `"Immediate return"`
- `"Ship it in weeks"`
- Any variant of `"in writing"` used as a delivery commitment.

Real, publishable delivery language: `"A staging build you sign off before
go-live"` and `"Live on your current site as soon as it's configured"` —
these describe verifiable steps, not outcomes.

### 4 · Ownership overreach
Retired examples:
- `"[these bookings] were already yours"`
- Anything that implies the reader owned revenue they never had.

Publishable version: `"bookings your own site could have taken"`.

### 5 · Unsourced traffic and behavior stats
Retired examples:
- `"80% of guests book here"`
- `"Four in five bookings happen on this screen"`

If a percentage isn't in `stack.json → verifiedStats`, do not put it on a
slide. Use the design point that doesn't need a statistic instead.

### 6 · Widget vs full integration (retired by CEO, 2026-08-11)
Do not use this framing anywhere in customer-facing copy:
- `"A booking widget or a full integration."`
- `"Widget or full integration — how to choose."`
- `"Choose your path: widget-first or full API."`

Kymbo either ships full integration or a Kymbo-owned pre-built one that
behaves like full integration. The client doesn't decide between them — Kymbo
delivers the correct one for the tier.

---

## Facts that must be verbatim

Numbers with a source live in `stack.json → verifiedStats`. Use them verbatim,
with the source, when they appear on a slide:

- `"Hotel websites averaged $516 per booking vs $312 via OTAs in 2025"` —
  SiteMinder, 130M+ bookings.
- `"OTA bookings cancel at 21.8% vs 10.6% direct"` — Cloudbeds, 30,000+
  hotels, 2025.
- `"Since Oct 27 2025, Airbnb charges PMS-connected hosts a 15.5% host-only
  fee — $155 per $1,000 booking; ~$4,650/yr on $30K revenue"` — PriceLabs,
  TabiVista.
- `"65% of direct bookings start with discovery on an OTA"` — ZUZU
  Hospitality.
- `"Skift Research projects direct digital channels surpass OTAs by 2030
  ($409B vs $333B gross bookings)"` — Skift Research.

Do not round these ("about 22% cancel") or restate them ("more than double").
The reader should be able to Google the exact phrasing and find the source.

---

## Names, brands, portfolio caution

- **Never use `blockhouse.com`** — that domain belongs to a furniture
  company. The Kalido Block House lives at
  `kalidohotels.com/block-house/`.
- **Never imply Kalido was built on the Guesty productized offer.** Kalido
  runs Mews. When citing Kalido as portfolio proof, describe the *outcome*
  and the *practice* ("Book direct and save up to 35%"), not the productized
  tier stack.
- **`keeferhouse.com`** — presumed live, verify before publishing.
- **No competitor names** as villains. Critique the practice (commission
  structure, guest-data lock-in), not the company (Booking.com, Expedia).

---

## Tone rules

### The 5-year-old test (Isa's C5 note)
If a sentence needs a re-read to parse, rewrite it. Signals it fails:
- Two subordinate clauses in one sentence.
- Compound reasoning ("because X, which means Y, which is why Z").
- A term the reader has to already know to follow the argument
  ("PCI scope", "canonical", "channel manager") without a plain definition
  right there.

Passing sentences are short, active, one idea. Numbers where possible.

### One idea per slide
A slide has one thing to say. If it has two, split it into two slides or cut
one. The slide furniture (kicker, headline, body, accent) exists to support
one idea, not to smuggle in a second.

### Arithmetic > promise
Whenever the copy is about money, prefer the arithmetic move over the promise
move. Arithmetic states assumptions and lets the reader do the math.
Promise states the outcome and asks the reader to trust.

- Promise (retired): `"The build pays for itself"`.
- Arithmetic: `"Divide the one-time build by ~$50 per commission on a $200
  booking. That's the count of direct bookings before it's paid back."`

### Calm > salesy
No exclamation marks. No "🚀". No "game-changer". No "revolutionary". No
"transform your business". The reader can tell when they're being sold at,
and they close the app.

---

## Trigger discipline

See [`mental-triggers.md`](mental-triggers.md) for the full checklist. Two
rules restated here because they're the ones most likely to be forgotten:

1. **Urgency has a ceiling.** No more than one urgency-driven carousel in
   every four across a batch. Overusing urgency drains its power (Isa's note
   on c09).
2. **Adjacent carousels use different primary triggers.** Two "loss aversion"
   posts in a row train the reader to look away. The feed order matters here,
   not just the batch.

---

## Voice specifics

### Person
Second person ("you", "your"). First person plural ("we") only when Kymbo is
speaking for itself as a shop — the position posts, the process explanations.
Never "I" — Kymbo is a team, not a founder brand.

### Register
Two registers, both fine, one per carousel:
- **Operator register** — plain, direct, close to how a hotel owner would
  describe their own problem to a friend. Best for FYM and the Craft/Team
  posts.
- **Technical register** — precise, standard-cited, mono-typeface labels for
  values and field names. Best for educational.

Do not switch registers inside a carousel.

### Abbreviations, jargon, acronyms
Any acronym is defined on first use inside a carousel unless it's a term the
target reader already uses daily (OTA, ADR, occupancy, RevPAR are safe for
hotel operators; PMS, INP, LCP are not — expand).

---

## When in doubt

The default answer for "should we say this" is: only if we would still be
comfortable saying it if the reader were the CEO of the property calling us
out on it. If a claim can't survive that test, it's out.
