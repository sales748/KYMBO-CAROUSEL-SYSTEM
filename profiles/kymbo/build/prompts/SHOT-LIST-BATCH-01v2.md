# Batch 01v2 — scene photo shot list (anti-slop rewrite)

**24 photos across 4 scenes.** Rewritten against `VISUAL.md`, Kymbo's photography design.md. The first Nano Banana Pro output came back as textbook AI-workspace slop (succulent in a round white pot, teal walls, symmetric three-object composition, jute rug). The prompts below are designed to refuse that median — every prompt names what's prohibited in that specific frame.

**Read `profiles/kymbo/build/prompts/VISUAL.md` first.** It carries the palette, the character marks, the prop list, the composition rules, and the full stop-slop-style prohibition catalogue. Every prompt below runs on top of it.

## Generation settings

- **Tool:** nanobananapro
- **Resolution:** 2K longer edge
- **Aspect:** **4:5**, exactly (1080 × 1350 native). Never 1:1, never 3:4, never letterboxed.
- **Format:** PNG
- **Output filenames:** `s1.png` … `s6.png` in each scene's folder
- **No outpaint / extend / letterbox.** If the tool asks to extend a short frame, regenerate — never accept.
- **No dark band, no vignette.** A CSS gradient handles text legibility later; the photograph fills the ENTIRE 4:5 frame with natural scene content.

## The blank-screen rule for composite slides

Two slides in this batch — scene-21 s2 and scene-21 s5 — will get a Kymbo UI composited onto the device screen via CSS perspective transform. For those:

- Device is **PERFECTLY STRAIGHT AND FRONT-ON, zero rotation, zero tilt.**
- Screen is **BLANK white**, naturally lit (no artificial glow, no mockup UI). The Kymbo overlay maps onto that clean rectangle.

Every other slide is a pure editorial photograph.

## The kill list (recap from VISUAL.md — verify each photo)

Before accepting any generated image, run through this. If any hit, regenerate:

- ❌ Succulents (any kind, any pot)
- ❌ Round white ceramic pots
- ❌ Fiddle-leaf figs, monstera, rubber trees, or "trendy" houseplants
- ❌ Jute or sisal rugs
- ❌ Terrazzo, marble slabs, "material moodboard" surfaces
- ❌ Perfectly stacked photogenic books
- ❌ Fresh-cut flowers in clear glass vases
- ❌ Pastel walls (teal / sage / blush / cream cast)
- ❌ Symmetric three-object triangle arrangements
- ❌ Centered composition on an otherwise empty desk
- ❌ Soft, even, uncharacterized daylight
- ❌ Blown-out backlit windows
- ❌ Apple-product tastemaker signals
- ❌ Motivational wall art or visible text on any surface

---

# Scene 21 — "Your checkout is 4 fields too long."

- **Folder:** `profiles/kymbo/assets/scene-21/`
- **World:** Kymbo software-studio corner — walnut desk, unpainted concrete or off-white plaster walls, dark polished concrete floor
- **Composites:** s2 (phone, blank screen) + s5 (laptop, blank screen)

## Slide 1 — cover · `s1.png`

**On-slide copy:** *Your checkout is 4 fields too long.*

```text
A specific corner of a Kymbo studio walnut desk in the ~8am side-window slice: on the LEFT third of frame, a closed matte-black laptop with a small scratch on the lid; to its left-front, a phone lies face-up with a plain white screen. RIGHT third breathes: a chipped ceramic mug intrudes from the right edge, coffee at 2/3 level with a faint slick. Foreground-right: a used notebook open to abstract non-readable pencil marks, cracked spine. Behind: off-white plaster wall, unadorned. Below: dark polished concrete. Coffee ring visible near the front-right desk edge. Hard side-window key from left, clear light side, shadow side going near-black on the laptop's right face. PROHIBITED IN THIS FRAME: no succulents, no plants, no round white pots, no jute rug, no pastel wall, no symmetric arrangement, no soft even light, no blown-out window. 4:5 native, no outpaint / letterbox. Fill entire frame with natural scene content — CSS handles text later, do NOT add any dark band. Documentary, unposed, 35mm color negative feel, one strong side-window key light. Worked-in and specific to this space.
```

