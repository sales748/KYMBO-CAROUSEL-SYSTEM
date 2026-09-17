# KIM — Batch 01v2 shot list

**24 photos across 4 scenes.** The other two scene carousels in this batch (scene-13 and scene-14) already have their photos in the repo and are not in this list.

---

## Generation settings (apply to every photo)

- **Tool:** nanobananapro
- **Resolution:** 2K (longer edge). Final canvas we render onto is 1080 × 1350; the extra resolution is for cropping headroom, so ship 2K.
- **Aspect ratio:** **4:5**, exactly. Not 1:1, not 3:4.
- **Format:** PNG.
- **Output filenames:** `s1.png`, `s2.png`, `s3.png`, `s4.png`, `s5.png`, `s6.png`.
- **One continuous photograph.** Do NOT letterbox, pad, extend, or outpaint. If nanobananapro produces a shorter frame and offers to extend, discard and regenerate — never accept an outpaint seam.
- **No dark band, no vignette, no black rectangle at the bottom.** A CSS gradient handles text legibility on top; the photograph itself must fill the ENTIRE 4:5 frame with natural scene content.
- **Compose subject in the upper 55-60% of the frame.** The lower 40% carries type; keep it filled with natural scene content, not just floor or table surface.
- **No text on any surface. No logos. No clearly identifiable faces.** Backs of heads, hands, over-the-shoulder crops are fine.

### Composite slides — the BLANK-SCREEN rule

Some slides mount a Kymbo booking-app UI onto a device's screen via a CSS perspective transform. For those photos:

- The device must be **PERFECTLY STRAIGHT AND FRONT-ON. Zero rotation. Zero tilt.**
- The screen must be **BLANK white** (or very light, uniform). No mockup UI, no wallpaper, no glare that draws attention. The overlay maps a Kymbo app screenshot onto that clean rectangle later.
- If the photo ships with a tilted device or a UI already on the screen, the composite fails. Regenerate.

Each scene's prompt file names which slides need composites — see below.

---

## Scene deliverables

Four scenes, six photos each. Each scene has a per-scene prompt sheet already saved in the repo. **The full style line is baked into every prompt** — copy-paste one prompt at a time into nanobananapro, no need to prepend anything.

---

### 1 · Scene 21 — *"Your checkout is 4 fields too long."*
**Category:** authority · e-commerce · Pillar: The Standard

- **Save 6 photos to:** `profiles/kymbo/assets/scene-21/`
- **Full prompt sheet:** `profiles/kymbo/build/prompts/scene-21.md`
- **World:** modern software-studio workspace — walnut desks, cool daylight, plants, laptops/phones on the surface.

| File | Slide | Type | On-slide copy |
|---|---|---|---|
| `s1.png` | 1 · cover | pure photo | *Your checkout is 4 fields too long.* |
| `s2.png` | 2 · point | **composite (phone, blank screen)** | *Count the required fields.* |
| `s3.png` | 3 · point | pure photo | *The four we cut first.* |
| `s4.png` | 4 · point | pure photo | *The fields aren't the point. The friction is.* |
| `s5.png` | 5 · point | **composite (laptop, blank screen)** | *Track abandonment by field, not by page.* |
| `s6.png` | 6 · cta | pure photo | *We ship checkouts by what you remove.* |

---

### 2 · Scene 22 — *"The AI feature you don't need is why your site is slow."*
**Category:** authority · AI restraint · Pillar: The Position

- **Save 6 photos to:** `profiles/kymbo/assets/scene-22/`
- **Full prompt sheet:** `profiles/kymbo/build/prompts/scene-22.md`
- **World:** the SAME software-studio workspace but **deliberately quieter and stiller** — this scene is about restraint. Closed laptops preferred. No tech-flashy props.
- **No composites in this scene.** All six are pure editorial photos.

