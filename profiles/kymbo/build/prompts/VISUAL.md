# VISUAL.md — Kymbo scene photography

This is Kymbo's photography design.md, in the spirit of `awesome-design-md`: a single file the image generator reads before every frame. It tells the model what a Kymbo photograph actually is, and — more importantly — what a Kymbo photograph is NOT.

Read this once. Then every prompt in the shot list references it.

---

## The problem

Without direction, image models return the median of "modern workspace photography." That median is documented and repeatable:

- A small succulent in a round white ceramic pot
- Pale teal or sage walls
- A jute or sisal rug on the floor
- A symmetric three-object composition, subject dead center
- Soft even daylight from a diffused window
- Everything new, nothing worn, nothing that suggests a person

We've generated one image and got exactly that. This file is the anti-slop layer. Its job is to make the generator refuse the median.

---

## What Kymbo photography IS

**One line to anchor every prompt:**

> A specific desk in a real Kymbo studio, shot by the same working photographer across all six frames of a scene — 35mm color negative, one strong side-window key light, hard shadow side going near-black, character over cleanliness, real wear over staged perfection. The photograph documents a place where someone actually works. It is not a moodboard.

**The space:**
- A specific real corner. Not "a modern studio" — a specific desk in a specific room.
- The desk is walnut or oak with **visible wear**: coffee rings, ink marks, small scratches at hand-height, a corner nicked from a chair.
- The wall is off-white plaster (`#EDEAE4`), unpainted concrete (`#C5C1B8`), or exposed brick. Never pastel. Never colored.
- The floor is dark polished concrete or dark oak. Never jute, never sisal, never a "curated" rug.
- If a window is in frame: real steel-casement or wood mullion, never white builder-grade PVC.

**The objects (character marks that read as "someone actually works here"):**
- A notebook OPEN to a used page — abstract non-readable pencil marks, but clearly worked-on. Cracked spine.
- A ceramic mug with a specific glaze imperfection or a chip. Coffee at 2⁄3 level, sometimes with a faint slick on the surface.
- A pen with the cap off, resting mid-stroke.
- Cables — real, coiled or trailing. Never hidden.
- A book with a torn dust jacket.
- A phone or laptop with a used matte-black case, small scratches.

**The light:**
- ONE dominant side-window key. Never front-on, never symmetric two-window.
- Clear light side, clear shadow side. Shadow goes near-black (`#0A0D14`), not muddy gray.
- Small specular highlights on metal and screens (bezel catches, pen tip catches, cup rim catches).
- Time of day: early morning (7–9am) or late afternoon (4–6pm). Never noon-flat.

**The composition:**
- Off-center. Subject at rule-of-thirds, not dead middle.
- Asymmetric object weight: one side of the frame carries mass, the other breathes.
- At least one object cropped by the frame edge (a mug intrudes from the side, a notebook runs off).
- Depth: at least one foreground element out of focus OR at least one background element in focus.

**The palette (fixed for Kymbo scenes):**
- Shadow tone: `#0A0D14` (near-black, cool-neutral). Never pure `#000`.
- Highlight tone: `#F1F3F6` (cool near-white). Never `#FFFFFF`, never warm cream.
- Wood tone: cooler-brown walnut, never orange-warm.
- Metal: brushed steel or matte black. Never brass, gold, "champagne," or "reeded."
- Fabric (if any): undyed linen, worn leather. Never kilim, never "boho throw."

---

## What Kymbo photography is NOT

Every generated image is checked against this list. If any of these appear, the frame is rejected and regenerated.

### Prohibited objects (AI-workspace slop tells)

- ❌ Succulents (any kind, any pot)
- ❌ Round white ceramic pots
- ❌ Fiddle-leaf figs, rubber trees, monstera plants
- ❌ Jute, sisal, or "curated" rugs
- ❌ Terrazzo, marble slabs, or "material moodboard" surfaces
- ❌ Perfectly stacked books, especially with covers facing camera
- ❌ Fresh-cut flowers in clear glass vases
- ❌ A single "hero" object centered on an otherwise empty desk
- ❌ Apple-product tastemaker signals (a MacBook centered as decoration, an iPhone posed as icon)
- ❌ Neon signs, motivational wall art, quotes with visible text
- ❌ Ceramic mugs styled as art props (positioned photogenically, not being used)

### Prohibited compositions