## Slide 2 — composite (phone, BLANK screen) · `s2.png`

**On-slide copy:** *Count the required fields.*

```text
A used matte-black phone lying face-up in the CENTER-LEFT of a walnut desk, PERFECTLY STRAIGHT AND FRONT-ON (zero rotation, zero tilt) — screen is BLANK WHITE, naturally lit, no UI, no artificial glow (Kymbo booking-app UI composites on top later). Right of the phone, out of focus: a hand resting on the desk (wrist down only, no face). Right-third breathes with a chipped ceramic mug at coffee 2/3. Foreground: a coffee ring on the desk near the phone's left corner. Hard side-window key from left — natural light on the phone screen (no glow), shadow side going near-black on the desk's right edge. PROHIBITED: no succulents, no plants, no round white pots, no jute rug, no pastel wall, no symmetric layout, no artificial screen glow, no soft even light, no manicured hand — this is a working hand. 4:5 native, no outpaint. Fill entire frame with natural scene content — no dark band. Documentary, unposed, 35mm color negative feel.
```

## Slide 3 — point · `s3.png`

**On-slide copy:** *The four we cut first.*

```text
Overhead 45° angle onto a walnut desk: a used notebook open to a page with abstract non-readable pencil marks (short horizontal lines suggesting a crossed-out list). A hand holds a rollerball pen mid-stroke over the page (wrist down only, no face); the pen barrel shows a small ink mark. Coffee ring visible on the notebook's right corner. Right-edge of frame: a chipped ceramic mug intrudes. Background-left out of focus: a coiled charging cable. Hard side-window key from upper-left, deep near-black shadow on the notebook's right page. PROHIBITED: no succulents, no plants, no jute rug, no pastel wall, no clean staged pen, no perfect list — this is real crossed-out working, real ink marks. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

## Slide 4 — point · `s4.png`

**On-slide copy:** *The fields aren't the point. The friction is.*

```text
A hand holds a matte-black phone at chest level in front of a walnut desk (torso and hand cropped from above wrist only, no face). Phone screen is BLANK white, no UI. The thumb hovers OVER the screen mid-decision, not touching it. Background out of focus: the desk carrying the closed laptop and the chipped ceramic mug (partially visible). Hard side-window key from behind-left — the phone's top bezel catches a small specular highlight, the thumb's side has a rim-light. PROHIBITED: no succulents, no plants, no round white pots, no pastel wall, no soft even light, no symmetric layout, no manicured / glossy "model hand" — this is a working hand with visible knuckle definition. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

## Slide 5 — composite (laptop, BLANK screen) · `s5.png`

**On-slide copy:** *Track abandonment by field, not by page.*

```text
A used matte-black laptop OPEN on a walnut desk, PERFECTLY STRAIGHT AND FRONT-ON (zero rotation, zero tilt), viewed from a slightly elevated angle so the full screen is visible. Screen is BLANK WHITE, naturally lit, no UI, no glow (Kymbo analytics dashboard composites on top later). To the laptop's right: a chipped ceramic mug with coffee at 2/3 level, a used notebook with a pencil resting diagonally. Left of the laptop: a coiled charging cable trails onto the desk edge. Hard side-window key from left — natural light on the screen, shadow side going near-black on the desk's right. Coffee ring visible on the desk near the notebook. PROHIBITED: no succulents, no plants, no round white pots, no jute rug, no pastel wall, no artificial screen glow, no styled "productivity workspace". 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

## Slide 6 — cta · `s6.png`

**On-slide copy:** *We ship checkouts by what you remove.*

```text
A walnut desk in the ~5pm late-afternoon side-window slice, AT REST after work. LEFT third: a closed matte-black laptop with a small scratch on the lid; a used notebook rests on top of it, closed with a rubber band around it. RIGHT third breathes: an empty chipped ceramic mug at the edge, coffee dregs visible at the bottom. Foreground: coffee rings on the desk from an earlier moment. Background wall: off-white plaster, unadorned. Behind the desk in soft focus: a chair pushed back from the desk. Hard side-window key from left, warm-cool afternoon slant. Deep near-black shadow on the desk's right face. PROHIBITED: no succulents, no plants, no round white pots, no jute rug, no pastel wall, no symmetric layout, no "clean desk end of day" cliché — this desk shows a day of work, coffee rings and all. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