| File | Slide | Type | On-slide copy |
|---|---|---|---|
| `s1.png` | 1 · cover | pure photo | *The AI feature you don't need is why your site is slow.* |
| `s2.png` | 2 · point | pure photo | *Weight, not intelligence.* |
| `s3.png` | 3 · point | pure photo | *What most sites actually need.* |
| `s4.png` | 4 · point | pure photo | *Turn every AI feature off for a week.* |
| `s5.png` | 5 · point | pure photo | *Three places AI earns its weight.* |
| `s6.png` | 6 · cta | pure photo | *We put AI in when it earns its weight.* |

---

### 3 · Scene 15 — *"They didn't take 18%. They took the guest."*
**Category:** FYM · Pillar: The Problem

- **Save 6 photos to:** `profiles/kymbo/assets/scene-15/`
- **Full prompt sheet:** `profiles/kymbo/build/prompts/scene-15.md`
- **World:** modern boutique-hotel world — walnut wood, cream plaster, greenery, contemporary fixtures. No dated props (no key racks, service bells, fountain pens, paper ledgers, cash).
- **No composites in this scene.** All six pure editorial photos.

| File | Slide | Type | On-slide copy |
|---|---|---|---|
| `s1.png` | 1 · cover | pure photo | *They didn't take 18%. They took the guest.* |
| `s2.png` | 2 · point | pure photo | *You saw the invoice.* |
| `s3.png` | 3 · point | pure photo | *(see prompt sheet for full copy)* |
| `s4.png` | 4 · point | pure photo | *(see prompt sheet)* |
| `s5.png` | 5 · point | pure photo | *(see prompt sheet)* |
| `s6.png` | 6 · cta | pure photo | *(see prompt sheet)* |

---

### 4 · Scene 20 — *"We build it. You own it."*
**Category:** authority · ownership · Pillar: The Team

- **Save 6 photos to:** `profiles/kymbo/assets/scene-20/`
- **Full prompt sheet:** `profiles/kymbo/build/prompts/scene-20.md`
- **World:** software-studio workspace — walnut desks, natural window light, plants, notebooks, closed laptops. Contemporary and quiet, not corporate.
- **No composites in this scene.** All six pure editorial photos.

| File | Slide | Type | On-slide copy |
|---|---|---|---|
| `s1.png` | 1 · cover | pure photo | *We build it. You own it.* |
| `s2.png` | 2 · point | pure photo | *(see prompt sheet)* |
| `s3.png` | 3 · point | pure photo | *(see prompt sheet)* |
| `s4.png` | 4 · point | pure photo | *(see prompt sheet)* |
| `s5.png` | 5 · point | pure photo | *(see prompt sheet)* |
| `s6.png` | 6 · cta | pure photo | *(see prompt sheet)* |

---

## Workflow (per scene)

1. Open the per-scene prompt sheet (paths above).
2. Copy the full prompt for slide 1. Paste into nanobananapro at 2K, 4:5.
3. Save the result as `s1.png` into the scene's asset folder.
4. Repeat for slides 2 through 6.
5. Repeat for the next scene.
6. Once all 24 photos are in place, run `npm run build` in the repo — the pipeline composes any device-composite screens and renders the final slide PNGs.

## QA checklist (do this before you accept each photo)

- [ ] Aspect is 4:5 (measure — don't trust the tool's default).
- [ ] No dark band, no vignette, no black rectangle anywhere in the frame.
- [ ] Photo fills the frame edge-to-edge; the lower 40% still has natural scene content.
- [ ] For composite slides: device is straight-on with zero tilt, screen is blank white.
- [ ] No visible text on any surface, no logos, no faces.
- [ ] Style reads consistent with the other slides in the same scene — same photographer, same lens, same neutral daylight.

## Anti-band clause — required in every prompt

Already baked into each prompt in the sheets. Do NOT strip it out. It reads:

> *no dark gradient, no vignette, no overlay, only natural light falloff; one single continuous photograph natively 4:5, do NOT letterbox, pad, extend or outpaint.*

If nanobananapro ever hands back a shorter-than-4:5 result and offers to "extend" or "outpaint", **regenerate from scratch** — do not accept the extend. It always shows a seam at the join, and no amount of retouching hides it.

---

## Delivery

- Drop the 24 files into the four folders above, using the exact filenames listed.
- Ping when the four folders are populated.
- The composites and export bundle build automatically on `npm run build`.
