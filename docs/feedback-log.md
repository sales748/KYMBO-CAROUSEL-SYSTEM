# Feedback Log — 2026-08-11 · Isa (CEO)

Isa reviewed Batch 01 with the team and returned this feedback (originally in
Spanish; translated below). It is the input for Batch 01v2.

> **How to use this file.** Every finding lists the affected carousel(s), the
> exact concern, and the fix direction it implies. When we draft Batch 01v2
> copy, each of these is a check the copy passes or fails against.

---

## Per-carousel findings

### C2 — "5 myths that keep hotels addicted to OTAs" (c02 / scene-05)

> "Also review C2 and the math."

Isa flagged this in the *general* section, tied to the "we've been quiet on the
account too long" direction. **Fix direction:** re-check the math in the myths
carousel (the counter-arguments to the 5 myths need to stand up on their own
numbers), and consider whether "5 myths" is the right frame given we're widening
away from FYM-only.

### C4 — "$50 gone on every $200 booking" (c04)

> "I don't really like the C4 idea. I'd change it completely."

Grouped in Isa's note with C12 as the *widget vs full-integration* problem —
which is actually the c11/c12 axis, not c04. Given position-4 in the batch was
c04, this is likely a slot-vs-topic mix-up on the CEO's end. **Fix direction:**
treat the c04 unit-economics topic as still viable (it's clean arithmetic with
a source), but drop the widget/full-integration language wherever it appears
(see C11/C12 below).

### C5 — "Watch the grid drain" (c05)

> "The C5 idea is good but I think you develop it a bit wrong. It sounds too
> complex. This could be said in simpler words a five-year-old could understand."

**Fix direction:** the pixel-grid-as-draining-bar concept survives; the
explanation around it needs to be radically simpler. **The 5-year-old test.**
If a sentence needs a re-read to parse, rewrite it. One idea per slide, plain
verbs, no compound reasoning inside a single line.

### C6 — "45 days, in writing" (c06 — retired)

> "Review the math on C6."

The topic itself (`fym-06`) was **retired** by prior client direction — the
45-day guarantee doesn't appear in the offer, brief or SOW. Isa's note here
requests a math re-check on whatever we shipped in slot 6, which by that point
was scene-03 (educational, one-way vs two-way sync, "The Fix"). **Fix
direction:** verify the numbers in scene-03 hold up (specifically the "90%+
reduction in overbookings from proper channel manager integration" claim traces
to `stack.json → hospitalityVendors`, but sanity-check the framing).

### C7 — "You don't need to quit Airbnb" (c07 / scene-02)

> "C7 is a design AND logistics problem, not just design — because Airbnb's plus
> is that they handle your check-in/check-out, payments and insurance."

**Fix direction:** the "don't quit Airbnb" framing is fine, but the argument
needs to acknowledge what Airbnb *actually provides* (payments infrastructure,
insurance, guest support, check-in workflow) — not just distribution. Kymbo's
direct-booking system needs a story for those responsibilities, not a pretend
that they don't exist. See `craft-and-team.json` topics on how the stack
handles payments, guest ops and automation.

### C9 — "Every month you wait…" (c09 / scene-06)

> "The urgency angle is great — you should use these mental triggers, not only
> urgency, on semi-direct-sales posts like this. This one doesn't need to
> change, it's a call-out of something I liked. But don't overuse it — the
> amount now is fine, just keep it in mind for the future."

Links Isa sent:
- https://www.zendesk.com.mx/blog/sales/gatillos-mentales-que-es/
- https://hotmart.com/es/blog/disparadores-mentales

**Fix direction:** mental triggers become a **first-class copy filter**, not
an afterthought — see [`mental-triggers.md`](mental-triggers.md). Urgency has
a ceiling: no more than one urgency-driven carousel in every four across the
batch. c09 itself doesn't need a rewrite.

### C10 — "Direct-booking system" (c10 / scene-04, and c03 by pillar)

> "Also important on C10: clarify the automation — everything can be
> self-service. Door codes, check-in instructions, reception notifications,
> check-in/out alerts, FAQs, etc."

**Fix direction:** the "direct booking system" story is currently too narrow
(booking + calendar + payment). It needs to cover **the whole automated guest
lifecycle**: pre-arrival messaging, door codes, self check-in instructions,
staff notifications on check-in/out, in-stay FAQs, post-stay follow-up. This
is what unlocks the "you don't need Airbnb for the ops" argument in C7. Add
it as a topic in `craft-and-team.json`.

### C11 — "3 things every booking page needs" (c11 / scene-04 — pretty page & UX)

> "C11 shouldn't only talk about a pretty page and UX — it should also cover
> the whole stay-experience and process system."

**Fix direction:** widen the conversion argument from "the page" to "the
experience the page kicks off." The booking page is the start; what follows —
confirmation email, pre-arrival flow, on-property automation, post-stay — is
where a direct site earns the guest for the second stay. Copy needs to name
those touch points, not just say "great UX." Ties directly to C10.

### C12 & C4 — Widget vs full integration

> "In C12 same as C4, I don't like the widget vs full-integration angle. I
> don't think it's the language or the delivery — I get what we're selling, but
> I don't know if clients understand or care whether it's a widget or a full
> integration. Ideally, we'll always do full integration, or we'll have it
> ready-made ourselves."

**Fix direction:** **retire** the two-tier "widget vs full integration" framing
from customer-facing copy. Kymbo either ships full integration or ships a
Kymbo-owned pre-built one that behaves like full integration from the client's
perspective. The word "widget" is out of the pitch. Update:
- `fire-your-middleman.json` topic `fym-11` — retire or rewrite without
  "widget / full integration".
- `educational-technical.json` topic `edu-05` (Widget or full integration) —
  retire; the tradeoff isn't the client's decision to make.
- `content/carousels.json` c11 and c12 — treat as retired for Batch 01v2.

---

## The direction (Isa's summary, restated)

> "I need to talk about the other topics too, not only the Fire Your Middleman
> campaign. I like all this, but the account has been quiet for a long time,
> and I want to mix generic-reach content with the campaign. I know this goes
> against what I said before, but I'm open to your opinion. Based on this,
> also review C2 and the math."

Followed by (**correction from the second message**):

> "It's not about reviving the account before the campaign — it's about
> **mixing all of it**."

**Restated as rules the batch has to satisfy:**

1. **Mix from the start.** Batch 01v2 is not FYM-only. It draws from all three
   banks: `fire-your-middleman.json`, `educational-technical.json`, and the new
   `craft-and-team.json`. No "revive first, campaign later" phasing.
2. **Copy > design.** Design is fine. The copy carries the batch.
3. **Talk about the whole business.** WordPress, e-commerce, mobile apps,
   integrations, custom builds. The team behind every project. How Kymbo
   actually works when it onboards a client.
4. **Triggers as a filter.** Every carousel identifies its primary trigger
   *before* copy is written. No two adjacent posts share a primary trigger.
   Urgency capped at one in four.
5. **Retire the widget/full-integration framing.**
6. **Widen the direct-booking story** to cover automation and the guest
   lifecycle, not just the booking transaction.
7. **The 5-year-old test** applies to every sentence on every slide.