---

# Scene 22 — "The AI feature you don't need is why your site is slow."

- **Folder:** `profiles/kymbo/assets/scene-22/`
- **World:** same Kymbo studio, STILLER and QUIETER. Closed laptops. Analog objects. Deliberately un-tech-flashy — the restraint is the point.
- **No composites** — all pure editorial photos.

## Slide 1 — cover · `s1.png`

**On-slide copy:** *The AI feature you don't need is why your site is slow.*

```text
A walnut desk in the ~5pm late-afternoon side-window slice, deliberately STILL. Center-left of frame: a closed matte-black laptop with a small scratch on the lid, a paper notebook closed on top of it, an old-style brass-and-black desk lamp turned OFF beside them. Right-third breathes: a chipped ceramic mug at the edge, coffee at 1/3 level (running low, unfinished). Foreground: coffee rings and a small ink stain on the desk. Background: off-white plaster wall, unadorned. Hard side-window key from left, deep shadow side on the right face of the lamp. PROHIBITED: no succulents, no plants of any kind, no round white pots, no jute rug, no pastel wall, no motivational quote, no AI-robot prop, no glowing screen — this is the OPPOSITE of AI-flashy. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

## Slide 2 — point · `s2.png`

**On-slide copy:** *Weight, not intelligence.*

```text
A close low-angle view along the surface of a walnut desk, looking at a small stack of three hardcover books at the LEFT third of frame. The stack reads as WEIGHT — heavy, dense, no negative space between covers. Covers slightly askew from being handled (NOT perfectly aligned). A pen with a small ink mark on its barrel rests diagonally on top of the stack. Right of the stack, foreground out of focus: a coffee ring and a chipped mug's base. Behind the books, background out of focus: a coiled cable. Hard side-window key from upper-right, deep near-black shadow on the desk to the left of the stack. PROHIBITED: no succulents, no plants, no round white pots, no pastel wall, no perfectly stacked covers-facing-camera photogenic book pile. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

## Slide 3 — point · `s3.png`

**On-slide copy:** *What most sites actually need.*

```text
Overhead 45° angle onto a walnut desk: a notebook open to a page with abstract non-readable pencil marks arranged as a decision tree (a few branching lines, boxes suggested — no readable words). A hand holds a pencil at the edge of the frame (wrist down only, no face); the pencil is chewed at the top from use. Coffee ring on the notebook's lower corner. Background out of focus: an empty ceramic mug tipped slightly on its side, a coiled cable. Hard side-window key from upper-left, deep near-black shadow on the notebook's right page. PROHIBITED: no succulents, no plants, no jute rug, no pastel wall, no clean unmarked page — the page shows real use. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

## Slide 4 — point · `s4.png`

**On-slide copy:** *Turn every AI feature off for a week.*

```text
A hand near a small mechanical toggle switch on a walnut desk (an analog audio-toggle style switch — brushed steel body, matte black switch head). The switch is in the DOWN/OFF position. Hand from wrist down only, index finger has just left the switch. Background out of focus: a closed matte-black laptop, a chipped ceramic mug. Foreground: coffee ring visible on the desk near the switch. Hard side-window key from left — the switch head catches a small specular highlight on its top curve. PROHIBITED: no succulents, no plants, no round white pots, no pastel wall, no digital screen or LED anywhere in the frame — this is analog, mechanical, OFF. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

## Slide 5 — point · `s5.png`

**On-slide copy:** *Three places AI earns its weight.*