- ❌ Symmetric three-object triangle arrangement
- ❌ Everything perfectly aligned to the desk edge
- ❌ Central subject with clean negative space on both sides
- ❌ 45° overhead flat-lay of a clean desk (the stock-photo tell)
- ❌ Perfectly parallel horizon lines

### Prohibited palettes (the "wellness startup" tell)

- ❌ Pale teal, sage, or any greenish-blue on walls
- ❌ Blush + cream + terracotta combinations
- ❌ Warm cream / pale beige as dominant surface
- ❌ Any millennial-pastel cast overall

### Prohibited lighting

- ❌ Soft, even, uncharacterized daylight ("cloudy afternoon" default)
- ❌ Backlit windows with white blown-out light
- ❌ Symmetric light on both sides of the subject
- ❌ Noon-flat top-down illumination

### Prohibited vocabulary in prompts

Words that trigger the slop pattern in image models. Never use them:

- ❌ "editorial and quiet" → use "documentary, unposed, worked-in"
- ❌ "modern workspace" → use a specific detail instead
- ❌ "aesthetic" → cut the word entirely
- ❌ "curated" → cut the word entirely
- ❌ "minimalist" → use "restrained, uncluttered by design decision"
- ❌ "clean" → in Kymbo scenes we want lived-in, not clean

---

## Character-intensity knobs (Taste-style)

Every prompt dials these up on purpose:

- **DESIGN_VARIANCE: 9/10** — no two frames in a scene look interchangeable. Different angles, different corners, different light angles.
- **VISUAL_DENSITY: 8/10** — real desks are full of small character objects. Include work items; don't over-stage.
- **LIGHTING_CHARACTER: 9/10** — hard directional light with a named angle, not soft even daylight.
- **IMPERFECTION_INDEX: 8/10** — visible wear, coffee marks, natural chaos. Do NOT clean up the scene.
- **NATIVE_ASPECT: strict 4:5** — never letterbox, never extend, never outpaint.

---

## The per-scene worlds (delta from the baseline above)

**scenes 20, 21, 22 — Kymbo software-studio world:**
- Walnut/oak desks, off-white plaster walls, dark polished concrete floor
- Real work objects: closed matte-black laptop with scratches, phones with used cases, notebooks with cracked spines, coiled cables, ceramic mugs with chips, moleskine paperbacks with worn covers
- Light: side-window, hard directional, cool 5200-5500K
- Palette: neutral, systems-engineering studio

**scene 15 — Kymbo boutique-hotel world (FYM):**
- Walnut wood, cream plaster (a warmer cream than the studio, but still `#EDEAE4`-adjacent — not pastel), greenery ONLY as one or two large specific plants (a mature ficus, an olive tree in a terracotta planter — never succulents), brass or matte-black fixtures
- Real hotel objects: linen bedding with visible wrinkles, leather guest register with cracked binding, brass room key with tag, a folded newspaper
- Light: side-window, morning warm-directional
- Palette: warm but restrained — the hotel is expensive because it's specific, not because it's decorated

---

## The prompt template

Every prompt in the shot list is built like this:

```
[SPECIFIC FRAME — 1 sentence: what's in this shot, off-center, with named objects]

[LIGHTING — 1 sentence: window direction, time of day, shadow side depth]

[CHARACTER — 1 sentence: at least two wear marks / imperfections named]

[COMPOSITION — 1 sentence: which third of the frame carries the mass, what's cropped]

PROHIBITED IN THIS FRAME: no succulents, no round white pots, no jute rugs, no pastel walls, no symmetric arrangement, no soft even light, no blown-out window, no stock props.

TECHNICAL: 4:5 aspect (native, no outpaint / extend / letterbox). 35mm on color negative. Documentary, unposed, worked-in. Fill the ENTIRE frame with natural scene content — CSS handles text legibility, do NOT add any dark band.
```

## Delivery test

Before accepting any generated frame, run the checklist:

1. Is there a succulent anywhere? Reject.
2. Is there a jute rug? Reject.
3. Is the wall teal/sage/pastel? Reject.
4. Are three objects arranged in a symmetric triangle? Reject.
5. Is the light soft, even, and shadow-less? Reject.
6. Is the scene "clean" and staged, or "worked-in" and specific? If clean, reject.
7. Does the shadow side of the subject go near-black? If muddy gray, reject.

If any of the six above fails, regenerate with tighter prohibitions in the prompt. Do not accept "close enough."
