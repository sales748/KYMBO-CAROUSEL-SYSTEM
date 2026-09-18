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

## The Taste dials — Kymbo's baseline values

Kymbo installs `Leonxlnx/taste-skill` at `.claude/skills/taste-skill`. Taste exposes three dials — DESIGN_VARIANCE, MOTION_INTENSITY, VISUAL_DENSITY — with a website baseline of `8 / 6 / 4`. For editorial scene photography the register is different; Kymbo's baseline is:

- **DESIGN_VARIANCE: 9** — asymmetric, off-center, no two frames in a scene look interchangeable. Different angles, different corners, different light angles per slide.
- **MOTION_INTENSITY: 1** — still photograph, no implied motion, no motion blur, no time-lapse suggestion. If the subject moves, freeze it.
- **VISUAL_DENSITY: 3** — one hero subject per frame, generous negative space. Muji-electronics / Kraftwerk / Dieter Rams restraint. NOT "cockpit / packed data." The Kymbo scene is CLOSE to Taste's "art gallery / airy" end of the dial.

Two extensions Kymbo adds on top of Taste's three:

- **LIGHTING_CHARACTER: 9** — hard directional light with a named angle (upper-left morning key, right-side afternoon rake, etc.), never soft even daylight.
- **IMPERFECTION_INDEX: 8** — visible wear, coffee marks, machining scratches, use-natural chaos. Do NOT clean up the scene.
- **NATIVE_ASPECT: strict** — 4:5, never letterbox, never extend, never outpaint.

The "Design Read" practice, borrowed verbatim from `taste-skill` §0.B — before writing or accepting an image, state the read in one line:

> *"Reading this as \<piece kind> for \<audience>, with a \<vibe> language, leaning toward \<reference genre>."*

Example: *"Reading this as: scene-21 s6 CTA for e-commerce operators, with a machine-dignity language, leaning toward Teenage Engineering + Dieter Rams."* If the read is wrong, the frame is wrong before it's rendered.

---

## The Kymbo variation engine

Adapted from `imagegen-frontend-web` §2. For each scene, commit to ONE choice per axis and hold it across all 6 slides. Do not mash choices together — the article calls this "not chaos, one strong combination executed clearly."

### Theme Paradigm (whole scene)
Choose 1: **Pristine Light Mode** (off-white, sharp dark type — Kymbo's default surface) or **Deep Dark Mode** (Media Noche field, Pantalla type — for AI restraint / gravitas).

### Background Character (whole scene)
Choose 1: **Subtle technical grid / dotted field** (Kymbo's spec-paper — the default) or **Tactile material surface** (raw concrete, brushed metal, walnut — the surface itself is the background).

### Typography Character (whole system, not per scene)
Locked: **Satoshi-like clean grotesk** for display + JetBrains Mono for technical. Never drift.

### Narrative / Concept Spine (per scene)
One thread runs through every slide of a scene. Naming it up front stops the middle slides from wandering off:

- **scene-15 (hotel/FYM)** — **Archive / dossier**: indexed rows, captions, understated authority. Every artifact — key on tag, receipt with a hole, index card blank vs filled, guest register — reads as part of a filed record. The hotel's dossier is thin; the OTA's is fat.
- **scene-20 (ownership)** — **Tool / precision instrument**: machined detail, calibrated controls, tactile hardware. Brass keys → padlock mechanism → calipers → industrial door. Every object is a working tool.
- **scene-21 (e-commerce)** — **Tool / precision instrument**: the checkout is measured, not decorated. Caliper alongside the phone, machined aluminum block with one hole, thumbprint as tactile trace. Precision as position.
- **scene-22 (AI restraint)** — **Artifact / collectible**: proof, specimen, treasured object framing. Kettlebell as weight-specimen, industrial toggle in matte panel, precision balance beam. Every object earns its place by physical presence — the opposite of AI's cheap accumulation.

### Second-Read Moment (per scene)
Exactly one unobvious motif per scene, placed deliberately, serving scan order — not gimmick. From `imagegen-frontend-web` §2:

- **scene-15**: *a macro crop that carries brand color naturally* — the brass key's specular highlight functions as the warm counterpart to Kymbo's cool verde accent, appearing once across the scene.
- **scene-20**: *one unexpected material switch* — the two calipers on s5 introduce mirror-polish brushed steel after four slides of matte-black anodized surfaces; the material shift is the beat.
- **scene-21**: *one oversized numeral serving structure* — the diagrams already carry this (sankey `100 → 34`, bar chart `~400`). Photos support without repeating the numeral.
- **scene-22**: *a narrow vertical side-rail note* — the industrial-toggle slide's non-readable engraved indicator marking beside the switch reads as an editor's marginal note, once.

---

## Multi-image consistency rule (imagegen-frontend-web §16)

Because every slide is its own generation, consistency is the point. Across all 6 slides of a single scene, hold constant:

- Same **brand world** (walnut + concrete + matte-black for the studio scenes; walnut + cream-plaster + linen for the hotel scene)
- Same **type scale logic** (Kymbo's kicker → headline → sub-copy ratios apply to every slide)
- Same **spacing discipline** (148px top pad, 92px sides, 86px bottom, spec-paper grid on light or dark)
- Same **image treatment** — grade, framing vocabulary, prop language. The same photographer on the same day, six different corners.
- Same **light angle bias** (a scene commits to morning ~8am, or late-afternoon ~5pm — not both)

If two slides in one scene look like they came from two different photographers, one of them is wrong. Regenerate.

---

## Composition variety check (imagegen-frontend-web §18)

Across the 6 slides in a scene, log the composition anchor per slide (LEFT-third mass, CENTER, off-center RIGHT, overhead, etc.). Reject the set if:

- The same composition anchor repeats more than **2 slides in a row**.
- Every slide uses inline subject (no macro, no architectural, no overhead) — force at least one wide-lens architectural OR one macro crop somewhere in the six.

For Kymbo, the diagrams already handle two or three of the six slots — so the photo slides carry a smaller variety burden. But the rule still applies: photo covers, macros, and architectural shots must not all sit at the same composition anchor.

---

## The Kymbo Clarity Check (before you accept any generated frame)

Adapted from `imagegen-frontend-web` §17. Fewer items than the source — this is scene photography for a carousel, not a landing-page comp:

1. Does the frame carry the scene's **concept spine** (archive / tool / artifact — see above)?
2. Is there **one hero subject** (VISUAL_DENSITY 3), not three?
3. Is the composition **off-center** (DESIGN_VARIANCE 9), not dead middle?
4. Is the light **hard and directional** with a clear near-black shadow side (LIGHTING_CHARACTER 9)?
5. Does the subject show **real wear / character marks** (IMPERFECTION_INDEX 8), not staged perfection?
6. Are there any **AI-slop tells** — succulents, round white pots, jute rug, pastel walls, symmetric three-object triangles, soft even light, purple/blue gradients, glowing edges, glassmorphism?
7. For composite slides: is the device **PERFECTLY STRAIGHT AND FRONT-ON** with a **BLANK white screen**?
8. Does this frame feel like it belongs with the other 5 slides of this scene (same photographer, same light, same material vocabulary)?
9. Is the aspect **exactly 4:5 native**, no outpaint / letterbox / extend?
10. If you swapped this frame into a different scene of the batch, would it look wrong (i.e., does it have per-scene identity, not generic "editorial workspace")?

If any item is a no, regenerate. Do not accept "close enough."

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