```text
Overhead 45° angle onto a walnut desk: three distinct objects arranged with UNEQUAL SPACING along a slight diagonal — a small brass magnifying glass at the UPPER-LEFT, a folded newspaper in the MIDDLE (headlines out of focus, non-readable), and a small matte-black shield-shaped padlock at the LOWER-RIGHT. The three do NOT form a triangle or symmetric composition — they read as a diagonal sentence. Coffee ring visible on the desk between the newspaper and the padlock. Hard side-window key from upper-right, deep shadow side to the left of each object. PROHIBITED: no succulents, no plants, no round white pots, no symmetric three-object triangle, no evenly-spaced grid — the spacing is DELIBERATELY UNEVEN, asymmetric along a diagonal. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

## Slide 6 — cta · `s6.png`

**On-slide copy:** *We put AI in when it earns its weight.*

```text
A walnut chair pulled up to a desk, cool late-afternoon side-window light coming from behind the chair (backlight). The chair is empty. On the desk (foreground): a chipped ceramic mug half-full of coffee, a closed notebook, a coffee ring near the mug. LEFT of the chair, in soft focus: a MATURE LEMON TREE or OLIVE TREE in a terracotta planter (NOT a succulent, NOT a fiddle-leaf, NOT in a round white pot) — the plant is real, established, tall. Hard side-window key from behind — chair silhouette rim-lit, desk in half-shadow. PROHIBITED: no succulents, no small houseplants, no round white pots, no jute rug, no pastel wall, no motivational sign, no perfect symmetric layout. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

---

# Scene 15 — "They didn't take 18%. They took the guest."

- **Folder:** `profiles/kymbo/assets/scene-15/`
- **World:** modern boutique hotel — walnut wood, warm-neutral cream plaster (NOT pastel), textured stone, brass or matte-black fixtures, mature olive/lemon trees in terracotta planters
- **No composites** — all pure editorial photos.

## Slide 1 — cover · `s1.png`

**On-slide copy:** *They didn't take 18%. They took the guest.*

```text
A specific corner of a modern boutique-hotel lobby in warm morning side-light (~8am). LEFT third: a walnut console table with a folded morning newspaper (non-readable headlines) and a leather-bound guest register closed at the moment; a modern rollerball pen with a small ink mark rests diagonally across the register. RIGHT third breathes: a MATURE OLIVE TREE in a terracotta planter beside a textured stone wall. Foreground: dark oak floorboards with visible grain. A brass room key with a leather tag hangs on a hook by the register. Behind: cream plaster wall (warm-neutral, NOT pastel). Hard side-window key from left, morning warm-cool light. Deep near-black shadow on the right face of the console. PROHIBITED: no succulents, no round white pots, no fiddle-leaf figs, no jute rug, no dated key rack, no service bell, no fountain pen, no paper ledger with quill, no cash, no pastel wall, no symmetric arrangement, no soft even light. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

## Slide 2 — point · `s2.png`

**On-slide copy:** *You saw the invoice.*

```text
Overhead 45° angle onto a walnut hotel-office desk: a plain leather portfolio folder closed on the desk (LEFT third of frame), a modern mechanical rollerball pen resting diagonally across it (small ink mark on the barrel). RIGHT third: an empty ceramic teacup with a chipped rim intrudes from the edge, tea residue at the bottom. Foreground: a coffee ring visible on the desk near the folder. Background out of focus: a stone-wall corner and a small brass reading lamp turned off. Hard morning side-window key from upper-left, deep near-black shadow on the folder's right edge. PROHIBITED: no succulents, no round white pots, no fresh flowers, no fountain pen, no motivational sign, no service bell, no paper ledger with quill, no pastel wall. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

## Slide 3 — point · `s3.png`

**On-slide copy:** *You didn't see the profile.*

```text
A close still-life of a boutique-hotel guestroom pillow-corner: linen sheet with visible natural wrinkles (NOT perfectly ironed), a plain cream welcome card (blank, non-readable, no text) rests OFF-CENTER at the LEFT of the pillow, a specific hand-thrown ceramic bud vase with a single eucalyptus branch (a real leafy stem, NOT a fresh flower, NOT in a clear glass vase) sits behind. Foreground: pillow texture with a slight coffee-cup indentation from someone having placed a cup down earlier. Hard morning side-window key from upper-right — clear light on the linen, deep near-black shadow on the pillow's left recess. PROHIBITED: no succulents, no round white pots, no fresh cut flowers in clear glass, no perfectly ironed sheets, no motivational card, no pastel wall, no symmetric composition. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

## Slide 4 — point · `s4.png`

**On-slide copy:** *So next year, you buy them back.*

```text
A calm boutique-hotel corridor: walnut floor, cream plaster walls (warm-neutral), a brass wall sconce in soft focus at the RIGHT of the frame. LEFT third of frame carries mass: a small walnut console with a single lit candle (no fresh flower) and a folded linen napkin on top. Foreground: dark oak floorboards with visible grain, a coffee ring on the console's edge. No people. Hard morning warm side-window key from a doorway at the far end of the corridor — corridor recedes into deep near-black shadow at the back-right. PROHIBITED: no succulents, no jute rug, no pastel wall, no signs with visible text, no doorway wreath, no service bell, no fresh flowers, no symmetric perspective, no dated "grand hotel" props. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

## Slide 5 — point · `s5.png`

**On-slide copy:** *A direct booking is a profile.*

```text
A small paper notebook opened on a walnut hotel-office desk, blank pages (no writing, but the paper has a USED quality — a fingerprint smudge, a slight crease, a coffee stain on the corner). A modern rollerball pen (NOT a fountain pen) rests diagonally across the pages with a small ink mark on the barrel. Right of the notebook, in soft focus: an olive-branch stem lying on the desk (NOT in a vase). Foreground: coffee ring on the desk. Behind: cream plaster wall in soft focus. Hard morning side-window key from left. Deep near-black shadow on the notebook's right page. PROHIBITED: no succulents, no round white pots, no fresh flowers in glass vases, no fountain pen, no dated ledger, no pastel wall. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

## Slide 6 — cta · `s6.png`

**On-slide copy:** *What do you know about your last direct guest?*

```text
An open leather-bound guest register on a walnut hotel console, pages BLANK (no readable text, no writing at all — the pages have a used-but-empty quality, slight indentations from a pen resting elsewhere). A modern mechanical rollerball pen (NOT fountain) rests to the RIGHT of the pages, cap off, small ink mark on the barrel. Foreground: dark oak floor. Behind the console: cream plaster wall in soft focus, a real olive branch in a wall-mounted terracotta holder (NOT a vase, NOT a round white pot). Hard morning warm side-window key from left, brass fitting on the register catches a small specular highlight. Deep near-black shadow on the console's right edge. PROHIBITED: no succulents, no round white pots, no fresh flowers in clear glass, no fountain pen, no pastel wall, no dated "welcome" sign, no key rack, no cash box. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

---

# Scene 20 — "We build it. You own it."

- **Folder:** `profiles/kymbo/assets/scene-20/`
- **World:** Kymbo software-studio, mood is HANDOVER and INDEPENDENCE. Brass keys are the exception to matte-black — because keys are the metaphor.
- **No composites** — all pure editorial photos.

## Slide 1 — cover · `s1.png`

**On-slide copy:** *We build it. You own it.*

```text
A specific corner of a walnut desk in the ~5pm late-afternoon side-window slice: a set of three modern brass keys on a small dark leather tray, placed OFF-CENTER LEFT on the desk (NOT ceremonial, NOT posed). RIGHT third breathes: a chipped ceramic mug intrudes from the edge with coffee at 2/3 level. Foreground: a coffee ring on the desk near the tray. Behind: unpainted concrete wall with visible texture, no decoration. Hard warm-cool side-window key from left; the topmost brass key catches a small specular highlight. Deep near-black shadow on the tray's right side. PROHIBITED: no succulents, no plants, no round white pots, no jute rug, no pastel wall, no symmetric key arrangement, no ceremonial "handover" pose. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

## Slide 2 — point · `s2.png`

**On-slide copy:** *Your code. Your server. Your domain.*

```text
An over-the-shoulder view of hands (wrist down only, no face) holding an OPEN paper notebook on a walnut desk, ~7pm late side-window slice. The notebook page shows abstract non-readable notes (short lines, boxes, arrows suggesting a system diagram). Cracked spine. Right hand holds a pen mid-thought (small ink mark on the barrel). Foreground: coffee ring on the desk, a coiled charging cable trailing off the edge. Behind: unpainted concrete wall in soft focus. Hard warm side-window key from behind-left; wrist is rim-lit, page is partially shadowed. PROHIBITED: no succulents, no plants, no round pots, no clean unmarked notebook page, no perfect symmetric hand position, no pastel wall. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

## Slide 3 — point · `s3.png`

**On-slide copy:** *No proprietary CMS.*

```text
A small studio shelf mounted on an unpainted concrete wall, ~10am morning side-window slice. Three books stacked HORIZONTALLY (NOT spines-out) on the shelf, at the LEFT third of the frame, with slightly askew alignment — the top book's dust jacket is torn at the corner. Right third: a chipped ceramic mug sits on the same shelf, empty. Below the shelf: a coiled cable hangs over the edge. Behind: unpainted concrete wall texture visible. Hard morning side-window key from upper-left, deep near-black shadow on the books' right edges. PROHIBITED: no succulents, no plants, no round white pots, no perfectly stacked spines-out books, no pastel wall, no photo frame or wall art with visible text. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

## Slide 4 — point · `s4.png`

**On-slide copy:** *Why lock-in exists.*

```text
A single dark leather accent chair (visibly worn — a crease on the seat, a small scuff on the arm) positioned at the LEFT third of a Kymbo studio room, cool morning side-window light streaming from the RIGHT third. Foreground: dark polished concrete floor. On a small walnut side-table beside the chair: a chipped ceramic mug with coffee at 2/3 level, a matte-black hardcover book with a torn dust jacket. Behind the chair, out of focus: an unpainted concrete wall. NO plant in the frame at all — this is a room about independence, not decoration. Hard side-window key from right, the chair's seat catches direct light, the back-left recess goes near-black. PROHIBITED: no succulents, no plants, no round white pots, no jute rug, no pastel wall, no throw blanket, no styled "reading nook" cliché. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

## Slide 5 — point · `s5.png`

**On-slide copy:** *The relationship after launch.*

```text
Overhead 45° angle onto a walnut table between two seats: two chipped ceramic mugs, one on each side of the frame, positioned OFF-CENTER (the LEFT mug slightly closer to the camera than the RIGHT). Both have coffee at DIFFERENT levels — LEFT mug at 1/2, RIGHT mug at 2/3 (the conversation has been going a while, one drinks faster). Between them: a small notebook open, pen resting across it, abstract non-readable marks. Coffee rings on the table. No plants, no props. Hard warm side-window key from upper-left, deep near-black shadow between the two mugs. PROHIBITED: no succulents, no round white pots, no fresh flowers, no styled cheek-to-cheek symmetric placement, no pastel wall. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

## Slide 6 — cta · `s6.png`

**On-slide copy:** *The door is always open.*

```text
A specific OPEN door in the wall of a Kymbo studio, morning warm side-light flooding in from beyond the door and casting a long light rectangle on the dark polished concrete floor inside. LEFT third of the frame: the interior of the studio in near-black shadow (a chair silhouette visible). RIGHT third: the door open at ~40° angle to the interior, hard rim-light on the door edge and jamb. Foreground: the concrete floor with visible grain. NO trailing plant, NO stagey door-frame decoration. Composition is asymmetric — most of the frame is dark interior, the door and light spill occupy the right third. Hard directional morning light from beyond the door. PROHIBITED: no succulents, no plants, no round white pots, no jute rug, no pastel wall, no welcome mat, no styled "exit sign" or motivational metaphor prop. 4:5 native, no outpaint. Fill entire frame — no dark band. Documentary, unposed, 35mm color negative feel.
```

---

# QA checklist (run per photo, before you accept it)

1. Is there a succulent anywhere? Reject.
2. Is there a jute or sisal rug? Reject.
3. Is the wall teal / sage / pastel / blush? Reject.
4. Are three objects arranged in a symmetric triangle? Reject.
5. Is the light soft, even, and shadowless? Reject.
6. Does the shadow side of the subject go near-black, or is it muddy gray? If gray, reject.
7. Does the scene read "clean and staged" or "worked-in and specific"? If clean, reject.
8. For composite slides: is the device zero-tilt and the screen truly blank white? If tilted or a UI is on it, reject.

If any of the eight fails, regenerate with tighter prohibitions in the prompt. Do not accept "close enough."

# Delivery

Drop the 24 files into the four folders above using exact filenames (`s1.png` … `s6.png`). Then `npm run build` composes the two device overlays and exports the final slide PNGs and bundle.
